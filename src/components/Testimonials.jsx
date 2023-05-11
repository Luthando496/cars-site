import React from 'react'
import Carousel  from 'react-multi-carousel'



const Testimonials = () => {

    const responsive2 = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className="w-full px-32">

    <Carousel responsive={responsive2}>
    <div className="w-full mx-auto mt-8 text-center flex flex-col items-center">
              <p className="text-xl tracking-[2px] text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id voluptates, saepe distinctio rem aliquam expedita nemo tenetur adipisci ea quaerat vel voluptatum nostrum ab magnam illum minus soluta molestias laudantium. Ullam exercitationem, dolorem officiis sapiente optio aspernatur!
              </p>

              <h2 className="font-bold text-2xl my-4">John Doe</h2>
              <p className="text-sm font-thin my-4">Marketing</p>


              
    </div>

    <div className="w-full mx-auto mt-8 text-center flex flex-col items-center">
              <p className="text-xl tracking-[2px] text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id voluptates, saepe distinctio rem aliquam expedita nemo tenetur adipisci ea quaerat vel voluptatum nostrum ab magnam illum minus soluta molestias laudantium. Ullam exercitationem, dolorem officiis sapiente optio aspernatur!
              </p>

              <h2 className="font-bold text-2xl my-4">Lisa Smith</h2>
              <p className="text-sm font-thin my-4">HR Manager</p>


              
    </div>

    </Carousel>
    

    </div>
  )
}

export default Testimonials