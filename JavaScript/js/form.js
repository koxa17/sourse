let tasks = JSON.parse(localStorage.getItem('task')) || [];

let todoReques;
let completedTasks;

// const sendRequest = (method, url, body = null) => {
//     return new Promise((resolve, reject) => {

//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);

//         xhr.responseType = 'json';
//         xhr.setRequestHeader('Content-type', 'application/json');

//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response);
//             } else {
//                 resolve(xhr.response);
//             }
//         };
//         xhr.onerror = () => {
//             reject(xhr.response);
//         };

//         xhr.send(JSON.stringify(body));

//     })
// }

class Todo {
    constructor() {
        this.list = document.querySelector('.list-group');
        this.form = document.forms['task-form'];
        this.input = this.form.elements[0];
        this.button = this.form.elements[1];
    }

    init() {
        this.list.textContent = '';

        tasks.forEach(item => {
            this.renderTask(item);
            this.complited(item.id, item.complited);
        });

        localStorage.setItem('task', JSON.stringify(tasks));
    }

    events() {

        this.list.addEventListener('click', e => this.eventDeleteTask(e));
        this.list.addEventListener('click', e => this.eventEditTask(e));
        this.list.addEventListener('click', e => this.eventDoneTask(e));

        this.form.addEventListener('submit', e => this.eventSubmit(e));

    }

    eventSubmit(e) {

        e.preventDefault();

        let value = this.input.value;

        let newTask = {
            title: value.trim(),
            id: this.generationId(),
            complited: false
        };
        this.form.reset();
        tasks.push(newTask);
        this.renderTask(newTask);

        localStorage.setItem('task', JSON.stringify(tasks));
    }

    eventDeleteTask(e) {

        if (e.target.classList.contains('fa-trash')) {
            this.delete(e.target.dataset.id);
        }

    }

    eventEditTask(e) {

        if (e.target.classList.contains('fa-pencil-alt')) {
            this.edit(e.target.closest('.list-group-item').querySelector('.text-task'), e.target.dataset.id);
        }

    }

    eventDoneTask(e) {

        if (e.target.classList.contains('fa-check-circle')) {
            this.done(e.target.dataset.id);
        }

    }

    generationId() {
        return `${Math.round(Math.random() * 1e8)}`;
    }

    renderTask(obj) {

        let li = document.createElement('li');
        let exampleLi = `<p class="text-task m-0" contenteditable="false">${obj.title}</p>
                <div class="change-button d-flex justify-content-around ">
                    <i class="far fa-check-circle" data-id=${obj.id}></i>
                    <i class="fas fa-pencil-alt edit" data-id=${obj.id}></i>
                    <i class="fas fa-trash" data-id=${obj.id}></i>
                </div>`;
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.dataset.id = obj.id;
        li.insertAdjacentHTML('afterbegin', exampleLi);

        this.list.insertAdjacentElement('beforeend', li);

    }

    complited(id, compl) {

        if (compl === true) {
            let li = document.querySelector(`li[data-id="${id}"]`);
            li.classList.add('bg-success');
        }

    }

    delete(id) {

        let deleItem = tasks.filter(item => {
            return item.id === id;
        });

        let index = tasks.indexOf(deleItem[0]);

        if (index > -1) {
            tasks.splice(index, 1);
            this.init();
        }

    }

    done(id) {

        let doneTaks = tasks.filter(item => {
            return item.id === id;
        })

        if (doneTaks[0].complited === false) {
            doneTaks[0].complited = true;

        } else if (doneTaks[0].complited === true) {
            doneTaks[0].complited = false;

        }

        this.init();

    }

    edit(element, id) {
        let text;
        let curretTask;
        let icon = element.closest('.list-group-item').querySelector('.edit');
        if (element.contentEditable === 'false') {
            element.contentEditable = true;
            element.focus();
            element.style = "border-bottom: 1px solid blueviolet;";
            icon.classList.add('fa-save');

        } else if (element.contentEditable === 'true') {
            element.contentEditable = false;
            element.blur();
            element.style = "";
            icon.classList.remove('fa-save');

            text = element.textContent.trim();

            curretTask = tasks.filter(item => {
                return item.id === id;
            });

            let index = tasks.indexOf(curretTask[0]);
            if (index > -1) {
                tasks.map(item => {
                    tasks[index].title = text;
                })
                localStorage.setItem('task', JSON.stringify(tasks));
            }
        }

    }

}


let todo = new Todo();
todo.init();
todo.events();

let formData = new FormData(document.forms['task-form']);
console.log(form);


// 
// 
// 
//          Сортировка 
// 
// 
// 

// const requestUrl = 'https://jsonplaceholder.typicode.com/users';

// function sendRequest(method, url) {
//     return new Promise((resolve, reject) => {
//         fetch(url, {
//                 method: method
//             })
//             .then(response => {
//                 if (response.ok) {
//                     return resolve(response.json());
//                 } else {
//                     return reject(response);
//                 }
//             })
//             .catch(err => {
//                 const e = new Error('Упс! Что то пошло не так!');
//                 e.data = err;
//                 throw e;
//             })
//     })
// }

// const sort = document.querySelector('.header');
// const card = document.querySelector('.users-list');

// window.addEventListener('DOMContentLoaded', () => {

