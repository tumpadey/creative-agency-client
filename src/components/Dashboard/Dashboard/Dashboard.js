import React from 'react';
import mainHeader from '../../../images/logos/mainHeader.png';
import Sidebar from '../Sidebar/Sidebar';



const Dashboard = () => {
    return (
       <section>
           <div className="row">
               <div className="col-md-2">
                  <Sidebar></Sidebar>
                 </div>
                 <div className="col-md-8">
                     <img src ={mainHeader} alt="" className="img-fluid" />
                 </div>
           </div>
       </section>
    );
};

export default Dashboard;