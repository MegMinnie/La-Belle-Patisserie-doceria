import { FaHouse } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
interface IHeader {
    capa: string;
    logo: string;
}

function Header({ capa, logo }: IHeader) {
    return (
        <>
            <header className="relative md:flex md:flex-col">
                <nav className="hidden lg:flex md:absolute md:w-full">
                    <ul className="bg-[#ee4872] flex justify-around p-4 text-xl font-bold text-white mx-auto w-full pb-[160px]">
                        <li className="botao-pc flex gap-3 items-center border border-transparent hover:cursor-pointer hover:border-white">
                            <i className="text-2xl">
                                <FaHouse />
                            </i>
                            <a href="#">Início</a>
                        </li>
                        <li className="botao-pc flex gap-3 items-center border border-transparent hover:cursor-pointer hover:border-white">
                            <i className="text-2xl">
                                {" "}
                                <IoRocketOutline />
                            </i>
                            <a href="#">Promoções</a>
                        </li>
                        <li className="botao-pc flex gap-3 items-center border border-transparent hover:cursor-pointer hover:border-white">
                            <i className="text-2xl">
                                <IoBagCheckOutline />
                            </i>
                            <a href="#">Pedidos</a>
                        </li>
                        <li className="botao-pc flex gap-3 items-center border border-transparent hover:cursor-pointer hover:border-white">
                            <i className="text-2xl">
                                <IoPerson />
                            </i>
                            <a href="#">Entrar/Cadastrar</a>
                        </li>
                    </ul>
                </nav>

                <div className="md:flex md:flex-col md:absolute md:w-full md:-translate-y-1 md:mt-[5%]">
                    <img
                        src={capa}
                        className="w-full h-[300px] md:w-[90%] md:mx-auto md:border-4 md:border-white md:rounded-[10px] lg:w-[85%] lg:h-[400px]"
                    />
                    <div className="flex flex-col items-center gap-1 p-5 rounded-[20px] absolute -translate-y-1/2 top-[112%] w-full bg-white pt-[50px] border border-gray-300 md:mt-[2%] md:bg-transparent md:border-none md:flex-row">
                        <img
                            src={logo}
                            className="rounded-full w-24 absolute -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 md:left-[16%] md:w-40 md:rounded-none md:border-4 lg:border-white"
                        />
                        <div className="flex flex-col gap-1 items-center md:items-start md:ml-[22%] md:-mt-[5%]">
                            <h1 className="font-extrabold text-gray-900 text-2xl">
                                La Belle Pâtisserie
                            </h1>
                            <div className="items-center flex flex-col lg:flex lg:flex-row-reverse lg:gap-4">
                                <div className="flex gap-8">
                                    <div className="flex gap-2">
                                        <i className="bi bi-geo-alt-fill"></i>
                                        <p>Matriz, Jacobina - BA</p>
                                    </div>
                                    <div>
                                        <a id="infor" href="#">
                                            <span className="font-bold">
                                                &bull; Mais informações
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <p>
                                    <b className="periodo text-[#008000]"></b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
