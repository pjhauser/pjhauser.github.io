////////////////////// frames ////////////////////////////
(function ($) {
 var $fw = $('#frames');
 
 $fw.on('drag', function (event) {
		event.preventDefault();
        
        var v = event.distanceX/10;
        var v = Math.round(v);
        var setDisplay = Math.abs(v);
        
        if(event.direction == "right"){
            $("#plus").show();        
            $("#minus").hide();
        }else if(event.direction == "left"){
            $("#minus").show();
            $("#plus").hide();
        }
        
        $('.framesWords').fadeOut();

        App.displayController.set('currentV', v);
        App.displayController.set('framesV', setDisplay);

 });
 
 
 
 $fw.on('dragend', function (event) {
        event.preventDefault();
        
        var v=App.displayController.get('currentV');
        App.inputController.pushValue(v);
        
        $('.currentValue').hide();
        $('.displayF').hide();
        
        $('#drag').show();
        
        $('.framesWords').fadeIn(1);
		
        $('#frames').removeClass('interactingBg');
        $('.valueFrames').removeClass('interactColor');
		
        App.inputController.set('FrV', v);
        App.inputController.set('SrV', null);
        App.inputController.set('MrV', null);
        App.inputController.set('HrV', null);
 });
 
 
 
 
 
 $fw.on('dragstart', function (event) {
        event.preventDefault();
        
        $('.oldValue').replaceWith('<h3 class="oldValue">' + App.displayController.displayValue.f + '</h3>')
		
        $('.currentValue').show();
        $('.displayF').show();
        
        $('#drag').hide();
		
        $('#frames').addClass('interactingBg');
        $('.valueFrames').addClass('interactColor');
        
        App.displayController.set('minutesV', 0);
        App.displayController.set('secondsV', 0);
        App.displayController.set('framesV', 0);
        App.displayController.set('hoursV', 0);
  });
 
 
 
 }(jQuery));




////////////////////// seconds ////////////////////////////
	(function ($) {
      var $sw = $('#seconds');

      $sw.on('drag', function (event) {
		event.preventDefault();
             
             
             var v = event.distanceX/5;
             var v = Math.round(v);
             var setDisplay = Math.abs(v);
             
             if(event.direction == "right"){
             $("#plus").show();
             $("#minus").hide();
             }else if(event.direction == "left"){
             $("#minus").show();
             $("#plus").hide();
             }
             
             $('.secondsWords').fadeOut();
             
             App.displayController.set('currentV', v);
             App.displayController.set('secondsV', setDisplay);
      });

      $sw.on('dragend', function (event) {
		event.preventDefault();
             
             $('.secondsWords').fadeIn(1);

		
		var v=App.displayController.get('currentV');
		App.normaliser.normaliser(v, "seconds"); 
		$('.currentValue').hide();
        $('.displayS').hide();

		$('#drag').show();
		
		$('#seconds').removeClass('interactingBg');
		$('.valueSeconds').removeClass('interactColor');

		App.inputController.set('SrV', v);
             App.inputController.set('FrV', null);
             App.inputController.set('MrV', null);
             App.inputController.set('HrV', null);
      });

      $sw.on('dragstart', function (event) {
		event.preventDefault();
             
             $('.oldValue').replaceWith('<h3 class="oldValue">' + App.displayController.displayValue.s + '</h3>')

             
		$('.currentValue').show()
        $('.displayS').show();

		$('#drag').hide()
		
		$('#seconds').addClass('interactingBg');
		$('.valueSeconds').addClass('interactColor');

		App.displayController.set('minutesV', 0);
		App.displayController.set('secondsV', 0);
		App.displayController.set('framesV', 0);
		App.displayController.set('hoursV', 0);
      });
      
      
  }(jQuery));
         

