function getAnswer() {
    var x = document.getElementById("userChoice").value;
    var correctLink = "EngineChallenge2/EngineChallenge2.html"
    var wrongLink = "../../YouDied/wrongAnswer.html"
    console.log(x);
    if (x == "2"){
        document.getElementById("RepairEnginesImg").hidden = true;
        document.getElementById("inputForm").hidden = true;
        document.getElementById("nextPage").href = correctLink;
        document.getElementById("nextPage").innerHTML = ("Next page"); 
        document.getElementById("nextPage").className = ("nextPageLink");
        return false;
    } else if (x == "0") {
        return false;
    } else {
        document.getElementById("submitButton").onclick = wrongLink;
        return true;
    }
}