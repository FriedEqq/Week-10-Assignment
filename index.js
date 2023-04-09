document.getElementById('addForm').addEventListener('submit', function (event) {
    event.preventDefault(); //prevent form submission so that you cant submit a blank.
    
    const id = document.getElementById('idInput').value;
    const name = document.getElementById('nameInput').value;
    const age = document.getElementById('ageInput').value;
    //gets input values.

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${id}</td>
      <td>${name}</td>
      <td>${age}</td>
    `;
document.querySelector('#dataTable tbody').appendChild(newRow);
    document.querySelector('#dataTable tbody').appendChild(newRow);
    //creates a new row in the table.

    document.getElementById('idInput').value = '';
    document.getElementById('nameInput').value = '';
    document.getElementById('ageInput').value = '';
});

