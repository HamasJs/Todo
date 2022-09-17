const task_form =document.querySelector('.task-form');
const create_task = document.querySelector('.create-task');
const show_add_Task = function() {
    create_task.addEventListener('click', function() {
        task_form.classList.toggle('hidden');
    });
};

export {show_add_Task};