import React from 'react';

const SingleCard = (props) => {
    // console.log(props.card)
    const{ id,age,img,name,time,description} = props.card
    const newCount = {id,time}
    // console.log(img)
    //props?.card?.
    
    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-2xl">
                <figure><img src={img}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    
                    <p>{description?.length>60?description.slice(0,60)+'...':description}</p>
                    <p className='font-bold'> For Age:{age}</p>
                    <p className='font-bold'>Time required:{time}</p>
                    
                    <div className="card-actions justify-end">
                    
                    <button onClick={() =>props.handleAddBtn(newCount)} className="btn btn-primary">Add To List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;