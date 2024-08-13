import Link from "next/link";
import Image from "next/image";

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "/images/Footer/facebook.svg",
    link: "https://www.facebook.com/share/wYZGya3BGJcPak13/?mibextid=LQQJ4d",
    width: 10,
  },
  {
    imgSrc: "/images/Footer/insta.svg",
    link: "https://www.instagram.com/restaurantechurraqueirapapagio?igsh=ODMwcWwzbHlkYWV0",
    width: 14,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: ["About", "Careers", "Mobile", "Blog", "How we work?"],
  },
  {
    id: 2,
    section: "Contact",
    link: ["Help/FAQ", "Press", "Affiliates", "Hotel owners", "Partners"],
  },
  {
    id: 3,
    section: "More",
    link: ["Recipe", "Chef", "Food", "Support"],
  },
];

const footer = () => {
  return (
    <div className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        {/* COLUMN-1 */}

        <div className="sm:col-span-6 lg:col-span-5">
          <div className="flex flex-shrink-0 items-center border-right">
            <Link href="/" className="text-2xl font-semibold text-black ml-4">
              <Image
                src="/images/Logo/logo-full.png"
                alt="logo"
                width={200}
                height={107}
              />
            </Link>
          </div>
          <h3 className="text-textbl text-xs font-medium mt-5 mb-4 lg:mb-16">
            {" "}
            Siga-nós
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((items, i) => (
              <Link href={items.link} key={i}>
                <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={items.width}
                    height={2}
                    className="sepiaa"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CLOUMN-2/3/4 */}
      </div>

      {/* All Rights Reserved */}

      <div className="py-10 md:flex items-center justify-between border-t border-t-bordertop">
        <h4 className="text-darkgrey text-sm text-center md:text-start font-normal">
          Desde 1994 - Restaurante Papagaio. All Rights Reserved by{" "}
          <Link href="https://alexandre.agency/" target="_blank">
            {" "}
            Alexandre Brasil
          </Link>
        </h4>
        <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
          <h4 className="text-darkgrey text-sm font-normal">
            <Link href="/" target="_blank">
              Privacy policy
            </Link>
          </h4>
          <div className="h-5 bg-bordertop w-0.5"></div>
          <h4 className="text-darkgrey text-sm font-normal">
            <Link href="/" target="_blank">
              Terms & conditions
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default footer;
