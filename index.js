// Write your code in this file!
function scuberGreetingForFeet(num) {
  if(num < 400){
    return "This one is on me!"
  }
  else if(num > 2000 && num < 2500){
    return "I will gladly take your thirty bucks."
  }
  else{
    return "No can do."
  }

}

function ternaryCheckCity(string){
   x = (string === "NYC" ? "Ok, sounds good." : "No go.");
   return x

}

const switchOnCharmFromTip = (tip) => {
  let x
  switch (tip){
    case "generous":
      x = "Thank you so much.";
       break;
    case "not as generous":
      x = "Thank you.";
      break;
    default:
      x = "Bye."
  }
  return x
}
