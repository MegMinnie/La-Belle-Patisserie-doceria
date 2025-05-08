import type { Prato } from "../utils/types/prato";

function Card2({ img2, titulo2, descricao2, preco2 }: Omit<Prato, "id">) {
    return (
        <>
            <div
                id="pratoUm"
                className="bg-white flex flex-row gap-2 items-center justify-between m-3 p-2 rounded-[10px] border border-gray-300"
            >
                <div>
                    <p className="titulo2 text-lg">
                        <b>{titulo2}</b>
                    </p>
                    <p className="descricao line-clamp-3 mt-1">{descricao2}</p>
                    <p className="preco mt-2">
                        <b>{preco2}</b>
                    </p>
                </div>
                <div className="w-[100%]">
                    <img
                        className="img2 w-[100px] h-[110px] rounded-[5px]"
                        src={img2}
                        alt="img"
                    />
                </div>
            </div>
        </>
    );
}

export default Card2;
