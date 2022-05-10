function getAnswer() {
    let x = document.forms["answerForm"]["userAnswer"].value;
    let link = "google.com/"
    if (x == 10) {
        document.getElementById("nextPage").href = link;
        document.getElementById("nextPage").innerHTML = ("Next page"); //FIXME change link to actual page
        document.getElementById("nextPage").className = ("nextPageLink");
        document.getElementById("inputForm").hidden = true;
        return false;
    //} else if (x > 0){
       //document.getElementById("hiddentext").innerHTML = ("Please enter a number above 0");
       //console.log("i hope this doesn't fucking trigger");
       // return false;
    } else {
            return true;
    }
}