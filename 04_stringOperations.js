function stringHandsOn() {
  var givenString = "    Hey you are doing good, keep it up     ";
  console.log(givenString);

  var givenStringLength = givenString.length;
  console.log("Total char At Given String is: ", givenStringLength);

  var leadingspace = givenString.trimStart();
  console.log("Remove Starting space:", leadingspace);

  var leadingspace = givenString.trimEnd();
  console.log("Remove End space:", leadingspace);

  var leadingspace1 = givenString.trim();
  console.log("Remove All space:", leadingspace1);

  var removeSpace = leadingspace1.length;
  console.log("After Remove spaces Total Char is: ",removeSpace);

  console.log("Trimmed total spaces : ", givenStringLength-removeSpace);

  var indexOfFirstChar =  givenString.trim().charAt(0);
  var indexOfLastChar =  leadingspace1.trim().charAt(leadingspace1.length-1);
  console.log("First Character: ",indexOfFirstChar, "   Last Character: ", indexOfLastChar);
}
stringHandsOn();

