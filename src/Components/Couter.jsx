import React, {useState, useEffect} from 'react'

function Couter() {
    const [counter, setCount] = useState(0)

    function aumont(){
        setCount(counter+1)
        
    }

    useEffect(() => {
        console.log('effect');
        
      
        
      }, [counter])


  return (
    <div>
        <button onClick={aumont}>{counter} </button>
    </div>
  )
}

export default Couter
