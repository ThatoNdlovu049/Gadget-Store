let gadgets = [
    {
        name: "Beats solo4",
        type: "HEADSETS",
            specs:{
                noiseCancelation: "ACTIVE",
                connectivity: "BlUETOOTH",
                price: "R3 999",

            },
        image1: "headsets/kenny-eliason-bE3_aFt85Y8-unsplash.jpg",
        image2: "headsets/anna-keibalo-OXzE2YOB0s8-unsplash.jpg",
        image3: "headsets/anna-keibalo-3vdOy66U8KI-unsplash.jpg",
        image4: "headsets/ahmad-mohammed-i0jeUpx43JI-unsplash.jpg",
        image5: "headsets/85mm-ca-7E_lwxLYLG0-unsplash.jpg"
    },
    {
        name: "Airpods 4 pro",
        type: "EARPODS",
            specs:{
                noiseCancelation: "ACTIVE",
                connectivity: "BlUETOOTH",
                price: "R3 999",

            },
        image1: "headsets/andres-jasso-6hQB-U2nWG8-unsplash.jpg",
        image2: "headsets/pexels-liana-horodetska-5077625-7586239.jpg",
        image3: "headsets/pexels-bekirdonmeez-10042184.jpg",
        image4: "headsets/pexels-kavin4666-9204671.jpg",
        image5: "headsets/pexels-alipli-30157961.jpg"
    },
    {
        name: "Philips TAT1209",
        type: "EARPODS",
            specs:{
                noiseCancelation: "IN-ACTIVE",
                connectivity: "BlUETOOTH",
                price: "R399",

            },
        image1: "headsets/daba-sir-gdvWsgXIyNY-unsplash.jpg",
        image2: "headsets/pexels-zion-10104822.jpg",
        image3: "headsets/pexels-zion-10104826.jpg",
        image4: "headsets/pexels-zion-10104887.jpg",
        image5: "headsets/pexels-zion-10104891.jpg"
    },
    {
        name: "JBL tune520BT",
        type: "HEADSETS",
            specs:{
                noiseCancelation: "ACTIVE",
                connectivity: "BlUETOOTH",
                price: "R599",

            },
        image1: "headsets/aman-shrestha-OYeACuYA8qM-unsplash.jpg",
        image2: "headsets/tamas-pap-pqMG6qAEZY4-unsplash.jpg",
        image3: "headsets/richu-raphael-D7q4tPmOuCQ-unsplash.jpg",
        image4: "headsets/ayrus-hill-wI9aSTf8Hwo-unsplash.jpg",
        image5: "headsets/jesus-audon-hialgo-kU93eEHnPps-unsplash.jpg"
    },
    {
        name: "JBL 770NC",
        type: "HEADSETS",
            specs:{
                noiseCancelation: "ACTIVE",
                connectivity: "BlUETOOTH",
                price: "R1 499",

            },
        image1: "headsets/niclas-illg-xVBPy8jwqO4-unsplash.jpg",
        image2: "headsets/rowan-fonda-OooIVLCWPrI-unsplash.jpg",
        image3: "headsets/ayrus-hill-5nmXU79iCfU-unsplash.jpg",
        image4: "headsets/niclas-illg---z13hWoxio-unsplash.jpg",
        image5: "headsets/niclas-illg-l9Z8SE377OU-unsplash.jpg"
    },
    {
        name: "AirPods MAX",
        type: "HEADSETS",
            specs:{
                noiseCancelation: "ACTIVE",
                connectivity: "BlUETOOTH",
                price: "R9 999",

            },
        image1: "headsets/ravi-palwe-ax23KYiUdJc-unsplash.jpg",
        image2: "headsets/the-blowup-lD1OLuSf9GU-unsplash.jpg",
        image3: "headsets/matt-birchler-IaTuyBQ4gTw-unsplash.jpg",
        image4: "headsets/project-290-Q-raIe-gAOo-unsplash.jpg",
        image5: "headsets/jass-akajassd-hernandez-AP3CrWKDKXc-unsplash.jpg"
    },
    {
        name: "EarPods",
        type: "Earsets",
            specs:{
                noiseCancelation: "IN-ACTIVE",
                connectivity: "WIRE",
                price: "R599",

            },
        image1: "headsets/jocelyn-morales-lIgFLLDdqMk-unsplash.jpg",
        image2: "headsets/pexels-efrem-efre-2786187-16138744.jpg",
        image3: "headsets/pexels-ravi-roshan-2875998-18533720.jpg",
        image4: "headsets/pexels-ron-lach-9653903.jpg",
        image5: "headsets/pexels-shyam-mishra-203327-16100371.jpg"
    },
    {
        name: "AirPods 3",
        type: "Earpods",
            specs:{
                noiseCancelation: "IN-ACTIVE",
                connectivity: "BLUETOOTH",
                price: "R2 999",

            },
        image1: "headsets/yousef-samuil-JMQEHv9WFpM-unsplash.jpg",
        image2: "headsets/omid-armin-2wzi5TpVRZo-unsplash.jpg",
        image3: "headsets/mayur-ysU_C-nnrZY-unsplash.jpg",
        image4: "headsets/alireza-khoddam-mUlkjKaGteg-unsplash.jpg",
        image5: "headsets/jonas-jacobsson-W6wKfTs5Rxc-unsplash.jpg"
    }
];
//menue function
function toggleMenu() {
    document.getElementById('ham').classList.toggle('open');
    document.getElementById('menuBox').classList.toggle('open');
}

let cart = [];

