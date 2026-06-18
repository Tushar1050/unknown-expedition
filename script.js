/* ==================================
   UNKNOWN EXPEDITION V3
   script.js
================================== */

/* -------------------------------
   LOADER
-------------------------------- */

window.addEventListener("load", () => {

    const progress = document.querySelector(".progress");
    const loader = document.getElementById("loader");

    if(!progress || !loader){
        return;
    }

    let width = 0;

    const loading = setInterval(() => {

        width += 1;
        progress.style.width = width + "%";

        if (width >= 100) {

            clearInterval(loading);

            setTimeout(() => {

                if(window.gsap){

                    gsap.to(loader, {
                        opacity: 0,
                        duration: 1,
                        onComplete: () => {
                            loader.style.display = "none";
                        }
                    });

                }

                else{
                    loader.style.opacity = "0";
                    loader.style.display = "none";
                }

            }, 500);
        }

    }, 20);

});


/* -------------------------------
   TYPED TEXT
-------------------------------- */

if(window.Typed && document.querySelector("#typing")){

new Typed("#typing", {

    strings: [
        "Unknown Voyager",
        "Video Editor",
        "Content Creator",
        "Engineering Student",
        "Freelancer"
    ],

    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true

});

}


/* -------------------------------
   GSAP SETTINGS
-------------------------------- */

if(window.gsap && window.ScrollTrigger){

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "play none none reverse",
    scrub: 1
});


/* -------------------------------
   HERO ANIMATION
-------------------------------- */

gsap.from(".hero-content", {

    opacity: 0,
    y: 100,
    duration: 1.2,
    delay: 0.3

});

gsap.from(".glass-card", {

    opacity: 0,
    x: 100,
    duration: 1.5,
    delay: 0.5

});


/* -------------------------------
   SECTION TITLES
-------------------------------- */

gsap.utils.toArray(".section-title").forEach(title => {

    gsap.from(title, {

        scrollTrigger: {
            trigger: title,
            start: "top 90%",
            end: "top 65%"
        },

        y: 95,
        opacity: 0,
        duration: 1

    });

});


/* -------------------------------
   TIMELINE ITEMS
-------------------------------- */

gsap.utils.toArray(".timeline-item").forEach(item => {

    gsap.from(item, {

        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 62%"
        },

        x: -180,
        opacity: 0,
        duration: 1

    });

});


/* -------------------------------
   SKILLS
-------------------------------- */

gsap.utils.toArray(".skill-card").forEach(skill => {

    gsap.from(skill, {

        scrollTrigger: {
            trigger: skill,
            start: "top 90%",
            end: "top 62%",
            onEnter: () => {
                const meter = skill.querySelector(".skill-meter span");
                const level = skill.dataset.skillLevel || 75;

                if (meter) {
                    meter.style.width = level + "%";
                }
            },
            onLeaveBack: () => {
                const meter = skill.querySelector(".skill-meter span");

                if (meter) {
                    meter.style.width = "0%";
                }
            }
        },

        y: 120,
        opacity: 0,
        scale: 0.92,
        duration: 0.8

    });

});


/* -------------------------------
   SERVICES
-------------------------------- */

gsap.utils.toArray(".service-card").forEach(card => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 92%",
            end: "top 65%"
        },

        y: 140,
        opacity: 0,
        scale: 0.9,
        duration: 0.8

    });

});


/* -------------------------------
   PROJECTS
-------------------------------- */

gsap.utils.toArray(".project-card").forEach(card => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 92%",
            end: "top 65%"
        },

        y: 90,
        scale: 0.72,
        opacity: 0,
        duration: 0.8

    });

});

gsap.from(".cta-panel", {

    scrollTrigger: {
        trigger: ".cta-panel",
        start: "top 92%",
        end: "top 65%"
    },

    y: 130,
    scale: 0.9,
    opacity: 0,
    duration: 1

});


/* -------------------------------
   ABOUT SECTION
-------------------------------- */

gsap.from(".about-grid img", {

    scrollTrigger: {
        trigger: "#about",
        start: "top 85%",
        end: "top 55%"
    },

    x: -180,
    scale: 0.9,
    opacity: 0,
    duration: 1.2

});

gsap.from(".about-grid div", {

    scrollTrigger: {
        trigger: "#about",
        start: "top 85%",
        end: "top 55%"
    },

    x: 180,
    scale: 0.9,
    opacity: 0,
    duration: 1.2

});


/* -------------------------------
   FLOATING PROFILE CARD
-------------------------------- */

const card = document.querySelector(".glass-card");

document.addEventListener("mousemove", (e) => {

    if (!card) return;

    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;

    card.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});


/* -------------------------------
   NAVBAR SCROLL EFFECT
-------------------------------- */

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 100) {

        nav.style.background =
            "rgba(5,8,22,0.85)";

        nav.style.backdropFilter =
            "blur(25px)";

    } else {

        nav.style.background =
            "rgba(5,8,22,0.45)";

    }

});


/* -------------------------------
   PARALLAX GLOW EFFECT
-------------------------------- */

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.body.style.backgroundPosition =
        `${x * 20}px ${y * 20}px`;

});


