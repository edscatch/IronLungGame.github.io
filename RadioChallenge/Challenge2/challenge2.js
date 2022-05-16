console.log("all hail sebastian our overlord")
function getAnswer() {
    var x = document.getElementById("userChoice").value;
    //var correctLink = "../../DoorChallenge/Challenge2.html"
    var wrongLink = "../../YouDied/wrongAnswer.html"
    console.log(x);
    if (x == "Error"){
        console.log("correct answer");
        document.getElementById("inputForm").action = ("hideText()");
        console.log("if anyone checks this know that this one section took way too long");
        return false;
    } else if (x == "Select an answer.") {
        console.log("enter an answer dimwit");
        document.getElementById("submitButton").onclick = "challenge2.html"
    } else {
        console.log("wrong answer");
        document.getElementById("submitButton").onclick = wrongLink;
    }
}
function hideText() {
    document.getElementById("promptText").hidden = true;
    document.getElementById("promptText2").hidden = true;
    document.getElementById("challengeIMG").hidden = true;
    document.getElementById("nextPage").href = "../../DoorChallenge/Challenge2.html"
    document.getElementById("inputForm").hidden = true;
}
