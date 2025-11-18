import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import ReviewCard from "./ReviewCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div>
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
          What our customers are saying
        </h2>
        <p className="text-secondary mt-3 max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro.
          Achieve alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        coverflowEffect={{
          rotate: 0,
          stretch: '30%',
          depth: 200,
          modifier: 1,
          scale: 0.85,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        spaceBetween={40}
        navigation={{
          nextEl: ".review-next",
          prevEl: ".review-prev",
        }}
        pagination={{ el: ".review-pagination", clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        className="pb-16"
      >
        {reviews.map((rev) => (
          <SwiperSlide key={rev.id} className="flex justify-center">
            <ReviewCard review={rev} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation & Pagination */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <button className="review-prev btn-white p-4! rounded-full!">
          <FaArrowLeft></FaArrowLeft>
        </button>

        <div className="review-pagination flex gap-2 w-auto!"></div>

        <button className="review-next btn-white p-4! rounded-full!">
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Reviews;


// import React, { use } from 'react';
// import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import ReviewCard from './ReviewCard';
// import reviewImage from '../../src/assets/customer-top.png';

// const Reviews = ({ reviewsPromise }) => {
//     const reviews = use(reviewsPromise);
//     // console.log(reviews);
//     return (
//         <div>
//             <div className='text-center'>
//             {/* Review Image */}
//             <img src={reviewImage} alt="It is review image" className='mx-auto w-[245px]'/>
//                 <h2 className="my-5 text-3xl md:text-4xl font-extrabold  md:my-10">What our customers are sayings</h2>
//                 <p className='lg:mx-auto lg:w-[700px]'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
//             </div>

//             <Swiper
//                 loop={true}
//                 effect={'coverflow'}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 slidesPerView={3}
//                 coverflowEffect={{
//                     rotate: 30,
//                     stretch: '50%',
//                     depth: 200,
//                     modifier: 1,
//                     scale: 0.75,
//                     slideShadows: true,
//                 }}
//                 autoplay={{
//                     delay: 2000,
//                     disableOnInteraction: false,
//                 }}
//                 pagination={true}
//                 modules={[EffectCoverflow, Pagination, Autoplay]}
//                 className="mySwiper"
//             >
//                 {
//                     reviews.map(review => <SwiperSlide key={review.id}>
//                         <ReviewCard review={review}></ReviewCard>
//                     </SwiperSlide>)
//                 }
//             </Swiper>

//         </div>
//     );
// };

// export default Reviews;