function voteEligibility(age) {
  if (age <= 0 || age > 120) {
    console.log("Invalid data: Age should be between 1 and 120.");
  } else if (age < 18) {
    console.log(
      "Not eligible for vote: You must be at least 18 years old to vote."
    );
  } else {
    console.log("Eligible for vote: You can cast your vote!");
  }
}

voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);
