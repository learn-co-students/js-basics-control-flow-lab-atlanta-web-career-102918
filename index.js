// Write your code in this file!
function scuberGreetingForFeet(somenumber) {
  if (somenumber < 401) {
    return 'This one is on me!'
  }
  else if ((somenumber > 2000) && (somenumber < 2501) ){
    return 'I will gladly take your thirty bucks.'
  }
  else
    return 'No can do.'
}

function ternaryCheckCity(city) {
  return (city === "NYC" ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip (expression) {
  switch(expression) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.'
      break;
  }
}
