const sentence = ["sense.", "make", "all", "will", "This"];

function reverseArray(sentence) {
    var ret = new Array;
    for(var i = sentence.length-1; i >= 0; i--) {
        ret.push(sentence[i]);
    }
    return ret;
}
console.log(reverseArray(sentence));



// 2ci
const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];
function greetAliens() {
    console.log(`Oh powerful ${aliens[0]}, we humans offer our unconditional surrender!`)
    console.log(`Oh powerful ${aliens[1]}, we humans offer our unconditional surrender!`)
    console.log(`Oh powerful ${aliens[2]}, we humans offer our unconditional surrender!`)
    console.log(`Oh powerful ${aliens[3]}, we humans offer our unconditional surrender!`)

}


console.log(greetAliens(aliens));


// 3cu
const coolStuff = [
    'gameboys',
    'skateboards',
    'backwards hats',
    'my room',
    'temporary tattoos'
  ];
  const myStuff = [
    'sweaters',
    'skateboards',
    'family-night',
    'my room',
  ];

  function justCoolStuff(arr1,arr2){
    let arr3 =[]
    for(let u =0;u<arr1.length; u++){
        for (let i=0;i<arr2.length;i++){
            if(arr1[u] == arr2[i]){
                arr3.push(arr1[u])
            }
        }
    }
    console.log(arr3)
  }
  
  console.log(justCoolStuff(myStuff, coolStuff));

//   4cu

const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
  ];
  const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant' },
    { name: 'bun', source: 'plant' }
  ];
  function isTheDinnerVegan(arr){

    for(let i=0;i<arr.length;i++){
        if((arr[i].source == 'meat')){
            return false
        }
        else{
            return true
        }
    }
  }
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));
  