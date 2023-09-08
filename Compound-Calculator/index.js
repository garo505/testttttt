//COMPOUND RATE CALCULATOR

//METHOD FUNCTIONS

//Function gets random percentage
function getPercent(minRate, maxRate) { 
  let randomPercent = 0;

  randomPercent = (Math.random() * (maxRate - minRate) + minRate).toFixed(2);
  return randomPercent;
}

//Function utilizes random percentage: gets value of percentage and adds it to money
function getGains(randomPercent, money) { 
  let gains = 0;

  gains = ((randomPercent / 100) * money).toFixed(2);
  gains = parseFloat(gains);
  money += gains;

  return gains;
}

//--------------------------------------------------------------------------------------------------------------------------------

//PROCESS

//Iteratively calculates money using **random percentage** and **gains** functions until **duration** is met

function fullProcess(money, minRate, maxRate, duration) {
  //initialize the variables
  let randomPercent,
    gains = 0,
    preCalMoney = money;

  for (let i = 0; i < duration; i++) {
    preCalMoney += gains;
    randomPercent = getPercent(minRate, maxRate);
    gains = getGains(randomPercent, money);
    money += gains;
    console.log(
      `Current Money: ${preCalMoney}  \n\nRandom percent : ${randomPercent}% \n\nMoney to be added: ${gains} \n\nMoney: ${money}`
    );
  }
  return [randomPercent, gains, money];
}

//--------------------------------------------------------------------------------------------------------------------------------

//TOP FUNCTION

//Depending on duration it will use **process** function with modified **duration**

function compound() {
  //initialize the variables  

  const stats = getUserInput();

  let ogMoney = stats.money,
    money = stats.money,
    minRate = stats.minRate,
    maxRate = stats.maxRate,
    frequency = stats.frequency,
    duration = stats.duration,
    randomPercent,
    gains;

  //frequency will be a radio button so no need for an else statement

  //FOR MONTHLY
  if (frequency === "monthly") {
    // Duration (years) is converted years to months
    const processedStats = fullProcess(money, minRate, maxRate, duration * 12);
    randomPercent = processedStats[0];
    gains = processedStats[1];
    money = processedStats[2];
  }

  //FOR QUARTERLY
  else if (frequency === "quarterly") {
    // Duration (years) is converted to quarterly (4 per year)
    const processedStats = fullProcess(money, minRate, maxRate, duration * 4);
    randomPercent = processedStats[0];
    gains = processedStats[1];
    money = processedStats[2];
  }

  //FOR YEARLY
  else if (frequency === "yearly") {
    //we dont change anything as duration is already set to years
    const processedStats = fullProcess(money, minRate, maxRate, duration);
    randomPercent = processedStats[0];
    gains = processedStats[1];
    money = processedStats[2];
  }

  return `    Initial Money : ${ogMoney}\n
    Total duration of investment : ${duration} years\n
    Compound frequency : ${frequency}\n
    Compounded money : ${money.toFixed(2)}`;
  //we are using template literals: `random words ${Variable} strings`;
}

//--------------------------------------------------------------------------------------------------------------------------------

//USER INPUT FUNCTION

function getUserInput()
{
  //initialize needed things
  let temp; 

  const stats = {
    money: 0,
    minRate: 0,
    maxRate: 0,
    frequency: '',
    duration: 0, //in years
  };


  for (let i = 1; i <= 5; i++){

    temp = document.querySelector(`#input${i}`).value;

    
    if (i === 1){
      stats.money = parseFloat(temp);
      console.log(stats.money);
    }

    else if (i === 2){
      stats.minRate = parseFloat(temp);
      console.log(stats.minRate);
    }

    else if (i === 3){
      stats.maxRate = parseFloat(temp);
      console.log(stats.maxRate);
    }

    else if (i === 4){
      stats.frequency = temp;
      console.log(stats.frequency);
    }

    else if (i === 5){
      stats.duration = parseFloat(temp);
      console.log(stats.duration);
    }

  }

    return stats;

}

//--------------------------------------------------------------------------------------------------------------------------------

//MAIN

/*
const stats = {
  money: 50,
  minRate: 0,
  maxRate: 9,
  frequency: "monthly",
  duration: 1, //in years
};
*/

//CONSOLE LOG

/*
console.log("things seem to be a bit right\n\n");
console.log(
  compound(
    
    stats.money,
    stats.minRate,
    stats.maxRate,
    stats.frequency,
    stats.duration
  )
);
*/