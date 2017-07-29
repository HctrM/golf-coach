var trou = 1;
const golfPerf ={score:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], fir:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], gir:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], putt:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};
let firCheck = false;
let girCheck = false;
const contentList = ["keypad","girfir","putt"]; //To be automatically created
var cpt = 0;
var menuExtended = false;

$(document).ready(function(){
        $(".key").click(function(){
            $(".key").css("background-color","darkgreen");
            $(this).css("background-color","green");
            $("#next").css("display","inline-block");
            golfPerf.score[trou-1] = parseInt($(this).html());
        })
    
    //Handle navigation and hole count 
        $('body').on('click','#next',function(){ 
            clearWindow();
            cpt += 1;
            if (cpt > contentList.length-1){
                cpt = 0;
                trou = trou + 1;
                girCheck = false;
                firCheck = false;
                var hole = "Trou " + trou
                $("#holeCount").html(hole);
                if (trou == 19){
                    results();
                    return;
                }
            }
            showNext();
            $("#next").css("display","none");

        })
    
    //Burger menu
        $('body').on('click','#menuButton',function(){
            if (menuExtended == true){
                $("#menuButton").css("left","10px");
                menuExtended = false;
            }
            else{
                $("#menuButton").css("left","50px");
                menuExtended = true;
            }
            $("#navbar").toggle("slide","left");
            $("#navbar").css("display","inline-block");
           
            
           
        })

    //Handle input on gir fir
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
            $("#next").css("display","inline-block");
            golfPerf.putt[trou-1] = parseInt($(this).html());
        })
})


function checkFunc(){
    if (firCheck == true && girCheck == true){
        $("#next").css("display","inline-block");
    }
}

function clearWindow(){
    $("#" + contentList[cpt]).css("display","none");
    $("#" + contentList[cpt] + " *").css("display","none");
    // console.log("clear : " + cpt);
}

function showNext(){
    // console.log("show : " + (cpt+1));
    $("#" + contentList[cpt]).css("display","inline-block");
    $("#" + contentList[cpt] + " *").css("display","inline-block");
}

function results(){
    $("#results button").css("display","inline-block");
    $("#scorecard").css("display","inline-block");
    var table="<tr>";
    table = table + "<td style=\"width:60px\">" + "Trou" + "</td>";
    for (i = 0; i < 18;i++){
        table = table + "<td>" + (i+1) + "</td>";
    }
    table = table + "</tr>"
    table = table + "<tr>"
    table = table + "<td style=\"width:60px\">" + "GIR" + "</td>";
    for (i = 0; i < 18;i++){
        table = table + "<td>" + golfPerf.gir[i] + "</td>";
    }
    table = table + "</tr>"
    table = table + "<tr>"
    table = table + "<td style=\"width:60px\">" + "FIR" + "</td>";
    for (i = 0; i < 18;i++){
        table = table + "<td>" + golfPerf.fir[i] + "</td>";
    }
    table = table + "</tr>"
    table = table + "<tr>"
    table = table + "<td style=\"width:60px\">" + "PUTT" + "</td>";
    for (i = 0; i < 18;i++){
        table = table + "<td>" + golfPerf.putt[i] + "</td>";
    }
    table = table + "</tr>"
    table = table + "<tr>"
    table = table + "<td style=\"width:60px\">" + "SCORE" + "</td>";
    for (i = 0; i < 18;i++){
        table = table + "<td>" + golfPerf.score[i] + "</td>";
    }
    table = table + "</tr>"
    $("#scorecard").html(table);
}




        

