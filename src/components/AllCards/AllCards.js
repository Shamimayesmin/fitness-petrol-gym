import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';
import SingleCard from '../SingleCard/SingleCard';

const AllCards = () => {
    const [items,setItems] = useState([])

    const [count, setCount] = useState([])

    const [addBreak,setAddBreak] = useState(0)

    useEffect(()=>{
        fetch('product.json')  
        .then(res =>res.json())
        .then(data =>setItems(data))
        

    },[])


    const handleAddBtn = (click)=>{
        // console.log(click)
        setCount([...count,click])
    }

    


    // useEffect(() => {
    //     // const data = localStorage.getItem('secend')
    //     // console.log(data)
    //     const items = localStorage.getItem('secend');
    //         if (items) {
    //             setAddBreak(items);
    //         }
        
        
    // //  localStorage.setItem('secend', JSON.stringify(addBreak));
       
    //     // console.log(time)
        


        
    //   }, []);
    // useEffect(() => {
    //     const items = localStorage.getItem('secend');
    //         if (items) {
    //             setAddBreak(items);
    //         }
        
          
        
    //  localStorage.setItem('secend', JSON.stringify(addBreak));
       
    //     // console.log(time)
        


        
    //   }, [addBreak]);

    

      const addBreakTime = (e) =>{
    
        const items = localStorage.getItem('secend');
            if (items) {
                setAddBreak(items);
            }
        
        localStorage.setItem('secend', JSON.stringify(addBreak));

        // console.log(e)
        setAddBreak(e)

    } 

    return (
        <div className='container flex flex-wrap  lg:flex-nowrap mt-5  gap-4'>
            <div className="sm:w-full lg:w-3/4 bg-slate-300 h-full gird grid-cols-3 rounded-lg ">
                <h1 className='text-2xl font-bold mt-3'>Select today’s exercis</h1>
                
                {/* <SingleCard itemws={items}></SingleCard> */}
               
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 mt-5 '>
                        
                {
                    items?.length&&items.map(card=> <SingleCard card={card} key={card.id} handleAddBtn={handleAddBtn} ></SingleCard>)
                }
                </div>
                
            </div>
            {/* sidebar section */}
            <div className="sm:w-full lg:w-1/4 bg-slate-500 rounded-lg">
                
                <div className="flex items-center mt-4 ml-5 text-white gap-2">
                    <img className="w-20 rounded-full" src="https://placeimg.com/192/192/people" alt=''/>
                    <div className=''>
                        <strong>Alina Wishton</strong>
                        <p>Japan,Tokyo</p>
                    </div>
                </div>

                <div className='flex  justify-center items-center mt-6 bg-slate-200 w-80 h-14 mx-auto rounded-lg gap-5'>
                    <p><span className='text-3xl font-bold'>57</span>kg</p>
                    <p><span className='text-3xl font-bold'>5.4</span>hight</p>
                    <p><span className='text-3xl font-bold'>24</span>yr</p>
                </div>

                <div className='mt-10'>
                    <h2 className='text-white text-2xl font-bold mb-3'>Add A Break </h2>
                    <div className='bg-slate-200 w-80 h-16 text-xl  mx-auto rounded-lg p-2'>
                        <button onClick={()=>addBreakTime("90s")} className='btn btn-primary w-10 mr-5'>90s</button>
                        <button onClick={(e)=>setAddBreak("60s")} className='btn btn-primary w-10 mr-3'>60s</button>
                        <button onClick={(e)=>setAddBreak("49s")} className='btn btn-primary w-10 mr-3'>40s</button>
                        <button onClick={(e)=>setAddBreak("70s")} className='btn btn-primary w-10 mr-3'>70s</button>
                        <button onClick={(e)=>setAddBreak("50s")} className='btn btn-primary w-10'>50s</button>
                    </div>
                </div>
                

                <div className=''>
                    
                <Sidebar addBreak={addBreak}  count={count} ></Sidebar>
                </div>
            </div>
            

            
        </div>

            
    );
};

export default AllCards;