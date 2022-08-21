if ( document.querySelector('.filter__slider') ) {
    var filter_slider = document.querySelector('.filter__slider');
    var slider_min = Number(filter_slider.getAttribute('data-min'));
    var slider_max = Number(filter_slider.getAttribute('data-max'));
    
    noUiSlider.create(filter_slider, {
        start: [slider_min, slider_max],
        connect: true,
        range: {
            'min': slider_min,
            'max': slider_max
        }
    });
    
    var min_price = document.getElementById('minPrice');
    var max_price = document.getElementById('maxPrice');
    
    filter_slider.noUiSlider.on('update', function (values, handle) {
        var value = values[handle];
        if (handle) {
            max_price.value = Math.round(value);
        } else {
            min_price.value = Math.round(value);
        }
    });
    
    min_price.addEventListener('change', function () {
        filter_slider.noUiSlider.set([null, this.value]);
    });
    
    max_price.addEventListener('change', function () {
        filter_slider.noUiSlider.set([null, this.value]);
    });
    
    
    /*  Filter  */
    $('.filter__row-name').each(function() {
        if(!$(this).parent().hasClass('--active')) {
            $(this).next().hide("behavior");
            $(this).next().next().hide("behavior");
        };
        $(this).on('click', function() {
            if($(this).parent().hasClass('--active')) {
                $(this).next().hide("behavior");
                $(this).next().next().hide("behavior");
            } else {
                $(this).next().show("behavior");
                $(this).next().next().show("behavior");
            };
            $(this).parent().toggleClass('--active');
        });
    });
    
    $('.filter__row-list').each(function() {
        liHide($(this));
    });
    
    $('.filter__row-showmore').on('click', function() {
        let li = $(this).prev().find('.hide');
        let number = $(this).prev().children().length - 3;
        if(!$(this).hasClass('show-more-hide')) {
            li.each(function() {
                $(this).show();
            });
            $(this).html("Скрыть");
            $(this).addClass('show-more-hide');
        } else {
            liHide($(this).prev());
            $(this).html("Показать ещё (" + number + ")");
            $(this).removeClass('show-more-hide');
        };
    });
    
    function liHide(list) {
        list.each(function() {
            let li = $(this).children();
            li.each(function(index) {
                if(index > 2) {
                    $(this).addClass('hide');
                    $(this).hide();
                };
            });
        });
    };
}
