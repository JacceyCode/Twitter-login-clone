let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strenght");
let eyeIcon = document.getElementById("eyeicon");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }

  if (pass.value.length > 0 && pass.value.length < 5) {
    str.innerHTML = "weak";
    pass.style.borderColor = "#ff5925";
    msg.style.color = "#ff5925";
  } else if (pass.value.length >= 5 && pass.value.length < 10) {
    str.innerHTML = "medium";
    pass.style.borderColor = "purple";
    msg.style.color = "purple";
  } else if (pass.value.length >= 10) {
    str.innerHTML = "strong";
    pass.style.borderColor = "#26d730";
    msg.style.color = "#26d730";
  }
});

eyeIcon.onclick = function () {
  if (pass.type === "password") {
    pass.type = "text";
    eyeIcon.src = "images/eye-regular.png";
  } else {
    pass.type = "password";
    eyeIcon.src = "images/eye-slash-regular.png";
  }
};
