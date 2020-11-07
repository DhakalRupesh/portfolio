//    <!-- shadow on scroll-->
{/* <script type="text/javascript"> */}
   window.addEventListener('scroll', function(){
       let header = document.querySelector('header');
       let windowposition =  window.scrollY > 0
       header.classList.toggle('scrolling-active', windowposition);
   });
// </script>

// <!-- navlink active -->
{/* <script type="text/javascript"> */}
    $(document).on('click', 'ul li', function(){
        $(this).addClass('active_link').siblings().removeClass('active_link');
    });
// </script>


// scroll animations---------------------
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.body-name',{});
sr.reveal('.greeting',{}); 
sr.reveal('.body-profession',{}); 
sr.reveal('.body-list',{delay: 100}); 
sr.reveal('.profile',{delay: 100}); 
sr.reveal('.body-list-social',{ interval: 100}); 

/*SCROLL ABOUT*/
sr.reveal('.img-about',{}); 
sr.reveal('.about-title',{delay: 100}); 
sr.reveal('.about-desc',{delay: 100});
sr.reveal('.about-goodat-container',{delay: 100}); 
sr.reveal('.about-btn-contactme',{delay: 100}); 

// what i do
sr.reveal('.img-about',{}); 
sr.reveal('.about-icon i',{delay: 100}); 
sr.reveal('.about-card h3',{delay: 100});
sr.reveal('.about-card p',{delay: 100}); 

/*SCROLL SKILLS*/
sr.reveal('.tech-text',{}); 
sr.reveal('.propskill',{}); 
sr.reveal('.bar',{interval: 100}); 
sr.reveal('.img-skill-circle',{delay: 100});


