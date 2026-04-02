<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$name    = isset($data['name'])    ? htmlspecialchars(trim($data['name']),    ENT_QUOTES, 'UTF-8') : '';
$company = isset($data['company']) ? htmlspecialchars(trim($data['company']), ENT_QUOTES, 'UTF-8') : '';
$email   = isset($data['email'])   ? htmlspecialchars(trim($data['email']),   ENT_QUOTES, 'UTF-8') : '';
$phone   = isset($data['phone'])   ? htmlspecialchars(trim($data['phone']),   ENT_QUOTES, 'UTF-8') : '';
$size    = isset($data['size'])    ? htmlspecialchars(trim($data['size']),    ENT_QUOTES, 'UTF-8') : '';
$topic   = isset($data['topic'])   ? htmlspecialchars(trim($data['topic']),   ENT_QUOTES, 'UTF-8') : '';
$message = isset($data['message']) ? htmlspecialchars(trim($data['message']), ENT_QUOTES, 'UTF-8') : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ad, e-posta ve mesaj alanları zorunludur.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Geçersiz e-posta adresi.']);
    exit;
}

$to      = 'info@airx.com.tr';
$subject = '=?UTF-8?B?' . base64_encode('AiRX - Yeni İletişim / Demo Talebi') . '?=';

$body  = "Ad Soyad  : $name\n";
$body .= "Şirket    : $company\n";
$body .= "E-Posta   : $email\n";
$body .= "Telefon   : $phone\n";
$body .= "Şirket Büyüklüğü: $size\n";
$body .= "Konu      : $topic\n";
$body .= "\nMesaj:\n$message\n";

$headers  = "From: AiRX Web <noreply@airx.com.tr>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Mesajınız gönderildi.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail gönderilemedi, lütfen tekrar deneyin.']);
}
