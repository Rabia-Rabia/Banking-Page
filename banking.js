//get Deposit Amount
document.getElementById('addDeposit').addEventListener('click', function() {
    const depositAmount = document.getElementById('deposit-Amount');
    const depositAmountText = depositAmount.value;
    const newDepositAmount = parseInt(depositAmountText);
    const number = parseInt(depositAmountText);
    if (newDepositAmount != number) {
        window.alert('Please enter valid amount');
    }

    // update deposit amount
    const currentDeposit = document.getElementById('current-Deposit');
    const currentDepositText = currentDeposit.innerText;
    const newCurrentdeposit = parseInt(currentDepositText);
    const totalCurrentDeposit = newDepositAmount + newCurrentdeposit;
    currentDeposit.innerText = totalCurrentDeposit;

    // update current balance

    const currentBalance = document.getElementById('currentBalance');
    const currentBalanceText = currentBalance.innerText;
    const newCurrentBalance = parseInt(currentBalanceText);
    const totalCurrentBalance = newCurrentBalance + newDepositAmount;
    currentBalance.innerText = totalCurrentBalance;
    depositAmount.value = '';

});

//Update withdraw Amount
document.getElementById('addwithdraw').addEventListener('click', function() {
    const withdrawAmount = document.getElementById('withdrawAmount');
    const withdrawAmountText = withdrawAmount.value;
    const newWithdrawAmount = parseInt(withdrawAmountText);

    // Update Withdraw Amount

    const currentWithdraw = document.getElementById('currentWithdraw');
    const previousWithdrawText = currentWithdraw.innerText;
    const newPreviousWithdrawText = parseInt(previousWithdrawText);
    const newWithdrawTotal = newPreviousWithdrawText + newWithdrawAmount;
    currentWithdraw.innerText = newWithdrawTotal;

    // update new Balance

    const currentBalance = document.getElementById('currentBalance');
    const previousCurrentBalance = currentBalance.innerText;
    const newPreviousCurrentBalance = parseInt(previousCurrentBalance);
    const totalNewBalance = newPreviousCurrentBalance - newWithdrawAmount;
    currentBalance.innerText = totalNewBalance;
    withdrawAmount.value = '';

});