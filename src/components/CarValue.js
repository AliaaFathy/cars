import {useSelector} from "react-redux";

function CarValue({totalCost}){

    return<div className='car-value'>Total Cost: ${totalCost}</div>
}
export default CarValue