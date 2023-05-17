var tcsInterview = function (gradScore, hscScore, sscScore, candidateName) {
  var isEligible =
    gradScore >= 70 || hscScore >= 80 || sscScore >= 90
      ? `Congrats ${candidateName}, you are eligible for the TCS interview.`
      : `Unfortunately, ${candidateName}, you are not eligible for the interview.`;

      console.log(`${isEligible}`);
};

tcsInterview(80, 86, 90, "Hina Khan");
tcsInterview(70, 65, 55, "Mohsin Khan");
tcsInterview(60, 79, 88, "Pranali Rathod");
