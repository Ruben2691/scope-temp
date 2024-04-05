/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:


***********************************************************************/

const smoothieMachine = () =>{
  // every thing thats state you want maintained has to be outside of the inner function
  let drink = "I'm having a smoothie with"
  let arr = []
  return (...ingredients) =>{

    for(let i = 0; i < ingredients.length; i++){
      let ingredient = ingredients[i]
      if(i === 0){
        arr.push(ingredient)
      }else if(i > 0){
        arr.push('and')
        arr.push(ingredient)
      }

    }
    return drink + ' ' +  arr.join(' ')
  }
}

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
