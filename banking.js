//get Deposit Amount
document.getElementById('addDeposit').addEventListener('click', function() {
    const depositAmount = document.getElementById('deposit-Amount');
    const depositAmountText = depositAmount.value;
    const newDepositAmountText = parseInt(depositAmountText);
    const number = parseInt(depositAmountText);
    if (newDepositAmountText != number) {
        window.alert('Please enter valid amount');
    }

    // update deposit amount
    const currentDeposit = document.getElementById('current-Deposit');
    const currentDepositText = currentDeposit.innerText;
    const newCurrentdepositText = parseInt(currentDepositText);
    const totalCurrentDepositText = newDepositAmountText + newCurrentdepositText;
    currentDeposit.innerText = totalCurrentDepositText;

    // update current balance

    const currentBalance = document.getElementById('currentBalance');
    const currentBalanceText = currentBalance.innerText;
    const NewCurrentBalanceText = parseInt(currentBalanceText);
    const totalCurrentBalance = NewCurrentBalanceText + totalCurrentDepositText;
    currentBalance.innerText = totalCurrentBalance;
    depositAmount.value = '';

});

//Update withdraw Amount
document.getElementById('addwithdraw').addEventListener('click', function() {
    const withdrawAmount = document.getElementById('withdrawAmount');
    const withdrawAmountText = withdrawAmount.value;
    const newWithdrawAmountTotal = parseInt(withdrawAmountText);

    // Update Withdraw Amount

    const currentWithdraw = document.getElementById('currentWithdraw');
    const previousWithdrawText = currentWithdraw.innerText;
    const newPreviousWithdrawText = parseInt(previousWithdrawText);
    const newWithdrawTotal = newPreviousWithdrawText + newWithdrawAmountTotal;
    currentWithdraw.innerText = newWithdrawTotal;

    // update new Balance

    const currentBalance = document.getElementById('currentBalance');
    const previousCurrentBalance = currentBalance.innerText;
    const PreviousCurrentBalance = parseInt(previousCurrentBalance);
    const newPreviousCurrentBalance = parseInt(previousCurrentBalance);
    const totalnewBalance = newPreviousCurrentBalance - newWithdrawTotal;
    currentBalance.innerText = totalnewBalance;
    withdrawAmount.value = '';

});