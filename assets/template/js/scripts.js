"use strict";

var authorizationForm = document.querySelectorAll('.authorization__form');
var authorizationBtn = document.querySelectorAll('.authorization__btn');
var authorizationBtnOverlay = document.querySelector('.authorization__btn--overlay');

if (authorizationBtn.length) {
  var flagIndex = 1;
  authorizationBtn[flagIndex].classList.add('is_active');
  authorizationForm[flagIndex].classList.add('is_active');
  authorizationBtn.forEach(function (element, index) {
    element.addEventListener('click', function (e) {
      authorizationBtn[flagIndex].classList.remove('is_active');
      authorizationBtn[index].classList.add('is_active');
      authorizationForm[flagIndex].classList.remove('is_active');
      authorizationForm[index].classList.add('is_active');
      flagIndex = index;
      flagIndex == 0 ? authorizationBtnOverlay.classList.add('is_active') : authorizationBtnOverlay.classList.remove('is_active');
    });
  });
}
"use strict";

var cardOptions = document.querySelectorAll('.card__options');

if (cardOptions.length) {
  cardOptions.forEach(function (element) {
    element.addEventListener('click', function (event) {
      var target = event.target;
      var optionInput = element.querySelector('.card__option-input');
      var cardOptionSelected = element.querySelector('.card__option--selected');
      var cardOptionWrap = element.querySelector('.card__option-wrap');

      if (target.classList.contains('card__option--selected')) {
        target.classList.toggle('is_active');
        cardOptionWrap.classList.toggle('is_active');
      }

      if (target.classList.contains('card__option') && !target.classList.contains('card__option--selected')) {
        cardOptionSelected.innerHTML = target.innerHTML;
        optionInput.value = target.innerHTML;
        cardOptionWrap.classList.toggle('is_active');
        cardOptionSelected.classList.toggle('is_active');
      }
    });
  });
}
"use strict";

var pPreviewPicture = document.querySelectorAll('.p-preview__picture');

if (pPreviewPicture.length) {
  Fancybox.bind('[data-fancybox="gallery"]');
}
"use strict";

var favoriteBtn = document.querySelectorAll('.card__favorite');

if (favoriteBtn.length) {
  favoriteBtn.forEach(function (el) {
    el.addEventListener('click', function () {
      el.classList.toggle('is_active');
    });
  });
}
"use strict";

var formToggleShow = document.querySelector('.form__body--toggle-show');

if (formToggleShow) {
  formToggleShow.addEventListener('click', function (e) {
    var target = e.target;
    var btnShow = this.querySelector('.button--show');
    var formWrap = this.querySelector('.form__wrap');

    if (target.classList.contains('button--show')) {
      target.classList.toggle('hide');
      formWrap.classList.toggle('hide');
    }
  });
}
"use strict";

var menuSubWrap = document.querySelectorAll('.menu__sub-wrap');
var menuList = document.querySelector('.menu__inner--main .menu__list');

if (menuSubWrap.length) {
  editHeightMenu(menuList, menuSubWrap);
  window.addEventListener('resize', function (event) {
    editHeightMenu(menuList, menuSubWrap);
  }, true);
}

function editHeightMenu(elem, absElems) {
  if (window.screen.availWidth >= 768 && document.documentElement.clientWidth >= 768) {
    var maxHeigthElemMenuSubWrp = Array.from(absElems).reduce(function (acc, el) {
      return Math.max(acc, el.offsetHeight);
    }, 0);
    elem.style.height = maxHeigthElemMenuSubWrp + 'px';
  } else {
    elem.style.height = 'auto';
  }
}
"use strict";

var headerBtnCatalog = document.querySelector(".header__btn-catalog");
var menu = document.querySelector(".menu");

if (headerBtnCatalog && menu) {
  headerBtnCatalog.addEventListener('click', function (e) {
    headerBtnCatalog.classList.toggle('show');
    menu.classList.toggle('show');
  });
}

function hoverElem(elem, showElem) {
  showElem.onmouseover = function () {
    elem.classList.add("show");
  };

  showElem.onmouseout = function () {
    elem.classList.remove("show");
  };
}
"use strict";

(function () {
  var parent = document.querySelector("#rangeSlider");
  if (!parent) return;
  var rangeS = parent.querySelectorAll("input[type=range]"),
      numberS = parent.querySelectorAll("input[type=number]");
  rangeS.forEach(function (el) {
    el.oninput = function () {
      var slide1 = parseFloat(rangeS[0].value),
          slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        var _ref = [slide2, slide1];
        slide1 = _ref[0];
        slide2 = _ref[1];
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    };
  });
  numberS.forEach(function (el) {
    el.oninput = function () {
      var number1 = parseFloat(numberS[0].value),
          number2 = parseFloat(numberS[1].value);

      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;
    };
  });
})();
"use strict";

