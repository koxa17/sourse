'use strict'

$(function () {

    //ТУТ лучше ИД  сделать  и лучше писаьт вот так
    // $(document).on('click', 'form input[type="submit"]', () => {

    //     let name, email, tel, you_name, you_email, you_tel;

    //     name = $('#name').val();
    //     email = $('#email').val();
    //     tel = $('#tel').val();

    //     you_name = $('span#you-name');
    //     you_email = $('span#you-email');
    //     you_tel = $('span#you-tel');

    //     you_name.text(name);
    //     you_email.text(email);
    //     you_tel.text(tel);


    // });









   function gameGo() {
        let name;
       let age;
       let startGame = confirm(`Хочешь со мной пообщаться? \n Если ДА нажми - ОК, если НЕТ нажми - Отмена`);

       if (startGame == true) {
        name = prompt('Для начала давай познакомимся. Как тебя зовут?' , 'Введите имя');

       alert(`Привет ${name}, меня зовут Джава Скрипт! Приятно познакомится =)`);
        
        age = prompt(`${name}, сколько тебе лет?`);
            if (age) {
                
            }

       }
      
       else if (startGame == false) {
        alert(`Очень жаль, если передумаешь нажми F5 =(`);
       }
       else{
        alert('ОШИБКА!! \n Упсс что то пошло не так(');
       }
   };

});


// isNaN() - определяет является ли литерал или переменная нечисловым значением (NaN) или нет.
// parseInt - переобразовать в другой тип данных
// val(); - значения
// prevrentDefault - отменить стандартное поведение браузера
// attr(); - атрибут 
// .on('click'...) - потому что может работать с динамическим контектом  

// contains() - поиск по содержимому $('p:contains("Hello")'); 
// has() - выбрать которые содержат тэг $('p:has("span")')
// parent - выбрать всех кто является родителем $('p:parent'), пустые тэги не выбирает
// empty - обратно parent, $('p:empty')

// .resize - при смене размеров окна $(window).resize
// .scroll - при прокрутке окна $(window).scroll
// .html - меняем код $('p').html('<h1>Hello dogs</h1>');
// .append(); - добавить код в конце $('ul').append('<div>Див блок</div>');
// .prepend(); - добавит код в начале $('ul').prepend('<div>Див блок</div>');
// .empte - очистить содержимое ul $('ul').empty();
// .remove - удалить ul и его содержимое $('ul').remove();
// .after - добавить тег после ul $('ul').after('<div>Блок после тега</div>');
// .before - добавить тег перед ul $('ul').before('<div>Блок после тега</div>');
// .wrap - обернуть $('ul').wrap('<div></div>');
// .unwrap - удалить обертку $('ul').unwrap();


//Замена тега, с сохранением содержимого
// $('h1').on('dblclick', function(){
// 	$('h1').replaceWith(function(){
// 		return $('<h3/>', {html: $(this).html()
// 		});
// 	});
// });


// Удалить все <br>. (remove();полное удаление and detach();с поледующим возвратом)
// $('#delBr').on('click', function(){
// 	$('br').detach();
// });


    // Игра

    // Получаем ссылку на canvas
  let canvas = document.getElementById('myCanvas');
  // Каким будет контент в canvas - 2D
  let ctx = canvas.getContext('2d');
  // Получаем координаты начальной точки 
  let x = canvas.width / 2;
  let y = canvas.height - 30;
  // переменная для смены координат
  let dx = 2;
  let dy = -2;

  // Радиус нарисованого круга
  let ballRadius = 10;

  // Создаеми весло что бы бить по мячу
  let padddleHeight = 10;
  let paddleWidth = 60;
  let paddleX = (canvas.width - paddleWidth) / 2;

  // Нажата ли кнопка
  let rightPressed = false;
  let leftPressed = false;

  // Создаем кирпичи
  let brickRowCount = 3;
  let brickColumnCount = 5;
  let brickWidth = 75;
  let brickHeight = 20;
  let brickPadding = 10;
  let brickOffsetTop = 30;
  let brickOffsetLeft = 30;

  // массив с кирпичами
  let bricks = [];
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = {x: 0, y: 0, status: 1};
    }
  }

  // создаем счет
  let score = 0; 

  // Жизни
  let lives = 5;


  // добавляем слушателей
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
  document.addEventListener("mousemove", mouseMoveHandler, false);

  function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
  }

  function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
  }

  function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
  }

  // Что бы отскакивал от кирпичей 
  function collisionDetection(){
    for(let c = 0; c < brickColumnCount; c++) {
        for(let r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            if (b.status == 1) {
               if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;

                    if(score == brickRowCount * brickColumnCount) {
                        alert(`Score: ${score} \nТы ПОБЕДИЛ, Поздравляю!!!!`);
                        document.location.reload();
                        clearInterval(interval);
                    }
                }  
            }
               
        }
    }
  }

  function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Score: " + score, 8, 20);
  }

    function drawLives() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(`Жизней осталось: ${lives}`, canvas.width - 150, 20);
    }

  
  function drawBall() {
    ctx.beginPath();
    // Рисуем круг
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    // Задаем ему цвет
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

   function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - padddleHeight, paddleWidth, padddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }



  function drawBricks(){
    for(let c = 0; c < brickColumnCount; c++){
        for(let r = 0; r < brickRowCount; r++){
           if (bricks[c][r].status == 1) {
            let brickX = (c * (brickWidth + brickPadding) + brickOffsetLeft);
           let brickY = (r * (brickHeight + brickPadding) + brickOffsetTop);
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
           }
           
        }
    }
  }



  function draw() {
    // Ощищаем холст перед каждым обновление кадра
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();
    drawScore();
    drawLives();


    // Отскакивает от левой и правой стены
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        // После столкновения меняем напрвление на противоположное
        dx = -dx;   
    }

    // Отскакивает от верха и низа
    if(y + dy < ballRadius) {
        // После столкновения меняем напрвление на противоположное
        dy = -dy;
        // После с толкновения с нижней линией завершаем игру и перезапускаем страницу
    } else if(y + dy > canvas.height - ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;

        }
        else {
            lives--;
            if (!lives) {
                alert("Ты проиграл! Попробуй еще раз =)");
                document.location.reload();
            }
            else {
                x = canvas.width / 2;
                y = canvas.height - 30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width - paddleWidth) / 2;
            }
            
        }
        
    }

    // Проверяем какая клавиша нажата и двигаем весло, ограничиваем его движения за пределы
    if(rightPressed) {
        paddleX += 7;
        if(paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }   
    else if(leftPressed) {
        paddleX -= 7;
        if(paddleX < 0){
            paddleX = 0;
        }
    }

    

    // Двигаем шар
    x += dx;
    y += dy;


    // Сомовызывание функции
    requestAnimationFrame(draw);
  }

  draw();
