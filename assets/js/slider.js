


// Menu moving downward
TweenMax.set("#foreground", {alpha:1}, 0);
TweenMax.from(".path", 1, {x:50,scale:1.2}, 0);
TweenMax.from(".small-path", 1, {scale:2.4,x:150}, 0);
// Staggered menu items
TweenMax.set(('.icon-line'), {autoAlpha:0,width: "0%", ease: Sine.easeInOut},'.1');
TweenMax.to('.icon-line', 2, {autoAlpha:1,width: "35%", ease: Sine.easeInOut },'.2') ;

TweenMax.staggerFrom(".fadeText",1,{delay:2,opacity:0, x:-50},'.3');
TweenMax.to("#foreground", 1, {delay:4, x:'100%',


//initiate Bootstrap
onComplete: function() {
     $('#carousellABM').carousel('pause');
        TweenMax.to(".fadeText", .7, {
                scale: 1,
                ease: Cubic.easeOut
            })
    $('#carousellABM').carousel('cycle');

        $('#carousellABM').one('slid.bs.carousel', function () {
            TweenMax.set(('.icon-line'), {autoAlpha:0,width: "0%", ease: Sine.easeInOut},'.1');
            TweenMax.to('.icon-line', 2, {autoAlpha:1,width: "35%", ease: Sine.easeInOut },'.2') ;

        });

        $('#carousellABM').on('slide.bs.carousel', function (e) {
            TweenMax.fromTo("#foreground", 0.7, {x: "0%"}, {x: "100%",  ease: Sine.easeInOut}, 1);
            TweenMax.set(('.icon-line'), {autoAlpha:0,width: "0%", ease: Sine.easeInOut},'.1');
            TweenMax.to('.icon-line', 2, {autoAlpha:1,width: "35%", ease: Sine.easeInOut },'.2') ;


            tl.play();
        });

}
},'.4');



function slideIn(el) {
    return TweenMax.from(el, 0.7, {autoAlpha:0, x:"+=50"
       })
  }

  function slideOut(el) {
    return TweenMax.to(el, 0.7, {autoAlpha:0, x:"+=50"
      })

  }

  var tl= new TimelineMax();
  tl.add(slideIn(".paph-wrapper"));

  tl.addPause();
  tl.add(slideOut(".paph-wrapper"));
  tl.add(slideIn(".paph-wrapper1"));

  tl.addPause();
  tl.add(slideOut(".paph-wrapper1"));
  tl.add(slideIn(".paph-wrapper2"));

  tl.addPause();
  tl.add(slideOut(".paph-wrapper2"));
  tl.call(tl.play, [0], tl);

