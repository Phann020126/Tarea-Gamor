function signin(){
    var dialog = document.getElementById("sign-in");
    dialog.showModal();
    dialog.style.display = "flex";

    var errorMessage = dialog.querySelector("#error");
    var btn = dialog.querySelector("#btn");
    var localStorage = window.localStorage;

    function createAccount() {

        var username = dialog.querySelector("#username").value;
        var password = dialog.querySelector("#password").value;
        var cpassword = dialog.querySelector("#cpassword").value;

        if(password === cpassword && username !== "" && password !== "" ) {
            localStorage.setItem(username, password);
            errorMessage.style.display = "none";
            dialog.style.display = "none";
            dialog.close()
        }
        else {

            if(password !== cpassword) errorMessage.innerHTML = "wrong confirmation password";
            if(password === "") errorMessage.innerHTML = "password is a required field";
            if(username === "") errorMessage.innerHTML = "username is a required field";

            errorMessage.style.display = "flex";
        }
    }

    btn.addEventListener("click", function () {
        createAccount();
    });
}