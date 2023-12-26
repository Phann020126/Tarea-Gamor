function login() {
    var dialog = document.getElementById("log-in");
    dialog.showModal();

    var username = dialog.querySelector("#username");
    var password = dialog.querySelector("#password");
    var errorMessage = document.getElementById("error");
    var btn = document.getElementById("btn");
    var localStorage = window.localStorage;

    function checkPassword() {
        if(localStorage.getItem(username.value) === password.value) {
            //Change nav elements
            //errorMessage.innerHTML = "";
            dialog.close();
        }
        else {
            //errorMessage.innerHTML = "Claro";
        }
    }

    btn.addEventListener("click", function() {
        checkPassword(); 
    } );

}