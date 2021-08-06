//use Timer from TimerProj

window.onload=function (){



    var inter=0;
    var sec=0;
    var mint=0;


   var lastw=document.getElementById("texty")
   // var btn=document.getElementById("btn")
    var chsec=document.getElementById("chsec")
    var chmint=document.getElementById("chmint")
    var scored=document.getElementById("score")
    var sarr=document.getElementById('iset')

    var resarr=[]

    var images = [
        'img1',
        'img7',
        'img3',
        'img4',
        'img5',
        'img6',
       'img2',
       'img8',

    ];




  /*  function fysh(objs){
    for(let i=objs.length-1;i>=0;i--){
        let randp=Math.ceil(Math.random()*(i+1));
        [objs[i],objs[randp]=objs[randp],objs[i]];
    }
    return objs;
    }*/

    function fysh(objs){
        for(var j, x, i = objs.length; i; j = Math.floor(Math.random() * i), x = objs[--i],   objs[i] = objs[j], objs[j] = x);
        return objs;
    }



var imarr = images.slice(0);
var allim = images.concat(imarr);
fysh(allim)

var amt=0



//creating set of images
    for (var j = 0; j < allim.length; j++) {


        var openi = document.createElement('div');

        openi.dataset.item = allim[j];
        openi.dataset.view = "image";

        sarr.appendChild(openi)

        openi.onclick=function (){

        if(this.className!="open" && this.className!="usd"){

            this.className="open"
            th=this.dataset.item;
            resarr.push(th)
            clearInterval(inter)
            inter=setInterval(timerst,10)

        }
        if (resarr.length>1){

            if(resarr[0]===resarr[1]){

                iscorrect("usd");
                //score+=5
                amt++
               endy();
                resarr=[];
            }
            else{

                iscorrect("nous");
                resarr=[];
            }
        }
        }

    }


    var iscorrect=function (state){

        var samples=document.getElementsByClassName("open");
        setTimeout(function() {

            for(var i = (samples.length-1); i >=0; i--) {
                samples[i].className = state;

            }

        },500);
    }



     var endy=function (){
        if(amt===8){
            clearInterval(inter)
            lastw.innerHTML="You win!!!"
        }
     }


        function timerst () {
        sec++;
        if(sec <= 9){
            chsec.innerHTML = "0" + sec;
        }

        if (sec > 9){
            chsec.innerHTML = sec;

        }

        if (sec > 99) {
            mint++;
            chmint.innerHTML = "0" + mint;
            sec = 0;
            chsec.innerHTML = "0" + 0;
        }

        if (mint > 9){
            chmint.innerHTML = mint;
        }

    }
}
scored.innerHTML=score;