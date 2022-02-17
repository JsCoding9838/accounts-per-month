function getInputValue(inputId){
    // debugger;
    const inputField      = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue     = parseFloat(inputAmountText);

    // clear input field
    inputField.value = '';

    return amountValue;
}



document.getElementById('claculate-btn').addEventListener('click', function(){

    let totalIncome   = getInputValue('income-total');
    let foodTotal     = getInputValue('food-total');
    let rentTotal     = getInputValue('rent-total');
    let clothesTotal  = getInputValue('clothes-total');
    let expensesTotal = foodTotal + rentTotal + clothesTotal;
    let balance       = totalIncome - expensesTotal;

    let totalElement         = document.getElementById('total-expenses');
    totalElement.innerText   = expensesTotal;

    let currentBalance       = document.getElementById('total-balance');
    currentBalance.innerText = balance;
    // empty or - value of alert message of Income
    if(totalIncome > 0){

    }
    else{
        return alert('Please input valid your "Income" Money in number format');
    }
    // empty or - value of alert message of food
    if(foodTotal > 0){

    }
    else{
        return alert('Please input valid food Amount of Money in number format');
    }
    // empty or - value of alert message of rent
    if(rentTotal > 0){
    }
    else{
        return alert('Please input valid Rent Amount of Money in number format');
    }
    // empty or - value of alert message  of clothes
    if(clothesTotal > 0){
    }
    else{
        return alert('Please input valid Clothes Amount of Money in number format');
    }

})

const saveButton = document.getElementById('save-balance-button').addEventListener('click', function (){

    let previusIncomeBalance = document.getElementById('total-balance').innerText;
    let totalIcomeBalance = parseFloat(previusIncomeBalance);
    

    // Save Balance Field
    let getSavingBalanceText = getInputValue('save-balance-field');
    let totalSavingAmount    = totalIcomeBalance * getSavingBalanceText;
    let currentSavingAmount  = totalSavingAmount / 100;

    

    // //saving amount 
    let  updateSavingAmount      = document.getElementById('saving-amount');
    updateSavingAmount.innerText = currentSavingAmount;


    // Remaining Balance
    let updateRemaining = document.getElementById('remaining-balance');

    updateRemaining.innerText = totalIcomeBalance - currentSavingAmount;

});