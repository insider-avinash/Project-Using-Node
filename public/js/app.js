const contactForm = document.querySelector(".comment-form");

let userName = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    userName: userName.value,
    email: email.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);

    if (xhr.responseText == "success") {
      alert("Email sent");
      userName.value = "";
      (email.value = ""), (message.value = "");
    } else {
      alert("Something Went wrong!!!");
    }
  };

  xhr.send(JSON.stringify(formData));
});
