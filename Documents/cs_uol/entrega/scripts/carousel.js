var Carousel = function (elId, mode) {
  var wrapper = document.getElementById(elId);
  var innerEl = wrapper.getElementsByClassName('carousel-inner')[0];
  var leftSlider = wrapper.getElementsByClassName('carousel-left')[0];
  var rightSlider = wrapper.getElementsByClassName('carousel-right')[0];
  var items = wrapper.getElementsByClassName('carousel-item');

  this.currentPhase = 0;
  this.carouselContainer = items.length;
  this.minItemWidth = 200;
  this.slideWidth = null;
  this.mode = mode;
  this.currentSlider = elId;
  this.itemsAtOnce = 3;
  this.itemOuterWidth = null;
  this.position = innerEl.style;
  

  this.init = function (mode) {
    this.itemsAtOnce = mode;
    this.calcWidth(wrapper, innerEl, items);
    cb_addEventListener(leftSlider, 'click', this.goLeft.bind(this));
    cb_addEventListener(rightSlider, 'click', this.goRight.bind(this));
    cb_addEventListener(window, 'resize', this.calcWidth.bind(this, wrapper, innerEl, items));
  };
  return this.init(mode);
};
Carousel.prototype = {
  goLeft: function(e) {
    e.preventDefault();
    if (this.currentPhase) {
      --this.currentPhase;
    } else {
      this.currentPhase = this.carouselContainer - this.itemsAtOnce;
    }
    this.makeStep(this.currentPhase);
    return false;
  },
  goRight: function(e) {
    e.preventDefault();
    if (this.currentPhase < (this.carouselContainer - this.itemsAtOnce)) {
      ++this.currentPhase;
    } else {
      this.currentPhase = 0;
    }
    this.makeStep(this.currentPhase);
    return false;
  },
  makeStep: function(step) {
    this.position.left = -(this.itemOuterWidth * step) + 'px';
  },
  calcWidth: function(wrapper, innerEl, items) {
    this.makeResponsive();
    var itemStyle = window.getComputedStyle(items[0]);  
    var innerElStyle = innerEl.style;
    var carouselLength = this.carouselContainer;
    var wrapWidth = wrapper.offsetWidth - parseInt(itemStyle.marginRight, 10) * (this.itemsAtOnce + 1);
    
    innerElStyle.display = 'none';
    this.slideWidth = wrapWidth / this.itemsAtOnce;
    this.itemOuterWidth = this.slideWidth + parseInt(itemStyle.marginRight, 10);
    for (i = 0; i < carouselLength; i++) {
        items[i].style.width = this.slideWidth + 'px';
    }
    innerElStyle.width = this.itemOuterWidth * this.carouselContainer + 'px';
    this.currentPhase = Math.min(this.currentPhase, this.carouselContainer - this.itemsAtOnce);
    this.makeStep(this.currentPhase);
    innerElStyle.display = 'block';
  },

  makeResponsive: function() {
    var winWidth = window.innerWidth;
    var currentSlideIndex = this.currentPhase;
    if (winWidth >= 950 && winWidth < 950 && this.itemsAtOnce >= 2) {
      this.itemsAtOnce = 2;
    }
    else if (winWidth < 950) {
      this.itemsAtOnce = 1;
    }
    else {
      this.itemsAtOnce = this.mode;
    }
    this.currentPhase = currentSlideIndex;
  }
}

  /**
  * Cross-browser Event Listener
  **/
  function cb_addEventListener(obj, evt, fnc) {
    if (obj && obj.addEventListener) {
        obj.addEventListener(evt, fnc, false);
        return true;
    } else if (obj && obj.attachEvent) {
        return obj.attachEvent('on' + evt, fnc);
    }
    return false;
  }
  
  //Initializing carousel
  if (document.getElementById('products')) {
    var productsCarousel = new Carousel('products', 3);
  }
  if (document.getElementById('products2')) {
    var productsCarousel = new Carousel('products2', 2);
  }
  if (document.getElementById('products3')) {
    var productsCarousel = new Carousel('products3', 1);
  }