import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const { userName, review: text, user_photoURL } = review;

    return (
        <div
            className="
                w-[330px] md:w-[380px] lg:w-[420px]
                p-7 md:p-8
                bg-white rounded-2xl shadow-lg
                transition-all duration-300 
                swiper-slide-active:scale-100 
                swiper-slide-active:opacity-100
                swiper-slide-next:scale-90 swiper-slide-next:opacity-40
                swiper-slide-prev:scale-90 swiper-slide-prev:opacity-40
            "
        >
            {/* Quote icon */}
            <FaQuoteLeft className="text-accent text-3xl mb-4" />

            {/* Review text */}
            <p className="text-secondary leading-relaxed mb-4">{text}</p>

            {/* Divider */}
            <div className="border-t border-dashed border-gray-300 my-4"></div>

            {/* Reviewer info */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary overflow-hidden">
                    <img src={user_photoURL} alt="Reviewer" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="font-bold text-primary text-lg">{userName}</h3>
                    <p className="text-sm text-gray-400">Senior Product Designer</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;



// import React from 'react';
// import { FaQuoteLeft } from 'react-icons/fa';

// const ReviewCard = ({ review }) => {
//     const { userName, review: testimonial, user_photoURL } = review;
//     return (
//         <div className="mt-5 max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-200 md:mt-10">
//             {/* Quote Icon */}
//             <FaQuoteLeft className="text-primary text-2xl mb-4" />

//             {/* Review Text */}
//             <p className="mb-4">
//                 {testimonial}
//             </p>

//             {/* Divider */}
//             <div className="border-t border-dashed border-gray-300 my-4"></div>

//             {/* Profile */}
//             <div className="flex items-center gap-4">
//                 <div className="w-10 h-10 rounded-full bg-primary">
//                     <img src={user_photoURL} alt="It is reviwer image" className='rounded-full'/>
//                 </div>
//                 <div>
//                     <h3 className="font-semibold text-lg">{userName}</h3>
//                     <p className="text-sm text-gray-500">Senior Product Designer</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ReviewCard;