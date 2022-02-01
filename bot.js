// website to go to https://checkboxolympics.com/ 

//get all buttons
button = document.querySelectorAll('input[type=checkbox]')

//first two are fake indicating start and stop but doesnt work because reason 
// cant figure it out 

for( let i = 2; i < button.length; i++){
  button[i].click()
}



