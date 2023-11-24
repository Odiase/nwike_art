// home background change animation
window.addEventListener("load", () => {
    const image = document.getElementById("home_bg");
    const imageSources = [
        "static/assets/site_images/nwike_art1.jpg", 
        "static/assets/site_images/nwike_art2.jpg", 
        "static/assets/site_images/nwike_art3.jpg",
        "static/assets/site_images/work9.jpg"
    ]
    let currentIndex = 0;

    function switchImage() {
        // Fade out the current image
        image.style.opacity = 0;
        currentIndex = (currentIndex + 1) % imageSources.length;
        setTimeout(() => {
            // Change the image source
            image.src = imageSources[currentIndex];
            // Fade in the new image
            image.style.opacity = 1;
        }, 200); // Delay should match the CSS transition duration (0.5s)
    }

    // Call the switchImage function every 0.75 seconds
    setInterval(switchImage, 3000);
});




// Mobile Menu Toggle 
const mobile_nav_container = document.querySelector("#mobile_nav .nav_links");
const menu_btn = document.querySelector("#menu_btn");
const close_nav_btn = document.querySelector(".close_nav_btn");

menu_btn.addEventListener("click", () => {
    mobile_nav_container.style.opacity = "1";
    mobile_nav_container.style.zIndex = "10"
})

close_nav_btn.addEventListener("click", () => {
    mobile_nav_container.style.opacity = "0";
    mobile_nav_container.style.zIndex = "-10"
})




// Reveal Hero text

window.addEventListener("load", function() {
    const fadeInText = document.querySelector(".hero_text");
    fadeInText.classList.add("appear");

    handleScroll();
});



// REVEAL SECTION ANIMATION

let sections = document.querySelectorAll('section');

function handleScroll() {
    sections.forEach((section) => {
        let rect = section.getBoundingClientRect();
        let isVisible = (rect.top <= window.innerHeight / 2) && (rect.bottom >= window.innerHeight / 2);

        if (isVisible) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}
// Listen for scroll events
window.addEventListener('scroll', handleScroll);



//////////// SLIDER SECTION
var swiper_container = document.querySelector('.swiper-container')
var swiper = new Swiper(swiper_container, {
    effect : 'coverflow',
    grabCursor : true,
    centeredSlides : true,
    slidesPerView : 'auto',
    coverFlowEffect : {
        rotate : 0,
        tretch : 0,
        depth : 100,
        modifier : 2,
        slideShadows : true
    },
    loop : true,
    
})

console.log(swiper)