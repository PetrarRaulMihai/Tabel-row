function validate(){
    let form = document.querySelector("#form");
    console.log(form);
    let inputFields = form.getElementsByTagName("input");
    console.log(inputFields);//array/vector
    let counter = 0;

    for (let i = 0; i < inputFields.length; i++){
        let input = inputFields[i];
        // console.log(input);
        if(input.value == "" ){
           input.style.borderColor = "red";



        //FROM HERE WE CHECK RADIOS BUT IS NOT WORKING
        //    if(input.type === 'radio'){
        //     let radioName = input.gender;
        //     console.log(radioName);

        //     let radio = form.elements[radioName];
        //     console.log(radio);

        //     let statusIs = false;
        //     console.log(statusIs);

        //     for(let j = 0; j < radio.length; j++){
        //         if(radio[j].checked){
        //             statusIs = true;
        //             break;
        //         }
        //     }
        //    }

        //    if(!statusIs){
        //     console.log("Radio NOT checked")
        //    }else{
        //     console.log("Radio checked");
        //    }
        
        }
        else{
           input.style.borderColor = "green";   
           counter++;  
           console.log(counter);
           if(counter == 7){//why 7 ? 
                console.log("All completed");
                addRow();
            }              
        }
          
        

        
        
        
    }    
}