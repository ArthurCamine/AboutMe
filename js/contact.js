var btnSend = document.querySelector("#btnSend");
var form = document.querySelector("form");
var errorList = document.querySelector(".errors");

btnSend.addEventListener("click", function() {
    var formObject = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value
    };

    fetch("https://arthurcamine-contactform.azurewebsites.net/api/ContactFormFunction", {
        method: "POST",
        body: JSON.stringify(formObject)
    }).then(response => {
        if (response.status == 400) {
            errorList.innerHTML = "";
            return response.json().then(jsonResponse => {
                jsonResponse.errors.forEach(errors => {
                    var li = document.createElement("li");
                    li.innerHTML = errors;
                    li.classList.add("error");
                    errorList.appendChild(li);
                });
            });
        } else if (response.status == 200) {
            console.log("Message sent");
            errorList.innerHTML = "";
            form.reset();
        } else {
            var li = document.createElement("li");
            li.innerHTML = "Something went wrong sending your message.";
            li.classList.add("error");
            errorList.appendChild(li);
        }
    })
});