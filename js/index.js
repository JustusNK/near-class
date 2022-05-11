
var cars =['Toyota', 'Benz', 'Subaru'];
cars.pop()

//take away iterate over Map using traditional loop. 

function myFunction(p1, p2){
  return p1*p2;
}


const response = myFunction(300, 400)
console.log(`My response is ${response}`)

let myFunction2 = (a,b)=> a*b;

console.log(`my result is ${myFunction2(250*30)}`)


//Array Methods
//pop

var cars =['Toyota', 'Benz', 'Subaru'];
cars.pop()

var courses = ['Near', 'Javascript', 'Html']

courses.push('Python')

// spread operator

let boys = ['charles', 'kenn', 'walter'];
let girls= ['joy', 'Linda']

students = [...boys, ...girls]



// create sets

let newSet = new Set('a', 'b', 'c', 'd')

//add to set
newSet.add('d')

//Maps

let fruitsMap = new Map(['apples', 500], ['grapes', 200])


// practice
// -->loops
// -->arrays
// -->DOM
// -->function

let carList = ()=>{

  const cars = ['Volvo', 'Benz', 'Toyota', 'BMW']
  unListElem = document.getElementById('car-types')

  cars.forEach((car)=>{
      const elem = car
      let node = document.createElement('li');
      let textNode = document.textNode(elem)
      node.appendChild(textNode)
      unListElem.appendChild(node)


  })
}


let myFunc = function(resolve, reject){
  setTimeout(resolve('I love you!'), 3000)
}

let myProm = new Promise(myFunc())

myProm.then(function(value){
  console.log(value)
}).catch((err)=>{
  alert('An error occurred')
})


let source = document.getElementById('source');
let results = document.getElementById('result')

let inputHandler = (e)=>{
  results.innerHTML = e.target.value
}


source.addEventListener('input', inputHandler)


