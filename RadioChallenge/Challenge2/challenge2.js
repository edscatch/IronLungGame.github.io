console.log("all hail sebastian our overlord")
function getAnswer() {
    var x = document.getElementById("userChoice").value;
    var correctLink = "../../EngineChallenge/EngineChallenge.html"
    var wrongLink = "../../YouDied/wrongAnswer.html"
    console.log(x);
    if (x == "Error"){
        console.log("correct answer");
        document.getElementById("inputForm").action = ("return hideText()");
        console.log("if anyone checks this know that this one section took way too long");
        document.getElementById("promptText").hidden = true;
        document.getElementById("promptText2").hidden = true;
        document.getElementById("challengeIMG").hidden = true;
        document.getElementById("nextPage").href = "../../EngineChallenge/EngineChallenge.html"
        document.getElementById("inputForm").hidden = true;
        document.getElementById("correctText").hidden = false;
        document.getElementById("nextPage").href = correctLink;
        document.getElementById("nextPage").innerHTML = ("Next page"); 
        document.getElementById("nextPage").className = ("nextPageLink");
        return false;
    } else if (x == "Select an answer.") {
        console.log("enter an answer dimwit");
        document.getElementById("submitButton").onclick = "challenge2.html"
        return false;
    } else {
        console.log("wrong answer");
        document.getElementById("submitButton").onclick = wrongLink;
        return true;
    }
}
