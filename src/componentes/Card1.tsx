interface ICard1 {
    img1: string;
    titulo1: string;
    descricao1: string;
    preco1: string;
}

function Card({ img1, titulo1, descricao1, preco1 }: ICard1) {
    return (
        <>
            <div
                id="pratoVinteOito"
                className="bg-white flex flex-col p-2 w-[160px] h-fit rounded-[10px] border border-gray-300 lg:w-[270px] lg:h-[320px]"
            >
                <div>
                    <img
                        className="img1 w-[100%] h-[110px] lg:h-[170px]"
                        src={img1}
                        alt="Prato"
                    />

                    <h5 className="titulo font-bold mt-1">{titulo1}</h5>
                    <p className="descricao mt-1 line-clamp-3">{descricao1}</p>
                    <p className="preco mt-2">
                        <b>{preco1}</b>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Card;
