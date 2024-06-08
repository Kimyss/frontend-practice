import { useState } from "react";
import EffectSummary from "./EffectSummary";

function EffectContainer() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
    <button type="button" onClick={()=>{setIsVisible(false)}}>사라져</button>
    <button type="button" onClick={()=>{setIsVisible(true)}}>나타나</button>
    {isVisible ? <EffectSummary/> : null}
    
    </>
  );
};

export default EffectContainer;