////////////////////// minutes ////////////////////////////
(function ($) {
 var $mw = $('#minutes');
 
 $mw.on('drag', function (event) {
		event.preventDefault();
        
        var v = event.distanceX/5;
        var v = Math.round(v);
        var setDisplay = Math.abs(v);
        
        if(event.direction == "right"){
        $("#plus").show();
        $("#minus").hide();
        }else if(event.direction == "left"){
        $("#minus").show();
        $("#plus").hide();
        }
        
        $('.minutesWords').fadeOut();
        
        App.displayController.set('currentV', v);
        App.displayController.set('minutesV', setDisplay);
        });
 
 $mw.on('dragend', function (event) {
		event.preventDefault();
        
        $('.minutesWords').fadeIn(1);
        
		var v=App.displayController.get('currentV');
		App.normaliser.normaliser(v, "minutes");
		$('.currentValue').hide();
        $('.displayM').hide();
        
		$('#drag').show();
		
		$('#minutes').removeClass('interactingBg');
		$('.valueMinutes').removeClass('interactColor');
		
        App.inputController.set('MrV', v);
		App.inputController.set('HrV', null);
        App.inputController.set('SrV', null);
        App.inputController.set('FrV', null);
  });
 
 $mw.on('dragstart', function (event) {
		event.preventDefault();
        
        $('.oldValue').replaceWith('<h3 class="oldValue">' + App.displayController.displayValue.m + '</h3>')
        
		$('.currentValue').show()
        $('.displayM').show();
        
		$('#drag').hide()
		
		$('#minutes').addClass('interactingBg');
		$('.valueMinutes').addClass('interactColor');
        
		App.displayController.set('minutesV', 0);
		App.displayController.set('secondsV', 0);
		App.displayController.set('framesV', 0);
		App.displayController.set('hoursV', 0);
		
        });
 
 
  }(jQuery));


////////////////////// hours ////////////////////////////
	(function ($) {
      var $hw = $('#hours');

      $hw.on('drag', function (event) {
		event.preventDefault();
             
             var v = event.distanceX/10;
             var v = Math.round(v);
             var setDisplay = Math.abs(v);
             
             if(event.direction == "right"){
             $("#plus").show();
             $("#minus").hide();
             }else if(event.direction == "left"){
             $("#minus").show();
             $("#plus").hide();
             }
             
             $('.hoursWords').fadeOut();
             
             App.displayController.set('currentV', v);
             App.displayController.set('hoursV', setDisplay);
      });

      $hw.on('dragend', function (event) {
		event.preventDefault();
             
        $('.hoursWords').fadeIn(1);

		var v=App.displayController.get('currentV');
		App.normaliser.normaliser(v, "hours"); 
		$('.currentValue').hide();
        $('.displayH').hide();

		$('#drag').show();
		
		$('#hours').removeClass('interactingBg');
		$('.valueHours').removeClass('interactColor');
		
             App.inputController.set('HrV', v);
             App.inputController.set('SrV', null);
             App.inputController.set('MrV', null);
             App.inputController.set('FrV', null);
             
      });

      $hw.on('dragstart', function (event) {
		event.preventDefault();
             
        $('.oldValue').replaceWith('<h3 class="oldValue">' + App.displayController.displayValue.h + '</h3>')

		$('.currentValue').show()
        $('.displayH').show();

		$('#drag').hide()
		
		$('#hours').addClass('interactingBg');
		$('.valueHours').addClass('interactColor');

		App.displayController.set('minutesV', 0);
		App.displayController.set('secondsV', 0);
		App.displayController.set('framesV', 0);
		App.displayController.set('hoursV', 0);
		
      });
      
      
      
  }(jQuery));
  
  


