
function dataPerson() {
    let form = document.querySelector('form');
    let nama = form.querySelector('input[name="nama"]').value;
    let pekerjaan = form.querySelector('input[name="pekerjaan"]').value;
    let hobby = form.querySelector('input[name="hobby"]').value;

    let hasil = document.getElementById('hasil');
    hasil.innerHTML = `
        <table border="1">
            <tr>
                <th>Nama</th>
                <td>${nama}</td>
            </tr>
            <tr>
                <th>Pekerjaan</th>
                <td>${pekerjaan}</td>
            </tr>
            <tr>
                <th>Hobby</th>
                <td>${hobby}</td>
            </tr>
        </table>
    `;
}
