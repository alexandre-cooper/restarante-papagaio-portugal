"use client";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Menu = () => {
  const items = [
    // Churrasco
    {
      id: 1,
      name: "Picanha na Brasa",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 2,
      name: "Posta de Vitela na brasa à Papagaio c/ Arroz e Batata Frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 3,
      name: "Bife de Novilho Especial c/ Gambas c/ Feijão Preto e Farófa Arroz batata frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 4,
      name: "Espetada à Transmontana de Novilho c/ Arroz batata frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 5,
      name: "Frango na brasa c/ arroz e batata frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 6,
      name: "Lombinhos de Vitela na brasa c/ Arroz e Batata Frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 7,
      name: "Picanha na brasa c/ Feijão Preto Farófa Arroz Batata Frita",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },
    {
      id: 8,
      name: "Francesinha à Papagaio",
      description: "Deliciosa carne grelhada na brasa.",
      category: "Churrasco",
    },

    // Cozinha Tradicional
    {
      id: 9,
      name: "Tripas à Moda do Porto",
      description: "Prato tradicional de feijão e tripas.",
      category: "Cozinha tradicional",
    },
    {
      id: 10,
      name: "Rojões à Moda do Minho",
      description: "Prato tradicional de feijão e tripas.",
      category: "Cozinha tradicional",
    },
    {
      id: 11,
      name: "Carne de Porco à Alentejana",
      description: "Prato tradicional com carne de porco e amêijoas.",
      category: "Cozinha tradicional",
    },
    {
      id: 12,
      name: "Arroz de Pato",
      description: "Prato tradicional de arroz com pato.",
      category: "Cozinha tradicional",
    },
    {
      id: 13,
      name: "Vitela Assada no Forno",
      description: "Prato tradicional de vitela assada.",
      category: "Cozinha tradicional",
    },
    {
      id: 14,
      name: "Lombo de Porco no Forno",
      description: "Prato tradicional de lombo assado.",
      category: "Cozinha tradicional",
    },

    // Peixe
    {
      id: 43,
      name: "Carapauzinhos fritos c/ arroz tomate",
      description: "Bacalhau desfiado com ovos e batata frita.",
      category: "Peixe",
    },
    {
      id: 44,
      name: "Sardinha frita c/arroz de feijão",
      description: "Bacalhau desfiado com ovos e batata frita.",
      category: "Peixe",
    },
    {
      id: 16,
      name: "Pataniscas de Bacalhau c/ arroz e feijão",
      description: "Bolinhos de bacalhau fritos com arroz e feijão.",
      category: "Peixe",
    },
    {
      id: 17,
      name: "Dourada c/ Batata Cozida e Legumes",
      description: "Peixe grelhado com batata e legumes.",
      category: "Peixe",
    },
    {
      id: 18,
      name: "Salmão c/ Batata Cozida e Legumes",
      description: "Salmão grelhado com batata e legumes.",
      category: "Peixe",
    },
    {
      id: 19,
      name: "Espetada de Gambas e Lulas c/ Batata Cozida e Legumes",
      description: "Espetada de marisco com acompanhamento.",
      category: "Peixe",
    },
    {
      id: 47,
      name: "Espetada de Gambas e Lulas c/ Batata frita e salada",
      description: "Espetada de marisco com acompanhamento.",
      category: "Peixe",
    },
    {
      id: 48,
      name: "Espetada de Lulas c/ Batata cozida e molho verde",
      description: "Espetada de marisco com acompanhamento.",
      category: "Peixe",
    },
    {
      id: 20,
      name: "Bacalhau Frito à Moda da Casa c/ Batata Frita",
      description: "Bacalhau frito com batata frita à rodela.",
      category: "Peixe",
    },
    {
      id: 21,
      name: "Bacalhau Assado na Brasa c/ Batata Cozida e Pimentos",
      description: "Bacalhau grelhado na brasa com batata e pimentos.",
      category: "Peixe",
    },
    {
      id: 22,
      name: "Bacalhau c/ Natas",
      description: "Bacalhau ao forno com natas.",
      category: "Peixe",
    },
    {
      id: 23,
      name: "Filetes de Pescada c/ Arroz e Batata Frita",
      description: "Filetes de pescada fritos com arroz e batata.",
      category: "Peixe",
    },

    // Sopa
    {
      id: 24,
      name: "Sopa",
      description: "Deliciosa sopa caseira.",
      category: "Sopa",
    },
    {
      id: 25,
      name: "Caldo Verde",
      description: "Sopa tradicional portuguesa com couve e chouriço.",
      category: "Sopa",
    },
    {
      id: 26,
      name: "Papas de Sarrabulho",
      description: "Sopa espessa tradicional com carne de porco.",
      category: "Sopa",
    },

    // Vegan
    {
      id: 27,
      name: "Lasanha Vegetariana",
      description: "Lasanha de vegetais com molho de tomate.",
      category: "Vegan",
    },
    {
      id: 50,
      name: "Lasanha de Salmão",
      description: "Lasanha de vegetais com molho de tomate.",
      category: "Vegan",
    },

    // Gambas
    {
      id: 28,
      name: "½ kg Gambas ao Natural",
      description: "Gambas frescas cozidas.",
      category: "Gambas",
    },
    {
      id: 29,
      name: "½ kg Gambas na Brasa",
      description: "Gambas grelhadas na brasa.",
      category: "Gambas",
    },

    // Sobremesas
    {
      id: 30,
      name: "Natas do Céu",
      description: "Sobremesa portuguesa com camadas de creme.",
      category: "Sobremesa",
    },
    {
      id: 31,
      name: "Baba de Camelo",
      description: "Sobremesa doce à base de leite condensado.",
      category: "Sobremesa",
    },
    {
      id: 32,
      name: "Mousse de Chocolate",
      description: "Sobremesa cremosa de chocolate.",
      category: "Sobremesa",
    },
    {
      id: 33,
      name: "Cheesecake",
      description: "Sobremesa de queijo cremoso com base de biscoito.",
      category: "Sobremesa",
    },
    {
      id: 34,
      name: "Tarte Gelada de Bolacha",
      description: "Tarte doce gelada com bolacha.",
      category: "Sobremesa",
    },
    {
      id: 35,
      name: "Pudim",
      description: "Sobremesa clássica de pudim com caramelo.",
      category: "Sobremesa",
    },
    {
      id: 36,
      name: "Bolo de Bolacha",
      description: "Sobremesa gelada com camadas de bolacha e creme.",
      category: "Sobremesa",
    },

    // Frutas
    {
      id: 37,
      name: "Laranja",
      description: "Fruta fresca e cítrica.",
      category: "Frutas",
    },
    {
      id: 38,
      name: "Maçã",
      description: "Fruta fresca e crocante.",
      category: "Frutas",
    },
    {
      id: 39,
      name: "Kiwi",
      description: "Fruta tropical com sabor refrescante.",
      category: "Frutas",
    },
    {
      id: 40,
      name: "Abacaxi",
      description: "Fruta tropical suculenta e doce.",
      category: "Frutas",
    },
    {
      id: 41,
      name: "Salada de Frutas",
      description: "Mix de frutas frescas.",
      category: "Frutas",
    },
  ];

  const categories = [
    "Todos",
    "Churrasco",
    "Cozinha tradicional",
    "Peixe",
    "Sopa",
    "Vegan",
    "Gambas",
    "Sobremesa",
    "Frutas",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Filtro para os itens com base na categoria selecionada
  const filteredItems =
    selectedCategory === "Todos"
      ? items // Mostra todos os itens quando "Todos" é selecionado
      : items.filter((item) => item.category === selectedCategory);

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

        {/* Filtro de Categorias */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-black font-medium transition-all duration-300 
                ${
                  selectedCategory === category
                    ? "bg-pink text-white" // Estilo do botão selecionado
                    : "bg-gray-400 text-black hover:bg-pink-300 hover:text-black"
                } // Estilo normal e hover
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Exibição dos itens filtrados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
          {filteredItems.map((item) => (
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
