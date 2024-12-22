import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const HostVanDetails = () => {

    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans[0]))
    }, [])

    
    if (!currentVan) {
        return <h1>Loading...</h1>
    }
    

  return (
    <div>
        <Link to="/host/vans">Back to all vans</Link>
        <div>
            <img src={currentVan.imageUrl} width={150} />
            <h2>{currentVan.name}</h2>
            <p>{currentVan.price}</p>
            <p>{currentVan.type}</p>
        </div>
    </div>
  )
}

export default HostVanDetails
