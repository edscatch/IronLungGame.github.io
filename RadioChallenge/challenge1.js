console.log("all hail sebastian")
function getAnswer() {
    let x = document.forms["answerForm"]["userAnswer"].value;
    let link = "Challenge2/challenge2.html"
    if (x == 10) {
        document.getElementById("nextPage").href = link;
        document.getElementById("nextPage").innerHTML = ("Next page"); 
        document.getElementById("nextPage").className = ("nextPageLink");
        document.getElementById("inputForm").hidden = true;
        document.getElementById("userAnswer").hidden = true;
        document.getElementById("challengeIMG").hidden = true;
        document.getElementById("correctText").hidden = false;
        return false;
    } else {
            return true;
    }
}