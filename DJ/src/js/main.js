// document.addEventListener("DOMContentLoaded", () => {
//   const screenWidth = window.screen.width;
//   const screenHeight = window.screen.height;

//   const availableScreenWidth = window.screen.availWidth;
//   const availableScreenHeight = window.screen.availHeight;

//   const windowInnerWidth = window.innerWidth;
//   const windowInnerHeight = window.innerHeight;

//   console.log('Размер экрана: ' + screenWidth + 'x' + screenHeight );
//   console.log('Доступный размер экрана: ' + availableScreenWidth + 'x' + availableScreenHeight );
//   console.log('Внутренний размер окна (или размер внутреннего окна): ' + windowInnerWidth + 'x' + windowInnerHeight );

//   console.log('Маштаб ' + 1 / devicePixelRatio);
// })

/**
 * Список категорий
 * "Показать все"
 */

document.addEventListener("DOMContentLoaded", () => {
  if ( document.querySelector('.p-category') ) {
    let p_category = document.querySelectorAll('.p-category__item');
    p_category.forEach((element) => {
      
      let max_element_items = 5; // Максимальное кол-во элементов
  
      let list = element.querySelector('.p-category__list');
      let list_items = element.querySelectorAll('.p-category__list li');
      let count_list = list_items.length;
  
      if ( count_list > max_element_items ){
  
        let showmore = document.createElement("button");
  
        showmore.classList.add('p-category__showmore');
        showmore.innerText = 'Посмотреть все';
        list.append(showmore);
  
        list_items.forEach( function(li, key) {
  
          if ( key > (max_element_items - 1) ){
            li.hidden = true;
          }
        })
  
        showmore.addEventListener('click', function() {
          list_items.forEach( function(li, key) {
            li.hidden = false;
          })
          showmore.hidden = true;
          
        })
  
      }
  
  
    });
  }
});

// /**
//  * Показать еще - Характеристики (продуктовая карточка)
//  */


//  document.addEventListener("DOMContentLoaded", () => {
//   if ( document.querySelector('.characteristics__content-small') ) {
//     let max_element_items = 8; // Максимальное кол-во элементов

//     let tags = document.querySelectorAll('.characteristics__content-row');
//     let list = document.querySelector('.characteristics__content-small');
//     let list_items = document.querySelectorAll('.characteristics__content-row');
//     let count_list = list_items.length;


//     tags.forEach((element) => {      
      

//       if ( count_list > max_element_items ){

//         list_items.forEach( function(li, key) {
//           if ( key > (max_element_items - 1) ){
//             li.hidden = true;
//           }
//         })
//       }
//     });

//     if ( count_list > max_element_items ){
//       let showmore = document.createElement("button");
//       showmore.classList.add('search-tag__showmore');
//       showmore.innerText = 'Посмотреть все';
//       list.append(showmore);

//       showmore.addEventListener('click', function() {
//         list_items.forEach( function(li, key) {
//           li.hidden = false;
//         })
//         showmore.hidden = true;
//       })

//     }
//   }
// });




/*
* Поисковые теги
*/

document.addEventListener("DOMContentLoaded", () => {
  if ( document.querySelector('.search-tag') ) {
    let max_element_items = 8; // Максимальное кол-во элементов

    let tags = document.querySelectorAll('.search-tag__item');
    let list = document.querySelector('.search-tag__list');
    let list_items = document.querySelectorAll('.search-tag__list li');
    let count_list = list_items.length;


    tags.forEach((element) => {      
      

      if ( count_list > max_element_items ){

        list_items.forEach( function(li, key) {
          if ( key > (max_element_items - 1) ){
            li.hidden = true;
          }
        })
      }
    });

    if ( count_list > max_element_items ){
      let showmore = document.createElement("button");
      showmore.classList.add('search-tag__showmore');
      showmore.innerText = 'Посмотреть все';
      list.append(showmore);

      showmore.addEventListener('click', function() {
        list_items.forEach( function(li, key) {
          li.hidden = false;
        })
        showmore.hidden = true;
      })

    }
  }
});

if(document.querySelector('.header-personal-btn__link') && document.querySelector('.popup')) {
  let name_popup = 'start';
  let popup = 'start';

  document.querySelectorAll('.header-personal-btn__link').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      if(btn.classList[0].slice(0, btn.classList[0].indexOf('__')) != name_popup) {
        document.querySelectorAll('.popup').forEach(el => {
          popupHide(el);
        });
        popup = btn.nextElementSibling;
        popupShow(popup);
      }
    });
  });

  document.addEventListener('click', function() {
    document.querySelectorAll('.popup').forEach(el => {
      el.classList.contains('hide') ? "" : popupHide(el)
    });
  });

  document.querySelectorAll('.header-personal-btn__link').forEach(btn => {
    btn.addEventListener('click', function(e) {
      if(btn.classList[0].slice(0, btn.classList[0].indexOf('__')) != name_popup) {
        popup = btn.nextElementSibling;
        document.querySelectorAll('.popup').forEach(el => {
          popupHide(el);
        });
        popupShow(popup);
      } else {
        popup.classList.contains('hide') ? popupShow(popup) : popupHide(popup);
      };
    });
  });
};

popupHide = function(target) {
  target.style.overflow = 'hidden';
  target.style.opacity = 0;
  target.style.boxShadow = 0;
  setTimeout(() => {
    target.style.height = 0;
  }, 400);
  target.classList.add('hide');
};

