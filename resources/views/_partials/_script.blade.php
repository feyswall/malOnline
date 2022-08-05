  <script type="text/javascript" src="assets/js/responsee.js"></script>
      <script type="text/javascript" src="assets/owl-carousel/owl.carousel.js"></script>
      <script type="text/javascript">
         jQuery(document).ready(function($) {
            var theme_slider = $("#owl-demo");
            var owl = $('#owl-demo');
            owl.owlCarousel({
              nav: false,
              dots: true,
              items: 1,
              loop: true,
              autoplay: true,
              autoplayTimeout: 6000
            });
            var owl = $('#owl-demo2');
            owl.owlCarousel({
              nav: true,
              dots: false,
              items: 1,
              loop: true,
              navText: ["&#xf007","&#xf006"],
              autoplay: true,
              autoplayTimeout: 4000
            });
        
            // Custom Navigation Events
            $(".next-arrow").click(function() {
                theme_slider.trigger('next.owl');
            })
            $(".prev-arrow").click(function() {
                theme_slider.trigger('prev.owl');
            })     
        }); 
      </script>