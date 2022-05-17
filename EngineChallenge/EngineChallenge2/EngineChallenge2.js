function getAnswer() {
    var x = document.getElementById("userChoice").value;
    var correctLink = "../../DoorChallenge/OpenDoors.html"
    console.log(x);
    if (x == "3"){
        document.getElementById("RepairEnginesImg2").hidden = true;
        document.getElementById("inputForm").hidden = true;
        document.getElementById("nextPage").href = correctLink;
        document.getElementById("nextPage").innerHTML = ("Next page"); 
        document.getElementById("nextPage").className = ("nextPageLink");
        return false;
    } else if (x == "0") {
        return false;
    } else {
        return true;
    }
}