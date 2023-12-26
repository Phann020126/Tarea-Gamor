function login() {
    var dialog = document.getElementById("log-in");
    dialog.showModal();
    dialog.style.display = "flex";

    var username = dialog.querySelector("#username").value;
    var password = dialog.querySelector("#password").value;
    var errorMessage = dialog.querySelector("#error");
    var btn = dialog.querySelector("#btn");
    var localStorage = window.localStorage;

    function checkPassword() {
        if(localStorage.getItem(username) === password) {
            //Change nav elements
            errorMessage.style.display = "none";
            dialog.close();
        }
        else {  
            errorMessage.style.display = "flex";
        }
    }

    btn.addEventListener("click", function() {
        checkPassword(); 
    } );

}