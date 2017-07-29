var trou = 1;
var golfPerf ={score:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], fir:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], gir:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], putt:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};
var firCheck = false;
var girCheck = false;

$(document).ready(function(){
    //Handle keys and transitions from keypad to regulation
        $(".key").click(function(){
            $(".key").css("background-color","darkgreen");
            $(this).css("background-color","green");
            $("#next").css("display","inline-block");
            golfPerf.score[trou-1] = parseInt($(this).html());
            console.log(golfPerf.score);
        })

        $('body').on('click','#next',function(){
            if (golfPerf.score[trou-1] == 0){
                $("#putt").css("display","none");
                $("#keypad").css("display","inline-block");
            }
            else{
                // $("#keypad").toggle("slide", "left");
                $("#keypad").css("display","none");
                // $("#girfir").toggle("slide","right");
                $("#girfir").css("display","block");
                $("#girup").css("display","block");
                $("#girdown").css("display","block");
                $("#firup").css("display","block");
                $("#firdown").css("display","block");
                $("#next").css("display","none");
            }
        })
    
    //Handle thumbs in regulation
        $('body').on('click','#menuButton',function(){
            $("#navbar").toggle("slide","left");
            $("#navbar").css("display","inline-block");
            $("#menuButton").css("right","50px");
        })

        $('body').on('click','#gir img', function(){
            if ($(this)[0].id=="girup"){
                $('#girdown').css("display","none");
                golfPerf.gir[trou-1] = 1
            }
            else{
                $('#girup').css("display","none");
            }
            girCheck = true;
            checkFunc();
        })
        $('body').on('click','#fir img', function(){
            if ($(this)[0].id=="firup"){
                $('#firdown').css("display","none");
                golfPerf.fir[trou-1] = 1
            }
            else{
                $('#firup').css("display","none");
            }
            firCheck = true;
            checkFunc();
        })
    
    //Handle keys and transitions from regulation to putt
        $('.puttKey').click(function(){
            $(".puttKey").css("background-color","darkgreen");
            $(this).css("background-color","green");
            $("#nextPutt").css("display","inline-block");
            golfPerf.putt[trou-1] = parseInt($(this).html());
        })
        $('body').on('click','#nextPutt',function(){
            // $("#keypad").toggle("slide", "left");
            $("#girfir").css("display","none");
            // $("#girfir").toggle("slide","right");
            $("#putt").css("display","inline-block");
            $(".puttKey").css("display","inline-block");
            console.log(golfPerf.putt);
            if (golfPerf.putt[trou-1] != 0){
                $("#nextPutt").attr("id","next");
                trou = trou + 1;
                var hole = "Trou " + trou
                $("#holeCount").html(hole);
            }
        })

   
   

function checkFunc(){
    if (firCheck == true && girCheck == true){
        $("#next").css("display","block");
        $("#next").attr("id","nextPutt"); 
    }
}

    // Method with thumbs
    // $('body').on('click','.imgUp', function(){
    //     console.log($(this)[0].id);
    //     if ($(this)[0].id == "girup"){
    //         if ($("#girdown")[0].src.indexOf("img/thumbUpRDark.png") != -1){
    //             $("#girdown").attr("src","img/thumbUpR.png");
    //         }
    //     }

    //     if ($(this)[0].id == "firup"){
    //         if ($("#firdown")[0].src.indexOf("img/thumbUpRDark.png") != -1){
    //             $("#firdown").attr("src","img/thumbUpR.png");
    //         }
    //     }

    //     if ($(this)[0].src.indexOf("/img/thumbUp.png") != -1){
    //         $(this).attr("src","img/thumbUpLight.png");
    //     }
    //     else{
    //         $(this).attr("src","img/thumbUp.png");
    //     }
        
    // })

    // $('body').on('click','.imgDown', function(){
    //     console.log($(this)[0].src);
    //     if ($(this)[0].src.indexOf("/img/thumbUpR.png") != -1){
    //         $(this).attr("src","img/thumbUpRDark.png");
    //     }
    //     else{
    //         $(this).attr("src","img/thumbUpR.png");
    //     }

    //     if ($(this)[0].id == "girup"){
    //         if ($("#girup")[0].src.indexOf("img/thumbUpRDark.png") != -1){
    //             $("#girup").attr("src","img/thumbUpR.png");
    //         }
    //     }

    //     if ($(this)[0].id == "firup"){
    //         if ($("#firup")[0].src.indexOf("img/thumbUpRDark.png") != -1){
    //             $("#firup").attr("src","img/thumbUpR.png");
    //         }
    //     }
        
    // })
})



function score(val){
    golfPerf.score[trou-1] = val;
    if (trou == 19){
        var cpt = 0;
        var i = 0;
        while (i <= 17){
            cpt = cpt + golfPerf.score[i];
            i = i + 1;
        }
        var score = cpt;
    }
}



        

