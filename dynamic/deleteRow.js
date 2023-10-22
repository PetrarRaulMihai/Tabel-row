// DELETE ROW 
function deleteRow(){
    let index, table = document.querySelector("table"); 

    //optionIndex is option selected from select drop list
    let optionIndex;
    let selectedOption = document.querySelector("#dropList");
    
    
    for(let i = 1; i < table.rows.length; i++){
  
      //setting last cell to have deleteing action
      table.rows[i].cells[6].onclick = function (){
        index = this.parentElement.rowIndex;
        table.deleteRow(index);      
        console.log("Index table row deleted " + index); 
        //display 7 because there are 7 cells in row
        console.log(typeof(index)); 
        optionIndex = document.querySelector("#dropList").selectedIndex = index;         
        if(optionIndex == index){
          selectedOption.options.remove(optionIndex-1); //set minus 1 because row 1 = option list from index 0
          console.log("Delete also from list " + optionIndex);          
        }
      }  
    }   
  }


   
  