import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-10 mb-10">
                <div className="collapse-title text-3xl font-medium">
                   <h2 className='text-emerald-500 mb-4 bg-slate-300 h-16 p-3 rounded-lg'> Blog</h2>
                    
                    <p className='text-2xl'>1.How does react works?</p>
                </div>
                <div className="collapse-content"> 
                    
                    <h2 className='text-xl'>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</h2>
                </div>
                
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-10 mb-10">
                <div className="collapse-title text-3xl font-medium">
                <p className='text-2xl'>2.What is the difference between props and state?</p>    
                </div>
                <div className="collapse-content"> 
                    
                    <h2 className='text-xl'>1.props:The Data is passed from one component to another.  1.state:The Data is passed within the component only..</h2>
                    <p className='text-xl'>2.props:It is Immutable (cannot be modified).  2.state: It is Mutable ( can be modified).</p>
                    <p className='text-xl'>3.props: Props can be used with state and functional components.	
                        3.state : State can be used only with the state components/class component (Before 16.0).</p>
                    <p className='text-xl'>4.props : Props are read-only.	4.state : State is both read and write.</p>
                </div>
                
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-10 mb-10">
                <div className="collapse-title text-3xl font-medium">
                <p className='text-2xl'>3.What does useEffect do?</p>    
                </div>
                <div className="collapse-content"> 
                    
                    <h2 className='text-xl'>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</h2>
                    
                </div>
                
                </div>
            </div>
            
        </div>
    );
};

export default Blog;