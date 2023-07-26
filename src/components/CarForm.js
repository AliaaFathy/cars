import {useDispatch, useSelector} from "react-redux";
import {changeName,changeValue,addCar} from "../store";
import {carCreationReducer} from "../store/slices/carCreationSlice";

function CarForm(){
    const dispatch=useDispatch()
    const {name,cost}=useSelector((state)=>{
        return {
            name:state.createdCar.carName ,
            cost:state.createdCar.carValue
        }
    })
    const handleCarName=(event)=>{
        const name=event.target.value;
        dispatch(changeName(name))
        console.log(name)
    }
    const handlePrice=(event)=>{
        const price=parseInt(event.target.value)||0
        console.log(price+10)
        dispatch(changeValue(price))
        console.log(cost)

    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(addCar({name: name,cost: cost}))
    }
    return<div className='car-form panel'>
        <h4 className='subtitle is-3'>Add Car</h4>
        <form  onSubmit={handleSubmit}>
            <div className="field-group">
                <div className='field'>
                <label> Name</label>
                <input className="input is-expanded" value={name} onChange={handleCarName}/>
                </div>
                <div className='field'>
                <label> Value</label>
                <input className="input is-expanded" type='number' value={cost||''} onChange={handlePrice}/>
                </div>
            </div>
            <div className='field'>
            <button className='button is-link'>Submit</button>
            </div>
        </form>
    </div>
}
export default CarForm;