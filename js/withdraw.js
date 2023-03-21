//step -1: add event listener to the deposit button
document.getElementById('btn-withdraw').addEventListener('click',function(){
  //Step-2: Get the withdraw amount from the deposit input field
    //for input field use .value to the value inside the input field
    const withdrawAmount = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawAmount.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);
     // step-3:  get the current withdraw total
    // for non-input (element other than input, textarea) use innerText to get the text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString =withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

     // step-4 : add number to set the total withdraw
     let currentWithdrawTotal = previousWithdrawTotal  + newWithdrawAmount ;
     withdrawTotalElement.innerText = currentWithdrawTotal;
    
      // Step-5: get Balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
     // step-5 : calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
     // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
 
    //step: 6 clear the  wuthdraw field 
     withdrawAmount.value = '';
     
})