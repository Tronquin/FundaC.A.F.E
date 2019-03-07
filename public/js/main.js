// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 96
          },
          1000
        );
      }
    }
  });

//Scroll to Top
$(".up-arrow").attr(
  "style",
  "transition: opacity 0.5s; opacity: 0; visibility: hidden;"
);

$(window).scroll(function() {
  if ($(this).scrollTop() >= 80) {
    // If page is scrolled more than 50px
    $(".menu-sidebar>.up-arrow").attr(
      "style",
      "transition: opacity 0.5s; opacity: 1; visibility: visible;"
    ); // Fade in the arrow
    if ($(window).width() <= 768) {
      $(".mobile-menu>.up-arrow").attr(
        "style",
        "transition: opacity 0.5s; opacity: 1; visibility: visible;"
      ); // Fade in the arrow
    }
  } else {
    $(".menu-sidebar>.up-arrow").attr(
      "style",
      "transition: opacity 0.5s; opacity: 0; visibility: hidden;"
    ); // Else fade out the arrow
    if ($(window).width() <= 768) {
      $(".mobile-menu>.up-arrow").attr(
        "style",
        "transition: opacity 0.5s; opacity: 0; visibility: hidden;"
      ); // Else fade out the arrow
    }
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    $(".up-arrow").attr(
      "style",
      "transition: opacity 0.5s; opacity: 0; visibility: hidden;"
    );
  }
});

$(".up-arrow").click(function() {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0 // Scroll to top of body
    },
    500
  );
});

// Menu Button Effect
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    mobileMenu.classList.add("appear");

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    mobileMenu.classList.remove("appear");
    // Set Menu State
    showMenu = false;
  }
}

$(".nav-option-mobile").click(function() {
  $(".nav-option-mobile").removeClass("active");
  $(this).toggleClass("active");
});

