/*
String Challenge
Have the function StringChallenge(str) take the str parameter being passed and determine if it passes as a valid password that follows the list of constraints:

1. It must have a capital letter.
2. It must contain at least one number.
3. It must contain a punctuation mark or mathematical symbol.
4. It cannot have the word "password" in the string.
5. It must be longer than 7 characters and shorter than 31 characters.

If all the above constraints are met within the string, the your program should return the string true, otherwise your program should return the string false. For example: if str is "apple!M7" then your program should return "true".
*/

function StringChallenge(str) { 

  // code goes here  
  let countcl = 0;
  let countnum = 0;
  let countpass = 0;
  let countleng = 0;

  // Testando Capital Letter
  for (let i = 0 ; i < str.length ; i++){
    punct  = [",","!","@","#","$","%","^","&","*","(",")"];
    if (str[i] !== str[i].toLowerCase()){
      countcl += 1;
    }
  
  // Testando Números
    if(str[i] >= "0" && str[i] <= "9"){
      countnum +=1;
    }

  // Testando pontuação e simbolo matematico
    for (let j = 0 ; j < punct.length ; j++){                                               
      if(str[i] == punct[j]){
        countcl +=1;                                   
      }  
    }
  // Testando se contem password
    if (str.match(/password/i)){
      return false
    }

  // Testando tamanho
    if(str.length <= 7 || str.length >=31){
      return false
    }

  // Finalizando
  if (countnum > 1 && countpass == 0 &&  countleng == 0){
    return true
  } 
  }
}
   
// keep this function call here 
console.log(StringChallenge(readline()));
