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

    const vans = vanData.map((item) => {
        return (
            <div key={item.id} className="van-card">
                <img className="van-img" src={item.imageUrl} alt="" />
                <div className="title-con">
                <h4>{item.name}</h4>
                <p>{item.price}/$</p>
                </div>
                <div className="type-con">
                    <p>{item.type}</p>
                </div>
                
            </div>
        )
    })
    


    return (
        <div className="vans-page">
            <div className="van-container">
            {vans}
            </div>
            
        </div>
    )
};