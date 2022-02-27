function getInputValue(inputId){
    // debugger;
    const inputField      = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue     = parseFloat(inputAmountText);

    // clear input field
    // inputField.value = '';

    return amountValue;
}

document.getElementById('claculate-btn').addEventListener('click', function(){

    const totalIncome   = getInputValue('income-total');
    const foodTotal     = getInputValue('food-total');
    const rentTotal     = getInputValue('rent-total');
    const clothesTotal  = getInputValue('clothes-total');
    const expensesTotal = foodTotal + rentTotal + clothesTotal;
    const balance       = totalIncome - expensesTotal;

    const totalElement       = document.getElementById('total-expenses');
    totalElement.innerText   = expensesTotal;

    const currentBalance     = document.getElementById('total-balance');
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

    const totalIcomeBalance = getInputValue('income-total');

    // Save Balance Field
    const getSavingBalanceText = getInputValue('save-balance-field');
    const totalSavingAmount    = totalIcomeBalance * getSavingBalanceText;
    const currentSavingAmount  = totalSavingAmount / 100;

    

    // //saving amount 
    const updateSavingAmount     = document.getElementById('saving-amount');
    updateSavingAmount.innerText = currentSavingAmount;

    const previusIncomeBalance = document.getElementById('total-balance').innerText;
    
    // Remaining Balance
    const updateRemaining = document.getElementById('remaining-balance');

    updateRemaining.innerText = previusIncomeBalance - currentSavingAmount;
});