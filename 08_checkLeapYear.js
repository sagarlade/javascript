function checkLeapYear(leapYear) {
    if (typeof leapYear !== 'number') {
      console.log(`${leapYear} Invalid input`);
      return;
    }
    if (leapYear % 400 === 0 || (leapYear % 4 === 0 && leapYear % 100 !== 0)) {
      console.log(leapYear + ' is a leap Year');
    } else {
      console.log(leapYear + ' is not a leap Year');
    }
  }
  
  // Call the function for all these below values
  checkLeapYear(2020);
  checkLeapYear(1999);
  checkLeapYear(1600);
  checkLeapYear(2022);
  checkLeapYear(1945);
  checkLeapYear(null);
  checkLeapYear("Twenty Twenty");
  checkLeapYear(undefined);
  checkLeapYear(NaN);
  checkLeapYear(1750);
  