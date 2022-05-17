console.log("all hail sebastian our overlord")
function getAnswer() {
    var x = document.getElementById("userChoice").value;
    var correctLink = "../../EngineChallenge/EngineChallenge.html"
    console.log(x);
    if (x == "Error"){
        console.log("correct answer");
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
    } else if (x == "select") {
        console.log("enter an answer dimwit");
        return false;
    } else {
        console.log("wrong answer");
        return true;
    }
}
