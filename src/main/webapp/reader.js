document.addEventListener('DOMContentLoaded', function () {
    const userList = document.getElementById('userList');

    // Загрузка списка пользователей при загрузке страницы
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/lab4_war_exploded/user', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const users = JSON.parse(xhr.responseText);
            displayUsers(users);
        } else {
            console.error('Произошла ошибка при загрузке списка пользователей:', xhr.statusText);
        }
    };

    xhr.send();

    function displayUsers(users) {
        let tableHTML = `
    <table class="table table-striped table-bordered" style="width: 100%;">
        <thead class="thead-dark">
            <tr>
                <th style="width: 20%;">Имя</th>
                <th style="width: 20%;">Фамилия</th>
                <th style="width: 20%;">Группа</th>
                <th style="width: 20%;">Телефон</th>
                <th style="width: 20%;">Электронная почта</th>
            </tr>
        </thead>
        <tbody>
    `;

        users.forEach(function (user) {
            tableHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.lastname}</td>
                <td>${user.group}</td>
                <td>${user.phone}</td>
                <td>${user.email}</td>
            </tr>
        `;
        });

        tableHTML += `
        </tbody>
    </table>
    `;

        userList.innerHTML = tableHTML;
    }
});
