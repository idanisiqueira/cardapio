/* forma de ocultar/aparecer

const menu = document.querySelector('.menu')

menu.addEventListener("click", appearMenu)

function appearMenu() {
    const display = document.querySelector('.products').style.display;
    if (display == "none") {
        document.querySelector('.products').style.display = "block";
    }
    else {
        document.querySelector('.products').style.display = "none";
    }
}
*/


// evento e função para aparecer menu completo

const menu = document.querySelector('.menu')

const products = document.querySelector('.products')
let myProducts = ''

function appearMenu(productsArray) {
    myProducts = ''

    productsArray.forEach((hamburguer) => {
        myProducts += `
    <div class="hamburguers">
        <img src=${hamburguer.src}>
        <p>${hamburguer.name}</p>
        <p class="value">R$${hamburguer.price.toFixed(2)}</p>
    </div>
    `
    })

    products.innerHTML = myProducts

}

menu.addEventListener("click", () => appearMenu(menuOptions))

// evento e função para aplicar desconto

const discount = document.querySelector('.discount')
discount.addEventListener("click", subValue)

function subValue() {
    const newValue = menuOptions.map(promo => {

        const newMenu = {
            ...promo, // spread operator => para não repetir os mesmos itens inalterados do array, "esparramando" dentro da variável
            price: promo.price - promo.price * 10 / 100,
        }
        return newMenu
    })

    appearMenu(newValue)
}

// evento para somar todos os produtos

const total = document.querySelector(".total")
total.addEventListener("click", sumProducts)

function sumProducts() {

    const allBurguers = menuOptions.reduce((acc, allBuy) => {
        return acc + allBuy.price
    }, 0)

    products.innerHTML =
        `<div class="message">
    O total da compra foi de R$${allBurguers.toFixed(2)}
    </div>`
}

// evento para filtrar somente produtos veganos

const vegan = document.querySelector(".vegan")
vegan.addEventListener("click", filterVegan)

function filterVegan() {
    const vegans = menuOptions.filter(noAnimal => {
        if (noAnimal.vegan == true)
            return true
    })
    appearMenu(vegans)
}