
type FormProps = {
    ref:React.RefObject<HTMLInputElement>,
    handleSum:()=>void;
    sum:number
}

const Form = ({ref, handleSum, sum}:FormProps) => {
  return (
    <div className="container">
      <h1 style={{fontSize:"20px", marginBottom:"0px"}}>String Addition:</h1>
      <h2>Enter your string here</h2>
      <input type="text" ref={ref} placeholder='type here'/>
      <button onClick={handleSum}>Add</button>

      <section className='message-div'>
        <p>Sum : <span data-testid="result">{sum}</span></p>
      </section>

    </div>
  )
}

export default Form