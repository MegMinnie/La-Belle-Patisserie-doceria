import Header from "./componentes/Header";
import Card1 from "./componentes/Card1";
import Card2 from "./componentes/Card2";
import capa from "./assets/capa.jpeg";
import logo from "./assets/logo.jpeg";
import prato6 from "./assets/prato6.jpeg";
import prato8 from "./assets/prato8.jpg";
import prato9 from "./assets/prato9.jpeg";
import { BsQuestionDiamondFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { BsTicketPerforated } from "react-icons/bs";
import { CiGift } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import {
    pratosDestaque1,
    pratosDestaque2,
    pratosDestaque3,
    pratosDestaque4,
    pratosDestaque5,
} from "./utils/mocks/dest";

function App() {
    return (
        <>
            <Header capa={capa} logo={logo} />

            <main className="mt-[39%] md:mt-[44%] mx-auto"></main>

            <div className="lg:flex lg:flex-col-reverse lg:gap-6 lg:w-[380px] lg:ml-[930px] lg:mt-[-110px] mt-[160px]">
                {/* Carrinho e promoções */}
                <div className="bg-white relative -top-[25px] rounded-[10px] mx-3 border border-gray-300 lg:bg-scroll">
                    <div className="flex flex-row justify-between border-b-[1px] border-dotted border-black p-2">
                        <div className="flex flex-row gap-2 items-center">
                            <BsQuestionDiamondFill />
                            <p>
                                <b>Calcular taxa de entrega</b>
                            </p>
                        </div>
                        <FaChevronRight />
                    </div>
                    <p className="p-2">
                        <b className="text-[#008000]">Entrega grátis</b>
                        <b> em pedidos a partir de R$ 120,00</b>
                    </p>

                    <div className="hidden lg:flex lg:flex-col lg:bg-[#f9fafb] lg:items-center lg:text-gray-700 lg:border-b-[1px] lg:border-dotted lg:border-black">
                        <FaShoppingCart className="text-[100px]" />
                        <span className="text-xl">Carrinho vazio</span>
                        <br />
                    </div>

                    <div className="hidden lg:flex lg:flex-row lg:justify-between border-b-[1px] lg:border-dotted lg:border-black lg:p-2 lg:items-center">
                        <div className="lg:flex lg:items-center lg:gap-3">
                            <BsTicketPerforated className="lg:text-2xl" />
                            <div className="lg:flex lg:flex-col">
                                <p>
                                    <b>Tem um cupom?</b>
                                </p>
                                <p>Clique e insira o código</p>
                            </div>
                        </div>
                        <FaChevronRight />
                    </div>

                    <button className="hidden lg:inline lg:bg-[#ee4872] lg:m-2 lg:p-2 lg:w-[300px] rounded-[5px] lg:font-bold lg:text-white lg:ml-[25px]">
                        Sacola vazia
                    </button>
                </div>

                {}
                <div className="bg-white mt-[-2.5%] p-2 mx-3 rounded-[10px] border border-gray-300 md:mt-[4%] md:mb-[4%]">
                    <div className="flex gap-2 items-center text-lg">
                        <CiGift className="flex justify-center items-center rounded-[50%] w-[35px] h-[35px] text-white text-2xl bg-[#ee4872]" />
                        <h4 className="font-extrabold text-slate-900">
                            Programa de fidelidade
                        </h4>
                    </div>
                    <p className="pt-2">
                        A cada <b>R$ 1,00</b> em compras você ganha{" "}
                        <b>1 ponto</b> que pode ser trocado por prêmios.
                    </p>
                    <p className="pt-1">
                        Os novos clientes ganham automaticamente{" "}
                        <b>10 pontos.</b>
                    </p>
                </div>

                {/* Lista de categorias e busca */}
                <div className="flex justify-between lg:w-[830px] lg:ml-[70px] lg:mt-[-490px]">
                    <div className="flex gap-2 bg-white m-3 items-center p-2 font-bold rounded-[5px] border border-gray-300">
                        <p className="whitespace-nowrap">Lista de categorias</p>
                        <IoChevronDown />
                    </div>
                    <div className="flex bg-white justify-center items-center  px-6 m-3 rounded-[5px] text-xl border border-gray-300 lg:flex lg:flex-row lg:gap-4 lg:font-bold">
                        <IoMdSearch className="text-3xl text-gray-900" />
                        <p className="hidden lg:inline lg:text-base">
                            Busque por um produto
                        </p>
                    </div>
                </div>

                <h3 className="font-extrabold text-xl text-slate-900 m-3 lg:m-8 lg:ml-[80px]">
                    Destaques
                </h3>
                <div className="overflow-x-scroll lg:ml-[60px]">
                    <div className="flex gap-2 ml-3 overflow-x-scroll w-fit">
                        <Card1
                            img1={prato8}
                            titulo1="Pissaladière"
                            descricao1="Torta aberta provençal com cebolas caramelizadas, azeitonas pretas e anchovas."
                            preco1="R$ 24,20"
                        />
                        <Card1
                            img1={prato6}
                            titulo1="Croque-Monsieur"
                            descricao1="Sanduíche quente com presunto, queijo e molho béchamel."
                            preco1="R$ 47,44"
                        />
                        <Card1
                            img1={prato9}
                            titulo1="Éclair"
                            descricao1="Doce alongado com recheio cremoso e cobertura de chocolate."
                            preco1="R$ 14,00"
                        />
                    </div>
                </div>

                <section>
                    <h2 className="font-extrabold text-xl m-3 mt-6 text-slate-900 lg:m-8 lg:ml-[70px]">
                        Salgados tradicionais
                    </h2>
                    <div className="lg:ml-[50px] lg:grid lg:grid-cols-2 lg:gap-1 lg:w-[870px]">
                        {pratosDestaque1.map(
                            ({ id, img2, titulo2, descricao2, preco2 }) => (
                                <Card2
                                    key={id}
                                    img2={img2}
                                    titulo2={titulo2}
                                    descricao2={descricao2}
                                    preco2={preco2}
                                />
                            )
                        )}
                    </div>
                </section>

                <section>
                    <h2 className="font-extrabold text-xl m-3 mt-6 text-slate-900 lg:m-8 lg:ml-[70px]">
                        Doces tradicionais
                    </h2>
                    <div className="lg:ml-[50px] lg:grid lg:grid-cols-2 lg:gap-1 lg:w-[870px]">
                        {pratosDestaque2.map(
                            ({ id, img2, titulo2, descricao2, preco2 }) => (
                                <Card2
                                    key={id}
                                    img2={img2}
                                    titulo2={titulo2}
                                    descricao2={descricao2}
                                    preco2={preco2}
                                />
                            )
                        )}
                    </div>
                </section>

                <section>
                    <h2 className="font-extrabold text-xl m-3 mt-6 text-slate-900 lg:m-8 lg:ml-[70px]">
                        Salgados Menu Executivo
                    </h2>
                    <div className="lg:ml-[50px] lg:grid lg:grid-cols-2 lg:gap-1 lg:w-[870px]">
                        {pratosDestaque3.map(
                            ({ id, img2, titulo2, descricao2, preco2 }) => (
                                <Card2
                                    key={id}
                                    img2={img2}
                                    titulo2={titulo2}
                                    descricao2={descricao2}
                                    preco2={preco2}
                                />
                            )
                        )}
                    </div>
                </section>

                <section>
                    <h2 className="font-extrabold text-xl m-3 mt-6 text-slate-900 lg:m-8 lg:ml-[70px]">
                        Salgados Menu Executivo
                    </h2>
                    <div className="lg:ml-[50px] lg:grid lg:grid-cols-2 lg:gap-1 lg:w-[870px]">
                        {pratosDestaque4.map(
                            ({ id, img2, titulo2, descricao2, preco2 }) => (
                                <Card2
                                    key={id}
                                    img2={img2}
                                    titulo2={titulo2}
                                    descricao2={descricao2}
                                    preco2={preco2}
                                />
                            )
                        )}
                    </div>
                </section>

                <section>
                    <h2 className="font-extrabold text-xl m-3 mt-6 text-slate-900 lg:m-8 lg:ml-[70px]">
                        Salgados Menu Executivo
                    </h2>
                    <div className="lg:ml-[50px] lg:grid lg:grid-cols-2 lg:gap-1 lg:w-[870px]">
                        {pratosDestaque5.map(
                            ({ id, img2, titulo2, descricao2, preco2 }) => (
                                <Card2
                                    key={id}
                                    img2={img2}
                                    titulo2={titulo2}
                                    descricao2={descricao2}
                                    preco2={preco2}
                                />
                            )
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}

export default App;
