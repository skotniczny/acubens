$(function () {

  // Hamburger Menu
  var $mainMenu = $(".main-menu");
  $mainMenu.hide();
  $(".hamburger").on("click", function() {
    $mainMenu.slideToggle(200);
  });

  // Heading Text Animation
  var $heading = $(".banner-title");
  var headingText = $heading.text();
  $heading.textillate({
    loop: false,
    initialDelay: 700,
    in: {
      effect: 'wobble',
      callback: function() {
        $heading.textillate('out');
      }
    },
    out: {
      effect: 'hinge',
      callback: function() {
        $heading.hide().text(headingText).fadeIn(1500);
      }
    }
  });

  // Scroll Animations
  var controller = new ScrollMagic.Controller();

  var headerTween = TweenMax.to("#site-header .container", 1, {opacity: 0, ease: SlowMo.ease.config( 0.1, 1, false)});
  var galleryTween = TweenMax.fromTo("#gallery .container", 1, {opacity: 0}, {opacity: 1, ease: Sine. easeIn});
  var featuresTween = TweenMax.fromTo("#features", 1.5, {x: "-100%"}, {x: "0%", ease: Bounce.easeOut});
  var testimonialsTween = TweenMax.fromTo("#testimonials .container", 1.5, {scale: 0.1}, {scale: 1, ease: Bounce.easeOut});
  var downloadTween = TweenMax.fromTo("#download .container", 1, {opacity: 0}, {opacity: 1, ease: Sine.easeIn});

  // Header
  new ScrollMagic.Scene({
    triggerElement: '#site-header',
    duration: $("#site-header").height()
  })
  .triggerHook("onLeave")
  .setTween(headerTween)
  .addTo(controller);

  // Gallery 
  new ScrollMagic.Scene({
    triggerElement: '#gallery',
    reverse: false
  })
  .setTween(galleryTween)
  .addTo(controller);

  // Features
  new ScrollMagic.Scene({
    triggerElement: '#features',
    reverse: false
  })
  .setTween(featuresTween)
  .addTo(controller);

  // Testimonials
  new ScrollMagic.Scene({
    triggerElement: '#testimonials',
    reverse: false
  })
  .setTween(testimonialsTween)
  .addTo(controller);

  // Download
  new ScrollMagic.Scene({
    triggerElement: '#download',
    offset: 150,
    reverse: false
  })
  .triggerHook('onEnter')
  .setTween(downloadTween)
  .addTo(controller);

  // Quotes
  $(".quote").each(function() {
    new ScrollMagic.Scene({
      triggerElement: this,
      duration: $(this).height() - 15
  })
  .setClassToggle(this, "active")
  .addTo(controller);
  });
});