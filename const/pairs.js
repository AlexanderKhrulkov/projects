// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function createNumbersArray(count) {
    let array = [];
    for (let i = 1; i <= count; i++) {
        array.push(i, i);
    }

    // console.log(array);
    return array;

}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

// Создаёт селекты для настройки сетки кнопок
function startSettings() {

    let selectVert = document.createElement('select');
    selectVert.classList.add('vertical');

    let selectHor = document.createElement('select');
    selectHor.classList.add('horizontal');

    document.body.append(selectVert, selectHor);

    let button = document.createElement('button');
    button.classList.add('submit');
    button.textContent = "Выбрать";
    document.body.append(button);

    let placeholderVert = new Option('Выберите количество кнопок по вертикали', 'value');
    placeholderVert.setAttribute('disabled', true);

    let placeholderHor = new Option('Выберите количество кнопок по горизонтали', 'value');
    placeholderHor.setAttribute('disabled', true);

    selectVert.append(placeholderVert);
    selectHor.append(placeholderHor);



    for (let i = 2; i < 12; i = i + 2) {
        let optionVert = new Option(i, i, false, false);
        let optionHor = new Option(i, i, false, false);
        selectVert.append(optionVert);
        selectHor.append(optionHor);
        // selectHor.append(option);
    }


    // let vertical = document.querySelector('vertical');
    // vertical.option.addEventListener('click', function(e) {
    //     e.setAttribute('selected', true);
    // })

}

// Создаёт кнопки
function elCreate(multi) {

    let container = document.createElement('div');
    container.classList.add('container');
    document.body.append(container);
    for (let i = 0; i < multi; i++) {
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-primary', 'pairs__button', 'mask');
        container.append(button);
    }
    // let replay = document.createElement('button');
    let button = document.createElement('button');
    button.classList.add('replay', 'invisible', 'submit');
    button.textContent = 'Cыграть ещё раз';
    document.body.append(button);
}

// Сравнивает значения кнопок
function comparison() {
    let buttons = document.querySelectorAll('.pairs__button');



    // Создаём пустой массив для сравнения значений нажатых кнопок
    let compArr = [];
    console.log(compArr);
    buttons.forEach(function (el) {
        console.log(el.textContent);

        // el.classList.add('mask');

        el.addEventListener('click', function () {


            el.classList.remove('mask');
            el.classList.add('compared');

            // Исключаем возможность повторного нажатия
            el.setAttribute('disabled', true);

            // Добавляем значение кнопки в массив для сравнения
            compArr.push(el.textContent);
            console.log(compArr);
            let leng = compArr.length;
            console.log(leng);

            // Ограничиваем размер массива для сравнения двумя значениями
            if (leng == 2) {
                console.log('ready');

                console.log(compArr[0], compArr[1]);
                if (compArr[0] == compArr[1]) {
                    document.querySelectorAll('.compared').forEach(function (e) {
                        e.classList.add('btn-success');
                        e.setAttribute('disabled', true);
                    })

                    // Очищаем массив сравнения
                    compArr.length = 0;
                }
                else {
                    document.querySelectorAll('.compared').forEach(function (e) {
                        function reset() {
                            e.classList.add('mask');
                            e.removeAttribute('disabled');
                        }
                        setTimeout(reset, 1000);
                    })

                    // Исключаем возможность нажатия других кнопок, пока не закроются уже нажатые
                    document.querySelectorAll('.mask').forEach(function (el) {
                        el.setAttribute('disabled', true);
                        function unblock() {
                            el.removeAttribute('disabled');
                        }
                        setTimeout(unblock, 1000);
                    })

                    // Очищаем массив сравнения
                    compArr.length = 0;
                }
                buttons.forEach(function (r) {
                    r.classList.remove('compared');
                })
                let maskStatus = false;
                document.querySelectorAll('.pairs__button').forEach(function (e) {
                    let mask = document.querySelector('.mask');
                    if (!mask) {
                        maskStatus = true;
                    }
                })
                console.log(maskStatus);

                if (maskStatus == true) {
                    timeleft = 0;
                }
            }
        })
    })

}

// Устанавливает таймер, завершающий игру по истечении времени
let timeleft = 60;
function timer() {

    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").textContent = "Finished";
            document.querySelector('.container').remove();
            document.querySelector('.replay').classList.remove('invisible');
            timeleft = 60;

        } else {
            document.getElementById("countdown").textContent = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
}



function startGame() {


    let container = document.querySelector('.container');
    if (container) {
        container.remove();
    }
    document.querySelector('.submit').remove();
    timer();
    let vert = document.querySelector('.vertical').value;
    let hor = document.querySelector('.horizontal').value;
    let multi = vert * hor;
    console.log(hor, multi);
    // return {
    //     hor,
    //     multi
    // }


    elCreate(multi);

    let count = multi / 2;
    //Присваиваем кнопкам значения из массива с перемешанными номерами
    let game = shuffle(createNumbersArray(count));
    console.log(game);
    let buttons = document.querySelectorAll('.pairs__button');
    for (let i = 0; i < game.length; i++) {
        buttons[i].textContent = game[i];
    }
    buttons.forEach(function (e) {
        if (hor == 2) {
            e.classList.add('col-6');
        }
        if (hor == 4) {
            e.classList.add('col-3');
        }
        if (hor == 6) {
            e.classList.add('col-2');
        }
        if (hor == 8) {
            e.style = 'width: 12.5%';
        }
        if (hor == 10) {
            e.style = 'width: 10%';
        }
    })
    comparison();

    let replay = document.querySelector('.replay');
    if (replay) {
        replay.addEventListener('click', function () {
            startGame();
        })
    }



    // let countDouble = count * 2;
    // let multi = document.querySelectorAll('.btn').length;

    // count = multi / 2;





}
startSettings();
document.querySelector('.submit').addEventListener('click', function () {
    startGame();
})




