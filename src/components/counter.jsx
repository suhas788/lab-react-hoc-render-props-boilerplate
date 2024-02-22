import React,{ useState } from "react";

const HigherorderCounter=(OriginalComponent)=>{
    function NewComponent() {
    const [Count, setCount] = useState(0);
    const handleCount = ()=>{
       setCount(Count+1);
    }
        return (
            <OriginalComponent count={Count} increment={handleCount} />
        )
      }
      return NewComponent
}

export default HigherorderCounter