////////////////////// reset ////////////////////////////
	(function ($) {
      var $dw = $('#optionReset');

     $dw.on('swipe', function (event) {
            event.preventDefault();
            if(event.direction=="right"){
                $('.dragme').removeClass('slideLeft');
                App.displayController.set('position', 0);
            }
     });
     
     
     $dw.on('tap', function (event) {
            event.preventDefault();
            $dw.animate({marginLeft: -20}, 100);
            $dw.animate({marginLeft: 0}, 150);
            $dw.animate({marginLeft: -10}, 200);
            $dw.animate({marginLeft: 0}, 230);
            $dw.animate({marginLeft: -5}, 230);
            $dw.animate({marginLeft: 0}, 235);
     });
     
     
     $dw.on('dragstart', function (event) {
            event.preventDefault();
            if(event.direction=="right"){
                $('.dragme').removeClass('slideLeft');
                App.displayController.set('position', 0);
            }
     });
     
     
     $dw.on('drag', function (event) {
            event.preventDefault();
            if(event.direction=="left"){
            var margin = parseInt($dw.css("marginLeft"), 10);
            var opacityDist = (event.distance / 80) * (event.distance / 80) * (event.distance / 80) * (event.distance / 80);
            if(margin < -80){
            var num = (event.distance/6) + 70;
            $dw.css({marginLeft:"-" + num + "px"});
            }else{
            $dw.css({marginLeft:"-" + event.distance + "px"});
            $('.rightOptSuccess').css({opacity:opacityDist});
            }
            }
     });
     
     
     $dw.on('dragend', function (event) {
            event.preventDefault();
            
            var margin = parseInt($dw.css("marginLeft"), 10);
            $dw.animate({marginLeft:"0px"}, 200);
            $('.rightOptSuccess').css({opacity:"0"});
            
            if(margin < -80){
                App.inputController.runningTotal(0);
            };            
     });
     
     
     }(jQuery));




////////////////////// undo ////////////////////////////
	(function ($) {
      var $dw = $('#optionUndo');

     $dw.on('swipe', function (event) {
            event.preventDefault();
            if(event.direction=="right"){
                $('.dragme').removeClass('slideLeft');
                App.displayController.set('position', 0);
            }
     });
     
     $dw.on('tap', function (event) {
            event.preventDefault();
            $dw.animate({marginLeft: -20}, 100);
            $dw.animate({marginLeft: 0}, 150);
            $dw.animate({marginLeft: -10}, 200);
            $dw.animate({marginLeft: 0}, 230);
            $dw.animate({marginLeft: -5}, 230);
            $dw.animate({marginLeft: 0}, 235);
            });
     
     
     $dw.on('dragstart', function (event) {
            event.preventDefault();
            if(event.direction=="right"){
                $('.dragme').removeClass('slideLeft');
                App.displayController.set('position', 0);
            }
      });
     
     
     $dw.on('drag', function (event) {
            event.preventDefault();
            if(event.direction=="left"){
                var margin = parseInt($dw.css("marginLeft"), 10);
                var opacityDist = (event.distance / 80) * (event.distance / 80) * (event.distance / 80) * (event.distance / 80);
                if(margin < -80){
                    var num = (event.distance/6) + 70;
                    $dw.css({marginLeft:"-" + num + "px"});
                }else{
                    $dw.css({marginLeft:"-" + event.distance + "px"});
                    $('.rightOptSuccess').css({opacity:opacityDist});
                }
            }
    });
     
     $dw.on('dragend', function (event) {
            event.preventDefault();
            
            var margin = parseInt($dw.css("marginLeft"), 10);
            $dw.animate({marginLeft:"0px"}, 200);
            $('.rightOptSuccess').css({opacity:"0"});
            
            if(margin < -80){
                App.inputController.gesturesUndoRedo("left", 2);
            }

      });
     
     
     }(jQuery));





////////////////////// clear save ////////////////////////////
	(function ($) {
      var $dw = $('#optionRedo');

     $dw.on('swipe', function (event) {
            event.preventDefault();
            if(event.direction=="right"){
                $('.dragme').removeClass('slideLeft');
                App.displayController.set('position', 0);
            }
     });
     
     $dw.on('tap', function (event) {
            event.preventDefault();
            $dw.animate({marginLeft: -20}, 100);
            $dw.animate({marginLeft: 0}, 150);
            $dw.animate({marginLeft: -10}, 200);
            $dw.animate({marginLeft: 0}, 230);
            $dw.animate({marginLeft: -5}, 230);
            $dw.animate({marginLeft: 0}, 235);
            });
     
     
     $dw.on('dragstart', function (event) {
            event.preventDefault();
            if(event.direction=="right"){
                $('.dragme').removeClass('slideLeft');
                App.displayController.set('position', 0);
            }
     });
     
     
     $dw.on('drag', function (event) {
            event.preventDefault();
                if(event.direction=="left"){
                var margin = parseInt($dw.css("marginLeft"), 10);
                var opacityDist = (event.distance / 80) * (event.distance / 80) * (event.distance / 80) * (event.distance / 80);
                if(margin < -80){
                    var num = (event.distance/6) + 70;
                    $dw.css({marginLeft:"-" + num + "px"});
                }else{
                    $dw.css({marginLeft:"-" + event.distance + "px"});
                    $('.rightOptSuccess').css({opacity:opacityDist});
                }
            }
     });
     
     
     $dw.on('dragend', function (event) {
            event.preventDefault();
            
            var margin = parseInt($dw.css("marginLeft"), 10);
            $dw.animate({marginLeft:"0px"}, 200);
            $('.rightOptSuccess').css({opacity:"0"});
            
            if(margin < -80){
                $(".loadBanner").removeClass("slideBanner");
                window.localStorage.removeItem('saved')
            };
     });
     
     
     }(jQuery));





