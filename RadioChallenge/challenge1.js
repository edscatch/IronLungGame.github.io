function getAnswer() {
    let x = document.forms["answerForm"]["userAnswer"].value;
    let link = "google.com/"
    if (x == 10) {
        document.getElementById("nextPage").href = link;
        document.getElementById("nextPage").innerHTML = ("Next page");
        document.getElementById("nextPage").className = ("nextPageLink");
        return false;
    } else if ((x > 0) || (x == "")){
       document.getElementById("hiddentext").innerHTML = ("Please enter a number above 0")
        return false;
    } else {
        return true;
    }
}