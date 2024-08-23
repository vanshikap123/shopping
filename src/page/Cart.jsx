import { useContext } from "react";
import Cartcontext from "../context/Cartcontext";
const Cart=() =>{
  let ctx= useContext(Cartcontext)
  console.log(ctx.cartArr)

  const handleremove=(ans)=>{
  
  ctx.removeFromecart(ans)
  }
  const handleincrement=(ans)=>{
 ctx.increment(ans)
  }
  const handledecrement=(ans)=>{
ctx.decrement(ans)
  }
  return(

      <div >
    <table class="table m-auto w-75 mt-5 border border-black table-responsive-lg">

<tbody>
 
{ctx.cartArr.map((ele)=>{
  return <tr className='align-middle'>
  <th scope="row"></th>
  <td><img src={ele.thumbnail} className='top' alt="" /></td>
  <td>{ele.title}</td>
  <td>{ele.price}</td>
  <td><button onClick={()=>handleincrement(ele)} className='btn btn-danger'>+</button> {ele.quantity} <button onClick={()=>handledecrement(ele)} className='btn btn-danger'>-</button></td>
  <td><button onClick={()=>handleremove(ele)} className='btn btn-info'>Remove</button></td>
</tr>

})}
 
</tbody>
</table>
      </div>
  )
  }
  export default Cart;