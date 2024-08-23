import React, { useState } from 'react'
import Cartcontext from './Cartcontext'
const Cartstate = (props) => {
    const [cartArr,setcartArr]= useState([])
    console.log (cartArr)
    function addtoCart(){

    }
    function removeFromecart(ans){
      console.log(ans)
      let filteredarr = cartArr.filter((ele)=>ele.id!==ans.id)
      console.log(filteredarr)
      setcartArr(filteredarr)

    }
    function increment(ans){
console.log(ans)
let updateobj={
  ...ans,
  quantity:ans.quantity+1,
  price:ans.price+(ans.price/ans.quantity)
}
let index = cartArr.findIndex((ele)=>ele.id===ans.id)
let copyarr=[...cartArr]
copyarr[index]=updateobj
setcartArr(copyarr)
    }
    function decrement(ans){
console.log(ans)
let updateobj={
  ...ans,
  quantity:ans.quantity>1? ans.quantity-1:ans.quantity,
  price:ans.quantity>1? ans.price-(ans.price/ans.quantity):ans.price
}
let index = cartArr.findIndex((ele)=>ele.id===ans.id)
let copyarr=[...cartArr]
copyarr[index]=updateobj
setcartArr(copyarr)
    
    }

    
  return (
    <Cartcontext.Provider value={{cartArr,setcartArr,addtoCart,removeFromecart,increment,decrement}}>
      {props.children}
     
    </Cartcontext.Provider>
  )
}

export default Cartstate;