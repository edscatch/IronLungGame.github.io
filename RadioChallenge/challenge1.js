document.getElementById("correctText").hidden = true; //FIXME figure out how to hide the text. or hardcode it.
console.log("all hail sebastian")
function getAnswer() {
    let x = document.forms["answerForm"]["userAnswer"].value;
    let link = "/challenge2.html"
    if (x == 10) {
        document.getElementById("nextPage").href = link;
        document.getElementById("nextPage").innerHTML = ("Next page"); 
        document.getElementById("nextPage").className = ("nextPageLink");
        document.getElementById("inputForm").hidden = true;
        document.getElementById("userAnswer").hidden = true;
        document.getElementById("correctText").hidden = false;
        return false;
    //} else if (x > 0){
       //document.getElementById("hiddentext").innerHTML = ("Please enter a number above 0");
       //console.log("i hope this doesn't fucking trigger");
       // return false;
    } else {
            return true;
    }
}