const form = document.querySelector('#loan-form');
document.querySelector('#results').style.display = 'none';


loadeventlisteners();

function loadeventlisteners(){
    form.addEventListener('submit', calculateResults);
   
}

function calculateResults(e){
const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');
const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const montly = (principal*x*calculatedInterest)/(x-1);
    if (isFinite(montly)) {
        monthlyPayment.value = montly.toFixed(2);
        totalPayment.value = (montly*calculatedPayments).toFixed(2);
        totalInterest.value = ((montly*calculatedPayments) - principal).toFixed(2);
        document.querySelector('#results').style.display = 'block';
       
    } else {
   alert("check your numbers");
    }
    e.preventDefault();
}
