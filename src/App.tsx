const App = () => {

  function add(numbers:string):number {
    if(!numbers) return 0;
    //for commas handling
    let temp = numbers.split(',').reduce((item, acc)=> Number(item) + Number(acc), 0);
    return temp;
  }
  console.log(add('1, 1, 2'))

  return (
    <div>App</div>
  )
}

export default App