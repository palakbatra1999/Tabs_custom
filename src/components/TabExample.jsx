import React, { useState } from 'react';
import './style.css';

const TabExample = () => {
    const[tab1,settab1] = useState(true);
    const[tab2,settab2] = useState(false);
    const[tab3,settab3] = useState(false);

    const showTab1 =  () =>{
        settab1(true);
        settab2(false);
        settab3(false);

    }

    const showtab2 = () =>{
        settab1(false);
        settab2(true);
        settab3(false);

    }

    const showtab3 = () =>{
        settab1(false);
        settab2(false);
        settab3(true);

    }
      return (
   <>
       <div className='main-div'>

       <div className='tabs'>

                      <div className={tab1 === true ? 'tab active' : 'tab'} onClick={showTab1}>
                      <h2>Tab 1</h2>
                      </div>
                      <div className={tab2 === true ? 'tab active' : 'tab'} onClick={showtab2}>
                      <h2>Tab 2</h2>
                  </div>
                      <div className={tab3 === true ? 'tab active' : 'tab'} onClick={showtab3}>
                      <h2>Tab 3</h2>
                  </div>


       </div>

       <div className='contents'>
       
       {
                          tab1 && <div className='contents1'>
                              <h3>Content 1</h3>

                              <p>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.    </p>

                          </div>
       }

       

    
       

   {
                          tab2 && <div className='contents2'>
                              <h3>Content 2</h3>
                              <p>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   </p>

                          </div>
   }
      

    
    {
                          tab3 && <div className='contents3'>
                              <h3> Content 3 </h3>
                              <p>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                              </p>

                          </div>
    }
       



    </div>

       </div>

       
   </>
  )
}

export default TabExample
