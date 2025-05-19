import { FaHouse } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

function Cabecalho() {
    return (
        <>
            <nav className="flex flex-row border border-gray-300 bg-white justify-between p-3 text-lg lg:hidden">
                <div className="botaoUm flex flex-col items-center">
                    <i className="text-2xl">
                        <FaHouse />
                    </i>
                    <a>Início</a>
                </div>

                <div className="botaoDois flex flex-col items-center">
                    <i className="text-2xl">
                        <IoRocketOutline />
                    </i>
                    <a>Promoções</a>
                </div>

                <div className="botaoTres flex flex-col items-center">
                    <i className="text-2xl">
                        <IoBagCheckOutline />
                    </i>
                    <a>Pedidos</a>
                </div>

                <div className="botaoQuatro flex flex-col items-center">
                    <i className="text-2xl">
                        <IoPerson />
                    </i>
                    <a>Perfil</a>
                </div>
            </nav>
        </>
    );
}

export default Cabecalho;
