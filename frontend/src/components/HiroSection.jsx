// import React from 'react'
// import { Link } from 'react-scroll'

// const HiroSection = () => {
//   return (
//     <section className='hiro'>
//       <img src="/restaurant.jpg" alt="restaurant" />

//       <div className='item'>
//         <h3>Dream Maker</h3>
//         <div>
//           <h1>Your Personal Dream Maker</h1>
//           <p>we believe that is all about Big Dream and the small details</p>
//           <Link to='contact' spy= {true} smooth= {true} duration={500}> Book Now</Link>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HiroSection




import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>
            We believe that it is all about the BIG DREAMS and the samll
            details!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
