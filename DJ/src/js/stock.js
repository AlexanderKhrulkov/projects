if(document.querySelector('.stock__showmore-btn')) {
    document.querySelector('.stock__showmore-btn').addEventListener('click', function() {
        if(document.querySelector('.stock__showmore-btn').classList.contains('show')) {
            document.querySelector('.stock__showmore-btn').innerHTML = 'Скрыть';
            document.querySelector('.stock__showmore-btn').classList.toggle('show');
        } else {
            document.querySelector('.stock__showmore-btn').innerHTML = 'Показать ещё';
            document.querySelector('.stock__showmore-btn').classList.toggle('show');
        };
    });
};

if(window.innerWidth < 991) {
    document.querySelectorAll('.stock__item').forEach((el, index) => {
        if(index > 3) {
            el.classList.add('collapse')
        } else {
            el.classList.remove('collapes')
        }
    })
}

window.addEventListener('resize', () => {
    if(window.innerWidth < 991) {
        document.querySelectorAll('.stock__item').forEach((el, index) => {
            if(index > 3) {
                el.classList.add('collapse')
            } else {
                el.classList.remove('collapes')
            }
        })
    }
})