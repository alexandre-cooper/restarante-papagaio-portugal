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
          delay: 1000,
        }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide className="flex items-center justify-center space-x-4">
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-1.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">Cheesecake</h1>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center space-x-4">
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-2.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">Cheesecake</h1>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center space-x-4">
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-3.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">Pudim</h1>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center space-x-4">
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-4.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">Cheesecake</h1>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center space-x-4">
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-5.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">
            Tarte Gelada de Bolacha
          </h1>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center space-x-4">
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-6.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">Cheesecake</h1>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center space-x-4">
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-7.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">Cheesecake</h1>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center space-x-4">
          <div className="flex justify-center overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/sobremesa-8.png"
              alt="francesinha"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">Cheesecake</h1>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center space-x-4">
          <div className="overflow-hidden rounded-full w-64 h-64">
            <Image
              src="/images/Sobremesa/chesse-cake.png"
              alt="cheesecake"
              width={256}
              height={256}
              className="inner-img object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">Cheesecake</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