let links = document.querySelectorAll('a');
let parent = document.querySelector('.container');
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

    newSearchIcon.addEventListener("click", () => {
        handleSearch()
    });
    shoppingCart.addEventListener('click', () => {
        showFavourites();
    });
})
document.querySelector('#shoppingCart').addEventListener('click', () => {
    showFavourites();
})

links.forEach(x => {
    x.addEventListener('click', () =>{
        let element = x.querySelector('p').textContent;
        let section = document.createElement('section');
        section.id = 'selected-device-container';
        let sections = document.querySelectorAll('section');
        for(let i = 0; i < sections.length; i++){
            sections[i].remove();
        }
        
        gadgets.forEach(cell => {
            if(element.toLowerCase() === cell.name.toLowerCase()){

                let figure = document.createElement('figure');
                figure.innerHTML = `
                    <a>
                        <img src="${cell.image1}" alt="no image">
                    </a>
                `;
                figure.setAttribute('id','selected-device')
                let article = document.createElement('article');
                article.innerHTML = `
                    <h1>${cell.name}</h1>
                    <p>${cell.type}</p>
                    <p>${cell.specs.noiseCancelation} NOISE CANCELATION </p>
                    <p>${cell.specs.connectivity} CONNECTIVITY</p>
                    <h2>${cell.specs.price}</h2>
                    <button id="favourits-button">ADD TO FAVOURITES</button>

                `;
                article.setAttribute('id', 'device-details')

                let figure2 = document.createElement('figure');
                figure2.innerHTML = `
                    <a href="#">
                        <img src="${cell.image2}" alt="no image">
                    </a>
                    <a>
                        <img src="${cell.image3}" alt="no image">
                    </a>
                    <a>
                        <img src="${cell.image4}" alt="no image">
                    </a>
                    <a>
                        <img src="${cell.image5}" alt="no image">
                    </a>
                `;
                figure2.setAttribute('id', 'alternative-pictures')
                section.append(figure, article, figure2);
                parent.append(section);
                
                let selectedAlternative = document.querySelector('#alternative-pictures');

                let anchor = selectedAlternative.querySelectorAll('a');
                anchor.forEach(device => {
                    device.addEventListener('click', () => {
                        let phone = device.querySelector('img');
                        let mainPhone = document.querySelector('#selected-device')
                        let x = mainPhone.querySelector('img');

                        let oldMain = x.src;
                        let newMain = phone.src;

                        x.src = newMain;
                        phone.src = oldMain;
                    })
                })
                let button = document.querySelector('#favourits-button');
                button.addEventListener('click', () =>{
                    addToFavourite(cell.name, cell.type,cell.specs.noiseCancelation, cell.specs.connectivity, cell.specs.price, cell.image1, cell.image2, cell.image3, cell.image4, cell.image5)
                })
            }                         
        });
    });
});


//function for adding devices to the favourites lists
function addToFavourite(Name, Type, NoiseCancelation, Connectivity, Price, img1,img2,img3,img4,img5){
    let obj = {
        name: Name,
        type: Type,
            specs:{
                noiseCancelation: NoiseCancelation,
                connectivity: Connectivity,
                price: Price,

            },
        image1: img1,
        image2: img2,
        image3: img3,
        image4: img4,
        image5: img5
    }
    cart.push(obj);
    alert("Added");

}
//shopping cart function
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
                <p>${item.specs.noiseCancelation} NOISE CANCELATION</p>
                <p>${item.specs.connectivity} CONNECTIVITY</p>
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
// Function: handle search
function handleSearch() {
    let parent = document.querySelector('.container');
    let textbox = document.querySelector('#textbox');
    let value = textbox.value;

    let container = document.createElement('section');
    container.id = 'searched';

    let heading = document.querySelectorAll('section');
    heading.forEach(x => x.remove());

    gadgets.forEach(gadget => {
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

            link.addEventListener('click', () => {
                expandDevice(gadget);
            });
        }
    });
}

// Function: expand device details
function expandDevice(gadget) {
    let heading = document.querySelectorAll('section');
    heading.forEach(x => x.remove());

    let parent = document.querySelector('.container');
    let section = document.createElement('section');
    section.id = 'selected-device-container';

    let figure = document.createElement('figure');
    figure.innerHTML = `<img src="${gadget.image1}" alt="no image">`;
    figure.setAttribute('id', 'selected-device');

    let article = document.createElement('article');
    article.innerHTML = `
        <h1>${gadget.name}</h1>
        <p>${gadget.type}</p>
        <p>${gadget.specs.noiseCancelation} NOISE CANCELATION </p>
        <p>${gadget.specs.connectivity} CONNECTIVITY</p>
        <h2>${gadget.specs.price}</h2>
        <button id="favourits-button">ADD TO FAVOURITES</button>
    `;
    article.setAttribute('id', 'device-details');

    let figure2 = document.createElement('figure');
    figure2.innerHTML = `
        <a href="#"><img src="${gadget.image2}" alt="no image"></a>
        <a><img src="${gadget.image3}" alt="no image"></a>
        <a><img src="${gadget.image4}" alt="no image"></a>
        <a><img src="${gadget.image5}" alt="no image"></a>
    `;
    figure2.setAttribute('id', 'alternative-pictures');

    section.append(figure, article, figure2);
    parent.append(section);

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

    // Add to favourites
    let button = document.querySelector('#favourits-button');
    button.addEventListener('click', () => {
        addToFavourite(
            gadget.name,
            gadget.type,
            gadget.price,
            gadget.image1,
            gadget.image2,
            gadget.image3,
            gadget.image4,
            gadget.image5
        );
    });
}