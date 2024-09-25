import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Importando estilos do Swiper
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Habilitando os módulos de navegação e paginação

const ImageCarousel = () => {
  return (
    <div className="my-16 px-6">
      <Swiper
        autoplay={{
          delay: 500,
        }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-1.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-2.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-3.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-4.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-5.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-6.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-7.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-8.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
