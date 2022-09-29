import React from 'react';

const Sidebar = (props) => {
    // console.log(props)

    const {count,addBreak} = props
    // console.log(props)

    let preTime = 0

    for(const list of count){
        preTime = preTime + list.time

    }
   
    

    return (
        <div>
            <h2 className='text-white text-2xl mt-9'>Exercise Details</h2>

            <div className='bg-slate-200 w-80 h-16 text-xl mx-auto rounded-lg mt-5 p-2'>
                
                <p>Exercise time : {preTime}sec</p>
                
            </div>
            <div className='bg-slate-200 w-80 h-16 text-xl mx-auto rounded-lg mt-5 p-2'>
                <p>Break time: {addBreak}</p>
                    
            </div>
            <button  className="btn btn-secondary mt-8">Activity Completed</button>
            
        </div>
    );
};

export default Sidebar;