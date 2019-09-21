var answers=[]
var score=0;
$.get("http://5d76bf96515d1a0014085cf9.mockapi.io/quiz",function(data,status){
    for(var i=0;i<data.length;i++)
    {
        answers.push(data[i].answer);
    }
    localStorage.setItem("Answers",answers);

})
var pattern=/=\d/g;
var pattern2=/\d/g;
var url=location.search
var answersEnteredByUser=url.match(pattern);
var correctAnswers=localStorage.getItem("Answers").match(pattern2);
for(var i=0;i<answersEnteredByUser.length;i++)
{
    answersEnteredByUser[i]=answersEnteredByUser[i].split("=");
    // console.log(answersEnteredByUser[i][1]);
    if(answersEnteredByUser[i][1]==correctAnswers[i])
    {
        score++;
    }
    
}
console.log("Score : "+score);
if(answersEnteredByUser.length>0)
{
    $("#result-modal h3")[0].innerText=$("#result-modal h3")[0].innerText+score+"/5";
    $("#modal-wrapper").css("display","block");
}
