document.getElementById('add-button').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText === "") {
        alert("Silakan masukkan tugas.");
        return;
    }

    // Membuat elemen list baru
    const li = document.createElement('li');
    li.textContent = todoText;

    // Menambahkan tombol hapus pada setiap tugas
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Hapus";
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    document.getElementById('todo-list').appendChild(li);

    // Mengosongkan kolom input setelah menambah tugas
    input.value = "";
});
