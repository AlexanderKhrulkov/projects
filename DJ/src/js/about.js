if(document.querySelector('.about__showmore')) {
    document.querySelector('.about__showmore').addEventListener('click', function() {
        if(document.querySelector('.about__showmore').classList.contains('show')) {
            document.querySelector('.about__showmore').innerHTML = 'Скрыть';
            document.querySelector('.about__showmore').classList.toggle('show');
        } else {
            document.querySelector('.about__showmore').innerHTML = 'Показать ещё';
            document.querySelector('.about__showmore').classList.toggle('show');
        };
    });
};

if(document.querySelector('.about__slider')) {
    const swiper = new Swiper('.about__slider', {
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
};

if(document.querySelectorAll('.about__certificates-item')) {
    if(window.innerWidth < 991 && window.innerWidth > 768) {
        document.querySelectorAll('.about__certificates-item').forEach((el, index) => {
            if(index > 5) {
                el.classList.add('collapse')
            } else {
                el.classList.remove('collapes')
            };
        });
    } else if(window.innerWidth < 768 && window.innerWidth > 575) {
        document.querySelectorAll('.about__certificates-item').forEach((el, index) => {
            if(index > 3) {
                el.classList.add('collapse')
            } else {
                el.classList.remove('collapes')
            };
        });
    } else if(window.innerWidth < 575) {
        document.querySelectorAll('.about__certificates-item').forEach((el, index) => {
            if(index > 1) {
                el.classList.add('collapse')
            } else {
                el.classList.remove('collapes')
            };
        });
    };
    
    window.addEventListener('resize', () => {
        if(window.innerWidth < 991 && window.innerWidth > 768) {
            document.querySelectorAll('.about__certificates-item').forEach((el, index) => {
                if(index > 5) {
                    el.classList.add('collapse')
                } else {
                    el.classList.remove('collapes')
                };
            });
        } else if(window.innerWidth < 768 && window.innerWidth > 575) {
            document.querySelectorAll('.about__certificates-item').forEach((el, index) => {
                if(index > 3) {
                    el.classList.add('collapse')
                } else {
                    el.classList.remove('collapes')
                };
            });
        } else if(window.innerWidth < 575) {
            document.querySelectorAll('.about__certificates-item').forEach((el, index) => {
                if(index > 1) {
                    el.classList.add('collapse')
                } else {
                    el.classList.remove('collapes')
                };
            });
        };
    });
};