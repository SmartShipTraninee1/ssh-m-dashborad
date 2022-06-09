import React from 'react'

function Footer() {
  return (
    <div
      className=" w-full  flex h-12 border-2 item-center bg-secondary-dark "
      style={{
        //   position: "fixed",
        //   bottom: "0",
        //   color: "black",
        justifyContent: "flex-end",
        //   width:'92.%'
      }}
    >
   
        <a
          className=" mt-4 text-xs text-gray-700 uppercase  dark:text-gray-400  mr-20 font-bold  hover:text-blue-400 " target="_blank"
          href="https://www.smartshipweb.com"
        >
          POWERED BY SMARTSHIPHUB Ltd.@2022
        </a>
 
    </div>
  );
}

export default Footer;
