import { FaLocationDot } from "react-icons/fa6";
function Infor() {
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-white gap-2 p-4 rounded-3xl pt-12 relative bottom-7">
                <h1 className="text-3xl font-bold">La Belle Pâtisserie</h1>
                <div className="flex flex-row gap-5">
                    <div className="flex flex-row gap-1 items-center">
                        <i className="">
                            <FaLocationDot />
                        </i>
                        <p>Matriz, Jacobina - BA</p>
                    </div>
                    <div>
                        <p>• Mais informações</p>
                    </div>
                </div>
                <p className="text-green-700 font-bold">
                    Aberto até as 18:00 horas
                </p>
            </div>
        </>
    );
}

export default Infor;
