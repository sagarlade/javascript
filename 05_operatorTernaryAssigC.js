function maleMarriageEligibility(gender, age, boyName){
    var result= (gender=="Male" && age >=21) ? `${boyName} Your Eligible for Marriage` : `${boyName} Your Not Eligible for Marriage`;
    console.log(`${result}`);
}
maleMarriageEligibility("Male", 25 , "Billgates" );
maleMarriageEligibility("Male", 17 , "Stew Jobs");

console.log("-----------------------------------------------");

function femaleMarriageEligibility(gender, age, girlName){
    var result= (gender=="Female" && age >=18) ? `${girlName} You are Eligible for Marriage` : `${girlName} You are Not Eligible for Marriage`;
    console.log(`${result}`);
}
femaleMarriageEligibility("Female", 16 , "Jenifer" );
femaleMarriageEligibility("Female", 34 , "Hina khan");