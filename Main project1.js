let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let username = id("username"),
    password = id("password"),
    form = id("form"),

    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
   
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        engin(username, 0, "Username cannot be blank");
        // engine(email, 1, "Email cannot be blank");
        engin(password, 1, "Password cannot be blank");
    });

    let engin = (id, serial, message) => {
        if (id.value.trim() === "") {
        //   model2.style.display = "flex";
          errorMsg[serial].innerHTML = message;
          id.style.border = "2px solid red";
          message.style.color = "red";
         
          
          //icons
          failureIcon[serial].style.opacity = "1";
          successIcon[serial].style.opacity = "0";

        } else {
        //   model.style.display = "flex";
           errorMsg[serial].innerHTML = "";
           id.style.border = "2px solid green";

           //icons
          failureIcon[serial].style.opacity = "0";
          successIcon[serial].style.opacity = "1";

        }
    }
