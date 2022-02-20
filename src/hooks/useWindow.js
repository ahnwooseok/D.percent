import React,{ useState,useEffect } from "react";




const getWindow=()=>{
  return {

    width: window.innerWidth,
    height: window.innerHeight
  }
}

const useWindow=()=>{
  const [windowHook,setWindowHook]=useState(getWindow());
  const [maxWidth400,setMaxWidth400]=useState(false);
  const resizeWindow=()=>{
    setWindowHook(getWindow());
    if(getWindow().width<=800){
      setMaxWidth400(true);
    }else{
      setMaxWidth400(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("resize",resizeWindow);
  },[])





  return {
    windowDimention: windowHook,
    maxWidth400
  };
}
export default useWindow;