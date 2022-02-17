





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
        
  } else {

    const totalExpenses = document.getElementById('total-balance');
    totalExpenses.innerText =  + foodMoney + rentMoney + clothesMoney;

   const totalBalance = document.getElementById('total-money');
    totalBalance.innerText = incomeInput.value - totalExpenses.innerText; 
    

  
  }
  
} 

function reminignBlance() {
  const incomeInput = document.getElementById('incom-money');
  const incomeMoney = parseFloat(incomeInput.value);
  incomeInput.value = incomeMoney;

  const inputButton = document.getElementById('input-button');
  inputButton.value = incomeMoney / 20;

  const savingBlance = document.getElementById('saving-blance');
  savingBlance.innerText
  
}