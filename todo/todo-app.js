(function () {

    let listArray = [], listName = '';
    // Создаёт заголовок страницы

    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    //Создаёт форму ввода дела

    function createTotoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';
        button.setAttribute('disabled', true);

        input.addEventListener('input', function() {
            if(!input.textContent != '') {
                button.removeAttribute('disabled');
            }
            if(input.value === '') {
                button.setAttribute('disabled', true);
            }
            
        })

        form.addEventListener('submit', function() {
            button.setAttribute('disabled', true);
        })

        

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        };

    }

    //Создаёт список дел
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;

    }

    //Создаёт дело

    function createTodoItem(obj) {
        let item = document.createElement('li');
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');
    
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = obj.name;

        doneButton.addEventListener('click', function() {
            item.classList.toggle('list-group-item-success');
            // const currentName = item.firstChild.textContent;

            for (const listItem of listArray) {
                if (listItem.id == obj.id) listItem.done = !listItem.done
            }

            saveList(listArray, listName);
        })
        deleteButton.addEventListener('click', function() {
            if (confirm('Вы уверены?')) {
                item.remove();

                // const currentName = item.firstChild.textContent;

            for (let i = 0; i < listArray.length; i++) {
                if (listArray[i].id == obj.id) listArray.splice(i, 1)
            }
            console.log(listArray);
            saveList(listArray, listName);
            }
        })
    
        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        if(obj.done == true) item.classList.add('list-group-item-success');
    
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);
    
        return {
            item,
            doneButton,
            deleteButton,
        }
    }

    function getNewID(arr) {
        let max = 0;
        for (const item of arr) {
            if (item.id > max) max = item.id
        }
        return max + 1;
    }

    function saveList(arr, keyName) {
        localStorage.setItem(keyName, JSON.stringify(arr)); 
    }

    //Собирает всё вместе

    function createTodoApp(container, title = 'Список дел', keyName) {
        // let container = document.getElementById('todo-app');
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTotoItemForm();
        let todoList = createTodoList();

        listName = keyName;

        // let wakeUp = {
        //     name: 'Проснуться',
        //     done: true
        // }
        
        // let breakfast = {
        //     name: 'Позавтракать',
        //     done: false
        // }
        // let firstTodo = createTodoItem(wakeUp);
        // let secondTodo = createTodoItem(breakfast);
        // todoList.append(firstTodo.item);
        // todoList.append(secondTodo.item);
            // massive.push(wakeUp);
            // massive.push(breakfast);
            // console.log(massive);
            // let firstTodo = createTodoItem(massive[0]);
            // let secondTodo = createTodoItem(massive[1]);  
            // todoList.append(firstTodo.item);
            // todoList.append(secondTodo.item);


        // let savedItem = JSON.parse(localStorage.getItem('newItem'));
        // console.log(savedItem);
        // let restoreSaved = createTodoItem(savedItem);

        // todoList.append(restoreSaved.item);
        

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        let localData = localStorage.getItem(listName);

        if (localData !== null && localData !== '') listArray = JSON.parse(localData);

        for (const itemList of listArray) {
            let todoItem = createTodoItem(itemList);
            todoList.append(todoItem.item);
        }

        todoItemForm.form.addEventListener('submit', function(e) {
            e.preventDefault();
            if(!todoItemForm.input.value) {
                return;
            }

            let newItem = {
                id: getNewID(listArray),
                name: todoItemForm.input.value,
                done: false
            }
            // localStorage.setItem('newItem', JSON.stringify(newItem));
            
            let todoItem = createTodoItem(newItem);

            

            

            listArray.push(newItem);
            // localStorage.setItem('name', todoItemForm.input.value);
            // localStorage.setItem('done', newItem.done);
            console.log(listArray);
            // let test = localStorage.getItem('name');
            // let test2 = localStorage.getItem('done');
            // console.log(test);
            // console.log(test2);

            saveList(listArray, listName);
            todoList.append(todoItem.item);
            // localStorage.getItem(todoItemForm.input.value);
            todoItemForm.button.disabled = true;
            todoItemForm.input.value = '';
        })
    }

    

    

    // document.addEventListener('DOMContentLoaded', function() {
    //   createTodoApp(document.getElementById('my-todos'), 'Мои дела');
    //   createTodoApp(document.getElementById('mom-todos'), 'Дела для мамы');
    //   createTodoApp(document.getElementById('dad-todos'), 'Дела для папы');
    // });

    window.createTodoApp = createTodoApp;

    
})();