popupShow = function(target) {
  target.style.removeProperty('height');
  target.style.removeProperty('opacity');
  target.style.removeProperty('overflow');
  target.style.removeProperty('boxShadow');
  target.classList.remove('hide');
  setTimeout(() => {
    target.style.removeProperty('height');
  }, 400);
};




if ($('.cart__count-counter')){
  $('.cartPlus').on('click', function() {  
    var quantityInput = $(this).parents('.cart__count-counter').find('input[name=quantity]');
    var quantity = Number($(quantityInput).val());
    quantity++;
    $(quantityInput).val(quantity);
    $('.basketRecalcButton').show();
  })
  $('.cartMinus').on('click', function() {  
    var quantityInput = $(this).parents('.cart__count-counter').find('input[name=quantity]');
    var quantity = Number($(quantityInput).val());
    quantity--;
    if( quantity <= 0 ){  quantity = 1;  }
    $(quantityInput).val(quantity);
    $('.basketRecalcButton').show();
  })
}

$('input[name=ds]').on('click', function() {
  $('.basketForm .cart-form__block').show();
})

$(document).ready(function(){
  /* Локализация datepicker */
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);

  $( "#datepicker" ).datepicker();
});


/* Меню */

jQuery(document).ready(function($){
	//open/close mega-navigation
	$('.cd-dropdown-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});

	//close meganavigation
	$('.cd-dropdown .cd-close').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});

	//on mobile - open submenu
	$('.has-children').children('a').on('click', function(event){
		//prevent default clicking on direct children of .has-children 
		event.preventDefault();
		var selected = $(this);
		selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
	});

	//on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
	var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
	$('.cd-dropdown-content').menuAim({
        activate: function(row) {
        	$(row).children().addClass('is-active').removeClass('fade-out');
        	if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
        },
        deactivate: function(row) {
        	$(row).children().removeClass('is-active');
        	if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
        		$('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
        		$(row).children('ul').addClass('fade-out')
        	}
        },
        exitMenu: function() {
        	$('.cd-dropdown-content').find('.is-active').removeClass('is-active');
        	return true;
        },
        submenuDirection: submenuDirection,
    });

	//submenu items - go back link
	$('.go-back').on('click', function(){
		var selected = $(this),
			visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
		selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
	}); 

	function toggleNav(){
		var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;
		$('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
		$('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
		if( !navIsVisible ) {
			$('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('.has-children ul').addClass('is-hidden');
				$('.move-out').removeClass('move-out');
				$('.is-active').removeClass('is-active');
			});	
		}
	}

	//IE9 placeholder fallback
	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
		  	}
		}).blur(function() {
		 	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.val(input.attr('placeholder'));
		  	}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  	$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
			 		input.val('');
				}
		  	})
		});
	}
});

if (document.querySelector('.home__slider')) {
  let home = new Swiper(".home__slider .swiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".home__slider .card__slider-next",
      prevEl: ".home__slider .card__slider-prev",
    },
    pagination: {
      el: ".home__slider .card__pagination-1",
      bulletClass: "slider-bullet",
      clickable: true
    },
  });  
}


/**
 * 
 * 
 */


 if ($('.view__item')){
  
  $('.view__item').on('click', function() {
    $('.view__item').removeClass('active');
    $(this).addClass('active');

    if ($(this).data('view') == 'view2'){
      $('.product-grid').addClass('product-grid__small');
      localStorage.setItem('view', 'view2');
    } 
    if ($(this).data('view') == 'view1'){
      $('.product-grid').removeClass('product-grid__small');
      localStorage.setItem('view', 'view1');
    }
  });
}


if (localStorage.view){
  $('.view__item').removeClass('active');
  $(`.view__item[data-view=${localStorage.view}]`).addClass('active');

  if ( localStorage.view == 'view2' ) {
    $('.product-grid').addClass('product-grid__small');
  }
} else {
  localStorage.setItem('view', 'view1');
}


function showNotice(images, productName){
  $('.notice-surface').fadeIn();
  $('.notice-surface__inner').html(`
    <div class="notice-images">
      <img src="${images}">
    </div>
    <div class="notice-text">
      <span><b>В корзине</b></span>
      <div class="notice-name">${productName}</div>
    </div>
  `);
  $('.notice-surface__inner').delay(3000).slideUp(300);
}


$('.add-cart').on('click', function() {
  $('.counter').fadeIn();
  
  showNotice('https://elitech-market.ru/upload/catalog_images/185813_00.jpg', 'Дрель-шуруповерт ударная ДА 18УБЛ2 (Е2201.002.01)')
})




function initGeoPopup(item){
  var $locationInput = item;
  var $locationInputReset = $('.c-geolocation__refresh');
  var $locationItem = $('.c-geolocation__regions-item');
  var paragraph = document.createElement('p');
  paragraph.innerText = "Ничего не найдено";

  $locationInputReset.on('click', function() {
    $locationInput.val('');
    $locationItem.show();
  });

  $locationInput.keyup(function() {
    var $this = $(this);
    var inputValue = $this.val();
    var activeNumber = 0;
    $locationItem.each(function(index, value) {
      var currentName = $(value).text();
      if(currentName.toUpperCase().indexOf(inputValue.toUpperCase()) > -1) {
        $(value).css("display", "inline-block");
        activeNumber += 1
      } else {
        $(value).css("display", "none");
      }
      if(activeNumber == 0) {
        $('.c-geolocation__search-wrapper').after(paragraph)
      } else {
        $('.c-geolocation__wrapper').children("p").remove()
      }
    });
  });
}

initGeoPopup($('.c-geolocation__search'));