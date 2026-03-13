import { useSelector } from "react-redux"

 function Checkout(){
     
    const items = useSelector(state=>state.cartslice.items);

    return(
        <div>
          {
            items.map(value=> <div>{value.name}</div>)
          }
        </div>
    )
}

export default  Checkout