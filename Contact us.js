let showbtn = document.getElementById("btn");
let closebtn = document.getElementById("closebtn");
let model = document.getElementById("container1");
let model2 = document.getElementById("container2");
 
let ClosePopup = () => {
    model.style.display = "none";
}
let ClosePopup1 = () => {
  model2.style.display = "none";
}

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let name1 = id("name"),
    email = id("email"),
    mess = id("mess"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
   
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        engine(name1, 0, "Username cannot be blank");
        engine(email, 1, "Email cannot be blank");
        engine(mess, 2, "Message cannot be blank");
    });

    let engine = (id, serial, message) => {
        if (id.value.trim() === "") {
          model2.style.display = "flex";
          errorMsg[serial].innerHTML = message;
          id.style.border = "2px solid red";
          
          
          
          //icons
          failureIcon[serial].style.opacity = "1";
          successIcon[serial].style.opacity = "0";

        } else {
          model.style.display = "flex";
           errorMsg[serial].innerHTML = "";
           id.style.border = "2px solid green";
           

           //icons
          failureIcon[serial].style.opacity = "0";
          successIcon[serial].style.opacity = "1";

        }
    }
