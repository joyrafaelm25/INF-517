function appendBody() {
 
    let mainRow = `
    <tr>
        <th colspan="6" class="bg-light">
            <i class="fas fa-tasks"></i>
            name
        </th>
    </tr>`;

    let rowTr = `
    <tr>
        <th><a href="#" class="text-secondary">title</a></th>
        <td>date</td>
        <td>range</td>
        <td><span class="badge badge-primary">status</span></td>
        <td><span class="badge badge-success">rate</span></td>
        <td>comment</td>
    </tr>`;

    // Leer el archivo JSON
    var json = JSON.parse(cursos);
    
    for (let i = 0; i < json.length; i++) {

        // Agregar el titulo del curso.
        $('#tb_cali').find('tbody').append(mainRow.replace('name', json[i].curso));

        // Agregar las tareas.
        for (let j = 0; j < json[0].tareas.length; j++) {
            let row=rowTr.replace('title', json[i].tareas[j].tarea);
             row = row.replace('date', json[i].tareas[j].fecha);
             row = row.replace('range', json[i].tareas[j].rango);
             row = row.replace('status', json[i].tareas[j].estado);
             row = row.replace('rate', json[i].tareas[j].calificacion);
             row = row.replace('comment', json[i].tareas[j].retroalimentacion);

             if(json[i].tareas[j].estado !== 'Finalizado'){
                row = row.replace('primary', 'warning');
             }

            $('#tb_cali').find('tbody').append(row);
        }
    }
}