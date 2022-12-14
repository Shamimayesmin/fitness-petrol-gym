import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = (props) => {
    // console.log(props)

    // const [toast,setToast] = useState('')

    // const [time, setTime] = useState([])


   

    const {count,addBreak} = props
    // console.log(props)

    let preTime = 0

    for(const list of count){
        preTime = preTime + list.time

    }
   
    
    // useEffect(() => {
    //     localStorage.setItem('second', JSON.stringify(time));
    //   }, [time])


    const hanldleCompleteBtn = () =>{
        toast("Wow Activity Completed!");
        
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
            {/* <Tost toast={toast}></Tost> toast={toast} */}
            <button  onClick={ hanldleCompleteBtn } className="btn btn-secondary mt-8 mb-8">Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Sidebar;