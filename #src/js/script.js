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
        $(document).on('click', '.has-sub-menu .icon-arrow', function(){
          
          if ($(this).hasClass('open') ) {
            $(this).removeClass('open');
            $(this).next('.sub-menu').hide();
            $(this).prev('a').removeClass('active');
          } else {
            $(this).addClass('open');
            $(this).next('.sub-menu').show();
            $(this).prev('a').addClass('active');
          }
        })
      }
  }
};

jQuery(function () {
  front.init();
});