/* -------------------------------
   BUTTON HOVER ANIMATION
-------------------------------- */

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .hire-btn"
);

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        if(!window.gsap){
            return;
        }

        gsap.to(btn, {
            scale: 1.05,
            duration: 0.3
        });

    });

    btn.addEventListener("mouseleave", () => {

        if(!window.gsap){
            return;
        }

        gsap.to(btn, {
            scale: 1,
            duration: 0.3
        });

    });

});


/* -------------------------------
   FOOTER REVEAL
-------------------------------- */

gsap.from("footer", {

    scrollTrigger: {
        trigger: "footer",
        start: "top 92%",
        end: "top 65%"
    },

    y: 150,
    scale: 0.92,
    opacity: 0,
    duration: 1

});

}


/* -------------------------------
   CONSOLE MESSAGE
-------------------------------- */

console.log(
`
🚀 UNKNOWN EXPEDITION

Built by:
Tushar Bajaj

Also Known As:
Unknown Voyager

Unknown Journey.
Endless Horizons.
`
);
/* ==================================
   FLOATING GLITTER EFFECT
================================== */

const glitterTargets = document.querySelectorAll(
`
.glass-card,
.primary-btn,
.secondary-btn,
.hire-btn,
.project-card,
.service-card,
.skill-card,
.timeline-item,
.cta-panel,
.social-links a,
.brand img
`
);

const isTouchDevice =
window.matchMedia("(pointer: coarse)").matches;

let lastTargetSparkle =
0;

glitterTargets.forEach(target => {

    target.addEventListener("mousemove", (e) => {

        const now =
        Date.now();

        if(now - lastTargetSparkle < 18){
            return;
        }

        lastTargetSparkle =
        now;

        createSparkle(
        e.clientX,
        e.clientY
        );

    }, { passive:true });

});
/* ==================================
   UNKNOWN EXPEDITION
   COSMIC GLITTER SYSTEM
================================== */

function createSparkle(x,y){

    const sparkle =
    document.createElement("span");

    sparkle.classList.add("sparkle");

    const randomSize = Math.random();

    if(randomSize > 0.7){

        sparkle.classList.add("large");

    }

    else if(randomSize < 0.3){

        sparkle.classList.add("small");

    }

    sparkle.style.left =
    x + "px";

    sparkle.style.top =
    y + "px";

    document.body.appendChild(
    sparkle
    );

    setTimeout(()=>{

        sparkle.remove();

    },1600);

}

/* --------------------------------
   WHOLE WEBSITE GLITTER TRAIL
-------------------------------- */

let lastTrailSparkle =
0;

function createTrailSparkle(x,y,spread){

    createSparkle(

    x +
    (Math.random()*spread-spread/2),

    y +
    (Math.random()*spread-spread/2)

    );

}

document.addEventListener(
"mousemove",

(e)=>{

    const now =
    Date.now();

    const delay =
    isTouchDevice ? 28 : 14;

    if(now - lastTrailSparkle < delay){
        return;
    }

    lastTrailSparkle =
    now;

    if(Math.random() > 0.2){

        createTrailSparkle(

        e.clientX,

        e.clientY,

        isTouchDevice ? 36 : 48

        );

    }

}, { passive:true });

document.addEventListener(
"touchmove",

(e)=>{

    const touch =
    e.touches[0];

    if(!touch){
        return;
    }

    const now =
    Date.now();

    if(now - lastTrailSparkle < 28){
        return;
    }

    lastTrailSparkle =
    now;

    createTrailSparkle(
    touch.clientX,
    touch.clientY,
    40
    );

}, { passive:true });

document.addEventListener(
"touchstart",

(e)=>{

    const touch =
    e.touches[0];

    if(!touch){
        return;
    }

    createTrailSparkle(
    touch.clientX,
    touch.clientY,
    30
    );

}, { passive:true });

/* --------------------------------
   CLICK POP SOUND
-------------------------------- */

let popAudioContext;

function playPopSound(){

    const AudioContext =
    window.AudioContext ||
    window.webkitAudioContext;

    if(!AudioContext){
        return;
    }

    if(!popAudioContext){
        popAudioContext =
        new AudioContext();
    }

    const oscillator =
    popAudioContext.createOscillator();

    const gain =
    popAudioContext.createGain();

    const now =
    popAudioContext.currentTime;

    oscillator.type =
    "sine";

    oscillator.frequency.setValueAtTime(
    620,
    now
    );

    oscillator.frequency.exponentialRampToValueAtTime(
    180,
    now + 0.08
    );

    gain.gain.setValueAtTime(
    0.18,
    now
    );

    gain.gain.exponentialRampToValueAtTime(
    0.001,
    now + 0.09
    );

    oscillator.connect(gain);
    gain.connect(popAudioContext.destination);

    oscillator.start(now);
    oscillator.stop(now + 0.1);

}

document.addEventListener("click", playPopSound);

/* --------------------------------
   UNKNOWN EXPEDITION VOICE
-------------------------------- */

function speakUnknownExpedition(){

    if(!window.speechSynthesis){
        return;
    }

    window.speechSynthesis.cancel();

    const message =
    new SpeechSynthesisUtterance(
    "Unknown Expedition starts with unknown curiosity"
    );

    message.rate =
    0.92;

    message.pitch =
    0.95;

    message.volume =
    1;

    window.speechSynthesis.speak(message);

}

document.querySelectorAll(".voice-title").forEach(title => {

    title.addEventListener("click", speakUnknownExpedition);

});

document.querySelectorAll("video").forEach(video => {

    video.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

});
