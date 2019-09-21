var video=$("#video-player");
var playlist;
var title;
var url;
var videos;
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist",function(data,status){
    playlist=data;
    console.log(playlist);
    $.get("http://5d76bf96515d1a0014085cf9.mockapi.io/video",function(response,status)
    {
        videos=response;
        console.log(videos);
    })
    $(".video-card-title").click(function(e){
        title=e.target.innerHTML;    
        console.log(title)
        // for(var i=0;i<6;i++)
        // {   for(var j=0;j<6;j++)
        //     {  if(playlist[0].title==videos[j].title)
        //         {
        //             console.log("Found at"+(j+1));
        //         }
        //     }
        // }
        for(var i=0;i<6;i++)
        {
            if(playlist[i].title==title)
            {
                console.log(i);
            }
        }
    })
})


