import React, { useEffect, useState } from "react";
import "../Dashboard/dashboard.css";
import Navbar from "../Navbar/Navbar";
// import Resources from "../Resources/Resources"
// import ResourceCard from "../Resources/ResourceCard"
// import ResourceForm from "../Resources/ResourceForm"

import ResourceList from "../Resources/ResourceList";
// import Stratagem from "../Stratagem";


const Dashboard = (props) => {
  

  

  const clearUser = () => {
    sessionStorage.clear();
    localStorage.clear();
    props.history.push("/Login")
  };

  return (
    <div>
 
      <Navbar clearUser={clearUser} />
      {/* <Resources /> */}
      
     
        
      
      
  
      </div>
  )
};

export default Dashboard;
