import {removeCar} from "../store";
import {useDispatch, useSelector} from "react-redux";
import CarValue from "./CarValue";

function CarList(){
    const dispatch=useDispatch()
    const {carsList,name}=useSelector(({createdCar,cars:{carList,searchterm}})=>{
        const filteredList= carList.filter((car)=>{
         return car.name.toLowerCase().includes(searchterm.toLowerCase())
        })
        return{
           carsList: filteredList,
            name:createdCar.carName
        }
    })
    const totalCost=carsList.reduce((acc,car)=>{
        return acc+car.cost
    },0)
    const handleClick=(id)=>{
        dispatch(removeCar(id))
    }
    const renderedCars=carsList.map((car)=>{
        const bold=name&&car.name.toLowerCase().includes(name.toLowerCase())
        return<div key={car.id} className={`panel ${bold&&'bold'}`}>
            <p>{car.name} - ${car.cost}</p>
            <button className='button is-danger' onClick={()=>handleClick(car.id)}>Delete</button>
        </div>
    })
    return<div className='car-list'>{renderedCars}
        <hr/>
        <CarValue totalCost={totalCost}></CarValue>
    </div>
}
export default CarList;