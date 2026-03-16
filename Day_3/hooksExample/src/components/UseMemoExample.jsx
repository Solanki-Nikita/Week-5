import React, { useMemo, useState } from 'react'

export default function UseMemoExample() {
// useState → manages component state
// useMemo → memoizes expensive calculations


     // state for number
    const [number,setNumber] = useState(0);

    // State for text input
    const [text, setText ] = useState("");

    // expensive calculation wrapped inside useMemo
    const expensiveCalculation = useMemo(() => {
        console.log("Running expensive calculation");
         // This log helps us see when calculation runs

        let result = 0;
        for(let i=0; i< 1000000; i++) {
           result +=i;
        }
        //Final Result
        return result + number;
    },[number]);
  // dependency array
  // calculation runs ONLY when "number" changes

  return (
    <div>
      <h2>UseMemoExapmle</h2>
      {/* Button increases number */}
       <button onClick={() => setNumber(number + 1)}>
        Number {number}
       </button>

       <input value={text} onChange={(e) => setText(e.target.value)}/>
       <p>Result : {expensiveCalculation}</p>
      
    </div>
  );
}
