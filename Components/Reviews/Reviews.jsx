import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import reviewImage from '../../src/assets/customer-top.png';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    // console.log(reviews);
    return (
        <div>
            <div className='text-center'>
            {/* Review Image */}
            <img src={reviewImage} alt="It is review image" className='mx-auto w-[245px]'/>
                <h2 className="my-5 text-3xl md:text-4xl font-extrabold  md:my-10">What our customers are sayings</h2>
                <p className='lg:mx-auto lg:w-[700px]'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>

            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review.id}>
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Reviews;