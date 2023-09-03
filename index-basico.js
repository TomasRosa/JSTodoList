document.addEventListener('DOMContentLoaded',function() ///Esto se hace para que el js recien comienze a funcionar una vez que el html se cargo del todo
{
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const btn = document.getElementById('add');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    let id = 1;

    function removeTodo(id)
    {
        document.getElementById(id).remove();
    }

    function addTodo()
    {
        if(title.value === ''  || description.value === '')
        {
            alert.classList.remove('d-none'); ///Si los campos estan vacios oculto el display none, es decir hago que se muestre el mensaje de alerta.
            alert.innerText = "Title and description are required";
            return;
        }
        alert.classList.add('d-none'); ///Si los campos NO estan vacios, aplico el display none, es decir hago que no se muestre el mensaje de alerta.
        const row = table.insertRow();
        row.setAttribute('id',id++);
        /*Backticks para agarrar elementos HTML, ${} para referirme a variables.*/
        row.innerHTML = `
        <td>${title.value}</td> 
        <td>${description.value}</td>
        <td class="text-center">
            <input type="checkbox">
            </td>
            <td class="text-right">
            <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
            </button>
            </td> 
        `
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn','btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>'
        removeBtn.onclick = function (e)
        {
            removeTodo(row.getAttribute('id'));
        }
        row.children[3].appendChild(removeBtn);
    }
    btn.onclick = addTodo;
})

