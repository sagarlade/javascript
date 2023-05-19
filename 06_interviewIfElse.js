var tcsInterivew=function(gradScore, hscScore,sscScore, candidateName){
    if(gradScore >= 70 || hscScore >= 80 || sscScore > 90){
        console.log(`Congrats ${candidateName}, you are eligible for the TCS interview.`);
    }
    else{
        console.log(`Unfortunately, ${candidateName}, you are not eligible for the interview.`);
    }
}
tcsInterivew(80, 86, 90, "Sagar");
tcsInterivew(70, 65, 55, "Hina");
tcsInterivew(60, 79, 88, "Roy");