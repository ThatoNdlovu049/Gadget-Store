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
                                    <button id="favourits-button">ADD TO FAVOURITES</button>

                                `;
                                article.setAttribute('id', 'device-details')
                                section.append(figure, article)
                                parent.append(section);
                                
                        }
                    })
                })
            }
        })
    })
    
})