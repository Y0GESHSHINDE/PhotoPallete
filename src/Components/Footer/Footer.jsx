import React from 'react';

function Footer() {
   return (
      <div className=' bg-dark p-0 m-0' >
         <div className="row m-0">
            <div className="col">
               <div className="row d-flex justify-content-evenly text-center mt-3 ">
                  <div className="col-12 col-md-6 text-white ">
                     <p>© 2024 PhotoPallete.pvt</p>
                  </div>
                  <div className="col-12 col-md-6 ">
                    <span className='m-2 text-white' >linkedin</span>
                    <span className='m-2 text-white' >Email</span>
                    <span className='m-2 text-white' >Instagram</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
