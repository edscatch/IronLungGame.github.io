console.log("all hail sebastian our overlord")
function getAnswer() {
    var select = document.getElementById("userChoice");
    var x = select.options[select.selectedIndex];
    var link = "../../DoorChallenge/OpenDoors.html"
    console.log("test")
    if (x == "Error"){
        console.log("correct answer")
        document.getElementById("propmtText").hidden = true;
        document.getElementById("nextPage").href = link;
        document.getElementById("nextPage").innerHTML = ("Next page"); 
        return false;
    } else if (x == "select") {
        document.getElementById("wronganswerfuckface").hidden = false;
        return true;
    }
}
