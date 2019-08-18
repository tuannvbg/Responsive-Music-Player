var audio;


initAudio($('#inital'));
//get information about the songs
//inital song (first one played)
function initAudio(element) {
    var song = element.attr('song');
    var cover = element.attr('cover');

    //Create audio object
    audio = new Audio('media/audio/' + song + '.mp3');

    if(!audio.currentTime){
		$('.duration').html('--:--');
    }
    
    //Insert song name 
    $('.song-name p').text(song);

    //Inster song cover image
    $('.song-img img').attr('src',cover);
    setBackground(element);

    //Make/Add the song active
    element.addClass('active');
}

//Play Button
$('#play').click(function(){
	audio.play();
	$('#duration').fadeIn(400);
	showDuration();
});

//Pause Button
$('#pause').click(function(){
	audio.pause();
});

//Next Button
$('#forward').click(function(){
    audio.pause();
    var next = $('ul li.active').next();
    if (next.length == 0) {
        next = $('ul li:first-child');
    }
    $('ul li').removeClass('active');
    initAudio(next);
	audio.play();
	showDuration();
});

//Prev Button
$('#backward').click(function(){
    audio.pause();
    var prev = $('ul li.active').prev();
    if (prev.length == 0) {
        prev = $('ul li:last-child');
    }
    $('ul li').removeClass('active');
    initAudio(prev);
	audio.play();
	showDuration();
});

//Volume Control
$('#volume').change(function(){
	audio.volume = parseFloat(this.value / 100);
});

//Playlist Song Click
$('ul li').click(function () {
    audio.pause();
    $('ul li').removeClass('active');
    $('.song-img img').removeClass('wait');
    initAudio($(this));
    audio.play();
    showDuration();
});

//Time Duration
function showDuration(){
	$(audio).bind('timeupdate', function(){
		//Get hours and minutes
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt((audio.currentTime / 60) % 60);
		//Add 0 if seconds less than 10
		if (s < 10) {
			s = '0' + s;
		}
		$('.duration').html(m + ':' + s);	
		var value = 0;
		if (audio.currentTime > 0) {
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		$('.progress').css('width',value+'%');
	});
}


///////////////////////////////////////////////////////
//Setting the correct wallpaper
//////////////////////////////////////////////////////
function setBackground(element) {
    var bg = element.attr('artist');
    var img = $('#dynamic-bg');
    
    //check if it's Twenty one pilots
    if (bg == 'Twenty One Pilots') {
        if (screen.width <= 500) {
            img.attr('src','imgs/covers/mobo-B.png');
        } else if (screen.width > 500) {
            img.attr('src','imgs/covers/desk-B.png');
        }
        //check if it's Queen
    } else if (bg == 'Queen') {
        if (screen.width <= 500) {
            img.attr('src','imgs/covers/mobo-E.jpg');
        } else if (screen.width > 500) {
            img.attr('src','imgs/covers/desk-E.jpg');
        }
        //check if its Synaptik
    } else if (bg == 'The Synaptik') {
        if (screen.width <= 500) {
            img.attr('src','');
        } else if (screen.width > 500) {
            img.attr('src','');
        }
        //check if it's Panic! at the Disco
    } else if (bg == 'Panic! at the Disco') {
        if (screen.width <= 500) {
            img.attr('src','imgs/covers/mobo-D.jpg');
        } else if (screen.width > 500) {
            img.attr('src','imgs/covers/desk-D.jpg');
        }
        //check if it's Imagine Dragons 
    } else if (bg == 'Imagine Dragons') {
        if (screen.width <= 500) {
            img.attr('src','imgs/covers/mobo-C.jpg');
        } else if (screen .width > 500) {
            img.attr('src','imgs/covers/desk-C.jpg');
        }
    } else if (bg == 'unset') {
        console.log("App Loaded Successfully");
    }
}
