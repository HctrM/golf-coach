let trou = 1;
let cpt = 0;
const golfPerf ={score:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], fir:[1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0], gir:[0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], putt:[1,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};
const golfFacts = ["Le golf a été inventé en Écosse","125 000 balles vont dans l'eau chaque année au 17ème trou du TPC Sawgrass","Une balle vole plus loin quand il fait chaud car l'air est moins dense","Le golf est le seul sport a avoir été joué sur la Lune","Avant le milieu du 19<sup>ème</sup> siècle, les balles de golf étaient constitué de plumes bouillies fourrées dans une poche de cuir","Chaque balle a entre 330 et 500 alvéoles","Les Américains dépensent 600 millions de dollars en balles de golf chaque année","Tiger Woods a fait son premier trou en un à 8 ans","Les 4 événements majeurs du golf professionnel sont l'Open Britannique, l'US Open, le Masters d'Augusta et le Tournoi PGA"]
let firCheck = false;
let girCheck = false;
const contentList = ["girfir","putt","keypad"]; //To be automatically created
;
let par = 72;
let nbHole = 18;
let menuExtended = false;

$(document).ready(function(){
    var storage = window.localStorage;

        $(".key").click(function(){
            $("#next").css("display","none");
            $(".key").css("background-color","darkgreen");
            $(this).css("background-color","green");
            console.log(parseInt($(this).html()));
            console.log(golfPerf.putt[trou-1]);
            if (parseInt($(this).html()) > golfPerf.putt[trou-1]){
                $("#next").css("display","inline-block");
            }
            golfPerf.score[trou-1] = parseInt($(this).html());
        })
    
    //Handle navigation and hole count 
        $('body').on('click','#next',function(){ 
            let facts = Math.random()
            console.log(contentList);
            clearWindow();
            cpt += 1;
            if (facts <= 0.01){
                knowledge();
                contentList.splice(cpt,0,"facts");
                $("#next").css("display","inline-block");
                showNext();
                return;
            }
            if (cpt > contentList.length-1){
                cpt = 0;
                trou = trou + 1;
                girCheck = false;
                firCheck = false;
                let hole = "Trou " + trou
                $("#holeCount").html(hole);
                if (trou == nbHole + 1){
                    results();
                    let 
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
                menuExtended = true;
            }
            $("#navbar").toggle("slide","left");
            $("#navbar").css("display","inline-block");
        })

    //Handle input on gir fir
        $('body').on('click','#gir img', function(){
            if ($(this)[0].id=="girup"){
                $('#girdown').css("visibility","hidden");
                golfPerf.gir[trou-1] = 1
            }
            else{
                $('#girup').css("visibility","hidden");
            }
            girCheck = true;
            checkFunc();
        })
        $('body').on('click','#fir img', function(){
            if ($(this)[0].id=="firup"){
                $('#firdown').css("visibility","hidden");
                golfPerf.fir[trou-1] = 1
            }
            else{
                $('#firup').css("visibility","hidden");
            }
            firCheck = true;
            checkFunc();
        })
    
    //Handle keys in putt
        $('.puttKey').click(function(){
            $(".puttKey").css("background-color","darkgreen");
            $(this).css("background-color","green");
            $("#next").css("display","inline-block");
            golfPerf.putt[trou-1] = parseInt($(this).html());
        })

        $('#front').click(() =>{
            results(9)
        })
        $('#back').click(() =>{
            results(18)
        })

        $('#historyIco').on("click",() =>{
            clearWindow();
            $("#history").css("display","inline-block");
        })

        $('#currentIco').on("click",() =>{
            $("#history").css("display","none");
            showNext();
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
    if (contentList[cpt] =="facts"){
        contentList.splice(cpt,1);
        cpt = cpt - 1;
    }
    
    // console.log("clear : " + cpt);
}

function showNext(){
    console.log("show : " + contentList[cpt]);
    if (contentList[cpt] =="girfir"){
        $('#girdown').css("visibility","visible");
        $('#girup').css("visibility","visible");
        $('#firdown').css("visibility","visible");
        $('#firup').css("visibility","visible");
    }
    $("#" + contentList[cpt]).css("display","inline-block");
    $("#" + contentList[cpt] + " *").css("display","inline-block");
    
}

function results(FrontBackSwitch){
    $("#holeCount").css("display","none");
    $("#results button").css("display","inline-block");
    $("#next").css("display","none");
    $("#scorecard").css("display","inline-block");
    $("#stat-review").css("display","inline-block");
    let table="<tr>";
    table = table + "<td class=\"firstColumn\">" + "Trou" + "</td>";
    for (i = FrontBackSwitch-9; i < FrontBackSwitch;i++){
        table = table + "<td style=\"border-bottom:1px solid darkgreen\">" + (i+1) + "</td>";
    }
    table = table + "</tr>"
    table = table + "<tr>"
    table = table + "<td class=\"firstColumn\">" + "GIR" + "</td>";
    for (i = FrontBackSwitch-9; i < FrontBackSwitch;i++){
        if (golfPerf.gir[i] == 1){
            table = table + "<td bgcolor=\"green\" style=\"color:white\">" + golfPerf.gir[i] + "</td>";
        }
        else{
            table = table + "<td>" + golfPerf.gir[i] + "</td>";
        }
    }
    table = table + "</tr>"
    table = table + "<tr>"
    table = table + "<td class=\"firstColumn\">" + "FIR" + "</td>";
    for (i = FrontBackSwitch-9; i < FrontBackSwitch;i++){
        if (golfPerf.fir[i] == 1){
            table = table + "<td bgcolor=\"green\" style=\"color:white\">" + golfPerf.fir[i] + "</td>";
        }
        else{
            table = table + "<td>" + golfPerf.fir[i] + "</td>";
        }
    }
    table = table + "</tr>"
    table = table + "<tr>"
    table = table + "<td class=\"firstColumn\">" + "PUTT" + "</td>";
    for (i = FrontBackSwitch-9; i < FrontBackSwitch;i++){
        if(golfPerf.putt[i] == 3){
            table = table + "<td bgcolor=\"red\" style=\"color:white\">" + golfPerf.putt[i] + "</td>";
        }
        else{
            table = table + "<td>" + golfPerf.putt[i] + "</td>";
        }
    }
    table = table + "</tr>"
    table = table + "<tr>"
    table = table + "<td class=\"firstColumn\">" + "SCORE" + "</td>";
    for (i = FrontBackSwitch-9; i < FrontBackSwitch;i++){
        table = table + "<td>" + golfPerf.score[i] + "</td>";
    }
    table = table + "</tr>"
    $("#scorecard").html(table);
    var firPerc = firPercent();
    $("#firPercent.stat").html("FIR : " + firPerc + "/18" + " (" + ((firPerc/golfPerf.fir.length)*100).toFixed(1)+ "%)");
    const girPerc = girPercent();
    $("#girPercent.stat").html("GIR : " + girPerc + "/18" + " (" + ((girPerc/golfPerf.gir.length)*100).toFixed(1)+ "%)");
    const three = threePutt();
    $("#threePutt.stat").html("3 Putts : " + three);
    const scoreTot = score();
    scoreDiff = parseInt(scoreTot) - parseInt(par);
    $("#score.stat").html("Score : " + scoreTot + " (" + scoreDiff + ")");
}

function saveRounds(){
    const lastRound = JSON.stringify(golfPerf);
    storage.setItem("0","lastRound");
}

function knowledge(){
    let fact = Math.floor(Math.random()*golfFacts.length);
    console.log(golfFacts[fact]);
    $("#knowledge").html(golfFacts[fact]);
}

function firPercent(){
    let totalFir=0;
    for (i=0; i < golfPerf.fir.length;i++){
        if (golfPerf.fir[i] == 1)
            totalFir += 1;
    }
    return totalFir;
}

function girPercent(){
    let totalGir=0;
    for (i=0; i < golfPerf.gir.length;i++){
        if (golfPerf.gir[i] == 1)
            totalGir += 1;
    }
    return totalGir;
}

function threePutt(){
    let threePutt = 0;
    for (i=0; i<golfPerf.putt.length;i++){
        if (golfPerf.putt[i]>=3){
            threePutt += 1;
        }
    }
    return threePutt;
}

function score(){
    let score = 0;
    for (i=0; i<golfPerf.score.length; i++){
        score += golfPerf.score[i];
    }
return score;
}


        

