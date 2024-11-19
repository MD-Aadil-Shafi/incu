import './App.css'
import { useRef, useState } from "react";

export function add(numbers:string):number {

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
    item.replace(delimiter, ",").replace("\n", ",").replace("\\", ",").replace("n", ",").replace(",", '0')
  ))

  let newSum = temp.reduce((item, acc)=> Number(item) + Number(acc) , 0);
  return newSum;
}

const App: React.FC = () => { 
  
  const ref = useRef<HTMLInputElement>(null);
  const [sum, setSum] = useState(0)

  const handleSum = () =>{
    let val = ref.current?.value;
    console.log('val',val)
    if(val){
      try{
        let temp = add(val);
        setSum(temp)
      }catch(error){
        return alert(error)
      }
    }else{
      setSum(0)
    }

  }
  

  return (
    <div className="container">
      <h1 style={{fontSize:"20px", marginBottom:"0px"}}>String Addition:</h1>
      <h2>Enter your string here</h2>
      <input type="text" ref={ref} placeholder='type here'/>
      <button data-testid="addBtn" onClick={handleSum}>Add</button>

      <section className='message-div'>
        <p>Sum : <span data-testid="result">{sum}</span></p>
      </section>

    </div>
  )
}

export default App