let gadgets = [
    {
        name: "Iphone 17 Pro",
        type: "Smartphone",
            specs:{
                ram: "8GB",
                storage: "128GB",
                price: "R28 999",

            },
        image: "cellphones/amanz-_Z3tJG8Kiyc-unsplash.jpg",
    }, 
    {
        name: "Iphone 15 Pro",
        type: "Smartphone",
            specs:{
                ram: "8GB",
                storage: "128GB",
                price: "R28 999",

            },
        image: "cellphones/pexels-vickygraphy-13367286-new.jpg",
    }
]
let cart = [];

let searchIcon = document.querySelector('#header-icons img');

searchIcon.addEventListener('click', () => {
    let search = document.querySelector('#header-icons');
    search.textContent = "";
    let input = document.createElement('input');
    input.type = "text";
    input.id = "textbox";

    let newSearchIcon = document.createElement('img');
    newSearchIcon.src = "icons/search_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";

    let shoppingCart = document.createElement('img');
    shoppingCart.src = "icons/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
    shoppingCart.id = 'shoppingCart';
    search.append(input, newSearchIcon, shoppingCart);

    newSearchIcon.addEventListener('click', () => {

        let parent = document.querySelector('.container');

        let textbox = document.querySelector('#textbox');
        let value = textbox.value;

        let container = document.createElement('section');
        container.id = 'searched';

        gadgets.forEach(gadget => {
            let heading = document.querySelectorAll('section');
                heading.forEach(x => {
                    x.remove()
                })
            if(gadget.name.toLowerCase() === value.toLowerCase() || gadget.type.toLowerCase() === value.toLowerCase()){
                
                let link = document.createElement('a');
                link.href = '#';
                
                let img = document.createElement('img');
                img.src = gadget.image;
                img.alt = "no image";

                let name = document.createElement('p');
                name.textContent = gadget.name;

                let price = document.createElement('p');
                price.textContent = gadget.specs.price;
                
                link.append(img, name, price);
                container.append(link);

                parent.append(container);
                textbox.value = "";

                link.addEventListener('click', () => {
                    let heading = document.querySelectorAll('section');
                    heading.forEach(x => {
                        x.remove()
                    })
                        gadgets.forEach(x => {
                            
                            if(name.textContent.toLowerCase() === x.name.toLowerCase()){
                                let section = document.createElement('section');
                                section.id = 'searched';
                                let figure = document.createElement('figure');
                                figure.innerHTML = `
                                    <img src = "${x.image}"  alt = "no image">
                                `;
                                figure.setAttribute('id','selected-device');
                                let article = document.createElement('article');
                                article.innerHTML = `
                                    <h1>${x.name}</h1>
                                    <p>${x.type}</p>
                                    <p>${x.specs.storage} STORAGE </p>
                                    <p>${x.specs.ram} RAM</p>
                                    <h2>${x.specs.price}</h2>
                                    <button id="favourites-button">ADD TO FAVOURITES</button>

                                `;
                                article.setAttribute('id', 'device-details')
                                section.append(figure, article)
                                parent.append(section);
                                let button = document.querySelector('#favourites-button');
                                button.addEventListener('click', () => {
                                    addToFavourite(x.name, x.type, x.specs.ram, x.specs.storage, x.specs.price, x.image)
                                })
                        }
                    })
                })
            }
        })
    })
    shoppingCart.addEventListener('click', () => {
        showFavourites();
    })
    
})
document.querySelector('#shoppingCart').addEventListener('click', () => {
    showFavourites();
})
//function for adding devices to the favourites lists
function addToFavourite(Name, Type, Ram, Storage, Price, img){
    let obj = {
        name: Name,
        type: Type,
            specs:{
                ram: Ram,
                storage: Storage,
                price: Price,

            },
        image: img
    }
    cart.push(obj);
    alert("Added");

}
//shopping cart event

function showFavourites(){
    let parent = document.querySelector('.container');
    let sections = document.querySelectorAll('section');
                sections.forEach(x => {
                    x.remove()
                })
    if(cart.length > 0){
        let section = document.createElement('section');
        section.id = 'cart-items';

        cart.forEach(item => {
            
            let picture = document.createElement('img');
            picture.src = item.image;

            let article = document.createElement('article');
            article.innerHTML = `
                <p>${item.name}</p>
                <p>${item.type}</p>
                <p>${item.specs.ram} RAM</p>
                <p>${item.specs.storage} STORAGE</p>
                <p>${item.specs.price}</p>
            `;
            section.append(picture, article);
            parent.append(section);
        })
    }else{
        let paragraph = document.createElement('p');
        let section = document.createElement('section');
        section.id = 'empty-cart'
        paragraph.textContent = 'Your shopping cart is empty';
        section.append(paragraph);
        parent.append(section);
    }
}