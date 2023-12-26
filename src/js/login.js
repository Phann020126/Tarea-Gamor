function login() {
    var dialog = document.getElementById("log-in");
    dialog.showModal();
    dialog.style.display = "flex";

    var errorMessage = dialog.querySelector("#error");
    var btn = dialog.querySelector("#btn");
    var localStorage = window.localStorage;
    
    function checkPassword() {

        var username = dialog.querySelector("#username").value;
        var password = dialog.querySelector("#password").value;

        if(localStorage.getItem(username) === password) {
            
            var logged = document.getElementById("logged");
            logged.style.display = "flex";
            var user = logged.querySelector("#username");
            user.innerHTML = username;

            var unlogged = document.getElementById("unlogged");
            unlogged.style.display = "none";

            errorMessage.style.display = "none";
            dialog.style.display = "none";
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