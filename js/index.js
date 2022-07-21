const listaCarrinho = [];
let posicaoProduto = 0;
let quantidadeProdutosCarrinho = 0;
let valortotal = 0


function createCarrinho(name, button) {
    let item = {
        name: name,
        button: button
    }

    return item
}


function createCarrinhoItem(objeto) {
    listaCarrinho.push(objeto)
};


let carrinho = createCarrinho("Carrinho vazio", "Adicionar item")


createCarrinhoItem(carrinho);



function criaCarrinho(carrinho) {
    const principal = document.getElementsByClassName("container")[0]
    const divDivisao = document.getElementsByClassName("divisao")[0]

    let secaoCarrinho = document.createElement("section")
    secaoCarrinho.classList.add("carrinho")
    let h3 = document.createElement("h3")
    h3.innerText = "Carrinho"
    let ul = document.createElement("ul")
    ul.classList.add("listaCarrinho")
    let divinfo = document.createElement("div")
    divinfo.classList.add("carrinhoInfo")
    secaoCarrinho.appendChild(h3)
    secaoCarrinho.appendChild(ul)
    divDivisao.appendChild(secaoCarrinho)
    principal.appendChild(divDivisao)

    for (let i = 0; i < carrinho.length; i++) {
        let list = document.createElement("li")
        let h4Tag = document.createElement("h4")
        h4Tag.innerText = carrinho[i].name
        let botao2 = document.createElement("button")
        botao2.innerText = carrinho[i].button
        let pinfo = document.createElement("p")
        pinfo.classList.add("quantidade-item-carrinho")
        pinfo.innerText = `Qtd de produtos: ${quantidadeProdutosCarrinho}`
        let pinform = document.createElement("p")
        pinform.classList.add("total-carrinho")
        pinform.innerText = `Total : R$ ${valortotal}`
        divinfo.appendChild(pinfo)
        divinfo.appendChild(pinform)
        list.appendChild(h4Tag)
        list.appendChild(botao2)
        secaoCarrinho.appendChild(divinfo)
    }
}

criaCarrinho(listaCarrinho)

function createProdutoCarrinho(produto) {
    let li = document.createElement("li")
    let img = document.createElement("img")
    let divDescription = document.createElement("div")
    let spanTitulo = document.createElement("span")
    let spanPreco = document.createElement("span")
    let remover = document.createElement("button")

    li.classList.add("product-carrinho")
    img.classList.add("product-img-carrinho")
    divDescription.classList.add("product-description-carrinho")
    spanTitulo.classList.add("product-title-carrinho")
    spanPreco.classList.add("product-price-carrinho")
    remover.classList.add("product-remover-carrinho")
    li.id = posicaoProduto

    img.src = `.${produto.img}`
    spanTitulo.innerText = produto.nameItem
    spanPreco.innerText = `R$ ${produto.value}`
    remover.innerText = 'Remover Produto'

    divDescription.appendChild(spanTitulo)
    divDescription.appendChild(spanPreco)
    divDescription.appendChild(remover)

    li.appendChild(img)
    li.appendChild(divDescription)

    carrinhoProdutos.appendChild(li)

}

let produtos = document.querySelector(".lista")
let carrinhoProdutos = document.querySelector(".listaCarrinho")

produtos.addEventListener("click", adicionarProdutoCarrinho)
carrinhoProdutos.addEventListener("click", removerProdutoCarrinho)

function adicionarProdutoCarrinho(event) {

    let btnAdicionar = event.target
    let idProduto = btnAdicionar.getAttribute("id");
    createProdutoCarrinho(listaProducts[idProduto])

    addPreco(listaProducts[idProduto].value)

}

function removerProdutoCarrinho(event) {
    let li = event.path[2]
    carrinhoProdutos.removeChild(li)
    let idProduto = li.getAttribute("id");

    removerPreco(listaProducts[idProduto].value)


}


function addPreco(valor) {
    quantidadeProdutosCarrinho++
    valortotal += valor
    let qtdTotal = document.querySelector(".quantidade-item-carrinho")
    let precoTotal = document.querySelector(".total-carrinho")
    qtdTotal.innerText = `Qtd de produtos : ${quantidadeProdutosCarrinho}`
    precoTotal.innerText = `Total : R$${valortotal},00`

}

function removerPreco(valor) {
    quantidadeProdutosCarrinho--
    valortotal -= valor
    let qtdTotal = document.querySelector(".quantidade-item-carrinho")
    let precoTotal = document.querySelector(".total-carrinho")
    qtdTotal.innerText = `Qtd de produtos : ${quantidadeProdutosCarrinho}`
    precoTotal.innerText = `Total : R$${valortotal},00`

}