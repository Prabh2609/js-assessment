// -----------------------------------------EMOJI MAKER STARTS----------------------------------------------------------------------
//------------SKIN-------------------------------------

var emojiSkin=$("#skin");
$("#yellow-skin").click(function(e){
    emojiSkin.attr("src",e.target.src);
    $("#select-skin-card").css("display","none");
    $("#select-eyes-card").css("display","block");
})
$("#green-skin").click(function(e){
    emojiSkin.attr("src",e.target.src);
    $("#select-skin-card").css("display","none");
    $("#select-eyes-card").css("display","block");
})
$("#red-skin").click(function(e){
    emojiSkin.attr("src",e.target.src);
    $("#select-skin-card").css("display","none");
    $("#select-eyes-card").css("display","block");
})
//------------SKIN DONE-------------------------------------
//----------------EYES--------------------------------------
var emojiEyes=$("#eyes");
$("#eye-normal").click(function(e){
    emojiEyes.attr("src",e.target.src);
    $("#select-eyes-card").css("display","none");
    $("#select-mouth-card").css("display","block");
})
$("#eye-closed").click(function(e){
    emojiEyes.attr("src",e.target.src);
    $("#select-eyes-card").css("display","none");
    $("#select-mouth-card").css("display","block");
})
$("#eye-long").click(function(e){
    emojiEyes.attr("src",e.target.src);
    $("#select-eyes-card").css("display","none");
    $("#select-mouth-card").css("display","block");
})
$("#eye-laughing").click(function(e){
    emojiEyes.attr("src",e.target.src);
    $("#select-eyes-card").css("display","none");
    $("#select-mouth-card").css("display","block");
})
$("#eye-rolling").click(function(e){
    emojiEyes.attr("src",e.target.src);
    $("#select-eyes-card").css("display","none");
    $("#select-mouth-card").css("display","block");
})
$("#eye-winking").click(function(e){
    emojiEyes.attr("src",e.target.src);
    $("#select-eyes-card").css("display","none");
    $("#select-mouth-card").css("display","block");
})
//----------------EYES DONE---------------------------------
//-----------------MOUTH-------------------------------------
var emojiMouth=$("#mouth")

$("#mouth-open").click(function(e){
    emojiMouth.attr("src",e.target.src);
})
$("#mouth-smiling").click(function(e){
    emojiMouth.attr("src",e.target.src);
})
$("#mouth-straight").click(function(e){
    emojiMouth.attr("src",e.target.src);
})
$("#mouth-sad").click(function(e){
    emojiMouth.attr("src",e.target.src);
})
$("#mouth-teeth").click(function(e){
    emojiMouth.attr("src",e.target.src);
})
//-----------------MOUTH DONE--------------------------------
//----------------ARROWS--------------------------------------
$("#show-skin-card").click(function(){
    $("#select-eyes-card").css("display","none");
    $("#select-skin-card").css("display","block");
    
})
$("#show-mouth-card").click(function(){
    $("#select-eyes-card").css("display","none");
    $("#select-mouth-card").css("display","block");
})
$(".show-eyes-card").click(function(){
    $("#select-mouth-card").css("display","none");
    $("#select-skin-card").css("display","none");
    $("#select-eyes-card").css("display","block");
})
//---------------ARROWS DONE----------------------------------
// -----------------------------------------EMOJI MAKER ENDS-------------------------------------------------------------------------------------
