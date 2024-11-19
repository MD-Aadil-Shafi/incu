
export function add(numbers:string):any {
  if(!numbers) return 0;

  //for negative values in numbers string handling.
  const negatives = numbers.split(",").filter((x) => Number(x) < 0);
  if(negatives.length){
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`)
  }

  // for commas handling,  new line \n handling & supporting delimiters
  let delimiter = ","
  if(numbers.startsWith('//')){
    delimiter = numbers[2];
    numbers = numbers.replace("//", "")
  }
  let temp = numbers.split("").map((item)=>(
    item.replace(delimiter, ",").replace("\n", ",").replace(",", '0')
  ))

  let newSum = temp.reduce((item, acc)=> Number(item) + Number(acc) , 0);
  return newSum;
}

const App = () => { 
  // console.log(add("//;\n1;2"))
  console.log(add("1,-2,3,-4"))

  return (
    <div>App</div>
  )
}

export default App