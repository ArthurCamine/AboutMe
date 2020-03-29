var btnSend = document.querySelector("#btnSend");

btnSend.addEventListener("click", function() {
    var formObject = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value
    };

    fetch("https://arthurcamine-contactform.azurewebsites.net/api/ContactFormFunction", {
        method: "POST",
        body: formObject
    });
});