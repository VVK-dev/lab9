import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Outlet } from "react-router";

function CommonLayout(){

    return <div className='flex flex-col '>

      <Header/>
      
      <Outlet/>

      <Footer/>

    </div>

}

export default CommonLayout;