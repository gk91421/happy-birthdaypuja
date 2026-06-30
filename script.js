const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {

let x = (window.innerWidth / 2 - e.clientX) / 30;

let y = (window.innerHeight / 2 - e.clientY) / 30;

card.style.transform =
`rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave", () => {

card.style.transform =
"rotateY(0deg) rotateX(0deg)";

});
const gift=document.getElementById("gift");

gift.onclick=()=>{

gift.classList.toggle("open");

for(let i=0;i<40;i++){

const s=document.createElement("span");

s.className="sparkle";

s.style.left="90px";

s.style.top="80px";

s.style.setProperty("--x",(Math.random()*400-200)+"px");

s.style.setProperty("--y",(Math.random()*400-200)+"px");

gift.appendChild(s);

setTimeout(()=>{

s.remove();

},800);

}


}
/* ===========================
FLOWERS
=========================== */

function createFlower(){

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML="🌸";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=
5+Math.random()*5+"s";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},9000);

}

setInterval(createFlower,350);


/* ===========================
HEARTS
=========================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
6+Math.random()*3+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,1200);
/*============================
Envelope Animation
============================*/

const envelope = document.getElementById("envelope");

envelope.addEventListener("click",()=>{

envelope.classList.toggle("open");

});
/*============================
Fireworks
============================*/

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

document.getElementById("celebrateBtn").onclick=()=>{

for(let i=0;i<80;i++){

const x=Math.random()*canvas.width;

const y=Math.random()*canvas.height/2;

const r=Math.random()*4+2;

ctx.beginPath();

ctx.arc(x,y,r,0,Math.PI*2);

ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

ctx.fill();

}

setTimeout(()=>{

ctx.clearRect(0,0,canvas.width,canvas.height);

},1800);

};
/*=========================
Balloons
=========================*/

function balloon(){

const b=document.createElement("div");

b.className="balloon";

b.innerHTML="🎈";

b.style.left=Math.random()*100+"vw";

document.body.appendChild(b);

setTimeout(()=>{

b.remove();

},10000);

}

setInterval(balloon,1200);


/*=========================
Confetti
=========================*/

function confetti(){

for(let i=0;i<50;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=

`hsl(${Math.random()*360},100%,60%)`;

c.style.animationDuration=

3+Math.random()*4+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},7000);

}

}

document.getElementById("finalBtn").onclick=()=>{

confetti();

alert("🎉 Happy Birthday Sister Puja ❤️");

};
/*=========================
Loader
=========================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},2200);

});

/*=========================
Cursor
=========================*/

const cursor=document.createElement("div");

cursor.className="cursor";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

/*=========================
Music
=========================*/

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play()
        .then(() => {
            musicBtn.innerHTML = "🔊";
        })
        .catch(err => {
            console.log(err);
            alert("Music couldn't play.");
        });

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵";
    }

});
