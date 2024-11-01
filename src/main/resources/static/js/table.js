document.getElementById("addRow").addEventListener("click", function() {
    const table = document.getElementById("cusTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>Nuovo Nome</td>
        <td>Nuovo Cognome</td>
        <td><button class="btn btn-danger deleteRow">Rimuovi</button></td>`;
    addDeleteEvent(newRow);
});

function addDeleteEvent(row) {
    row.querySelector(".deleteRow").addEventListener("click", function() {
        row.remove();
    });
}

document.querySelectorAll(".deleteRow").forEach(function(button) {
    button.addEventListener("click", function() {
        button.closest("tr").remove();
    });
});
