import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

interface Review {
    _id: string,
    rating: number,
    image: string,
    details: string,
    name: string
}



const Testimonials: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([])
    const [ setRating] = useState<number>(0)
    useEffect( ()=>{
    fetch('./reviews.json')
    .then(res=> res.json())
    .then((data: Review[])=> setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle heading={'Testimonials'} subHeading={'What Our Client Say'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
            reviews.map(review =>
                <SwiperSlide
                key={review._id}
                >
                 <div className="m-24 flex flex-col items-center mx-24 my-16">
                     <Rating style={{maxWidth: 250}}
                             value={review.rating}
                             onChange={(value: number | undefined)=> {
                                if(value!= undefined){
                                    // @ts-ignore
                                    setRating(value)
                                }
                             }}/>
                 <img className="w-28 rounded-xl my-4" src={review.image} alt="" />
                    <p className="py-8">{review.details}</p>
                    <h3 className="text-2xl text-orange-400">{review.name}</h3>
                 </div>
                </SwiperSlide>
                )
        }
      </Swiper>
            
        </section>
    );
};

export default Testimonials;