function stringHandsOn() {
  //Step 1
  var givenString = "    Hey you are doing good, keep it up     ";
  console.log(givenString);

  //Step 2
  var givenStringLength = givenString.length;
  console.log("Total char At Given String is: ", givenStringLength);

  //Step 3
  var leadingspace = givenString.trimStart();
  console.log("Remove Starting space:", leadingspace);

  var leadingspace = givenString.trimEnd();
  console.log("Remove End space:", leadingspace);

  //Step 4
  var leadingspace1 = givenString.trim();
  console.log("Remove All space:", leadingspace1);

  var removeSpace = leadingspace1.length;
  console.log("After Remove spaces Total Char is: ", removeSpace);

  console.log("Trimmed total spaces : ", givenStringLength - removeSpace);

  //Step 5
  var indexOfFirstChar = givenString.trim().charAt(0);
  var indexOfLastChar = leadingspace1.trim().charAt(leadingspace1.length - 1);
  console.log(
    "First Character: ",
    indexOfFirstChar,
    "   Last Character: ",
    indexOfLastChar
  );

  //Step 6
  var spliteResult = leadingspace.trim().split(" ");
  console.log(`Total Words in String is: ${spliteResult.length}`);

  //Step 7
  var indexGood = givenString.indexOf("good");
  console.log(`Index of Good is:  ${indexGood}`);

  //Step 8
  var subString = givenString.substring(22);
  var sliceString = givenString.slice(22);
  console.log(`String Start from 22 is:   ${subString} ${sliceString}`);

  //Step 9
  var checkString = givenString.includes("up");
  console.log(`Word is Available:   ${checkString}`);

  //Step 10

  var checkStartStr=leadingspace.trim().startsWith("Hey");
  console.log(`Checking Start String: ${checkStartStr}`);
}
stringHandsOn();
