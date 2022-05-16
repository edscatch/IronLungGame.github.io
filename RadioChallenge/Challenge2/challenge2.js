console.log("all hail sebastian our overlord")
function getAnswer() {
    var x = document.getElementById("userChoice").value;
    var correctLink = "../../DoorChallenge/OpenDoors.html";
    var wrongLink = "../../YouDied/wrongAnswer.html"
    console.log(x);
    if (x == "Error"){
        console.log("correct answer")
        document.getElementById("promptText").hidden = true;
        document.getElementById("challengeIMG").hidden = true;
        document.getElementById("nextPage").href = correctLink;
        document.getElementById("nextPage").innerHTML = ("You hope for the best"); 
        document.getElementById("answerForm").hidden = true;
        return false;
    } else if (x == "select") {
        console.log("enter an ansewr dimwit");
    } else {
        console.log("wrong answer");

    }
}
