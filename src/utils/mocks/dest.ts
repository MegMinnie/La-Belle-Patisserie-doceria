import prato1 from "./assets/prato1.jpeg";
import prato2 from "./assets/prato2.jpeg";
import prato3 from "./assets/prato3.jpeg";
import prato4 from "./assets/prato4.jpeg";
import prato5 from "./assets/prato5.jpeg";
import prato6 from "./assets/prato6.jpeg";
import prato7 from "./assets/prato7.jpeg";
import prato8 from "./assets/prato8.jpg";
import prato9 from "./assets/prato9.jpeg";
import prato10 from "./assets/prato10.jpeg";
import prato11 from "./assets/prato11.jpeg";
import prato12 from "./assets/prato12.jpeg";
import prato13 from "./assets/prato13.jpeg";
import prato14 from "./assets/prato14.jpg";
import prato15 from "./assets/prato15.jpeg";
import prato16 from "./assets/prato16.jpeg";
import prato17 from "./assets/prato17.jpeg";
import prato18 from "./assets/prato18.webp";
import prato19 from "./assets/prato19.avif";
import prato20 from "./assets/prato20.jpg";
import prato21 from "./assets/prato21.jpeg";
import prato22 from "./assets/prato22.jpeg";
import prato23 from "./assets/prato23.webp";
import prato24 from "./assets/prato24.jpeg";
import prato25 from "./assets/prato25.jpg";
import prato26 from "./assets/prato26.jpeg";
import prato27 from "./assets/prato27.jpeg";
import type { Prato } from "../types/prato";
import { v4 as uuid } from "uuid";

const pratosDestaque1: Prato[] = [
    {
        id: uuid(),
        img2: prato1,
        titulo2: "Quiche Lorraine",
        descricao2:
            "Deliciosa fatia de torta salgada com crosta folhada recheada de ovos, creme de leite, bacon defumado e queijo Gruyère. Um clássico irresistível!",
        preco2: "R$ 20,00",
    },
    {
        id: uuid(),
        img2: prato2,
        titulo2: "Croissant",
        descricao2:
            "Crocante e amanteigado, este pão francês é uma deliciosa opção feita com massa folhada leve. Perfeito para começar o dia com sabor!",
        preco2: "R$ 12,00",
    },
    {
        id: uuid(),
        img2: prato3,
        titulo2: "Vol-Au-Vent",
        descricao2:
            "Porção de 5 copinhos de massa folhada recheado com uma mistura cremosa de frango, cogumelos e ervilhas em molho béchamel, finalizado com queijo Gruyère. Um aperitivo que encanta!",
        preco2: "R$ 26,00",
    },
    {
        id: uuid(),
        img2: prato4,
        titulo2: "Soufflé de Queijo",
        descricao2:
            "Saboroso e leve soufflé feito com queijo Gruyère e claras em neve batidas, resultando em uma textura arejada e dourada. Uma verdadeira explosão de sabor!",
        preco2: "R$ 21,80",
    },
    {
        id: uuid(),
        img2: prato5,
        titulo2: "Tarte Flambée",
        descricao2:
            "Deliciosa fatia de pizza fina da Alsácia, coberta com crème fraîche, cebolas caramelizadas e bacon defumado. Crocante e cheia de sabor!",
        preco2: "R$ 21,50",
    },
    {
        id: uuid(),
        img2: prato6,
        titulo2: "Croque-Monsieur",
        descricao2:
            "Irresistível sanduíche quente recheado com presunto e queijo Emmental, grelhado até ficar dourado e servido com um toque especial de molho béchamel por cima.",
        preco2: "R$ 47,44",
    },
    {
        id: uuid(),
        img2: prato7,
        titulo2: "Gougéres",
        descricao2:
            "Porção com 5 bolinhos leves e crocantes feitos com massa choux e queijo Gruyère, perfeitos como aperitivo ou para acompanhar um um café!",
        preco2: "R$ 20,50",
    },
    {
        id: uuid(),
        img2: prato8,
        titulo2: "Pissaladière",
        descricao2:
            "Saborosa fatia de torta aberta provençal com cebolas caramelizadas, azeitonas pretas e anchovas sobre uma base rica de massa. Um autêntico sabor da Provença!",
        preco2: "R$ 24,20",
    },
];

const pratosDestaque2: Prato[] = [
    {
        id: uuid(),
        img2: prato9,
        titulo2: "Éclair",
        descricao2:
            "Doce caracterizado pelo formato longo, feito com massa de farinha de trigo, com recheio cremoso (geralmente de natas ou chocolate) e cobertura de calda de chocolate endurecida.",
        preco2: "R$ 14,00",
    },
    {
        id: uuid(),
        img2: prato10,
        titulo2: "Macaron",
        descricao2:
            "Pequeno biscoito, redondo e crocante, feito com farinha de amêndoas, com base de claras, açúcar e recheado, granuloso e molinho, de forma arredondada.",
        preco2: "R$ 8,00",
    },
    {
        id: uuid(),
        img2: prato11,
        titulo2: "Clafoutis",
        descricao2:
            "Custard recheado com cerejas pretas selecionadas, assados numa forma de ferro amanteigada.",
        preco2: "R$ 15,00",
    },
];