var mySwiper1 = new Swiper(".s1", {
  direction: "horizontal",
  autoHeight: true,
  loop: true,
  watchSlidesProgress: true,
  keyboardControl: true,
  mousewheelControl: true,
  speed: 1000,
  autoplay: {
    delay: 4000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

var mySwiper2 = new Swiper(".s2", {
  direction: "vertical",
  simulateTouch: false,
  autoHeight: true,
  loop: true,
  watchSlidesProgress: true,
  keyboardControl: true,
  mousewheelControl: true,
  speed: 700,
  pagination: false,
  breakpoints: {
    769: {
      direction: "horizontal"
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

var mySwiper31 = new Swiper(".s3-p1", {
  direction: "horizontal",
  simulateTouch: false,
  touchRatio: 0,
  autoHeight: false,
  loop: true,
  watchSlidesProgress: true,
  keyboardControl: false,
  mousewheelControl: false,
  speed: 1000,
  breakpoints: {
    500: {
      touchRatio: 0,
      touchAngle: 0,
      simulateTouch: false
    }
  },
  navigation: {
    nextEl: ".about-us .swiper-button-next"
  }
});

var mySwiper32 = new Swiper(".s3-p2", {
  direction: "vertical",
  simulateTouch: false,
  autoHeight: false,
  loop: true,
  watchSlidesProgress: true,
  keyboardControl: false,
  mousewheelControl: false,
  speed: 1000,
  breakpoints: {
    500: {
      touchRatio: 0,
      touchAngle: 0,
      simulateTouch: false
    }
  },
  navigation: {
    nextEl: ".about-us .swiper-button-next"
  }
});
/**/
var varObj = { i: 1, btn: "", total: 3 };

$(".conceptos .swiper-button-prev").click(function() {
  varObj.btn = "prev";
  activate_link(varObj);
});

$(".conceptos .swiper-button-next").click(function() {
  varObj.btn = "next";
  activate_link(varObj);
});

function activate_link(obj) {
  if (varObj.btn === "next") {
    varObj.i = (varObj.i + 1) % (varObj.total + 1);
    if (varObj.i === 0) {
      varObj.i = 1;
    }
  } else {
    if (varObj.btn === "prev") {
      varObj.i = (varObj.i - 1) % (varObj.total + 1);
      if (varObj.i === 0) {
        varObj.i = 3;
      }
    }
  }

  var chev = "#s-" + varObj.i;
  var line = ".b-" + varObj.i;
  toggle(chev, "chev-active", ".chev-active");
  toggle(line, "barra-activa", ".barra-activa");
}

if (
  !$(".conceptos-slider ul").hasClass("chev-active") &&
  !$(".conceptos-slider div").hasClass("barra-activa")
) {
  toggle("#s-1", "chev-active", ".chev-active");
  toggle(".b-1", "barra-activa", ".barra-activa");
}

$("#s-1").click(function(e) {
  e.preventDefault();
  $(".menu .active").removeClass("active");
  $(this).addClass("active");
  varObj.i = 1;
  toggle("#s-1", "chev-active", ".chev-active");
  toggle(".b-1", "barra-activa", ".barra-activa");
  mySwiper2.slideTo($("#vision").index(), 1000, false);
});

$("#s-2").click(function(e) {
  e.preventDefault();
  $(".menu .active").removeClass("active");
  $(this).addClass("active");
  varObj.i = 2;
  toggle("#s-2", "chev-active", ".chev-active");
  toggle(".b-2", "barra-activa", ".barra-activa");
  mySwiper2.slideTo($("#mision").index(), 1000, false);
});

$("#s-3").click(function(e) {
  e.preventDefault();
  $(".menu .active").removeClass("active");
  $(this).addClass("active");
  varObj.i = 3;
  toggle("#s-3", "chev-active", ".chev-active");
  toggle(".b-3", "barra-activa", ".barra-activa");
  mySwiper2.slideTo($("#valores").index(), 1000, false);
});

function toggle(e, e2, e3) {
  if ($(e).hasClass(e2)) {
    $(e).removeClass(e2);
  } else {
    $(e3).removeClass(e2);
    $(e).addClass(e2);
  }
}

//  Contact Form
$(document).ready(function(e) {
  $("#mensaje").keyup(function() {
    $(".word-counter").text(this.value.replace(/ /g, "").length + " / 500");
  });

  $("#email-form").on("submit", function(e) {
    $.ajax({
      url: "https://usebasin.com/f/b8c5d298b391.json",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json"
    });
    e.preventDefault();
    $(this)
      .get(0)
      .reset();
    alert("Mensaje Enviado!");
  });
});

//Fancybox configuration

$("#morphing").click(function() {
  toggle(".hover-red", "btn-modal-active", ".btn-modal-active");
});

$(".hover-heart-green>#morphing_donar").click(function() {
  toggle(
    ".hover-heart-green",
    "btn-modal-donate-active",
    ".btn-modal-donate-active"
  );
});

$(".hover-heart-blue>#morphing_donar").click(function() {
  toggle(
    ".hover-heart-blue",
    "btn-modal-donate-active",
    ".btn-modal-donate-active"
  );
});

$.fn.fancyMorph = function(opts) {
  var Morphing = function($btn, opts) {
    var self = this;

    self.opts = $.extend(
      {
        animationEffect: false,
        infobar: false,
        buttons: ["close"],
        smallBtn: false,
        touch: false,
        baseClass: "fancybox-morphing",
        afterClose: function() {
          self.close();
        }
      },
      opts
    );

    self.init($btn);
  };

  Morphing.prototype.init = function($btn) {
    var self = this;

    self.$btn = $btn.addClass("morphing-btn");

    self.$clone = $('<div class="morphing-btn-clone" />')
      .hide()
      .insertAfter($btn);

    // Add wrapping element and set initial width used for positioning
    $btn
      .wrap('<span class="morphing-btn-wrap"></span>')
      .on("click", function(e) {
        e.preventDefault();

        self.start();
      });
  };

  Morphing.prototype.start = function() {
    var self = this;

    if (self.$btn.hasClass("morphing-btn_circle")) {
      return;
    }

    // Set initial width, because it is not possible to start CSS transition from "auto"
    self.$btn
      .width(self.$btn.width())
      .parent()
      .width(self.$btn.outerWidth());

    self.$btn
      .off(".fm")
      .on(
        "transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm",
        function(e) {
          if (e.originalEvent.propertyName === "width") {
            self.$btn.off(".fm");

            self.animateBg();
          }
        }
      )
      .addClass("morphing-btn_circle");
  };

  Morphing.prototype.animateBg = function() {
    var self = this;

    self.scaleBg();

    self.$clone.show();

    // Trigger repaint
    self.$clone[0].offsetHeight;

    self.$clone
      .off(".fm")
      .on(
        "transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm",
        function(e) {
          self.$clone.off(".fm");

          self.complete();
        }
      )
      .addClass("morphing-btn-clone_visible");
  };

  Morphing.prototype.scaleBg = function() {
    var self = this;

    var $clone = self.$clone;
    var scale = self.getScale();
    var $btn = self.$btn;
    var pos = $btn.offset();

    $clone.css({
      top:
        pos.top +
        $btn.outerHeight() * 0.5 -
        $btn.outerHeight() * scale * 0.5 -
        $(window).scrollTop(),
      left:
        pos.left +
        $btn.outerHeight() * 0.5 -
        $btn.outerHeight() * scale * 0.5 -
        $(window).scrollLeft(),
      width: $btn.outerHeight() * scale,
      height: $btn.outerHeight() * scale,
      transform: "scale(" + 1 / scale + ")"
    });
  };

  Morphing.prototype.getScale = function() {
    var $btn = this.$btn,
      radius = $btn.outerWidth() * 0.5,
      left = $btn.offset().left + radius - $(window).scrollLeft(),
      top = $btn.offset().top + radius - $(window).scrollTop(),
      windowW = $(window).width(),
      windowH = windowW + 500;

    var maxDistHor = left > windowW / 2 ? left : windowW - left,
      maxDistVert = top > windowH / 2 ? top : windowH - top;

    return Math.ceil(
      Math.sqrt(Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2)) / radius
    );
  };

  Morphing.prototype.complete = function() {
    var self = this;
    var $btn = self.$btn;

    if ($btn.attr("class").split(" ")[0] == "btn-red") {
      toggle(".hover-red", "btn-modal-active", ".btn-modal-active");
    } else {
      if ($btn.attr("class").split(" ")[0] == "btn-heart-green") {
        toggle(
          ".hover-heart-green",
          "btn-modal-donate-active",
          ".btn-modal-donate-active"
        );
      } else {
        if ($btn.attr("class").split(" ")[0] == "btn-heart-blue") {
          toggle(
            ".hover-heart-blue",
            "btn-modal-donate-active",
            ".btn-modal-donate-active"
          );
        }
      }
    }
    $.fancybox.open({ src: $btn.data("src") || $btn.attr("href") }, self.opts);
  };

  Morphing.prototype.close = function() {
    var self = this;
    var $clone = self.$clone;

    self.scaleBg();

    $clone.one(
      "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
      function(e) {
        $clone.hide();

        self.$btn.removeClass("morphing-btn_circle");
      }
    );

    $clone.removeClass("morphing-btn-clone_visible");

    $(window).off("resize.fm");
  };

  // Init
  this.each(function() {
    var $this = $(this);

    if (!$this.data("morphing")) {
      $this.data("morphing", new Morphing($this, opts));
    }
  });

  return this;
};

$("[data-morphing]").fancyMorph({
  hash: "morphing"
});

$("[data-morphing]").fancyMorph({
  hash: "morphing_donar"
});
