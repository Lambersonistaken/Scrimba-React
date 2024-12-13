import { useEffect, useState } from "react"
import "./Vans.css"
import { Link } from "react-router-dom";


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
        <Link key={van.id} to={`/vans/${van.id}`}>
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} />
            <div className="van-info">
                <h4>{van.name}</h4>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
        </Link>
        
    ))
    


    return (
        <div className="van-list-container">
            <h1>Explore our Van options</h1>
        <div className="van-list">
            {vanElements}
        </div>
    </div>
    )
};