let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  $body: $('body'),
  init: function () {
      this.events();
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.toggleClass('active');
        } else {
            this.hamburger.removeClass('open');
            this.nav.toggleClass('active');
        }
    },

  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });

      if(window.matchMedia('(max-width: 1400px)').matches){
        $(document).on('click', '.menu-item-has-child .icon-arrow', function(){
          
          if ($(this).parent().hasClass('open') ) {
            $(this).parent().removeClass('open');
            $(this).parent().next('.sub-menu-container').hide();
            // $(this).prev('a').removeClass('active');
          } else {
            $(this).parent().addClass('open');
            $(this).parent().next('.sub-menu-container').show();
            // $(this).prev('a').addClass('active');
          }
        })
      }
      $(document).ready(function() {
        $(".accordion__item .accordion__button").on("click", function(e) {
        e.preventDefault();
            $(this).parent().toggleClass("active");
            $(this).parent().find(".accordion__content").slideToggle(200);
        });
        $(document).on('click', '.scroll-to', function(){
          $('html, body').animate({
              scrollTop: $( $(this).attr('href') ).offset().top - 60
          }, 500);
          $('body').removeClass('active');
          return false;
  
        });
      });
  }
};

jQuery(function () {
  front.init();
});
