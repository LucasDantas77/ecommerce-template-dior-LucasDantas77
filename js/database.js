// Banco de dados dos produtos
const listaProducts = [];



function createItem(img, nameItem, description, value, addCart, tag) {
    let item = {
       img:img,
       nameItem:nameItem,
       description:description,
       value:value,
       addCart:addCart,
       tag:tag
    }

    return item
}


function createProductsItem(objeto) {
    listaProducts.push(objeto)
};


let pulloverDior = createItem("dior1.jpeg", "PULÔVER CACTUS JACK DIOR", "Jacquard de cashmere bege e preto", 1200.00, "Adiconar carrinho", "Roupas");
let  pulloverAmplo= createItem("dior2.jpeg", "PULÔVER CACTUS JACK DIOR AMPLO", "Jacquard de cashmere bege e marrom", 2400.00, "Adiconar carrinho", "Roupas");
let camisaPolo= createItem("dior3.jpeg", "CAMISA POLO AMPLA CACTUS JACK DIOR", "Jacquard de algodão e seda bege e preto", 1100.00, "Adiconar carrinho", "Roupas");
let  anoraque= createItem("dior4.jpeg", "ANORAQUE CACTUS JACK DIOR", "Tecido de cashmere marrom", 3000.00, "Adiconar carrinho", "Roupas");
let  jaqueta= createItem("dior5.jpeg", "JAQUETA BOMBER DIOR OBLIQUE REVERSÍVEL", "Jacquard técnico cinza", 4500.00, "Adiconar carrinho", "Roupas");
let camisetaAmpla = createItem("dior6.jpeg", "CAMISETA AMPLA CACTUS JACK DIOR", "jérsei de algodão azul-marinho", 1100.00, "Adiconar carrinho", "Roupas")
createProductsItem(pulloverDior);
createProductsItem(pulloverAmplo);
createProductsItem(camisaPolo);
createProductsItem(anoraque);
createProductsItem(jaqueta);
createProductsItem(camisetaAmpla);

console.log(listaProducts);


