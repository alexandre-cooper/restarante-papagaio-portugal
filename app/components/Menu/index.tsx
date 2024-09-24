"use client";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Menu = () => {
  const items = [
    {
      id: 1,
      name: "Francesinha",
      description: "Prato típico do Porto com carnes e molho.",
      category: "Carne 🍖",
    },
    {
      id: 2,
      name: "Bacalhau à Brás",
      description: "Bacalhau desfiado com ovos e batata frita.",
      category: "Peixe",
    },
    {
      id: 3,
      name: "Tripas à Moda do Porto",
      description: "Prato tradicional de feijão e tripas.",
      category: "Carne",
    },
    {
      id: 4,
      name: "Picanha na Brasa",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 5,
      name: "Sopa",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Sopa",
    },
    {
      id: 6,
      name: "Posta de Vitela na brasa à Papagaio c/ Arroz e Batata Frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 7,
      name: "Bife de Novilho Especial c/ Gambas c/ Feijão Preto e Farófa Arroz batata frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 8,
      name: "Espetada á Transmontana de Novilho c/ Arroz batata frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 9,
      name: "Frango na brasa c/arroz e batata frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 10,
      name: "Lombinhos de Vitela na brasa c/ Arroz e Batata Frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 11,
      name: "Lombinhos de Vitela na brasa c/ Arroz e Batata Frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 10,
      name: "Lombinhos de Vitela na brasa c/ Arroz e Batata Frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 12,
      name: "Lombinhos de Vitela na brasa c/ Arroz e Batata Frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 13,
      name: "Lombinhos de Vitela na brasa c/ Arroz e Batata Frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 14,
      name: "Lombinhos de Vitela na brasa c/ Arroz e Batata Frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
  ];

  return (
    <div className="relative" id="menu-section">
      <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
        <Fade
          direction={"up"}
          delay={1000}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h3 className="text-3xl lg:text-5xl font-semibold text-black text-center my-6">
            Menu
          </h3>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
          {items.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <span className="text-sm text-gray-500 italic">
                {item.category}
              </span>
            </div>
          ))}
        </div>

        <div className="flex align-middle justify-center md:justify-start">
          <button className="text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-10 mr-6">
            <Link href="/">VOLTAR</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
