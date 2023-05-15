function squareOfWordLength(str){
    var wordLength=str.length;
    console.log(`Length of Word is ==> ${wordLength}`);

    console.log(`Given String is ${str}`);
    var squareOfWord=wordLength*wordLength;
    console.log(`Square of Word Length ==> ${squareOfWord}`);
    console.log(`-------------------------------------------------------`);


}
squareOfWordLength("Javascript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");



function developer(){
    
    var developer="I am Angular Deveoper";
    var lengthOfStr=developer.length;
    console.log(`Length of String ==> ${lengthOfStr}`);

    var wordOfStr=developer.split(" ");
    var splitStrLength=wordOfStr.length;

    console.log(`Available of Words in String ==> ${splitStrLength}`);

    var division=lengthOfStr / splitStrLength;
    console.log(`Division of string length and total words is ==> ${division}`);

    var multipleStr=lengthOfStr * splitStrLength;
    console.log(`Multiplication of string length and total words is ==> ${multipleStr}`);

}
developer();