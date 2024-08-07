// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useEffect } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';

const Offers = () => {


  useEffect(()=>{
    document.title="Offers";
  },[])

  return (
    <div style={{ height: '96vh', overflow: 'hidden', marginTop:"20px" }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{ height: '100%' }}
      >


      <SwiperSlide style={{ height: '100%' }}>
          <img
            src='https://cdn.grabon.in/gograbon/images/merchant/1610000375685.png'
            alt="img1"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
       
        <SwiperSlide style={{ height: '100%' }}>
          <img
            src='https://i.pinimg.com/1200x/05/31/64/05316497eb5d1285cba5e872cf1b678c.jpg'
            alt="img1"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}>
          <img
            src='https://miro.medium.com/v2/resize:fit:800/0*Br1pcGDQSWIStxf_.jpg'
            alt="img1"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}>
          <img
            src='https://media.gettyimages.com/id/1247883341/photo/the-swiggy-logo-is-seen-in-this-illustration-photo-in-warsaw-poland-on-08-march-2023-swiggy.jpg?s=612x612&w=0&k=20&c=unwm7mgHNfXmZneVMnOAcd47z3REmYNe8oAiXaa5PU0='
            alt="img1"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}>
          <img
            src='https://static.toiimg.com/thumb/msid-107933408,imgsize-66532,width-838,resizemode-4/107933408.jpg'
            alt="img2"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}>
          <img
            src='https://blog.swiggy.com/wp-content/uploads/2024/06/food-food2-1000x486.png'
            alt="img2"
            style={{ width: '100%', height: '100%', objectFit: 'fit' }}
          />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default Offers;

