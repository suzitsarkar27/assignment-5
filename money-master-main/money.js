





function getMoney() {
    const incomeInput = document.getElementById('incom-money');
    const foodInput = document.getElementById('food-money');
    const rentInput = document.getElementById('rent-money')
    const colthesInput = document.getElementById('clothes-money')

// input value convet sting to number
    const incomeMoney = parseFloat(incomeInput.value);
    incomeInput.value = incomeMoney;

    const foodMoney = parseFloat(foodInput.value);
    foodInput.value = foodMoney;

    const rentMoney = parseFloat(rentInput.value);
    rentInput.value = rentMoney;

    const clothesMoney = parseFloat(colthesInput.value);
    colthesInput.value = clothesMoney;

    
  if (isNaN(foodMoney)) {
  alert('plesse type valide number')      
  } else if ( foodMoney < 0 ||  rentMoney < 0 ||clothesMoney < 0) {
    alert('this is nagative value pless trye agin')
  }
  
  else {

    const totalExpenses = document.getElementById('total-balance');
    totalExpenses.innerText =  + foodMoney + rentMoney + clothesMoney;

    const totalBalance = document.getElementById('total-money');
    totalBalance.innerText = incomeInput.value - totalExpenses.innerText; 
  } 
  
} 

function reminignBlance() {
  const incomeInput = document.getElementById('incom-money');
  const incomeMoney = parseFloat(incomeInput.value);
  // incomeInput.value = incomeMoney;

  const inputButton = document.getElementById('input-filds');
  inputButton.value ;

  const savingBlance = document.getElementById('saving-blance');
  savingBlance.innerText = incomeMoney / 100;
  savingBlance.innerText = savingBlance.innerText *  inputButton.value;
 


  // remaining balance 
  const totalBalance = document.getElementById('total-money');
  totalBalance.innerText;



  
  if (isNaN(inputButton.value)) {
    alert( 'Do not string  Plesse type number')
  } else if ( totalBalance.innerText < savingBlance.innerText) {
    alert( 'Plesse this is not carect try to agine')
  } else {
    const reminignBlance = document.getElementById('remaning-blance');
    reminignBlance.innerText = parseFloat(totalBalance.innerText) - parseFloat(savingBlance.innerText);
  }

 
  
 
  

}