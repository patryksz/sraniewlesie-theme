<?php
header('Content-Type: application/json');

// Sprawdzenie metody POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Invalid request']);
    exit;
}

// Pobranie danych i zabezpieczenie przed XSS
$company = htmlspecialchars(trim($_POST['company'] ?? ''));
$name = htmlspecialchars(trim($_POST['name'] ?? ''));
$email = htmlspecialchars(trim($_POST['email'] ?? ''));
$phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
$participants = htmlspecialchars(trim($_POST['participants'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

// Walidacja obowiązkowych pól
if (!$company || !$name || !$email || !$message) {
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}

// Adres odbiorcy
$to = 'kontakt@spaniewlesie.pl';
$subject = "Nowe zapytanie od $name";

// Treść maila
$body = "
Nazwa firmy: $company
Imię i nazwisko: $name
Email: $email
Telefon: $phone
Liczba uczestników: $participants

Wiadomość:
$message
";

// Nagłówki
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Wysłanie maila
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Mail sending failed']);
}
?>
