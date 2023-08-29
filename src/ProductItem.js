const ProductItem=(props)=>{
    return(
        <div >
             <h5 >{props.title}</h5>
        <div >
        <img src={props.imageUrl} alt="..." />
        <div >
          <p>{props.price}</p>
          {/* <a href="#" class="card-link">{props.price}</a> */}
        </div>
      </div>

      </div>

    )
}
export default ProductItem;