// js/table.js
document.getElementById("addRow").addEventListener("click", function() {
    const table = document.getElementById("restaurantsTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>Nuovo Ristorante</td>
        <td>Indirizzo Sconosciuto</td>
        <td><button class="btn btn-danger deleteRow">Rimuovi</button></td>`;
    addDeleteEvent(newRow);
});

function addDeleteEvent(row) {
    row.querySelector(".deleteRow").addEventListener("click", function() {
        row.remove();
    });
}

// Aggiungi l'evento di rimozione per le righe esistenti
document.querySelectorAll(".deleteRow").forEach(function(button) {
    button.addEventListener("click", function() {
        button.closest("tr").remove();
    });
});
