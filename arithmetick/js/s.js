

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false); 


$(document).ready(function(){
                  
                  window.localStorage.removeItem('theme');
                  var theme = window.localStorage.getItem('theme');
                  if(theme == "night"){
                    $('head').append('<link rel="stylesheet" href="c/nightTheme.css" type="text/css" media="screen" title="no title" charset="utf-8">')
                    $('.nightText').hide();
                    $('.dayText').show();
                  }else{
                    $('.nightText').show();
                    $('.dayText').hide();
                  }
                  
                  //////////////////////////////////////////////////  init /////////
                  App.displayController.set('minutesV', 0);
                  App.displayController.set('secondsV', 0);
                  App.displayController.set('framesV', 0);
                  App.displayController.set('hoursV', 0);
                                    
                  var beenherebefore = window.localStorage.getItem('timeOut');
                  var gotSomethingSaves = window.localStorage.getItem('saved');
                  
                  if((!beenherebefore)||(beenherebefore==null)){
                      window.localStorage.setItem('timeOut', "true");
                  };
       
                  
                  if(gotSomethingSaves){
                      $(".loadBanner").addClass("slideBanner");
                  };
                  
                  if(window.localStorage.getItem('timeOut') == "true"){
                      $('.overlay').show();
                  }else{
                      $('.overlay').hide();
                      $('.iphoneClipping').show();
                  };
                  
                  var fps = window.localStorage.getItem('fps');
                  if(!fps){fps=24;};
                  App.inputController.set('fps', fps);
                  checkFrames();
                  App.displayController.set('position', 0);
	
}); 



function slideMenus(event){
var leftMargin = App.displayController.get('position');

		if(leftMargin == 0){
		
			if(event.direction == "left"){
				$('.dragme').addClass("slideLeft");
                var leftMargin = App.displayController.set('position', 1);
			}
		
		}else if(leftMargin == 1){
			
                if(event.direction == "right"){
				$('.dragme').removeClass("slideRight");
				$('.dragme').removeClass("slideLeft"); 
				
				var leftMargin = App.displayController.set('position', 0);
			}
			
        }

}

function checkFrames(){
        
        if(App.inputController.fps==24){
            $('.hdFPS').show();
            $('.ntscFPS').hide();
            $('.palFPS').hide();
            $('.flixFPS').hide();
            $('.disFPS').hide();
            
            $('#frames').show();
            $('#blankFrames').hide();
            
            App.displayController.set("noFPS", true);

            $('#drag').removeClass('dragCenter');
            
        }else if(App.inputController.fps==29.97){
            $('.ntscFPS').show();
            $('.hdFPS').hide();
            $('.palFPS').hide();
            $('.flixFPS').hide();
            $('.disFPS').hide();
            App.displayController.set("noFPS", true);

        }else if(App.inputController.fps==23.976){
            $('.palFPS').show();
            $('.hdFPS').hide();
            $('.ntscFPS').hide();
            $('.flixFPS').hide();
            $('.disFPS').hide();
            App.displayController.set("noFPS", true);

        }else if(App.inputController.fps==30){
            $('.flixFPS').show();
            $('.hdFPS').hide();
            $('.ntscFPS').hide();
            $('.palFPS').hide();
            $('.disFPS').hide();
            App.displayController.set("noFPS", true);

        }else if(App.inputController.fps==1){
                        
            $('#frames').hide();
            $('#blankFrames').show();
            
            $('.flixFPS').hide();
            $('.hdFPS').hide();
            $('.ntscFPS').hide();
            $('.palFPS').hide();
            $('.disFPS').show();
            
            App.displayController.set("noFPS", false);
            
            $('#drag').addClass('dragCenter');
        }


    App.displayController.resetHistory();
    App.inputController.runningTotal(0);
}


function tutorial(){

    $('#tutorialText').replaceWith('<h5 id="tutorialText" class="minutesWords"></h5>');
    $('#tutorialText').hide();
    $('#tutorialText').fadeIn('slow');
    
    setTimeout("swipeDisplay()", 1000);
}


function swipeDisplay() {
    $('#tutorialText').replaceWith("<h5 id='tutorialText' class='minutesWords'>NOW TRY DRAGGING FROM LEFT TO RIGHT IN THE RESULTS AREA ABOVE...</h5>");
    $('#tutorialText').hide();
    $('#tutorialText').fadeIn('slow');
}


function tutorialSave() {
    $('#tutorialText').replaceWith("<h5 id='tutorialText' class='minutesWords'>YOU JUST SAVED THAT CALCULATION, NOW SWIPE RIGHT TO LEFT...</h5>");
    $('#tutorialText').hide();
    $('#tutorialText').fadeIn('slow');
    $('#hoursOverlay').fadeOut('slow');
}



function dragSaveBack() {
    $('#resetTutorial').replaceWith("<h5 id='resetTutorial' class='optionText center-align'>DRAG RESET RIGHT</h5>");
    
    $('#tutorialText').replaceWith("<h5 id='tutorialText' class='minutesWords'>THAT WILL HAVE NOW RESET THE TIME...TRY TAPPING ON THE LOAD AT THE TOP OF THE PAGE</h5>");
    $('#tutorialText').hide();
    $('#tutorialText').fadeIn('slow');
    $('#hoursOverlay').fadeOut('slow');
}


function loadTutorial() {
    $('#tutorialText').replaceWith("<h5 id='tutorialText' class='minutesWords'>THAT JUST LOADED YOUR SAVE..</h5>");
    $('#tutorialText').hide();
    $('#tutorialText').fadeIn('slow');
    $('#hoursOverlay').fadeOut('slow');
    $('#appSAVE').hide();

    
    setTimeout("$('.overlay').hide()", 3000);
    setTimeout("$('.iphoneClipping').fadeIn('slow')", 3001);
    setTimeout("$('#appSAVE').fadeIn('slow')", 4000);
    
    window.localStorage.setItem('timeOut', "false");
}



