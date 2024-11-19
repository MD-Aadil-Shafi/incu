
export function add(numbers:string):number {
  if(!numbers) return 0;
  //for commas handling and new line \n handling
  let temp = numbers.replace("\n", ",").split(',').reduce((item, acc)=> Number(item) + Number(acc), 0);
  return temp;
}

const App = () => { 
  console.log(add('1, 1, 2'))

  return (
    <div>App</div>
  )
}

export default App