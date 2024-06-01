import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'


const VanDetails = () => {
    const params = useParams()
    const vanId = params.id
    const [vanData, setVanData] = useState({})
    const [loading, setLoading] = useState(false)
    // console.log(params.id, typeof params);



    useEffect(() => {

        fetch(`/api/vans/${vanId}`)
            .then((response) => response.json())
            .then((data) => setVanData(data.vans))
            .catch((err) => console.log(err))



    }, [vanId])

    // console.log(vanData);



    const vansElement = (
        <div key={vanData.id} className='border p-2 max-w-[400px] h-[500px]  max-h-[600px]   hover:shadow-gray-500 hover:shadow-lg'>

            <Link  >
                <h2 className='text-center'> {vanData.name} </h2>
                <div>
                    <img src={vanData.imageUrl} className='rounded-lg' alt="" height={150} width={150} />
                </div>
                <h3>{vanData.description}</h3>
                <div className='text-center mt-10'>
                    <p> {`$ ${vanData.price} / day`} </p>
                    <p> {vanData.type} </p>
                </div>
            </Link>
        </div>
    );




    return (
        <div>
            <h1>Van Details page</h1>
            <div className='flex justify-center'>

                {vansElement}
            </div>
        </div>
    )
}


export default VanDetails
