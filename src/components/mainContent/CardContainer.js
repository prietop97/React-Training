import React,{useEffect, useState} from "react";
import NPOTD from "./NPOTD"
import Axios from "axios";
import Info from "./Info"


function CardContainer(props){
    const [data,setData] = useState({})
    useEffect(()=>{
        Axios.get(`https://api.nasa.gov/planetary/apod?api_key=Brv8R32iF4aA34xj08ELZqnHKdLLcFysbmGsqVjp&date=${props.datePicker}`)
        .then(response=>{
            console.log(response.data)
            setData(response.data)
        })
        .catch(error=>{
            console.log("NO PICTURE TODAY")
        })
    },[props.datePicker])




    return(
        <div>
        <NPOTD imgUrl={data.hdurl}/>
        <Info date={data.date} info={data.explanation} title={data.title} />
        </div>
    )
}

export default CardContainer;