////////////////////// option mode ////////////////////////////
	(function ($) {
      var $dw = $('#optionMode');
          
     $dw.on('swipe', function (event) {
            event.preventDefault();
            if(event.direction=="right"){
                $('.dragme').removeClass('slideLeft');
                App.displayController.set('position', 0);
            }
     });
     
     $dw.on('tap', function (event) {
            event.preventDefault();
            $dw.animate({marginLeft: -20}, 100);
            $dw.animate({marginLeft: 0}, 150);
            $dw.animate({marginLeft: -10}, 200);
            $dw.animate({marginLeft: 0}, 230);
            $dw.animate({marginLeft: -5}, 230);
            $dw.animate({marginLeft: 0}, 235);
            });
     
     
     $dw.on('dragstart', function (event) {
            event.preventDefault();
            if(event.direction=="right"){
                $('.dragme').removeClass('slideLeft');
                App.displayController.set('position', 0);
            }
     });
     
     
     $dw.on('drag', function (event) {
            event.preventDefault();
        if(event.direction=="left"){
            var margin = parseInt($dw.css("marginLeft"), 10);
            var opacityDist = (event.distance / 80) * (event.distance / 80) * (event.distance / 80) * (event.distance / 80);
            if(margin < -80){
            var num = (event.distance/6) + 70;
                $dw.css({marginLeft:"-" + num + "px"});
            }else{
                $dw.css({marginLeft:"-" + event.distance + "px"});
                $('.rightOptSuccess').css({opacity:opacityDist});
            }
        }
     });
     
     $dw.on('dragend', function (event) {
            event.preventDefault();
            
            var margin = parseInt($dw.css("marginLeft"), 10);
            $dw.animate({marginLeft:"0px"}, 200);
            $('.rightOptSuccess').css({opacity:"0"});
            if(margin < -80){
                var theme = window.localStorage.getItem('theme');
                if(theme == "night"){
                    window.localStorage.setItem('theme', "day");
                    $("LINK[href='c/nightTheme.css']").remove();
                    $('.nightText').show()
                    $('.dayText').hide()
                }else{
                    window.localStorage.setItem('theme', "night");
                    $('head').append('<link rel="stylesheet" href="c/nightTheme.css" type="text/css" media="screen" title="no title" charset="utf-8">');
                    $('.nightText').hide()
                    $('.dayText').show()
                }
            }
     });
     
     
     }(jQuery));




