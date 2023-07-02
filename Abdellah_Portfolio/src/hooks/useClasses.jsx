// this is a custom hooks 
import { useState,useEffect } from "react";
export default function useClasses() {
    let [classes,setclasses] = useState(false);
    // using useEffect to effect side
    useEffect(()=>{
        function handleScroll(){
            if(window.scrollY>0){
                setclasses('left-0 top-0 sh');
            }
            else{
                
                    setclasses('');
            
            }
        }
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[])
  
    return classes;
}
