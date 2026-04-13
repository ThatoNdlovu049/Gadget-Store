let gadgets = [
    {
        name: "Iphone 17 Pro",
        type: "Smartphone",
            specs:{
                ram: "8GB",
                storage: "128GB",
                price: "R28 999",

            },
        image1: "cellphones/amanz-_Z3tJG8Kiyc-unsplash.jpg",
        image2: "cellphones/ubeyonroad-oLZ2htMNhbA-unsplash.jpg",
        image3: "cellphones/igor-omilaev-3EYu6B86yWk-unsplash.jpg",
        image4: "cellphones/ubeyonroad-WbbUEF5XKcA-unsplash.jpg",
        image5: "cellphones/thai-nguyen-cJcSWGbNlzU-unsplash.jpg"
    },
    
    {
        name: "Iphone 15 Pro",
        type: "Smartphone",
            specs:{
                ram: "8GB",
                storage: "128GB",
                price: "R28 999",

            },
        image1: "cellphones/pexels-vickygraphy-13367286-new.jpg",
    }
];
//menue function
function toggleMenu() {
    document.getElementById('ham').classList.toggle('open');
    document.getElementById('menuBox').classList.toggle('open');
}

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
        handleSearch();        
    })
    shoppingCart.addEventListener('click', () => {
        showFavourites();
    })
    
})
document.querySelector('#shoppingCart').addEventListener('click', () => {
    showFavourites();
})
//function for adding devices to the favourites lists
function addToFavourite(Name, Type, Ram, Storage, Price, img1){
    let obj = {
        name: Name,
        type: Type,
            specs:{
                ram: Ram,
                storage: Storage,
                price: Price,

            },
        image1: img1
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
            picture.src = item.image1;

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

// Search function
function handleSearch() {
    let parent = document.querySelector('.container');
    let textbox = document.querySelector('#textbox');
    let value = textbox.value;
    let container = document.createElement('section');
    container.id = 'searched';

    gadgets.forEach(gadget => {
        let heading = document.querySelectorAll('section');
        heading.forEach(x => x.remove());

        if (gadget.name.toLowerCase() === value.toLowerCase() || gadget.type.toLowerCase() === value.toLowerCase()) {
            let link = document.createElement('a');
            link.href = '#';

            let img = document.createElement('img');
            img.src = gadget.image1;
            img.alt = "no image";

            let name = document.createElement('p');
            name.textContent = gadget.name;

            let price = document.createElement('p');
            price.textContent = gadget.specs.price;

            link.append(img, name, price);
            container.append(link);
            parent.append(container);
            textbox.value = "";

            link.addEventListener('click', () => expandDevice(gadget));
        }else{
            let section = document.createElement('section');
            section.id = 'empty-cart';
            let paragraph = document.createElement('p');
            paragraph.textContent = 'DEVICE NOT FOUND';
            section.append(paragraph);
            parent.append(section);
        }
    });
}

// Expand function
function expandDevice(gadget) {
    let heading = document.querySelectorAll('section');
    heading.forEach(x => x.remove());

    let parent = document.querySelector('.container');
    let section = document.createElement('section');
    section.id = 'searched';

    let figure = document.createElement('figure');
    figure.innerHTML = `<img src="${gadget.image1}" alt="no image">`;
    figure.setAttribute('id', 'selected-device');

    let article = document.createElement('article');
    article.innerHTML = `
        <h1>${gadget.name}</h1>
        <p>${gadget.type}</p>
        <p>${gadget.specs.storage} STORAGE </p>
        <p>${gadget.specs.ram} RAM</p>
        <h2>${gadget.specs.price}</h2>
        <button id="favourites-button">ADD TO FAVOURITES</button>
    `;
    article.setAttribute('id', 'device-details');
    let figure2 = document.createElement('figure');
    figure2.innerHTML = `
        <a href="#">
            <img src="${gadget.image2}" alt="no image">
        </a>
        <a>
            <img src="${gadget.image3}" alt="no image">
        </a>
        <a>
            <img src="${gadget.image4}" alt="no image">
        </a>
        <a>
            <img src="${gadget.image5}" alt="no image">
        </a>
    `;
    figure2.setAttribute('id', 'alternative-pictures')

    section.append(figure, article,figure2);
    parent.append(section);

    //swap alternative pictures
    // Swap images when alternative clicked
    let selectedAlternative = document.querySelector('#alternative-pictures');
    let anchor = selectedAlternative.querySelectorAll('a');
    anchor.forEach(device => {
        device.addEventListener('click', () => {
            let phone = device.querySelector('img');
            let mainPhone = document.querySelector('#selected-device');
            let x = mainPhone.querySelector('img');

            let oldMain = x.src;
            let newMain = phone.src;

            x.src = newMain;
            phone.src = oldMain;
        });
    });


    //add to favourites
    let button = document.querySelector('#favourites-button');
    button.addEventListener('click', () => {
        addToFavourite(
            gadget.name,
            gadget.type,
            gadget.specs.ram,
            gadget.specs.storage,
            gadget.specs.price,
            gadget.image1
        );
    });
}