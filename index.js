               //      variables 

const btn = document.getElementById('add-btn');
const input = document.getElementById('task-input');
const taskContainer = document.getElementById('task-container');

             // event listener to add tasks 

btn.addEventListener('click', function(){
    let modal = document.createElement('div');
    modal.classList.add('task');

    let list = document.createElement('li');
    list.innerText = `${input.value}`;
    modal.appendChild(list);

    let done = document.createElement('button');
    done.classList.add('done');
    done.innerHTML = `<i class="fa fa-check"></i>`;
    done.style.backgroundColor = "green";
    modal.appendChild(done);
    

    let deleteTask = document.createElement('button');
    deleteTask.classList.add('delete');
    deleteTask.innerHTML = `<i style="font-size:24px" class="fa">&#xf05e;</i>`;
    deleteTask.style.backgroundColor = "red";
    deleteTask.style.width = "3rem";
    modal.appendChild(deleteTask);

    if(input.value ===""){
        alert("You did not enter anything");
    } else{
        taskContainer.appendChild(modal);
    }

    input.value= "";

    done.addEventListener('click', function(){
        done.previousElementSibling.style.textDecoration = "line-through";
    })

    deleteTask.addEventListener('click', function(e){
        e.target.parentElement.parentElement.remove();
    })
   
})