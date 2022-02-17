const totalIncome = document.getElementById('income-total').value;


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
    // console.log(balance);

    let totalElement         = document.getElementById('total-expenses');
    totalElement.innerText   = expensesTotal;

    let currentBalance       = document.getElementById('total-balance');
    currentBalance.innerText = balance;
    

    // console.log(balance);
    
    // if(totalIncome > 0){
    //     let totalElement         = document.getElementById('total-expenses');
    //     totalElement.innerText   = expensesTotal;

    //     let currentBalance       = document.getElementById('total-balance');
    //     currentBalance.innerText = balance;
    // }
    // else{
    //     return alert('Please input valid food Amount of Money in number format');
    // }
    if(foodTotal > 0){
    }
    else{
        return alert('Please input valid food Amount of Money in number format');
    }
    if(rentTotal > 0){
    }
    else{
        return alert('Please input valid Rent Amount of Money in number format');
    }
    if(clothesTotal > 0){
    }
    else{
        return alert('Please input valid Clothes Amount of Money in number format');
    }
})

const saveButton = document.getElementById('save-balc-btn').addEventListener('click', function (){

    let previusIncomeBalance = document.getElementById('total-balance').innerText;
    let previusCurrentBalance = parseFloat(previusIncomeBalance);
    console.log('previus cu:',previusCurrentBalance);


    // Save Balance Field
    let saveprevius       = document.getElementById('save-balc-field').value;
    let savePreviusTotal  = parseInt(saveprevius);
    let totalSavingAmount = previusCurrentBalance * savePreviusTotal;
    let currentSavingAmount = totalSavingAmount / 100;

    console.log('save balance:', currentSavingAmount);


    //saving amount 
    let  savingAmountField2 = document.getElementById('saving-amount');
    savingAmountField2.innerText = currentSavingAmount;

    //--
    


    // Remaining Balance
    let remaining = document.getElementById('remaining-balance');

    remaining.innerText = previusCurrentBalance - currentSavingAmount;

    console.log(remaining);

    


   
});