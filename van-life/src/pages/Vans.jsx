import { useEffect, useState } from "react"
import "./Vans.css"


export default function Vans() {

    const [vanData,setVanData] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => {
            setVanData(data.vans)
        })
    }, [])

    const vanElements = vanData.map(van => (
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} />
            <div className="van-info">
                <h4>{van.name}</h4>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    ))
    


    return (
        <div className="van-list-container">
        <div className="van-list">
            {vanElements}
        </div>
    </div>
    )
};