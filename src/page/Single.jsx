import { Link, useLocation } from "react-router-dom";

const Single = ()=>{
    const location = useLocation();
    console.log(location.state)
    return(
        <div className="container ">
<div className="row my-5  shadow-lg  ">
    <div className="col-md-6 d-flex justify-content-center m-auto   ">
    <img src={location.state.thumbnail} className="w-75 imgase" alt="" />
    </div>
    <div className="col-md-6 text-center  ">
        <h3 className="mt-4 fs-2 text-success ">{location.state.title}</h3>
        <p className=" p-2  fw-4 "> Description :- {location.state.description}</p>
    <div className="row d-flex justify-content-center m-auto p-3 gap-4 ">
       <div className="col-md-3 bg-black text-white p-4">
        <h5>rating</h5>
        {location.state.rating}
        </div>
       <div className="col-md-3 bg-black text-white p-4">
       <h5>Price</h5>Rs.
        {location.state.price}
       </div>
       <div className="col-md-3 bg-black text-white p-4">
       <h5>Discount</h5>
        {location.state.discountPercentage}%</div>
        </div>
        <div className="row d-flex justify-content-center my-3 m-auto p-3 gap-4  ">
            <div className="col-md-3 bg-black text-white p-4">
                <h5 className="text-truncate">brand</h5>
                <h6 className="text-truncate">{location.state.brand}</h6>
            </div>
            <div className="col-md-3 bg-black text-white p-4">
                <h5>category</h5>
                {location.state.category}
            </div>
            <div className="col-md-3 bg-black text-white p-4">
                <h5>stock</h5>
                {location.state.stock}
            </div>
        
     
       </div>
       </div>
</div>

        </div>
    )
}
export default Single;