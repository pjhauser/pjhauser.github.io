////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Development Status: Pre-Release /////////////////////////
//////////////////////////////////////////////////////////////////////////////////


//						SPARK REVOLUTIONS © copyright 2012
//							Spark License v1 licence, last revision  05.09.2012
//                                                     written by Phil Hauser
//                                                                designed by Phil Hauser and Matt Mcclatchie
//
//
//                          All Proprietry Methods and Technologies are closed source and copying is prohibited


///////////////////////////////////////// variable dictionary //////////////////////////////////
//
//     pV = previous value
//     fps = frame rate
//     v = value
//     t = total time
//     pdV  = prevous directional value
//     rV = release value
//
//     f = frames
//     s = seconds
//     m = minutes
//     h = hours
//
///////////////////////////////////////////////////////////////////////////


var App = Em.Application.create();
                                    

App.normaliser = Ember.Object.create({

	normaliser: function(v, timetype){
		var type = timetype;
		var fps = App.inputController.get('fps');
		
		if(type=="seconds"){
			v = v*fps;
			App.inputController.pushValue(v);
		}else if(type=="minutes"){
			v = v*fps*60;
			App.inputController.pushValue(v);
		}else if(type=="hours"){
			v = v*fps*60*60;
			App.inputController.pushValue(v);
		}
	
	}
	
});


App.inputController = Ember.ArrayController.create({
   content: [],
  
	//push new values to content array and call runningtotal()
	pushValue: function(v){
		this.pushObject(v);
		this.runningTotal();
	},
	
	//add or minus the new value to the previous value
	runningTotal: function(undo){
		
		if((undo)||(undo==0)){
			var v = undo;
			var pV = 0; 
		}else{
			var v = this.get('content'); 
			var pV = App.inputController.get('pV');
		};
		
							
		v = v[0];
		pV = parseInt(pV);
		if(isNaN(pV)){pV=0;};
				
		var t = v + pV;
        this.ec();
       
			if((undo)||(undo==0)){
				App.inputController.set('pV', undo);
			}else{
				App.inputController.set('pV', t);
			};
	},
	
	//clear the controller
	ec: function(){
		var l =  App.inputController.content.length;
		for (i=0;i<l;i++){App.inputController.content.removeObject(App.inputController.content[0]);}
	},
	
	gesturesUndoRedo: function(dir, i){
		
		if(dir=="left"){
				var hist = App.displayController.content;
			 	var Mt = {"h": 0,"m": 0,"s": 0,"f": 0,}; 
				var fps = App.inputController.get('fps');
				
				var undo = App.displayController.content[i];
                if(undo==undefined){undo=Mt};
				var t=undo.h*60;
				t=t+undo.m;
				t=t*60;
				t=t+undo.s;
				t=t*fps;
				t=t+undo.f;
				
				var c = App.inputController.runningTotal(t);
                
			}else{
				
				var f = App.inputController.get('FrV');
				var s = App.inputController.get('SrV');
				var m = App.inputController.get('MrV');
				var h = App.inputController.get('HrV');
				var fps = App.inputController.get('fps'); 
				
				if(f){
					var c = f
				}else if(s){
					var c = s*fps
				}else if(m){
					var c = m*60
					var c = c*fps
				}else if(h){
					var c = h*60
					var c = c*60
					var c = c*fps
				}
				
				this.pushValue(c);
                                                   
		}
	},
  
	reloadItem: function(){

       var fps = App.inputController.get('fps');
       var undo = window.localStorage.getItem('saved')
       var undo = jQuery.parseJSON(undo);

        if(undo.h == "-0"){var t=0;var neg=true;}else{var t=undo.h*60;}
		t=t+undo.m;
		t=t*60;
		t=t+undo.s;
		t=t*fps;
		t=t+undo.f;
        if(neg){t=t*-1}
                                                   
		App.inputController.runningTotal(0);
		App.inputController.pushValue(t);
     },
       
     saveItem: function(){
       var displayValue = App.displayController.content.length - 1;
       var vToSave = App.displayController.content[displayValue];
                                                   
       window.localStorage.setItem('saved', JSON.stringify(vToSave))
     }
	
});


//this controller models the data to be referenced by the handlebars
App.displayController = Ember.ArrayController.create({
	content: [
	{"h": 0,"m": 0,"s": 0,"f": 0, "enum": 0},
	{"h": 0,"m": 0,"s": 0,"f": 0, "enum": 0},
	{"h": 0,"m": 0,"s": 0,"f": 0, "enum": 0},
	{"h": 0,"m": 0,"s": 0,"f": 0, "enum": 0},
	{"h": 0,"m": 0,"s": 0,"f": 0, "enum": 0},
	],
	  
	//model the time to push onto display controller
	 presLogic: function(){
		   
			var b = 60; //base60 
			var f; var s; var m; var h; //units 
			
			var t = App.inputController.get('pV');
			var fps = App.inputController.get('fps');
			var negfps = fps*-1;
			
					parseInt(t);
					s = t/fps;
					s.toFixed(2);
					sr = (s + "").split(".");
					var srE="0."+sr[1];
					f=fps*srE;
					f=Math.round(f);//frames value is set here
					s=parseInt(sr[0]);
                    if(f==fps){s=s+1};
		
					m = s/b;
					mr = (m + "").split(".");
					var mrE="0."+mr[1];
					s=b*mrE;
					s=Math.round(s);//seconds value is set here
					m=parseInt(mr[0]);  

					parseInt(m);
					h = m/b;
					hr = (h + "").split(".");
					var hrE="0."+hr[1];
					m=b*hrE;
					m=Math.round(m);//hours value is set here 
					h=parseInt(hr[0]);
			
					
		//Modelled time
		if(isNaN(f)){f=0};
		if(isNaN(s)){s=0};
		if(isNaN(m)){m=0};
		if(isNaN(h)){h=0};
		
		
		var Mt = {
			"h": h,
			"m": m,
			"s": s,
			"f": f,
			"enum": 0,
		};
		 
		//push json onto controller
		this.pushObject(Mt);
		
         var displayValue = this.content.length - 1;
         var fourth = this.content[displayValue];

                                                     
        if((t < 0) && (h == 0)){
            fourth.h = "-" + h;
         }
         
         App.displayController.set('displayValue', fourth);  
				
	 }.observes('App.inputController.pV'),
	
	//maintin a history of 5 calculations
	hist: function(){
		var l = this.content.length;
		var maxL = 4; //this is the max length -1
		
		if(l>maxL){
			App.displayController.content.removeObject(App.displayController.content[0]);
		};
                                                     
        for(i=0;i<4;i++){
         var reenum = App.displayController.content[i];	
         var propertyName = 'historyItem' + i;
         App.displayController.set(propertyName, reenum);
        }  
                                                     
		
	}.observes('App.inputController.pV'),
                                                     
resetHistory: function(){
     var l = this.content.length -1;
     var blank = {"h": 0,"m": 0,"s": 0,"f": 0, "enum": 0};
     
     for(i=0;i<l;i++){
        App.displayController.content.removeObject(App.displayController.content[0]);
     };
     
     for(i=0;i<5;i++){
        App.displayController.content.pushObject(blank);
     };
    }   
	
});


