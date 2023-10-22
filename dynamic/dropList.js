function listAdd(){
    let list = document.querySelector("#dropList");
    let fName = document.querySelector("#fNameInput").value;
    let lName = document.querySelector("#lNameInput").value;
    let name = fName + " " + lName;
    let option = document.createElement("option");
    
    option.value = name;
    option.text = name;

    list.add(option);
    console.log("Added " + option + " to list");    
}