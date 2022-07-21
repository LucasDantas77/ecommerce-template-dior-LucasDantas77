// Banco de dados dos produtos
const listaProducts = [];

function createItem(id, img, nameItem, description, value, addCart, tag) {
    let item = {
        id: id,
        img: img,
        nameItem: nameItem,
        description: description,
        value: value,
        addCart: addCart,
        tag: tag

    }

    return item
}


function createProductsItem(objeto) {
    listaProducts.push(objeto)
};


let pulloverDior = createItem(0, "./img/dior1.jpeg", "PULÔVER CACTUS DIOR AM", "Jacquard de cashmere bege e preto", 1200.00, "Adiconar carrinho", "Roupas");
let pulloverAmplo = createItem(1, "./img/dior2.jpeg", "PULÔVER CACTUS JACK DIOR", "Jacquard de cashmere bege e marrom", 2400.00, "Adiconar carrinho", "Roupas");
let camisaPolo = createItem(2, "./img/dior3.jpeg", "CAMISA POLO CACTUS DIOR", "Jacquard de algodão e seda bege e preto", 1100.00, "Adiconar carrinho", "Roupas");
let anoraque = createItem(3, "./img/dior4.jpeg", "ANORAQUE CACTUS DIOR", "Tecido de cashmere marrom", 3000.00, "Adiconar carrinho", "Roupas");
let jaqueta = createItem(4, "./img/dior5.jpeg", "JAQUETA CACTUS JACK DIOR", "Jacquard técnico cinza", 4500.00, "Adiconar carrinho", "Roupas");
let camisetaAmpla = createItem(5, "./img/dior6.jpeg", "CAMISETA AM CACTUS DIOR", "jérsei de algodão azul-marinho", 1100.00, "Adiconar carrinho", "Roupas")
createProductsItem(pulloverDior);
createProductsItem(pulloverAmplo);
createProductsItem(camisaPolo);
createProductsItem(anoraque);
createProductsItem(jaqueta);
createProductsItem(camisetaAmpla);


const principal = document.getElementsByClassName("container")[0]
let divNav = document.createElement("div")
divNav.classList.add("navegaçao")
let form = document.createElement("form")
form.classList.add("pesquisar")
divNav.appendChild(form)
principal.appendChild(divNav)


let inputTag = document.createElement("input")
inputTag.type = "text"
inputTag.name = "Digite aqui..."
inputTag.placeholder = "Digite sua pesquisa aqui..."
inputTag.id = "pesquisar"
let botao = document.createElement("button")
botao.classList.add("botaoBusca")
botao.innerText = "Pesquisar"
form.appendChild(inputTag)
form.appendChild(botao)



function criaSecao(itens) {
    const principal = document.getElementsByClassName("container")[0]

    let divDivisao = document.createElement("div")
    divDivisao.classList.add("divisao")
    let secao = document.createElement("section")
    let lista = document.createElement("ul")
    lista.classList.add("lista")
    divDivisao.appendChild(secao)
    secao.appendChild(lista)
    principal.appendChild(divDivisao)

    for (let i = 0; i < itens.length; i++) {
        let li = document.createElement("li")
        let img = document.createElement("img")
        let parTag = document.createElement("p")
        let h3Titl = document.createElement("h3")
        let paraDesc = document.createElement("p")
        let pValor = document.createElement("p")
        let botao = document.createElement("button")

        li.classList.add("quadro")
        img.src = itens[i].img
        parTag.innerText = itens[i].tag
        parTag.classList.add("tag")
        h3Titl.innerText = itens[i].nameItem
        paraDesc.innerText = itens[i].description
        pValor.innerText = `R$ ${itens[i].value},00`
        botao.id = itens[i].id

        botao.innerText = itens[i].addCart
        botao.classList.add("adicionar")

        li.appendChild(img)
        li.appendChild(parTag)
        li.appendChild(h3Titl)
        li.appendChild(paraDesc)
        li.appendChild(pValor)
        li.appendChild(botao)
        lista.appendChild(li)

    }


}


criaSecao(listaProducts)