dragula([
    document.getElementById("to-do"),
    document.getElementById("doing"),
    document.getElementById("done"),
    document.getElementById("trash") 
]);

function addTask() {
    var inputTask = document.getElementById('taskText').value.trim(); // Trim whitespace

    if (inputTask != "") {
        document.getElementById("to-do").innerHTML += '<li class="task"><p>' + inputTask + '</p></li>';
        document.getElementById('taskText').value = ""; // Clear the input field
    }
}

function emptyTrash(){
    document.getElementById("trash").innerHTML = "";
}
