import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const ImageCarousel = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 space-y-4">
      <h3 className="text-3xl lg:text-5xl font-semibold text-black text-center mb-8">
        Sobremesas
      </h3>
      <div className="w-full max-w-xs sm:max-w-md mx-auto">
        <Swiper
          className="w-full"
          autoplay={{
            delay: 2000,
          }}
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
        >
          {[
            {
              src: "/images/Sobremesa/sobremesa-1.png",
              alt: "francesinha",
              title: "Baba de Camelo",
            },
            {
              src: "/images/Sobremesa/sobremesa-2.png",
              alt: "francesinha",
              title: "Musse de Chocolate",
            },
            {
              src: "/images/Sobremesa/sobremesa-3.png",
              alt: "francesinha",
              title: "Pudim",
            },
            {
              src: "/images/Sobremesa/sobremesa-4.png",
              alt: "francesinha",
              title: "Natas do céu",
            },
            {
              src: "/images/Sobremesa/sobremesa-5.png",
              alt: "francesinha",
              title: "Tarte Gelada de Bolacha",
            },
            {
              src: "/images/Sobremesa/sobremesa-6.png",
              alt: "francesinha",
              title: "Laranja",
            },
            {
              src: "/images/Sobremesa/sobremesa-7.png",
              alt: "francesinha",
              title: "Maçã",
            },
            {
              src: "/images/Sobremesa/sobremesa-8.png",
              alt: "francesinha",
              title: "Bolo de bolacha",
            },
            {
              src: "/images/Sobremesa/sobremesa-10.png",
              alt: "cheesecake",
              title: "Cheesecake",
            },
            {
              src: "/images/Sobremesa/sobremesa-9.png",
              alt: "cheesecake",
              title: "Abacaxi",
            },
          ].map((item, index) => (
            <SwiperSlide key={index} className="items-center justify-center">
              <div className=" flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={300}
                  height={300}
                  className="object-cover  rounded-full"
                />
              </div>
              <h1 className="text-xl sm:text-3xl font-bold text-gray-800 text-center mt-2">
                {item.title}
              </h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;