const pratosDestaque3: Prato[] = [
    {
        id: uuid(),
        img2: prato12,
        titulo2: "Coxinha",
        descricao2:
            "Uma deliciosa massa crocante recheada com carne desfiada suculenta. Escolha entre a clássica coxinha de frango ou a irresistível opção de costela, perfeita para quem ama sabores intensos.",
        preco2: "R$ 8,70",
    },
    {
        id: uuid(),
        img2: prato13,
        titulo2: "Esfirra",
        descricao2:
            "Uma massa leve e saborosa, recheada com carne temperada ou frango, oferecendo um equilíbrio perfeito entre crocância e maciez. Ideal para um lanche prático e saboroso!",
        preco2: "R$ 8,00",
    },
    {
        id: uuid(),
        img2: prato14,
        titulo2: "Pão de queijo",
        descricao2:
            "Um clássico brasileiro, feito com polvilho e queijo, é macio por dentro e crocante por fora. Perfeito para quem não resiste a uma saborosa iguaria mineira.",
        preco2: "R$ 5,50",
    },
    {
        id: uuid(),
        img2: prato15,
        titulo2: "Pastel de forno",
        descricao2:
            "Um pastel assado recheado com ingredientes frescos e saborosos. Escolha entre os deliciosos recheios de palmito com alho-poró, que traz um sabor suave e cremoso, ou frango com catupiry, uma combinação clássica que nunca decepciona. A crocância da massa complementa perfeitamente o recheio generoso!",
        preco2: "R$ 10,50",
    },
    {
        id: uuid(),
        img2: prato16,
        titulo2: "Pizza Brotinho",
        descricao2:
            "Mini pizzas individuais com massa fininha e crocante, cobertas com opções deliciosas como frango desfiado, milho cremoso ou palmito. Uma explosão de sabor em cada mordida!",
        preco2: "R$ 9,00",
    },
    {
        id: uuid(),
        img2: prato17,
        titulo2: "Risole 3 queijos",
        descricao2:
            "Uma combinação irresistível de mussarela, provolone, queijo prato e requeijão envolta em uma massa crocante. Cada mordida traz uma explosão de sabores cremosos que derretem na boca, tornando este risole uma escolha perfeita para quem ama queijos!",
        preco2: "R$ 6,00",
    },
];

const pratosDestaque4: Prato[] = [
    {
        id: uuid(),
        img2: prato18,
        titulo2: "Brigadeiro",
        descricao2:
            "O tradicional doce brasileiro em versões gourmet! Escolha entre o rico chocolate belga, o exclusivo pistache, a combinação irresistível do creme de avelã com ninho ou a suavidade do brigadeiro branco.",
        preco2: "R$ 4,20",
    },
    {
        id: uuid(),
        img2: prato19,
        titulo2: "Quindim",
        descricao2:
            "Uma sobremesa clássica brasileira feita à base de coco, gema de ovo e açúcar. Sua textura cremosa e sabor adocicado vão encantar seu paladar!",
        preco2: "R$ 7,00",
    },
    {
        id: uuid(),
        img2: prato20,
        titulo2: "Pudim",
        descricao2:
            "Um clássico que nunca sai de moda! Com uma calda caramelizada que derrete na boca, o pudim é perfeito para adoçar qualquer refeição.",
        preco2: "R$ 7,00",
    },
    {
        id: uuid(),
        img2: prato21,
        titulo2: "Brownie",
        descricao2:
            "Um bolo denso e úmido, cheio de pedaços de chocolate que derretem na boca. O brownie é o doce ideal para os amantes do chocolate!",
        preco2: "R$ 10,00",
    },
    {
        id: uuid(),
        img2: prato22,
        titulo2: "Cupcake",
        descricao2:
            "Pequenos bolos decorados com cobertura cremosa, disponíveis em vários sabores. Cada cupcake é uma explosão de sabor que combina maciez da massa com a doçura da cobertura.",
        preco2: "R$ 15,00",
    },
    {
        id: uuid(),
        img2: prato23,
        titulo2: "Torta",
        descricao2:
            "Uma deliciosa torta feita com ingredientes frescos e recheios variados. Perfeita para encerrar sua refeição com chave de ouro!",
        preco2: "R$ 17,00",
    },
];

const pratosDestaque5: Prato[] = [
    {
        id: uuid(),
        img2: prato24,
        titulo2: "Panetone",
        descricao2:
            "O clássico natalino que não pode faltar! Saboroso e macio, escolha entre o tradicional com frutas cristalizadas ou as versões inovadoras de pistache e chocolate.",
        preco2: "R$ 110,00",
    },
    {
        id: uuid(),
        img2: prato25,
        titulo2: "Torta de nozes",
        descricao2:
            "Uma torta rica em nozes crocantes envoltas em um creme suave. Cada fatia é uma verdadeira celebração dos sabores natalinos!",
        preco2: "R$ 17,00",
    },
    {
        id: uuid(),
        img2: prato26,
        titulo2: "Cupcake natalino",
        descricao2:
            "Pequenos bolos festivos decorados especialmente para o Natal. Com sabores que remetem às festividades, são perfeitos para adoçar sua ceia!",
        preco2: "R$ 10,00",
    },
    {
        id: uuid(),
        img2: prato27,
        titulo2: "Cookies",
        descricao2:
            "Deliciosos biscoitos crocantes por fora e macios por dentro! Escolha entre as opções refrescantes da menta com chocolate branco ou o clássico chocolate com nozes, ou ainda o aromático cookie de gengibre para entrar no clima natalino.",
        preco2: "R$ 12,00",
    },
];

export {
    pratosDestaque1,
    pratosDestaque2,
    pratosDestaque3,
    pratosDestaque4,
    pratosDestaque5,
};
