console.log("It works");
//listen for submit
document.querySelector("#loan-form").addEventListener('submit', function(el){
    //Hide results
    document.querySelector('.results').style.display = 'none';
    //Show loader
    document.querySelector('#loading').style.display = 'block';

    setTimeout(calculateResults, 2400);

    

    el.preventDefault();
});

//Calculate results
function calculateResults(){
    console.log('calculating...');
    //UI variables
    const amountUI = document.querySelector("#amount");
    const interestUI = document.querySelector("#interest");
    const yearsUI = document.querySelector("#years");
    const monthlyPaymenttUI = document.querySelector("#monthly-payment");
    const totalPaymenttUI = document.querySelector("#total-payment");
    const totalInterestUI = document.querySelector("#total-interest");

    //Calc varibles
    const principal = parseFloat(amountUI.value);
    const calculatedInterest = parseFloat(interestUI.value)/100/12;
    const calculatedPayment = parseFloat(yearsUI.value)*12;

    //Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPaymenttUI.value = monthly.toFixed(2);
        totalPaymenttUI.value = (monthly*calculatedPayment).toFixed(2);
        totalInterestUI.value = ((monthly*calculatedPayment)-principal).toFixed(2);

        //Show results
        document.querySelector('.results').style.display = 'block';
        //Hide loader
        document.querySelector('#loading').style.display = 'none';
    }else{
        console.log("Wrong numbers");
        showError("Please check your numbers");
    }

    //Clear fields after load
    amountUI.value = '';
    interestUI.value = '';
    yearsUI.value = '';
    
    // el.preventDefault();
}

//Show error
function showError(error){
    //Hide results
    document.querySelector('.results').style.display = 'none';
    //Hide loader
    document.querySelector('#loading').style.display = 'none';

    //Create a div
    const errDiv = document.createElement('div');
    //Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add class
    errDiv.className = 'alert alert-danger';
    //Create text node and append to dev
    errDiv.appendChild(document.createTextNode(error));
    //Insert error above heading
    card.insertBefore(errDiv, heading);

    //Clear error after 2 sec
    setTimeout(clearError, 2000);

}

//Clear error
function clearError(){
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
        currentAlert.remove();
    }
}
