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