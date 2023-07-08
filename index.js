const pwd = document.getElementsByClassName("pwd")[0];
const confirmPwd = document.getElementsByClassName("cnfrm-pwd")[0];
const createAccountBtn = document.getElementsByClassName("createAccountBtn")[0];
const pwdSpan = document.getElementsByClassName("invalid-span")[0];

createAccountBtn.addEventListener("click", (event) => {
  const pwdContent = pwd.value;
  const cnfrmContent = confirmPwd.value;
  if (pwdContent !== cnfrmContent) {
    event.preventDefault();
    pwd.classList.toggle("password-margin");
    pwdSpan.textContent = "The passwords do not match";
  }
});
