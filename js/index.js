  var running = false;
  var session = true;
  var break_minutes_set = 5;
  var work_minutes_set = 25;
  var seconds = 0;
  var minutes = 25;
  var myVar; //= setInterval(myTimer, 1000);
  var audio = new Audio('33244__ljudman__dingding.wav');
      
  function myTimer() {
    // Show time and 'fix' for second
    if (seconds<5&&minutes==0){
      swing2($( ".mainDiv" ));
    }
    if (seconds==0){
      $( ".s2Content" ).text("00");
      }else $( ".s2Content" ).text(seconds);
    $( ".sContent" ).text(minutes);
    
    // Update cube according the state
    if(session===true){
      $( ".s3Content" ).text("Session");
      $(".square3").css( "background", "#adff29" );
      $(".shadow").css( "background", "#adff29" );
    }else {
      $( ".s3Content" ).text("Break!");
      $(".square3").css( "background", "orange" );
      $(".shadow").css( "background", "orange" );
    }
    
    if (seconds==0&&minutes==0){
      audio.volume = document.getElementById("volume").value/100;
      audio.play();
    }
    
    seconds--;
    if(seconds<0){
      minutes--;
      seconds=59;
      if(minutes<0){
        if(session===true){
          // Change state from session to break
          seconds=0;
          minutes=break_minutes_set;
          session=false;
          
        }else{
          // Change state from break to session
          seconds=0;
          minutes=work_minutes_set;
          session=true;
          
        } // Else   
      } // if Session
     } // if minutes
  } // if seconds
    
function stopTimer(){
  clearInterval(myVar); 
}

/* This function is for testing purposes only to set specific timer values */
$( "h1" ).mouseup(function() {
    minutes = 0;
    seconds = 7;
    $( ".s2Content" ).text(seconds);
    $( ".sContent" ).text(minutes);
  })


$( "#s_up" ).mouseup(function() {
  startstop();
  swing($( "#s_up" ));
  if(
    // If button is pressed first time then show values
    $(".square3").text()!="Session Length"){
    $(".square3").css( "background", "white" );
    $(".shadow").css( "background", "white" );
    $(".s3Content").text("Session Length");
    $( ".s2Content" ).text("00");
    $( ".sContent" ).text(work_minutes_set);
  }else{
    // Already in settings state then chage value
    if(work_minutes_set<99){
      work_minutes_set++;
    }
    $( ".sContent" ).text(work_minutes_set);           
  }
  setDefault();
})

$( "#s_down" ).mouseup(function() {
  startstop();
  swing($( "#s_down" ));
  if(
    // If button is pressed first time then show values
    $(".square3").text()!="Session Length"){
    $(".square3").css( "background", "white" );
    $(".shadow").css( "background", "white" );
    $(".s3Content").text("Session Length");
    $( ".s2Content" ).text("00");
    $( ".sContent" ).text(work_minutes_set);
  }else{
    // Already in settings state then chage value
    if(work_minutes_set>0){
      work_minutes_set--;
    }
    $( ".sContent" ).text(work_minutes_set);           
  }
  setDefault();
})

$( "#b_up" ).mouseup(function() {
  startstop();
  swing($( "#b_up" ));
  if(
    // If button is pressed first time then show values
    $(".square3").text()!="Break Length"){
    $(".square3").css( "background", "white" );
    $(".shadow").css( "background", "white" );
    $(".s3Content").text("Break Length");
    $( ".s2Content" ).text("00");
    $( ".sContent" ).text(break_minutes_set);
  }else{
    // Already in settings state then chage value
    if(break_minutes_set<99){
      break_minutes_set++;
    }
    $( ".sContent" ).text(break_minutes_set);           
  }
  setDefault();
})

$( "#b_down" ).mouseup(function() {
  startstop();
  swing($( "#b_down" ));
  if(
    // If button is pressed first time then show values
    $(".square3").text()!="Break Length"){
    $(".square3").css( "background", "white" );
    $(".shadow").css( "background", "white" );
    $(".s3Content").text("Break Length");
    $( ".s2Content" ).text("00");
    $( ".sContent" ).text(break_minutes_set);
  }else{
    if(break_minutes_set>0){
      break_minutes_set--;
    }
    $( ".sContent" ).text(break_minutes_set);           
  }
  setDefault();
})

$( ".mainDiv" ).mouseup(function(){
  // Stop timer if running
  if(running === true){
    $(".square3").css( "background", "white" );
    $(".shadow").css( "background", "white" );
    $( ".s3Content" ).text("");
    running = false;
    stopTimer();
  }
  // Start Timer if stopped
  else{
    running = true;
    if (seconds==0){
      $( ".s2Content" ).text("00");
    }else $( ".s2Content" ).text(seconds);
      $( ".sContent" ).text(minutes);
      if(session===true){
        $( ".s3Content" ).text("Session");
        $(".square3").css( "background", "#adff29" );
        $(".shadow").css( "background", "#adff29" );
      }else{
        $( ".s3Content" ).text("Break!");
        $(".square3").css( "background", "orange" );
        $(".shadow").css( "background", "orange" );
      }
      myVar = setInterval(function(){ myTimer() }, 1000);   
  }
});

function startstop() {
  if(running === true){
    running = false;
    stopTimer();
  }
}

function setDefault() {
  session=true;
  minutes=work_minutes_set;
  seconds=0;
}

function swing(caller) {
  var id = caller;
  id.stop( true, true );
  id.animate({
      marginLeft: "5px",
    }, 100 )
    .animate({
        marginLeft: "-5px",
      }, 100 )
    .animate({
        marginLeft: "3px",
      }, 100 )
    .animate({
        marginLeft: "-3px",
      }, 100 )
    .animate({
        marginLeft: "1px"
       }, 100 )
    .animate({
        marginLeft: "0px"
      }, 100 ); 
}

function swing2(caller) {
  var id = caller;
  id.animate({
      marginTop: "105px",
    }, 100 )
    .animate({
      marginTop: "95px",
      }, 100 )
    .animate({
        marginTop: "103px",
      }, 100 )
    .animate({
        marginTop: "97px",
      }, 100 )
    .animate({
        marginTop: "101px",
       }, 100 )
    .animate({
        marginTop: "100px",
      }, 100 ); 
}

function showValue(newValue)
{
	document.getElementById("output").innerHTML=newValue;
}