svg4everybody({
  validate: function (src, svg, use) {
    return true;
  }
});

// ****** input *******
function checkbox(){
  let parent = document.querySelector('.feedback__labels'),
      checkBoxes = document.querySelectorAll('.feedback__check-box-input'),
      checkBoxChecked = document.querySelectorAll('.feedback__checked');
  if(parent && checkBoxes && checkBoxChecked){
    document.addEventListener("DOMContentLoaded", (e) => {
      parent.addEventListener("click", () =>{
        checkBoxes.forEach((el,index) => {
          if(el.checked){
            checkBoxChecked[index].classList.add('feedback__checked--show');
          }else{
            checkBoxChecked[index].classList.remove('feedback__checked--show');
          }
        })
      })
    });
  }
}
checkbox();

// ******** header-services *********

let menuToggle = document.querySelector('.header__nav-link--services');
let hiddenMenu = document.querySelector('.header__nav-hidden');

menuToggle.addEventListener('click', toggle);

function toggle(e){
    hiddenMenu.classList.toggle('header__nav-hidden--active');
    menuToggle.classList.toggle('header__nav-link--services--active')
}

// ******* mobile-menu ******

let menuToggle_2 = document.querySelector('.header-hidden__menu-toggle');
let hiddenMenu_2 = document.querySelector('.header-hidden__menu');
let hamburgerFirst = document.querySelector('.menu__hamburger--first');
let hamburgerMid = document.querySelector('.menu__hamburger--mid');
let hamburgerLast = document.querySelector('.menu__hamburger--last');
let hamburgerMenu = document.querySelector('.header-hidden__menu-toggle');



menuToggle_2.addEventListener('click', toggle2);

function toggle2(e){
  hiddenMenu_2.classList.toggle('header-hidden__menu--active');
  hamburgerFirst.classList.toggle('menu__hamburger--first--active');
  hamburgerMid.classList.toggle('menu__hamburger--mid--active');
  hamburgerLast.classList.toggle('menu__hamburger--last--active');
  hamburgerMenu.classList.toggle('header-hidden__menu-toggle--active');

  setTimeout(function(){
    servicesList.classList.remove('header-hidden__nav-list--services--active')
  },300)
  console.log('sadas')
}

// ****** services-list ******

let servicesToggle = document.querySelector('.header-hidden__nav-link--services');
let servicesList = document.querySelector('.header-hidden__nav-list--services');
let closeServices = document.querySelector('.header-hidden__close--services');

servicesToggle.addEventListener('click', showServices);
closeServices.addEventListener('click', close);

function showServices(e){
  servicesList.classList.toggle('header-hidden__nav-list--services--active');
}

function close(e){
  servicesList.classList.toggle('header-hidden__nav-list--services--active');
}

//*** typewriter ***/
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

function particlesIndex(){
  let indexPage = document.querySelector('#indexPage');
  if(indexPage){
    particlesJS.load('particles-js', './json/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });
    particlesJS.load('particles-js_2', './json/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
}
particlesIndex();

function particlesAbout(){
  let aboutPage = document.querySelector('#aboutPage');
  let careersPage = document.querySelector('#careersPage');
  let servicesPage = document.querySelector('#servicesPage');

  if(aboutPage || careersPage || servicesPage){
    particlesJS.load('particles-js', './json/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
}
particlesAbout()


//**** popup ****

  
  // let popUpToggle = document.querySelector('.feedback__btn');
  // popUpToggle.addEventListener ('click',popupShow ) 
  // function popupShow(){
  //   popUp.style.display = 'block';
  // }

function popUpInit(){
  let popUp = document.querySelector('.popup');
  let popUpClose = document.querySelector('.popup__close');

  function popupClose(){
    popUp.style.display = 'none';
  }

  if(popUp && popUpClose){
    popUpClose.addEventListener ('click', popupClose )
  }
}
popUpInit();


// **** scroll animation ****

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors){
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector(''+ blockID).scrollIntoView({
            behavior:"smooth",
            block: "start",
        })
    })
}

// **** lazy loading ****

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
  img.removeAttribute('data-src');
  };
});



// ***** about-slider ******
function aboutSlider(){
  let about = document.querySelector('.slider__swiper-container');

  if(about){
    var swiperAbout = new Swiper('.slider__swiper-container', {
      breakpoints: {
        // when window width is >= 320px
        540: {
          direction: 'vertical',
        },
      },
      
      autoplay: {
        delay: 5000,
      },
      spaceBetween: 100,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
aboutSlider();


// cookie js
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;

		for (; i < l; i++) {
			var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

			if (key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));



let closeCookie = document.querySelector('.cookie__decline');
closeCookie.addEventListener('click',(()=>{
 let cookie = document.querySelector('.cookie');
 cookie.style.display = "none";
}))

$(document).ready(function(){
    $("#setCookie").click(function () {
      $.cookie(".cookie", "", { expires:1, path: '/' });
      $(".cookie").hide();
    });
    if ( $.cookie(".cookie") == null ){
      setTimeout(function(){
        $(".cookie").show();
      }, 4000)
    }
    else { $(".cookie").hide();
    } 
});
