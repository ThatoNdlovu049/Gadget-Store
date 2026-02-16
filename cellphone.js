let phones = [
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
}
];
let cart = [];

let links = document.querySelectorAll('a');
let parent = document.querySelector('.container');
let searchIcon = document.querySelector('#search-icon img');

searchIcon.addEventListener('click', () => {
    let search = document.querySelector('#search-icon');
    if(searchIcon){
        searchIcon.remove();
    }
    let input = document.createElement('input');
    input.type = "text";
    input.id = "textbox";

    let image = document.createElement('img');
    image.src = "icons/search_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";

    search.append(input, image);

    image.addEventListener("click", () => {
        let parent = document.querySelector('.container');

        let textbox = document.querySelector('#textbox');
        let value = textbox.value;

        let container = document.createElement('section');
        container.id = 'searched';

        let heading = document.querySelectorAll('section');
                heading.forEach(x => {
                    x.remove()
                })
        phones.forEach(gadget => {
            

                if(gadget.name.toLowerCase() === value.toLowerCase() || gadget.type.toLowerCase() === value.toLowerCase()){
                

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
                    let heading = document.querySelectorAll('section');
                    heading.forEach(x => {
                        x.remove()
                    })
                        phones.forEach(x => {
                            
                            if(name.textContent.toLowerCase() === x.name.toLowerCase()){
                                let section = document.createElement('section');
                                section.id = 'searched';
                                let figure = document.createElement('figure');
                                figure.innerHTML = `
                                    <img src = "${x.image1}"  alt = "no image">
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
    })//
})

links.forEach(x => {
    x.addEventListener('click', () =>{
        let element = x.querySelector('p').textContent;
        let sections = document.querySelectorAll('section');
        for(let i = 0; i < sections.length; i++){
            sections[i].remove();
        }
        let notFound = true;
        phones.forEach(cell => {
            if(element.toLowerCase() === cell.name.toLowerCase()){

                notFound = false;
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
                    <p>${cell.specs.storage} STORAGE </p>
                    <p>${cell.specs.ram} RAM</p>
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
                parent.append(figure, article, figure2);
                
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
                    addToFavourite(cell.name, cell.type, cell.storage, cell.price, cell.image1, cell.image2, cell.image3, cell.image4, cell.image5)
                })
            }
            
                
        })
        //if device is not found in the list
        if(notFound){
            let paragraph = document.createElement('p');
            paragraph.textContent = 'Device not found';
            parent.appendChild(paragraph);
        }
    })
})


//function for adding devices to the favourites lists
function addToFavourite(Name, Type, Ram, Storage, Price, img1,img2,img3,img4,img5){
    let obj = {
        name: Name,
        type: Type,
            specs:{
                ram: Ram,
                storage: Storage,
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