////////////////////// commands ////////////////////////////
	(function ($) {
      var $dw = $('#optionCommands');

     $dw.on('swipe', function (event) {
            event.preventDefault();
            if(event.direction=="right"){
                $('.dragme').removeClass('slideLeft');
                App.displayController.set('position', 0);
            }
      });
     
     
     $dw.on('tap', function (event) {
            event.preventDefault();
            $dw.animate({marginLeft: -20}, 100);
            $dw.animate({marginLeft: 0}, 150);
            $dw.animate({marginLeft: -10}, 200);
            $dw.animate({marginLeft: 0}, 230);
            $dw.animate({marginLeft: -5}, 230);
            $dw.animate({marginLeft: 0}, 235);
            });
     
     
     $dw.on('dragstart', function (event) {
            event.preventDefault();
            if(event.direction=="right"){
                $('.dragme').removeClass('slideLeft');
                App.displayController.set('position', 0);
            }
     });
     
     
     $dw.on('drag', function (event) {
            event.preventDefault();
            if(event.direction=="left"){
                var margin = parseInt($dw.css("marginLeft"), 10);
                var opacityDist = (event.distance / 80) * (event.distance / 80) * (event.distance / 80) * (event.distance / 80);
                if(margin < -80){
                    var num = (event.distance/6) + 70;
                    $dw.css({marginLeft:"-" + num + "px"});
                }else{
                    $dw.css({marginLeft:"-" + event.distance + "px"});
                    $('.rightOptSuccess').css({opacity:opacityDist});
                }
            }
      });
     
     
     $dw.on('dragend', function (event) {
            event.preventDefault();
            
            var margin = parseInt($dw.css("marginLeft"), 10);
            $dw.animate({marginLeft:"0px"}, 200);
            $('.rightOptSuccess').css({opacity:"0"});
            
            if(margin < -80){
                    if(App.inputController.fps==24){
                        App.inputController.set('fps', 29.97);
                        window.localStorage.setItem('fps', 29.97);
                    }else if(App.inputController.fps==29.97){
                        App.inputController.set('fps', 23.976);
                        window.localStorage.setItem('fps', 23.976);
                    }else if(App.inputController.fps==23.976){
                        App.inputController.set('fps', 30);
                        window.localStorage.setItem('fps', 30);
                    }else if(App.inputController.fps==30){
                        App.inputController.set('fps', 1);
                        window.localStorage.setItem('fps', 1);
                    }else if(App.inputController.fps==1){
                        App.inputController.set('fps', 24);
                        window.localStorage.setItem('fps', 24);
                    }
            }
            
            checkFrames();
      });
     
     
     }(jQuery));






////////////////////// display swipe ////////////////////////////
	(function ($) {
		var $dw = $('#display');
        var $dragme = $('.dragme');
     

$dw.on('swipe', function (event) {
       event.preventDefault();
       if(event.direction=="left"){
            slideMenus(event);
       }
});

$dw.on('dragstart', function (event) {
       event.preventDefault();
       if(event.direction=="left"){
            slideMenus(event);
       }
});

$dw.on('drag', function (event) {
       event.preventDefault();
       
       var margin = parseInt($dragme.css("marginLeft"), 10);
       var opacityDist = (event.distance / 80) * (event.distance / 80) * (event.distance / 80) * (event.distance / 80);
       
       if(event.direction=="right"){
       
           if(margin > -400){
                var num = 80 + event.distance/6;
                var newMargin = -480 + num;
                $dragme.css({marginLeft:newMargin + "px"});
           }else{
                var newMargin = -480 + event.distance;
                $dragme.css({marginLeft:newMargin + "px"});
                $('.leftOptSuccess').css({opacity:opacityDist});
           }
       }
});


$dw.on('dragend', function (event) {
       event.preventDefault();
       
       var margin = parseInt($dragme.css("marginLeft"), 10);
       $dragme.animate({marginLeft:"-480px"}, 200);
       $('.rightOptSuccess').css({opacity:"0"});
       
        if(margin > -400){
           App.inputController.saveItem();
               if($(".loadBanner").hasClass("slideBanner")){
                    $(".loadBanner").hide();
                    $(".loadBanner").fadeIn('slow');
               }else{
                    $(".loadBanner").addClass("slideBanner");
               }
           };
       });

}(jQuery));


////////////////////// banner tap ////////////////////////////
	(function ($) {
		var $dw = $('.loadBanner');
		
      $dw.on('tap', function (event) {
				event.preventDefault();
             App.inputController.reloadItem();
             
             if(window.localStorage.getItem('timeOut') == "true"){loadTutorial();};
      });


  }(jQuery));



////////////////////// leftOpt ////////////////////////////
(function ($) {
 var $dw = $('.leftOpt');
 
 $dw.on('dragend', function (event) {
        event.preventDefault();

        $('.dragme').removeClass("slideRight");
        $('.dragme').addClass("stayCenter");
        setTimeout("$('.dragme').removeClass('stayCenter')", 450);
        setTimeout('$(".dragme").css({marginLeft:"-480px"})', 450);
        
        });
 
 
 }(jQuery));


