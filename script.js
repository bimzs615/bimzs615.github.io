// Simulasi data stok
let stockData = [];

// Fungsi untuk mengelola stok
function manageStock() {
  const quantity = document.getElementById('quantity').value;
  const movement = document.getElementById('movement').value;
  const date = new Date().toLocaleDateString();

  // Menambahkan data stok baru ke dalam array
  stockData.push({
    date,
    quantity,
    movement
  });

  // Memperbarui tabel stok
  updateStockTable();

  // Reset form
  document.getElementById('stock-form').reset();
}

// Fungsi untuk memperbarui tabel stok
function updateStockTable() {
  const stockTable = document.getElementById('stock-table');
  const tbody = stockTable.querySelector('tbody');

  // Menghapus semua baris tabel
  tbody.innerHTML = '';

  // Menambahkan data stok ke dalam tabel
  stockData.forEach(data => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${data.date}</td><td>${data.quantity}</td><td>${data.movement}</td>`;
    tbody.appendChild(row);
  });
}
