var mySwiper = new Swiper('.swiper-container', {
   slidesPerView: 2,
   loop: true,
   navigation: {
    nextEl: '.arrow',
	},
  slidesPerView: 1,
  breakpoints: {
    540: {
      slidesPerView: 2
    }
  }
});

let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.header');
	
menuButton.addEventListener('click', function() {
	menu.classList.toggle('header-active');
	menuButton.classList.toggle('menu-button-active');
});

$(function(){
	
	let playMusic = document.getElementById('button-play');
	let globalAudio = new Audio();
	globalAudio.src = 'music/Lyutik.mp3';
    
	let playMusicClass = $('.button-play');

	let time;

	playMusic.addEventListener('loadedmetadata', function() {
		time = playMusic.duration;
		console.log(time);
	});


	playMusic.addEventListener('click', function() {
		if (globalAudio.paused && globalAudio.currentTime == 0) {
			globalAudio.play();
			playMusicClass.toggleClass('paused');
		} else {
			globalAudio.pause();
			globalAudio.currentTime = 0;
			playMusicClass.toggleClass('paused');
		}
	});

	

})