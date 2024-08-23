let form = document.querySelector("form");
let email = document.getElementById("email");
let emailError = document.getElementById("emailerror");
let signBtn = document.querySelector(".sign-up");
let pass = document.getElementById("pass");
let passError = document.getElementById("passworderror");
let confirmPass = document.getElementById("confirmpass");
let confirmError = document.getElementById("confirmerror");
signBtn.addEventListener("click" ,(e) =>{
    let emailReg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if(!email.value.match(emailReg)){
        email.style.outlineColor = "red"
        emailError.classList.remove("error");
        email.classList.add("valid");
    }else{
        email.style.outlineColor = "rgb(51, 140, 255)"
        emailError.classList.add("error");
        email.classList.remove("valid");

    };
    const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(!pass.value.match(regex)){
        pass.style.outlineColor = "red"
        passError.classList.remove("error");
        pass.classList.add("valid");
    }else{
        pass.style.outlineColor = "rgb(51, 140, 255)"
        passError.classList.add("error");
        pass.classList.remove("valid");
    }
    if(!confirmPass.value.match(pass.value)){
        confirmPass.style.outlineColor = "red"
        confirmError.classList.remove("error");
        confirmPass.classList.add("valid");
    }else{
        confirmPass.style.outlineColor = "rgb(51, 140, 255)"
        confirmError.classList.add("error");
        confirmPass.classList.remove("valid");
    }
    if(emailError.classList.contains("error") && passError.classList.contains("error") && confirmError.classList.contains("error")){
        form.submit();
    } else {
        e.preventDefault();
    }
});