

function validateForm(event) {
    console.log(event.target[0].style)
    const values = {
        fname: event.target[0].value,
        lname: event.target[1].value,
        email: event.target[2].value,
        password: event.target[3].value
    };

    for (let key in values) {
        let warning = document.getElementById(`${key[0]}warning`);
        let iconError = document.getElementById(key);
        if (values[key] == false && warning.className==='warning') {
            warning.className = 'warning2'
            iconError.className = 'icon-error'
        }
    }
    event.preventDefault();


}

const form = document.getElementById('input');

form.addEventListener('submit', validateForm)
