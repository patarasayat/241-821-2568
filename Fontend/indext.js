function submitData(){
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked');
    let interestDOMs = document.querySelector('input[name=interest]:checked');
    let decsriptionDOM = document.querySelector('input[name=description]');

    let interest=''
    for (let i = 0; i < interestDOMs.length; i++) {
        interest += interestDOMs[i].value
        if (i  != interestDOMs.length - 1) {
            interest += ','
        }
    }
    let userData ={
        firstName : firstNameDOM.value,
        leastName : leastNameDOM.value,
        age : ageDOM.value,
        gender : genderDOM.value,
        description : decriptionDOM.value,
        interest : interest
    }
    console.log('submitData',userData);

}
