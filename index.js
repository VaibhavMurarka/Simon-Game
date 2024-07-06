var colors=["green","red","yellow","blue"];
var pattern=[];
var lvl=1;
var matcher=0;
var start=false;
function number(){
    var randomno=Math.floor(4*Math.random());
    var randomcolor=colors[randomno];
    pattern.push(randomcolor);
    effect(randomcolor);
}
function effect(curcol){
    $("."+curcol).addClass("pressed");
    setTimeout(function(){
        $("."+curcol).removeClass("pressed");
    },100);
    var audio=new Audio("./sounds/"+curcol+".mp3");
    audio.play();
}
function fail(){
    var audio=new Audio("./sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over")
    },100);
}
$(".btn").on("click",function(){
        var col=this.getAttribute("id");
        effect(col);
        console.log(1);
        if(pattern.length>0 && matcher<pattern.length && pattern[matcher]==col){
            matcher++;
            if(matcher==pattern.length){
                matcher=0;
                lvl++;
                console.log(lvl);
                $("h1").text("Level " + lvl);
                setTimeout(function(){
                    number();
                },800);
            }
        }else{
            $("h1").text("Game Over, Press Any Key to Restart");
            fail();
            start=false;
        } 
});

$(document).on("keydown",function(event){
    if(!start){
        pattern=[];
        matcher=0;
        lvl=1;
        $("h1").text("Level " + lvl);
        number();
        start=true;
    }
});