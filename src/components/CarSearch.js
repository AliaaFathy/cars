import {useDispatch, useSelector} from "react-redux";
import {changeSearch} from "../store";

function CarSearch(){
    const dispatch=useDispatch()
    const searchTerm=useSelector((state)=>{
        return state.cars.searchterm
    })
    const cars=useSelector((state)=>{
        return state.cars.carList
    })
    const handleChange=(event)=>{
        dispatch(changeSearch(event.target.value))

    }
    return<div className='list-header'>
        <h3 className='title is-3'>My cars</h3>
        <div className='search field is-horizontal'>
            <label className='label'>Search</label>
            <input className='input is-expanded' value={searchTerm} onChange={handleChange}/>
        </div>
    </div>
}
export default CarSearch;