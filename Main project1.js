

let showbtn = document.getElementById("btn");
let closebtn = document.getElementById("closebtn");
let model = document.getElementById("container1");
let model2 = document.getElementById("container2");
 


let HidePass = document.getElementById("Hide");
let ShowPass = document.getElementById("Show");

let HidePassword  = () => {
   if(password.type == "password"){
    password.type = "text";
    HidePass.style.visibility="hidden";
    ShowPass.style.visibility="visible"
   } 
}

let ShowPassword = () => {
    if(password.type = "password"){
        HidePass.style.visibility="visible";
        ShowPass.style.visibility="hidden";
     
    } 
 }

let ClosePopup = () => {
    model.style.display = "none";
}
let ClosePopup1 = () => {
  model2.style.display = "none";
}

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let username = id("username"),
    password = id("password"),
    form = id("form"),

    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
    openEye = classes("fa-eye");
    closeEye = classes("fa-eye-slash");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        engine(username, 0, "Username cannot be blank");
        engine(password, 1, "Password cannot be blank");
    });

    let engine = (id, serial, message) => {
        if (id.value.trim() === "") {
          model2.style.display = "flex";
          errorMsg[serial].innerHTML = message;
          id.style.border = "2px solid red";
          
          
          
          //icons
          failureIcon[serial].style.visibility = "visible";
          successIcon[serial].style.visibility = "hidden";
          openEye[serial].style.opacity="0";
           closeEye[serial].style.opacity="0";

        } else {
          model.style.display = "flex";
           errorMsg[serial].innerHTML = "";
           id.style.border = "2px solid green";
           

           //icons
          failureIcon[serial].style.visibility = "hidden";
          successIcon[serial].style.visibility = "visible";
          openEye[serial].style.opacity="0";
           closeEye[serial].style.opacity="0";

        }
    }
