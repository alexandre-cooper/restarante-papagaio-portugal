"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import StreetView from "../StreetView/StreetView";

const Banner = () => {
  return (
    <div id="home-section" className="bg-lightpink">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                Descubra <br /> o sabor de Portugal.
              </h1>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey lg:text-lg font-normal mb-10 lg:text-start text-center">
                Restaurante e Churrasqueira típica de comida Portuguesa!
              </p>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="md:flex align-middle justify-center lg:justify-start">
                <button className="flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink hover:text-white hover:bg-pink">
                  <Link href="tel:+351222084855">Reservar já</Link>
                </button>
              </div>
            </Fade>
          </div>

          <div className="col-span-6 flex justify-center relative mt-5">
            <StreetView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
