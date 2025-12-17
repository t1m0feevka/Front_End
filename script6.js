document.getElementById("btn").addEventListener("click", function () {

    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            const html = `
                <div class="card">
                    <img src="${user.picture.large}" alt="photo"><br><br>
                    <b>Телефон:</b> ${user.cell}<br>
                    <b>Країна:</b> ${user.location.country}<br>
                    <b>Email:</b> ${user.email}<br>
                    <b>Координати:</b><br>
                    широта: ${user.location.coordinates.latitude}<br>
                    довгота: ${user.location.coordinates.longitude}
                </div>
            `;

            document.getElementById("output").innerHTML = html;
        })
        .catch(error => {
            console.error("Помилка:", error);
        });

});