(function () {
  function scrollHorizontally(e) {
    var scrollPos = this.scrollLeft; // Сколько прокручено по горизонтали, до прокрутки (не перемещать эту строку!)
    // Горизонтальная прокрутка

    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    this.scrollLeft -= delta * 10; // Multiplied by 10

    var widthElem = this.scrollWidth; // Ширина всего элемента

    var widthBrowser = document.documentElement.clientWidth; // Ширина окна минус размер вертикального скролла
    // Прокрутка вверх, но элемент уже в крайней левой позиции, то двигаемся вверх

    if (delta == 1 && this.scrollLeft == 0) return; // Прокрутка вниз, но элемент виден полностью. Или элемент до конца прокручен в правый край

    if (widthBrowser >= widthElem || scrollPos == this.scrollLeft) return;
    e.preventDefault(); // запрещает прокрутку по вертикали
  }

  var elems = document.querySelectorAll('.scrollMouse');

  for (var a = 0; a < elems.length; a++) {
    elems[a].addEventListener("mousewheel", scrollHorizontally, false); // IE9, Chrome, Safari, Opera

    elems[a].addEventListener("DOMMouseScroll", scrollHorizontally, false); // Firefox
  }
})();
"use strict";

(function () {
  var parent = document.querySelector(".sl-assortment");
  if (!parent) return;
  var slAssortmentBtn = parent.querySelectorAll(".sl-assortment__btn");
  var slAssortmentBtnBg = parent.querySelector(".sl-assortment__btn--bg");
  var slAssortmentSlider = parent.querySelectorAll('.sl-assortment__slider');
  var btnActiveIndex = 0;
  slAssortmentBtn[btnActiveIndex].classList.add("is_active");
  slAssortmentSlider[btnActiveIndex].classList.add('is_active');
  slAssortmentBtn.forEach(function (el, i) {
    el.addEventListener("click", function () {
      slAssortmentBtn[btnActiveIndex].classList.remove("is_active");
      el.classList.add("is_active");

      switch (i) {
        case 0:
          toggleClassForslAssortmentSlider(btnActiveIndex, i);
          slAssortmentBtnBg.style.left = "16%";
          slAssortmentBtnBg.style.width = "32%";
          break;

        case 1:
          toggleClassForslAssortmentSlider(btnActiveIndex, i);
          slAssortmentBtnBg.style.left = "50%";
          slAssortmentBtnBg.style.width = "40%";
          break;

        case 2:
          toggleClassForslAssortmentSlider(btnActiveIndex, i);
          slAssortmentBtnBg.style.left = "84%";
          slAssortmentBtnBg.style.width = "32%";
          break;

        default:
          break;
      }

      btnActiveIndex = i;
    });
  });

  function toggleClassForslAssortmentSlider(oldIndex, index) {
    if (slAssortmentSlider[oldIndex] && slAssortmentSlider[index]) {
      slAssortmentSlider[oldIndex].classList.remove('is_active');
      slAssortmentSlider[index].classList.add('is_active');
    }
  }
})();
"use strict";

new sortElems({
  sortOptionsWrap: ".sort-panel__options",
  selectedElem: ".options__selected",
  optionItem: ".options__option",
  optionsWrap: ".options__option-wrap",
  optionInput: ".options__input",
  activeClass: "is_active"
});
"use strict";

var sortPanel = document.querySelector('.sort-panel');
var catalogShowSort = document.querySelector('.catalog__show-sort');
var sortPanelClose = document.querySelector('.sort-panel__close');

if (sortPanel) {
  catalogShowSort.addEventListener('click', function () {
    sortPanel.classList.add('is_active');
  });
  sortPanelClose.addEventListener('click', function () {
    sortPanel.classList.remove('is_active');
  });
}
"use strict";

new Swiper(".main__slider", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".main__arrow--next",
    prevEl: ".main__arrow--prev"
  }
});
new Swiper(".history__slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".arrow-slider__btn--next",
    prevEl: ".arrow-slider__btn--prev"
  }
});
new Swiper(".catalog__carusel-btn-container", {
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".arrow-slider__btn--next",
    prevEl: ".arrow-slider__btn--prev"
  }
});
new Swiper(".sl-catalog__slider", {
  slidesPerView: 6,
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    960: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 6
    }
  }
});
new Swiper(".instagram__slider", {
  slidesPerView: 6,
  spaceBetween: 16,
  navigation: {
    nextEl: ".instagram__arrow--next",
    prevEl: ".instagram__arrow--prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    960: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 6
    }
  }
}); // gallery product

var pThumbsSlides = document.querySelectorAll('.p-thumbs__slide');
var pThumbsContainer = new Swiper(".p-thumbs__container", {
  slidesPerView: 4,
  // freeMode: true,
  breakpoints: {
    320: {
      direction: "horizontal",
      spaceBetween: 10
    },
    768: {
      direction: "vertical",
      spaceBetween: 16
    },
    1200: {
      direction: "vertical",
      spaceBetween: 20
    }
  }
});
var pPreviewContainer = new Swiper(".p-preview__container", {
  slidesPerView: 1,
  spaceBetween: 20
});

