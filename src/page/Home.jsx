import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cartcontext from '../context/Cartcontext';
import SearchContext from '../context/SearchContext';
import CatogrieArr from '../page/Catogrie';

const Home = (props) => {
  const [currentPage, setcurrentPage] = useState(1);
  let itemPerPage = 8;
  let lastIndex = currentPage * itemPerPage
  let firstIndex = lastIndex - itemPerPage;


  let ctx = useContext(Cartcontext)
  console.log(ctx)
  let ctx1 = useContext(SearchContext)
  console.log(ctx1.search)
  const [item, setitem] = useState([]);
  const [products, setproducts] = useState([]);

  let noOfButton = Math.ceil(products.length / itemPerPage)

  let buttonArr = [...Array(noOfButton + 1).keys()].slice(1)
  console.log(buttonArr)

  let filteredProducts = item.filter((ele) => ele.title.toLowerCase().includes(ctx1.search))
  console.log(filteredProducts)
  let slicedArr = filteredProducts.slice(firstIndex, lastIndex)
  console.log(slicedArr)

  async function fetchData() {
    let res = await fetch("https://dummyjson.com/products?skip=0&limit=100")
    let data = await res.json()
 
    setitem(data.products)
    setproducts(data.products)

  }
  useEffect(() => {
    fetchData()
  },[])
  const handlecart = (ans) => {
    let obj = {
      ...ans,
      quantity: 1
    }
    let itemExists = ctx.cartArr.find((ele) => ele.id === obj.id)
    if (!itemExists) {
      ctx.setcartArr([...ctx.cartArr, obj])
    }

  }
  const handlecatogrie = (ans) => {
    console.log(ans)
    if (ans === 'All') {
      setitem(products)
    }
    else {
      let filterarr = products.filter((ele) => ele.category === ans)
      setitem(filterarr)
    }
  }
  const handleIncrement = () => {

    if (currentPage < buttonArr.length) {
      setcurrentPage(currentPage + 1)
    }

  }
  const handleDecrement = () => {

    if (currentPage > 1) {
      setcurrentPage(currentPage - 1)
    }

  }
  return (

    <div className='row'>
     
      <div className={ctx1.categoryClicked===true?'col-2 sidebar active':'col-2 sidebar'}>
        <h4 className='text-center mt-5 bg-dark ms-2 p-2' style={{color:'white'}}>Category</h4>
        <ul className="list-group ms-2  d-flex hoveritem text-center">
          {CatogrieArr.map((ele, index) => {
            return <li  key={index} onClick={() => handlecatogrie(ele)} className={index===0?"list-group-item liList active1":"list-group-item liList "}>{ele}</li>
          })}

        </ul>
      </div>
      <div className="col-md-10 ">
    

          <div className='row d-flex justify-content-center m-auto gap-4 mt-5'>
            {slicedArr.map((ele) => {
              return <div className="card p-2 border border-dark border-1 bg-black text-center text-white  hovercard" style={{ width: '18rem' }}>
                <img src={ele.thumbnail} className="card-img-top img bg-white" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{ele.title}</h5>
                  <h5 className="card-title fs-6">Price : Rs.{ele.price}</h5>
                  <div className='d-flex'>
                   <button className='btn1'> <Link to="/single" state={ele}>Shopitem</Link></button>
                  <button onClick={() => handlecart(ele)} className='btn1 ms-4'>Add to Cart</button></div>
                </div>
              </div>

            })}

          </div>
          <nav aria-label="Page navigation example ">
            <ul className="pagination flex-wrap my-5 cb ">
              <li onClick={handleDecrement} className="page-item "><Link className="page-link" href="#">Previous</Link></li>
              {buttonArr.map((ele) => {
                return <li onClick={() => setcurrentPage(ele)} className={currentPage===ele?"page-item active":"page-item"}><Link class="page-link" to="#">{ele}</Link></li>
              })}

              <li onClick={handleIncrement} className="page-item"><Link className="page-link" to="#">Next</Link></li>
            </ul>
          </nav>
       
      </div>
    </div>
  
  )
}
export default Home;