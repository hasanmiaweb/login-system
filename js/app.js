document.querySelector("#loginButton").addEventListener("click", function () {


    var databasename = document.querySelector("#hiddenField1").value;
    var databasepasswod = document.querySelector("#hiddenField2").value;

    var userin = document.querySelector("#usernamef").value;
    var userpasswod = document.querySelector("#passwordf").value;

    if (databasename === userin && databasepasswod === userpasswod) {
        document.querySelector("h3").innerHTML = "You have successfully logged in"
        document.querySelector("#total-section").style.display = "none";
    } else {
        document.querySelector("h3").innerHTML = "You failed to login. Please try again later"
        document.querySelector("#total-section").style.display = "none";
    }

})



