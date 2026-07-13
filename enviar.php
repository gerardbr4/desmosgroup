<?php
// ============================================================
// DESMOS GROUP — Formulari de contacte
// Credencials a config.php (fora del repositori git)
// ============================================================

require_once __DIR__ . '/config.php';

define('DEST_EMAIL',     'idiaz@desmosgroup.com');
define('FROM_EMAIL',     'idiaz@desmosgroup.com');
define('ALLOWED_ORIGIN', 'https://www.desmosgroup.com');

// Capçaleres
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST');

// Només POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Mètode no permès']);
    exit;
}

// ── 1. Verificar reCAPTCHA ──────────────────────────────────
$token = trim($_POST['g-recaptcha-response'] ?? '');
if (empty($token)) {
    http_response_code(400);
    echo json_encode(['error' => 'reCAPTCHA no completat']);
    exit;
}

function verifyRecaptcha(string $token, string $secret, string $ip): bool {
    $params = http_build_query([
        'secret'   => $secret,
        'response' => $token,
        'remoteip' => $ip,
    ]);
    $url = 'https://www.google.com/recaptcha/api/siteverify';

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $params,
            CURLOPT_TIMEOUT        => 10,
        ]);
        $body = curl_exec($ch);
        curl_close($ch);
    } else {
        $ctx  = stream_context_create(['http' => [
            'method'  => 'POST',
            'header'  => 'Content-Type: application/x-www-form-urlencoded',
            'content' => $params,
            'timeout' => 10,
        ]]);
        $body = @file_get_contents($url, false, $ctx);
    }

    if (!$body) return false;
    $result = json_decode($body, true);
    return !empty($result['success']);
}

if (!verifyRecaptcha($token, RECAPTCHA_SECRET, $_SERVER['REMOTE_ADDR'] ?? '')) {
    http_response_code(400);
    echo json_encode(['error' => 'reCAPTCHA invàlid']);
    exit;
}

// ── 2. Recollir i sanititzar camps ─────────────────────────
$nombre   = htmlspecialchars(strip_tags(trim($_POST['nombre']   ?? '')), ENT_QUOTES, 'UTF-8');
$empresa  = htmlspecialchars(strip_tags(trim($_POST['empresa']  ?? '')), ENT_QUOTES, 'UTF-8');
$email    = filter_var(trim($_POST['email']    ?? ''), FILTER_SANITIZE_EMAIL);
$telefono = htmlspecialchars(strip_tags(trim($_POST['telefono'] ?? '')), ENT_QUOTES, 'UTF-8');
$mensaje  = htmlspecialchars(strip_tags(trim($_POST['mensaje']  ?? '')), ENT_QUOTES, 'UTF-8');

// ── 3. Validació ────────────────────────────────────────────
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || empty($mensaje)) {
    http_response_code(400);
    echo json_encode(['error' => 'Camps obligatoris incomplets']);
    exit;
}

// ── 4. Construir missatge ───────────────────────────────────
$asunto = '=?UTF-8?B?' . base64_encode("Contacte web – $nombre") . '?=';

$cuerpo  = "Hola Israel,\n\n";
$cuerpo .= "Has rebut un nou contacte des de desmosgroup.com:\n\n";
$cuerpo .= "Nom:     $nombre\n";
if ($empresa)  $cuerpo .= "Empresa: $empresa\n";
$cuerpo .= "Email:   $email\n";
if ($telefono) $cuerpo .= "Telèfon: $telefono\n";
$cuerpo .= "\nMissatge:\n$mensaje\n";
$cuerpo .= "\n---\nEnviat des del formulari de contacte de desmosgroup.com\n";

$cabeceras  = "From: Desmos Group Web <" . FROM_EMAIL . ">\r\n";
$cabeceras .= "Reply-To: $email\r\n";
$cabeceras .= "MIME-Version: 1.0\r\n";
$cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";
$cabeceras .= "Content-Transfer-Encoding: base64\r\n";

// ── 5. Enviar ───────────────────────────────────────────────
$sent = mail(DEST_EMAIL, $asunto, base64_encode($cuerpo), $cabeceras);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al enviar. Torna-ho a intentar.']);
}