if (pThumbsSlides.length) {
  var activeSlide = 0;
  pThumbsSlides[activeSlide].classList.add('is_active');
  pThumbsSlides.forEach(function (el, i) {
    el.addEventListener('click', function () {
      pThumbsSlides[activeSlide].classList.remove('is_active');
      pThumbsContainer.activeIndex = i;
      pThumbsContainer.slideTo(i, 300, true);
      pThumbsSlides[i].classList.add('is_active');
      pPreviewContainer.activeIndex = i;
      pPreviewContainer.slideTo(i, 800, true);
      activeSlide = i;
    });
  });
} //assortmen sliders


var slSssortmentSlider = document.querySelectorAll('.sl-assortment__slider');

if (slSssortmentSlider.length) {
  slSssortmentSlider.forEach(function (n) {
    var slider = n.querySelector(".sl-assortment__sl-container");
    new Swiper(slider, {
      breakpoints: {
        320: {
          spaceBetween: 15,
          slidesPerView: 1.2
        },
        440: {
          spaceBetween: 15,
          slidesPerView: 2
        },
        728: {
          spaceBetween: 30,
          slidesPerView: 3
        },
        1200: {
          spaceBetween: 30,
          slidesPerView: 4
        }
      }
    });
  });
}
"use strict";

var viewCards = document.querySelector('.view-cards');
var viewCardsBtn = document.querySelectorAll('.view-cards__btn');
var catalogInner = document.querySelector('.catalog__inner--wrap');

if (viewCards) {
  var toggleClassForWrapViewCard = function toggleClassForWrapViewCard() {
    if (selectIndex == 0) {
      catalogInner.classList.add('catalog__inner--card-list');
    } else {
      catalogInner.classList.remove('catalog__inner--card-list');
    }
  };

  var selectIndex;

  if (localStorage.getItem('selectIndex')) {
    selectIndex = localStorage.getItem('selectIndex');
  } else {
    selectIndex = 1;
  }

  viewCardsBtn[selectIndex].classList.add('is_active');
  toggleClassForWrapViewCard();
  viewCardsBtn.forEach(function (element, i) {
    element.addEventListener('click', function () {
      viewCardsBtn[selectIndex].classList.remove('is_active');
      viewCardsBtn[i].classList.add('is_active');
      selectIndex = i;
      toggleClassForWrapViewCard();
      localStorage.setItem('selectIndex', i);
    });
  });
}
"use strict";

var yPlayerBtn = document.querySelectorAll(".play-btn");

if (yPlayerBtn.length) {
  yPlayerBtn.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var yWrapPlayer = el.parentNode;
      var yOverlay = yWrapPlayer.querySelector('.y-picture');
      var yLinkId = yWrapPlayer.querySelector('.y-link').innerHTML;
      var yPlayer = yWrapPlayer.querySelector('.y-player');
      yOverlay.classList.add('hide');
      var playerText = '<iframe width="100%" height=100%" src="https://www.youtube.com/embed/' + yLinkId + '?enablejsapi=1&autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      yPlayer.insertAdjacentHTML('afterbegin', playerText);
    });
  });
}
"use strict";

function sortElems(params) {
  var elemsArr = document.querySelectorAll(params.sortOptionsWrap);

  if (elemsArr.length) {
    var sortIndexElem;
    document.addEventListener("click", function (e) {
      if (sortIndexElem >= 0 && !e.target.classList.contains(params.selectedElem.slice(1))) {
        elemsArr[sortIndexElem].querySelector(params.selectedElem).classList.remove(params.activeClass);
        elemsArr[sortIndexElem].querySelector(params.optionsWrap).classList.remove(params.activeClass);
      }
    });
    elemsArr.forEach(function (elem, i) {
      elem.addEventListener("click", function (e) {
        var target = e.target;

        if (sortIndexElem >= 0 && sortIndexElem != i) {
          elemsArr[sortIndexElem].querySelector(params.selectedElem).classList.remove(params.activeClass);
          elemsArr[sortIndexElem].querySelector(params.optionsWrap).classList.remove(params.activeClass);
        }

        sortIndexElem = i;
        var selectedElem = elem.querySelector(params.selectedElem);

        if (target.classList.contains(params.selectedElem.slice(1))) {
          toggleClass();
        }

        if (target.classList.contains(params.optionItem.slice(1)) && !target.classList.contains(params.selectedElem.slice(1))) {
          selectedElem.innerHTML = target.innerHTML;
          elem.querySelector(params.optionInput).value = target.innerHTML;
          toggleClass();
        }

        function toggleClass() {
          elem.querySelector(params.optionsWrap).classList.toggle(params.activeClass);
          selectedElem.classList.toggle(params.activeClass);
        }
      });
    });
  }
}