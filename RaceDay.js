let raceNumber = Math.floor(Math.random() * 1000);

let runEarly = true;
let runAge = 18;

if (runAge > 18 && runEarly) {
  raceNumber += 1000
};

if (runAge > 18 && runEarly) {
  console.log(`Your race time at 9:30 am and your race number is ${raceNumber}`)
} else if (runAge > 18 && !runEarly) {
  console.log(`Your race time at 11am and your number is ${raceNumber}`)
} else if (runAge < 18) {
  console.log(`Your race time at 12:30 pm and your race number is ${raceNumber}`)
} else {
  console.log('Plz see the registration desk.')
};

