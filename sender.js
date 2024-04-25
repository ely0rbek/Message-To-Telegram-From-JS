//bot token
var telegram_bot_id = "5243692052:AAHSIVunP3NMKH7P8b9j4XASRLk4KpbqARs";
//chat id
var chat_id = 810619333;
var u_name, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    u_phone = document.getElementById("number").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nPhone: " + u_phone + "\nEmail: " + email + "\nMessage: " + message;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};
