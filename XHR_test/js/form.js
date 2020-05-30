// Брал с этого сайта https://rapidapi.com/accujazz/api/rawg-video-games-database?endpoint=apiendpoint_e4e2766f-1422-4b88-bd10-22acdb7c9a16

let cardList = document.querySelector('.card-list');
let home = document.querySelector('.home');

home.addEventListener('click', send);

let requestUrl = 'https://rawg-video-games-database.p.rapidapi.com/games';


function sendRequest(method, url, body = null) {

    // 2функции resolve - вызываем если успех, reject - вызываем если есть ошибка 
    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        // Открыли запрос
        xhr.open(method, url); //1п - метод по которуму мы будет делать запрос 2п - юрл адресс

        // Распарсить из сnроки в обьект. Тип ответа должен быть json
        xhr.responseType = 'json';

        // Указать что мы отправляем данные в формате json
        xhr.setRequestHeader('Content-Type', 'application/json'); //1 - название хедера, 2 - значение
        xhr.setRequestHeader('x-rapidapi-host', 'rawg-video-games-database.p.rapidapi.com');
        xhr.setRequestHeader('x-rapidapi-key', 'e334fc78cfmsh4e9519bbabf1bacp1522dfjsnb7ab200b8d75');

        // При успешной загрузке попадаем в onload
        xhr.onload = () => {
                // Все что выше 400 обозначается ошибкой
                if (xhr.status >= 400) {
                    reject(xhr.response);
                } else {
                    resolve(xhr.response);
                }

            }
            // При ошибке попадаем в onerror
        xhr.onerror = () => {
            reject(xhr.response);
        }

        // отправить 
        xhr.send(JSON.stringify(body));
    })

}


// fetch
// function sendRequest(method, url, body = null) {

//     const headers = {
//         'Content-Type': 'application/json',
//         'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
//         'x-rapidapi-key': 'e334fc78cfmsh4e9519bbabf1bacp1522dfjsnb7ab200b8d75'
//     }

//     return fetch(url, {
//         method: method,
//         headers: headers,
//     }).then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         return response.json().then(err => {
//             const e = new Error('Что то пошло не так');
//             e.data = err;
//             throw e;
//         })
//     })

// }

send();

function send() {

    sendRequest('GET', requestUrl)
        .then(data => {

            init();
            data.results.forEach(render);
            let divCard = document.getElementsByClassName('card');
            for (let i = 0; i < divCard.length; i++) {
                divCard[i].addEventListener('click', (e) => {
                    if (e.target.dataset.action === 'details') {
                        init();
                        let detailGame = data.results.filter(item => {
                            return item.slug === e.target.dataset.detail;
                        });
                        detail(detailGame[0].slug);
                    }
                })
            }

        })
        .catch(err => console.log(err));

}


function init() {

    cardList.textContent = '';

}

function render(games) {

    let divCard = document.createElement('div');
    divCard.classList = 'col-md-4 mb-2 card-wrapper';
    divCard.insertAdjacentHTML('beforeend', `
    <div class="card p-1"><img src="${games.background_image}" alt="" class="img">
        <hr class="mt-2 mb-1">
        <div class="wrapper">
            <div class="card-info">Название: ${games.name}</div>
            <div class="card-info">Рейтинг: ${games.rating}</div>
            <div class="card-info">Время игры: ${games.playtime}</div>
        </div>
        <button class="btn btn-primary mt-3" data-action="details" data-detail="${games.slug}">Подробнее</button>
    </div>`);

    cardList.insertAdjacentElement('beforeend', divCard);

}


function renderDetail(game) {

    let name = game.name || '',
        description = game.description || '',
        poster = game.background_image || '',
        originalName = game.name_original || '',
        genre = [game.genres[0].name || '', game.genres[1] == undefined || null ? '' : game.genres[1].name],
        developer = game.developers[1] == undefined || null ? '-------' : game.developers[1].name,
        publisher = game.developers[0] == undefined || null ? '-------' : game.developers[0].name,
        released = game.released || '',
        rating = game.rating || '',
        scrinshots = [game.background_image_additional || ''],
        requirementsMin = game.platforms[0].requirements == undefined || null ? 'Нет данных' : game.platforms[0].requirements.minimum,
        requirementsRec = game.platforms[0].requirements == undefined || null ? '' : game.platforms[0].requirements.recommended == undefined ? '' : game.platforms[0].requirements.recommended;

    const divDetails = document.createElement('div');
    divDetails.classList = 'col-md-12';
    divDetails.insertAdjacentHTML('afterbegin', `
        <div class="detail">
            <h1 class="detail__title ml-2 mb-4">${name}</h1>
            <div class="detail__header mb-3">
                <div class="detail__poster"><img src="${poster}" alt="Постер"></div>
                <div class="detail__info">
                    <h3 class="detail__info__title">
                    ${originalName}
                    </h3>
                    <div class="detail__genres">
                        <span class="name__info">Жанр:</span> ${genre[0]} / ${genre[1]}
                    </div>
                    <div class="detail__develepore">
                        <span class="name__info">Разработчик:</span> ${developer}
                    </div>
                    <div class="detail__publisher">
                        <span class="name__info">Издатель:</span> ${publisher}
                    </div>
                    <div class="detail__info__relise">
                        <span class="name__info">Дата выхода:</span> ${released}
                    </div>
                    <div class="detail__rating">
                        <span class="name__info">Рейтинг:</span>
                        <span class="rating">
                        ${rating}
                    </span>
                    </div>
                    <div class="detail__scrinshot">
                        <span class="name__info">Скриншоты игры:</span>
                        <div class="scrinshot__img">
                            <img src="${scrinshots[0]}" alt="Скриншот">
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail__description">
                <p class="subtitle">Описание игры:</p>
                ${description }
            </div>
            <div class="detail__description">
                <p class="subtitle">Системные стребования:</p>
                ${requirementsMin}
                ${requirementsRec}
            </div>
        </div>`);

    cardList.insertAdjacentElement('afterbegin', divDetails);

}


function renderNav(page) {

    let wrapperNav = document.querySelector('.wrapper-nav');
    let navPage = `<nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
    </nav>`;
    wrapperNav.insertAdjacentHTML('beforeend', navPage);

}


function detail(slug) {

    sendRequest('GET', requestUrl + '/' + slug)
        .then(data => {
            console.log(data);
            renderDetail(data);
        })
        .catch(err => console.log(err));

}
