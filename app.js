fetch('https://64036281302b5d671c4e05dc.mockapi.io/book')
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector('#book-table tbody');
    data.forEach(book => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>${book.publisher}</td>
        <td>${book.pages}</td>
        <td>${book.price}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => console.error(error));