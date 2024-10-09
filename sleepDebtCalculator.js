let getSleepHours = (day) => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 5;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 7;
  } else if (day === 'saturday') {
    return 9;
  } else {
    return 6;
  }
};

let getActualSleepHours = () => 

  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday') ; 
//return the sum using an implicit return


let getIdealSleepHours = (idealHours) => {
  return idealHours * 7
}

/*let getIdealSleepHours = () => {
  let idealHours = 8
  return idealHours*= 7
};*/


let calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  let userSleepHours = actualSleepHours - idealSleepHours;

  if (actualSleepHours === idealSleepHours) {
    console.log(`${userSleepHours} - You got the perfect amount of sleep!`)
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`${userSleepHours} - You sleep too much!!!`)
  } else {
    console.log(`${userSleepHours} - You should sleep now`)
  };

};


calculateSleepDebt();






