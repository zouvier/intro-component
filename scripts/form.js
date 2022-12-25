
function validateForm() {
    let state = true;
    
    const values = {
        fname: document.forms["input"]["fname"].value,
        lname: document.forms["input"]["lname"].value,
        email: document.forms["input"]["email"].value,
        password: document.forms["input"]["password"].value
    };
    for(let key in values ){
        if(values[key] == false){
            state=false;
            document.getElementById(`${key[0]}warning`).style.visibility = "visible";
            document.getElementById(key).style.backgroundImage = "url('./images/icon-error.svg')";
        }
    }
    return state
};
