const buttonCart = document.querySelector('.button-cart');
const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const buttonAuth = document.querySelector('.button-auth');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const modalAuth = document.querySelector('.modal-auth');
const logInForm = document.getElementById('logInForm');
const closeAuth = document.querySelector('.close-auth');
const loginInput = document.getElementById('login');
const containerPromo = document.querySelector('.container-promo');
const cardsRestaurants = document.querySelector('.cards-restaurants');
const restaurants = document.querySelector('.restaurants');
const menu = document.querySelector('.menu');
const cardsMenu = document.querySelector('.cards-menu');
const logo = document.querySelector('.logo');
const restaurantTitle = document.querySelector('.restaurant-title');
const rating = document.querySelector('.rating');
const minPrice = document.querySelector('.price');
const category = document.querySelector('.category');
const inputSearch = document.querySelector('.input-search');
const modalBody = document.querySelector('.modal-body');
const modalPrice = document.querySelector('.modal-pricetag');
const buttonClearBasket = document.querySelector('.clear-cart');

let login = localStorage.getItem('login');


const getData = async function(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошбки ${response.status}!`)
    }

    return await response.json();
};


const toggleModalAuth = () => {
    modalAuth.classList.toggle('is-open');
}

const toggleModal = () => {
    modal.classList.toggle("is-open");
}


const logIn = (event) => {
    event.preventDefault();
    if (!loginInput.value) {
        alert('Введите логин!');
    } else {
        login = loginInput.value;
        localStorage.setItem('login', login);

        toggleModalAuth();
        atorizationСheck();
        logInForm.reset();
    }

}


const authorization = () => {

    userName.textContent = login;
    buttonAuth.style.display = "none";
    buttonOut.style.display = "flex";
    userName.style.display = "inline";
    buttonCart.style.display = "flex";

    const logOut = () => {
        login = null;
        localStorage.removeItem('login');
        atorizationСheck();
        buttonOut.removeEventListener('click', logOut);
    }

    buttonOut.addEventListener('click', logOut);

    buttonAuth.removeEventListener('click', toggleModalAuth);
    closeAuth.removeEventListener('click', toggleModalAuth);
    logInForm.removeEventListener('submit', logIn);

}



const notAuthorization = () => {

    buttonAuth.style.display = "";
    buttonOut.style.display = "";
    userName.style.display = "";
    buttonCart.style.display = "";
    buttonAuth.addEventListener('click', toggleModalAuth);
    closeAuth.addEventListener('click', toggleModalAuth);
    logInForm.addEventListener('submit', logIn);
    closeMenu();

}


const createCard = (obj) => {

    const { name, time_of_delivery: timeOfDelivery, stars, price, kitchen, image, products } = obj;

    const card = document.createElement('div');
    // card.classList.add('card card-restaurant');
    card.className = 'card card-restaurant';
    card.products = products;
    card.info = [name, price, stars, kitchen];


    card.insertAdjacentHTML('beforeend', `
    <img src="${image}" alt="image" class="card-image"/>
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title">${name}</h3>
                <span class="card-tag tag">${timeOfDelivery} мин</span>
            </div>
        
            <div class="card-info">
                <div class="rating">
                    ${stars}
                </div>
                <div class="price">От ${price} ₽</div>
                <div class="category">${kitchen}</div>
            </div>
        </div>`);

    cardsRestaurants.insertAdjacentElement('beforeend', card);

}



const atorizationСheck = () => {
    if (login) {
        console.log('Авторизован!');
        authorization();

    } else {

        notAuthorization();

        console.log('Не авторизован!');

    }

}


const createMenu = ({ id, name, description, price, image }) => {

    const cardItem = document.createElement('div');
    cardItem.classList.add('card');
    cardItem.innerHTML = `<img src="${image}" alt="image" class="card-image" />
    <div class="card-text">
    <div class="card-heading">
        <h3 class="card-title card-title-reg">${name}</h3>
    </div>
    <div class="card-info">
        <div class="ingredients">${description}
        </div>
    </div>
    <div class="card-buttons">
        <button class="button button-primary button-add-cart" id="${id}">
            <span class="button-card-text">В корзину</span>
            <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold card-price">${price} ₽</strong>
    </div>`;

    cardsMenu.insertAdjacentElement('beforeend', cardItem);

}

const openMenu = (event) => {
    const target = event.target;
    const restaurant = target.closest('.card-restaurant');

    if (restaurant && login) {
        // const info = restaurant.dataset.info.split(',');

        const [name, price, stars, kitchen] = restaurant.info;



        cardsMenu.textContent = '';
        containerPromo.classList.add('hide');
        restaurants.classList.add('hide');
        menu.classList.remove('hide');

        restaurantTitle.textContent = name;
        rating.textContent = stars;
        minPrice.textContent = `От ${price} ₽`;
        category.textContent = kitchen;


        getData(`./db/${restaurant.products}`).then(function(data) {
            data.forEach(createMenu);
        });
    } else if (!login) {
        toggleModalAuth();
    }

}

function closeMenu() {

    containerPromo.classList.remove('hide');
    restaurants.classList.remove('hide');
    menu.classList.add('hide');

}

const basket = JSON.parse(localStorage.getItem('basket')) || [];

const addToBasket = (event) => {
    const target = event.target;

    const buttonAddToBasket = target.closest('.button-add-cart');

    if (buttonAddToBasket) {

        const card = target.closest('.card');
        const title = card.querySelector('.card-title-reg').textContent;
        const cost = card.querySelector('.card-price').textContent;
        const id = buttonAddToBasket.id;

        const food = basket.find(item => item.id === id);

        if (food) {
            food.count += 1;
        } else {
            basket.push({
                id,
                title,
                cost,
                count: 1
            });


        }
        const localObj = JSON.stringify(basket);
        localObj = localStorage.setItem('basket', localObj);
        renderCart();
    }
}

const renderCart = () => {
    modalBody.textContent = '';
    if (basket.length === 0) {
        modalBody.textContent = 'Вы еще ничего не положили =(';
    }

    basket.forEach(({ id, title, cost, count }) => {
        const itemBasket = `<div class="food-row">
            <span class="food-name">${title}</span>
            <strong class="food-price">${cost}</strong>
            <div class="food-counter">
                <button class="counter-button counter-minus" data-id="${id}">-</button>
                <span class="counter">${count}</span>
                <button class="counter-button counter-plus"  data-id="${id}">+</button>
            </div>
        </div>`;

        modalBody.insertAdjacentHTML('afterbegin', itemBasket);
    });

    const priceTotal = basket.reduce((accum, item, i, arr) => {
        return accum + (parseFloat(item.cost) * item.count);
    }, 0);

    modalPrice.textContent = priceTotal + ' ₽';
}


const changeCount = (event) => {
    const target = event.target;

    if (target.classList.contains('counter-button')) {
        const food = basket.find((item) => {
            return item.id === target.dataset.id;
        });
        if (target.classList.contains('counter-minus')) {
            food.count--;
            if (food.count === 0) {
                basket.splice(basket.indexOf(food), 1);
            }
        }

        if (target.classList.contains('counter-plus')) {
            food.count++;
        }
        renderCart();
    }

}



function init() {
    getData('./db/partners.json').then(function(data) {
        data.forEach(createCard);
    });


    cartButton.addEventListener('click', () => {
        renderCart();
        toggleModal();

    });

    buttonClearBasket.addEventListener('click', () => {
        basket.length = 0;
        localStorage.removeItem('basket');
        renderCart();
    });

    modalBody.addEventListener('click', changeCount);

    cardsMenu.addEventListener('click', addToBasket);

    close.addEventListener('click', toggleModal);

    cardsRestaurants.addEventListener('click', openMenu);

    logo.addEventListener('click', closeMenu);

    inputSearch.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
            const target = event.target;
            const value = target.value.toLowerCase().trim();
            target.value = '';
            if (!value || value.length < 3) {
                target.style.backgroundColor = 'tomato';
                setTimeout(() => {
                    target.style.backgroundColor = '';
                }, 2000);
                return;
            }


            const goods = [];

            getData('./db/partners.json').then((data) => {
                const products = data.map(item => item.products);

                products.forEach(product => {
                    getData(`./db/${product}`).then(data => {
                        goods.push(...data);

                        const searchGoods = goods.filter((item) => {
                            return item.name.toLowerCase().includes(value);
                        });

                        cardsMenu.textContent = '';
                        containerPromo.classList.add('hide');
                        restaurants.classList.add('hide');
                        menu.classList.remove('hide');

                        restaurantTitle.textContent = 'Рузультат поиска';
                        rating.textContent = '';
                        minPrice.textContent = '';
                        category.textContent = '';

                        return searchGoods;

                    }).then((data) => {
                        data.forEach(createMenu);
                    })
                });
            });


        }
    });

    atorizationСheck();
}

init();