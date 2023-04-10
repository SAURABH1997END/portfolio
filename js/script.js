// alert("heloo") ata ms pop up hoba


const header = document.querySelector("header");

// skill 

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

// servc 
const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");
const links = document.querySelectorAll(".nav_link");
const prt_section = document.querySelector(".project");
const toggle_btn = document.querySelector(".toggle_btn")
const modal_overlay = document.querySelector(".modal-overlay");
const hamburger = document.querySelector(".hamburger");

window.addEventListener("scroll", () => {
    activeLink();
    if (!skillsPlayed) skillsCounter();
    if (!mlPlayed) mlCounter();

});


// NAVBAR STYLING 

// NAVBAR STICKY START HERE

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();
window.addEventListener("scroll", stickyNavbar);

// NAVBAR STICKY END HERE

// SCROLL REVEAL 

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
})

sr.reveal(".showinfo", { delay: 600 });  // showinfo scroll hoba
sr.reveal(".showimage", { origin: "top", delay: 700 });  // showimage scroll hoba



//  SKILL 

function hasReached(el) {
    let topPosition = el.getBoundingClientRect().top;
    // console.log(topPosition);

    if (window.innerHeight >= topPosition + el.offsetHeight) {
        return true;
    } else {
        return false;
    }
}


function updateCount(num, maxNum) {
    let currentNum = +num.innerText;

    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    }

}

let skillsPlayed = false;

function skillsCounter() {
    if (!hasReached(first_skill)) return;

    skillsPlayed = true;

    sk_counters.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100);
        progress_bars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
            updateCount(counter, target);
        }, 400);
    });

    progress_bars.forEach(
        (p) => p.style.animation = "progress 2s ease-in-out forwards")
}

// SERVC 

let mlPlayed = false;

function mlCounter() {
    if (!hasReached(ml_section)) return;
    mlPlayed = true;
    ml_counters.forEach((ctr) => {
        let target = +ctr.dataset.target;

        setTimeout(() => {
            updateCount(ctr, target);
        }, 400);
    });
}


// PRJT 

// prgt filter animation

let mixer = mixitup(".project-gallery", {
    selectors: {
        target: ".prt-card",
    },
    animation: {
        duration: 500,
    },

})

function activeLink() {
    let sections = document.querySelectorAll("section[id]");
    let passedSections = Array.from(sections)
    .map((sct, i) => {
        return {
            y: sct.getBoundingClientRect().top - header.offsetHeight,
            id: i,
        };
    })
    .filter((sct) => sct.y <= 0);
     let currSectionID = passedSections.at(-1).id;
     links.forEach(l => l.classList.remove("active"));     
     links[currSectionID].classList.add["active"];
 }
 activeLink();


// dark 

function changeTheme() {
    if (!document.body.classList.contains("dark")) {
        document.body.classList.add("dark");
        toggle_btn.classList.replace("fa-moon", "fa-sun");
        
    }

    else {
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("fa-sun", "fa-moon");
    }
}
toggle_btn.addEventListener("click", () => {
    changeTheme();
});


// navbar 

hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});

links.forEach(link => 
    link.addEventListener("click", () =>{
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");    

}));




// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: [ "Begineer frontend developer","web developmet"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->


// SCROLL  

$(window).on('scroll load', function () {
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }


});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});


// TIMECODE 

var countDownDate = new Date("April 31, 2023 15:37:25").getTime();
 
var x = setInterval(function() {
 
  var now = new Date().getTime();
 
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 



// const parentContainer =  document.querySelector('.running-grid');

// parentContainer.addEventListener('click', event=>{

//     const current = event.target;

//     const isReadMoreBtn = current.className.includes('read-more-btn');

//     if(!isReadMoreBtn) return;

//     const currentText = event.target.parentNode.querySelector('.read-more-text');

//     currentText.classList.toggle('read-more-text--show');

//     current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

// })