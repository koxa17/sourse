<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    $to = "nik_html@mail.ru"; /*Укажите ваш адрес электронной почты*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $subject = "$formData";
    $message = "$formData\n\nОтправитель: $name \n\nТелефон: $phone \n\nСообщение: Оставил заказ на вашем сайте, перезвоните мне пожалуйста на номер $phone";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo "<center>Спасибо! Сообщение успешно отправлено. Я свяжусь с вами в течение часа.</center>";
    }
    else 
    {
    echo "<center><b>Ошибка. Сообщение не отправлено! Проверьте правильность введенных данных</b></center>";
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}





?>