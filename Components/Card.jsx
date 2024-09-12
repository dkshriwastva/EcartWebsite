import React, { useContext } from "react";
import {ThemeStore} from  "./ThemeContext";
import {addCart} from "../Store/CartSlice" ;
import {useDispatch} from "react-redux";

const Card = ({productObj}) => {
   let dispatch= useDispatch();
    let {thumbnail,title,price,category, rating}=productObj;

    let {theme}=useContext(ThemeStore);

    let handleAddCart = (event) => {
      event.stopPropagation()
      dispatch(addCart(productObj))
    }  

    let darkTheme ="card bg-blue-500 w-96 shadow-xl m-4";
    let lightTheme ="card bg-orange-200 w-96 shadow-xl m-4 text-black"
  return (
    <div>
      <div className={theme=="light"? lightTheme:darkTheme}>
        <figure>
          <img
            className="bg-slate-200 rounded-3xl mt-3"
            src={thumbnail}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/*<p>If a dog chews shoes whose shoes does he choose?</p>*/}

          <div className="card-actions justify-end">
            <p>Category: {category}</p>
            <p>Price: ${price}</p>
            <p>rating: {rating}</p>
            
            <button className="btn bg-slate-950"onClick={handleAddCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
