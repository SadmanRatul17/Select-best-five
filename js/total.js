document.getElementById('calculate').addEventListener('click', function(){
     const inputPlayer = document.getElementById('input-player');
     const inputPlayerString = inputPlayer.value;
     const inputNumber = parseInt(inputPlayerString);
     const totalCostPlayer = inputNumber * 5 ;

     const playerExpanse = document.getElementById('expensese');
     const playerExpanseString = playerExpanse.innerText;
     const playerExpanseElement = parseInt(playerExpanseString);
     playerExpanse.innerText =totalCostPlayer;

     inputPlayer.value = '' ;

})


document.getElementById('cal-total').addEventListener('click', function(){
    // manager 
    const managerprice = document.getElementById('Manager-price');
    const managerpriceString = managerprice.value;
    const managerpriceElement = parseInt(managerpriceString);
    
    managerprice.value = '';

    // coach   
    const coachprice = document.getElementById('coach-price');
    const coachpriceString = coachprice.value;
    const coachpriceElement = parseInt(coachpriceString);

    coachprice.value= '';

    // player price

    const inputPlayer = document.getElementById('input-player');
    const inputPlayerString = inputPlayer.value;
    const inputNumber = parseInt(inputPlayerString);
    const totalCostPlayer = inputNumber * 5 ;

    const playerExpanse = document.getElementById('expensese');
    const playerExpanseString = playerExpanse.innerText;
    const playerExpanseElement = parseInt(playerExpanseString);
    playerExpanse.innerText =totalCostPlayer;
  
//    Total
    const total = playerExpanseElement + managerpriceElement + coachpriceElement ;
    


    // final Total

    const finalTotal = document.getElementById('final-total');
    const finalTotalString = finalTotal.innerText;
    const finalTotalElement = parseInt(finalTotalString);
    finalTotal.innerText = total ;
    


})