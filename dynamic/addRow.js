

// TABLE ROW ADDING
function addRow(){

    //set variables values from input
    let id = document.querySelector("#idInput").value;
    let fName = document.querySelector("#fNameInput").value;
    let lName = document.querySelector("#lNameInput").value;
    let gender;
    let address = document.querySelector("#addressInput").value;
    let hobbies = document.querySelector("#hobbiesInput").value; 

    
    

    //set styling variables input ex below, or write path directly in condition blocks
    let form = document.querySelector("#form");
    let idInput = document.querySelector("#idInput");
    


     //radio button input catch 
     if(document.querySelector("#male").checked) { 
        //return TRUE  
            gender = "Male";
        }    
        else if(document.querySelector("#female").checked){  
            //return FALSE  
            gender = "Female";   
        }
        else{
            gender = "";
            //no gender input value given
            if(gender == ""){
                gender = "Other";
            }
        }

        
           
        
    
    
   
    

    let table = document.querySelector("#table");
    let newRow = table.insertRow(table.rows.length);

    let cel0 = newRow.insertCell(0);
    let cel1 = newRow.insertCell(1);
    let cel2 = newRow.insertCell(2);
    let cel3 = newRow.insertCell(3);
    let cel4 = newRow.insertCell(4); 
    let cel5 = newRow.insertCell(5);
    let cel6 = newRow.insertCell(6);
   

    

    cel0.innerHTML = id;
    cel1.innerHTML = fName;
    cel2.innerHTML = lName;
    cel3.innerHTML = gender;
    cel4.innerHTML = address;
    cel5.innerHTML = hobbies;
    cel6.innerHTML = "Remove";    
    

    listAdd();

    deleteRow();    
   
}


//ma uit peste fct si dezvolt
// https://stackoverflow.com/questions/8287779/how-to-use-the-required-attribute-with-a-radio-input-field
// tot pe baza de index 
//declare the indexes 
//equality them


function selectRow(){
    
    let index, table = document.querySelector("table");
    let row = document.querySelector("table tr");
    let optionIndex;
    // optionIndex = document.querySelector("#dropList").selectedIndex = index; 
    let selectedOption = document.querySelector("#dropList");
   
        if(selectedOption.selectedIndex == 0){
            console.log("ceva");
            table.style.backgroundColor = "red";
            row.style.color = "green";
        }
           
        }
    




let val = document.querySelector("#dropList");
val.addEventListener("change",function(){
    console.log("Something selected");
     selectRow();

})


