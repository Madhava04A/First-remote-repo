const btn = document.getElementById('add-btn');
const input = document.getElementById('task-input');
const taskContainer = document.getElementById('task-container');

btn.addEventListener('click', function(){
    let modal = document.createElement('div');
    modal.classList.add('task');

    let list = document.createElement('li');
    list.classList.add('input');
    list.innerText = `${input.value}`;
    modal.appendChild(list);

    let done = document.createElement('button');
    done.classList.add('done');
    done.innerHTML = `<i class="fa fa-check"></i>`;
    modal.appendChild(done);

    let deleteTask = document.createElement('button');
    deleteTask.classList.add('delete');
    deleteTask.innerHTML = `<i class="fa-solid fa-trash-can-xmark"></i>`;
    modal.appendChild(deleteTask);

    if(input.innerText ===""){
        alert("You did not enter anything");
    } else{
        taskContainer.appendChild(modal);
    }
   
})