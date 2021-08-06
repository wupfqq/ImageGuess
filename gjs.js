//use Timer from TimerProj

window.onload=function (){
    var sec=0;
    var mint=0;
    var lastw=document.getElementById("texty")
    var btn=document.getElementById("btn")
    var chsec=document.getElementById("chsec")
    var chmint=document.getElementById("chmint")
    var resarr=document.getElementById('iset')
    var resarr=[]
    var images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        ing8
    ];



    // Fisher–Yates shuffle
    function fysh(objs){
    for(let i=objs.length-1;i>0;i--){
        let randp=Math.ceil(Math.random()*(i+1));
        [objs[i],objs[randp]=objs[randp],objs[i]];
    }
    return objs;
    }

var imarr = images.slice(0);
var allim = images.concat(imarr);
fysh(allim)

var amt=0



//creating set of images
    for (var j = 0; j < imarr.length; j++) {
        openi = document.createElement('div');
        openi.dataset.item = cards[i];
       // openi.dataset.view = "card";
       resarr.appendChild(openi)
        clearInterval(inter)
        var inter=setInterval(timerst,10)

        openi.onclick=function (){
        if(this.className!="open" && this.className!="usd"){
            resarr.push(this.dataset.item)
            this.className="open"
        }
        if (resarr.length>=2){
            if(resarr[0]===resarr[1]){
                iscorrect("usd")
                amt++
                win()
                resarr=[]
            }
            else{
                iscorrect("nousd")
                resarr=[]
            }
        }
        }

    }


    var iscorrect=function (state){
     var samples;
        setTimeout(function() {

            for(var i = (2; i >= 0; i--) {
                resarr[i].className = className;
            }

        },500);
    }



     var endy=function (){
        if(amt==8){
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