//     let firstItemCheck = document.getElementsByClassName('arrow')[0];
//     firstItemCheck.classList.add('.toggle-down')
//     firstItemCheck.style.display = 'inline-block';

// });

// const users = sendRequest('GET', requestUrl)
//     .then(data => {
//         data.forEach(renderListUser);
//         return data;
//     })
//     .catch(err => {
//         return err;
//     });

// sort.addEventListener('click', (e) => {

//     if (e.target.closest('.sort-change') || e.target.closest('.sort')) {
//         card.textContent = '';
//         const sortName = e.target.dataset.sort;
//         const arrow = e.target.querySelector('i');


//         if (arrow.style.display == 'inline-block') {

//             arrow.classList.toggle('toggle-down');
//             arrow.closest('.toggle-down') ? startSort(sortName, 'more') : startSort(sortName, 'less');

//         } else {

//             clearArrow(arrow);
//             startSort(sortName, 'less');
//             arrow.classList.remove('toggle-down');

//         }
//     }

// });

// function renderListUser(user) {

//     const template = `
//     <ul class="list-group list-group-horizontal-sm user-list">
//         <li class="list-group-item">${user.id}</li>
//         <li class="list-group-item">${user.name}</li>
//         <li class="list-group-item">${user.username}</li>
//         <li class="list-group-item">${user.phone}</li>
//     </ul>
//     `;
//     card.insertAdjacentHTML('beforeend', template);

// }

// function startSort(sortName, param) {
//     if (param === 'more') {
//         users.then(user =>
//             user.sort(byFieldMore(sortName)).forEach(renderListUser)
//         ).catch(err => console.log(err));
//     } else if (param === 'less') {
//         users.then(user =>
//             user.sort(byFieldLess(sortName)).forEach(renderListUser)
//         ).catch(err => console.log(err));
//     }
// }

// function clearArrow(elem) {

//     const allArrow = sort.querySelectorAll('.arrow');
//     allArrow.forEach(item => {
//         item.style.display = 'none';
//     });

//     elem.style.display = 'inline-block';

// }

// // Сортировка от меньшего 
// function byFieldLess(name) {
//     return function(a, b) {
//         return a[name] > b[name] ? 1 : -1;
//     }
// }

// // Сортировка от большего
// function byFieldMore(name) {
//     return function(a, b) {
//         return a[name] < b[name] ? 1 : -1;
//     }
// }



// 
// 
// 
// Сортировка на классах
// 
// 
// 
class SortableList {

    constructor(sortItem, list) {
        this.sortItem = document.querySelector(sortItem);
        this.list = document.querySelector(list);
        this.response;
    }

    sendRequest(method, url) {

        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: method
                })
                .then(response => {
                    if (response.ok) {
                        this.events();
                        this.response = response.json();
                        return resolve(this.response);
                    } else {
                        return reject(response);
                    }
                })
                .catch(err => {
                    const e = new Error('Упс! Что то пошло не так!');
                    e.data = err;
                    throw e;
                })
        });

    }

    createElement(respObject) {

        const template = `
        <ul class="list-group list-group-horizontal-sm user-list">
            <li class="list-group-item">${respObject.id}</li>
            <li class="list-group-item">${respObject.name}</li>
            <li class="list-group-item">${respObject.username}</li>
            <li class="list-group-item">${respObject.phone}</li>
        </ul>`;

        this.list.insertAdjacentHTML('beforeend', template);
    }

    events() {

        let firstItemCheck = document.getElementsByClassName('arrow')[0];
        firstItemCheck.classList.add('.toggle-down')
        firstItemCheck.style.display = 'inline-block';

        this.sortItem.addEventListener('click', (e) => {

            if (e.target.closest('.sort-change') || e.target.closest('.sort')) {
                this.list.textContent = '';
                const sortName = e.target.dataset.sort;
                const arrow = e.target.querySelector('i');


                if (arrow.style.display == 'inline-block') {

                    arrow.classList.toggle('toggle-down');
                    arrow.closest('.toggle-down') ? this.initSort(sortName, 'more') : this.initSort(sortName, 'less');

                } else {

                    this.hideElemSort(arrow);
                    this.initSort(sortName, 'less');
                    arrow.classList.remove('toggle-down');

                }
            }

        });

    }

    initSort(sortName, param) {
        if (param === 'more') {

            this.response.then(user =>
                user.sort(this.byFieldMore(sortName)).forEach(user => {
                    this.createElement(user);
                })
            ).catch(err => console.log(err));

        } else if (param === 'less') {

            this.response.then(user =>
                user.sort(this.byFieldLess(sortName)).forEach(user => {
                    this.createElement(user);
                })
            ).catch(err => console.log(err));
        }

    }


    hideElemSort(elem) {

        const allArrow = this.sortItem.querySelectorAll('.arrow');
        allArrow.forEach(item => {
            item.style.display = 'none';
        });

        elem.style.display = 'inline-block';

    }


    byFieldLess(name) {
        return function(a, b) {
            return a[name] > b[name] ? 1 : -1;
        }
    }


    byFieldMore(name) {
        return function(a, b) {
            return a[name] < b[name] ? 1 : -1;
        }
    }

}

const sort = new SortableList('.header', '.users-list');
sort.sendRequest('GET', 'https://jsonplaceholder.typicode.com/users')
    .then(data => {
        data.forEach(item => sort.createElement(item));
    })
    .catch(err => console.log(err));