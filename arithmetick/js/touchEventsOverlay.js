
(function ($) {
 var $hw = $('#hoursOverlay');
 
 $hw.on('drag', function (event) {
		event.preventDefault();
        
        
        var lastTime = App.inputController.get('lastTimeStamp');
        var lastDist = App.inputController.get('lastDistX');
        var speed = 1;
        
        if (lastTime) {
        diffTime = event.timeStamp - lastTime;
        diffDist = event.distanceX - lastDist;
        
        var speed = diffDist/diffTime;
        }
        
        App.inputController.set('lastTimeStamp', event.timeStamp);
        App.inputController.set('lastDistX', event.distanceX);
        
        
        if((speed<=0.03) && (speed>=-0.03)){
        var v = App.displayController.get('pause');
        }else if((speed>0.03) || (speed<-0.03)){
        var v = event.distanceX/10;
        App.displayController.set('pause', v);
        }
        
        
        
        $('.hoursWords').fadeOut();
        
        //var v = event.distanceX/10;
        var v = Math.round(v);
        
        var setDisplay = Math.abs(v);
        
        if(event.direction == "right"){
        $("#plusOverlay").show();
        $("#minusOverlay").hide();
        }else{
        $("#minusOverlay").show();
        $("#plusOverlay").hide();
        }
        
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
        
		$('#dragOverlay').show();
		
		$('#hoursOverlay').removeClass('interactingBg');
		$('.valueHours').removeClass('interactColor');
		
        App.inputController.set('HrV', v);
        App.inputController.set('SrV', null);
        App.inputController.set('MrV', null);
        App.inputController.set('FrV', null);
        
        if(window.localStorage.getItem('timeOut') == "true"){
        tutorial();
        }
        
        });
 
 $hw.on('dragstart', function (event) {
		event.preventDefault();
        
        $('.oldValue').replaceWith('<h3 class="oldValue">' + App.displayController.displayValue.h + '</h3>')
        
		$('.currentValue').show()
        $('.displayH').show();
        
		$('#dragOverlay').hide()
		
		$('#hoursOverlay').addClass('interactingBg');
		$('.valueHours').addClass('interactColor');
        
		App.displayController.set('minutesV', 0);
		App.displayController.set('secondsV', 0);
		App.displayController.set('framesV', 0);
		App.displayController.set('hoursV', 0);
		
        });
 
 
 
 }(jQuery));



////////////////////// reset ////////////////////////////
(function ($) {
 var $dw = $('#optionResetOverlay');
 
 $dw.on('swipe', function (event) {
        event.preventDefault();
        if(event.direction=="right"){
        $('.dragme').removeClass('slideLeft');
        App.displayController.set('position', 0);
        }
        });
 
 $dw.on('dragstart', function (event) {
        event.preventDefault();
        if(event.direction=="right"){
        $('.dragme').removeClass('slideLeft');
        App.displayController.set('position', 0);
        }
        App.inputController.set('end', "blank");
        });
 
 
 $dw.on('drag', function (event) {
        event.preventDefault();
        if(event.direction=="left"){
        var end = App.inputController.get('end');
        var margin = parseInt($dw.css("marginLeft"), 10);
        var opacityDist = (event.distance / 80) * (event.distance / 80) * (event.distance / 80);
        
        if(end=="blank"){
        $dw.css({marginLeft:"-" + event.distance + "px"});
        if(margin < -80){App.inputController.set('end', "reached");}
        $('.rightOptSuccess').css({opacity:opacityDist});
        }else{
        $dw.css({marginLeft:"-80px"});
        }
        }
        });
 
 
 $dw.on('dragend', function (event) {
        event.preventDefault();
        
        var end = App.inputController.get('end');
        $dw.css({marginLeft:"0px"});
        $('.rightOptSuccess').css({opacity:"0"});
        
        if(end=="reached"){
        if(window.localStorage.getItem('timeOut') == "true"){dragSaveBack();};
        App.inputController.runningTotal(0);
        };
        });
 
 
 }(jQuery));







////////////////////// display swipe ////////////////////////////
(function ($) {
 var $dw = $('#displayOverlay');
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
        App.inputController.set('end', "blank");
 });
 
 
 $dw.on('drag', function (event) {
        event.preventDefault();
        if(event.direction=="right"){
        var end = App.inputController.get('end');
        var margin = parseInt($dragme.css("marginLeft"), 10);
        
        var newMarginLeft = -480 + event.distance;
        
        var opacityDist = (event.distance / 80) * (event.distance / 80) * (event.distance / 80);
        
        if(end=="blank"){
        $dragme.css({marginLeft:newMarginLeft + "px"});
        $('.leftOptSuccess').css({opacity:opacityDist});
        if(margin > -400){App.inputController.set('end', "reached");}
        }else{
        $dragme.css({marginLeft:"-400px"});
        }
        }
        
 });
 
 
 $dw.on('dragend', function (event) {
        event.preventDefault();
        
        var end = App.inputController.get('end');
        
        $('.leftOptSuccess').css({opacity:"0"});
        $dragme.css({marginLeft:"-480px"});
        
        
        if(end=="reached"){App.inputController.saveItem();
            if($(".loadBanner").hasClass("slideBanner")){
                $(".loadBanner").hide();
                $(".loadBanner").fadeIn('slow');
            }else{
                $(".loadBanner").addClass("slideBanner");
            }
        if(window.localStorage.getItem('timeOut') == "true"){tutorialSave();};
        };
        
        });
 
 
 }(jQuery));




