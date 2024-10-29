"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import ImageCarousel from "../GalleryCarousel";

const Gallery = () => {
  return (
    <div id="gallery-section">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24">
        <div className="text-center">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h2 className="text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51">
              Nossa galeria
            </h2>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-3xl lg:text-5xl font-semibold text-black">
              Alguns de nossos principais pratos.
            </h3>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6">
          <div className="col-span-6 flex justify-center overflow-hidden rounded-3xl">
            <Image
              src="/images/Gallery/francesinha.png"
              alt="francesinha"
              width={1000}
              height={805}
              className="inner-img"
            />
          </div>

          <div className="col-span-6 flex justify-center">
            <div className="grid grid-rows-1 grid-flow-row gap-4">
              <div className="row-span-1 overflow-hidden rounded-3xl">
                <Image
                  src="/images/Gallery/gambas.jpg"
                  alt="gambas"
                  width={700}
                  height={405}
                  className="inner-img"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/Gallery/tripas.jpg"
                    alt="tripas"
                    width={500}
                    height={405}
                    className="inner-img"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/Gallery/bife.jpg"
                    alt="bife"
                    width={500}
                    height={405}
                    className="inner-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6">
          <div className="col-span-6 flex justify-center overflow-hidden rounded-3xl">
            <Image
              src="/images/Gallery/camarao_e_bife.jpg"
              alt="francesinha"
              width={1000}
              height={805}
              className="inner-img"
            />
          </div>

          <div className="col-span-6 flex justify-center">
            <div className="grid grid-rows-1 grid-flow-row gap-4">
              <div className="row-span-1 overflow-hidden rounded-3xl">
                <Image
                  src="/images/Gallery/camarao.jpg"
                  alt="gambas"
                  width={700}
                  height={405}
                  className="inner-img"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/Gallery/bacalhau.jpg"
                    alt="tripas"
                    width={500}
                    height={405}
                    className="inner-img"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/Gallery/picanha.jpg"
                    alt="bife"
                    width={500}
                    height={405}
                    className="inner-img"
                  />{" "}
                </div>
                <Image
                  src="/images/Gallery/travessa-gambas.png"
                  alt="gambas"
                  width={300}
                  height={405}
                  className="inner-img"
                />
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-3xl lg:text-5xl font-semibold text-black">
          Sobremesas
        </h3>
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Gallery;
