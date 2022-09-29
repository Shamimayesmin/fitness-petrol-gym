import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const AllCards = () => {
    const [items,setItems] = useState([])

    useEffect(()=>{
        // console.log('item in fetch')
        fetch('product.json')  
        .then(res =>res.json())
        .then(data =>setItems(data))
    },[])
    return (
        <div className='flex mt-5 gap-4'>
            <div className="w-3/4 bg-slate-300 h-full gird grid-cols-3 rounded-lg ">
                <h1 className='text-2xl font-bold mt-3'>Select today’s exercis</h1>
                
                {/* <SingleCard itemws={items}></SingleCard> */}
               
                <div className='grid grid-cols-3 gap-4 p-5 mt-5'>
                        
                {
                    items?.length&&items.map(card=> <SingleCard card={card} key={card.id}></SingleCard>)
                }
                </div>
                
            </div>
            <div className="w-1/4 bg-slate-500 rounded-lg">
                
                <div className="flex items-center mt-4 ml-5">
                    <img className="w-20 rounded-full" src="https://placeimg.com/192/192/people" alt=''/>
                    <div className=''>
                        <strong>Alina Wishton</strong>
                        <p>Japan,Tokyo</p>
                    </div>
                    </div>
            </div>
            
        </div>
    );
};

export default AllCards;