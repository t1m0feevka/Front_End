// --- Форма ---
document.getElementById("submitBtn").addEventListener("click", validateForm);

function validateForm() {
    const fullName = document.getElementById("fullName");
    const group = document.getElementById("group");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");
    const email = document.getElementById("email");

    const regexFullName = /^[А-ЯІЇЄҐ][а-яіїєґ]+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
    const regexGroup = /^[А-ЯІЇЄҐ]{2}-\d{2}$/;
    const regexPhone = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    const regexAddress = /^м\. .+$/;
    const regexEmail = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/;

    const fields = [
        {input: fullName, regex: regexFullName},
        {input: group, regex: regexGroup},
        {input: phone, regex: regexPhone},
        {input: address, regex: regexAddress},
        {input: email, regex: regexEmail},
    ];

    let allValid = true;

    fields.forEach(field => {
        if (!field.regex.test(field.input.value)) {
            field.input.classList.add("error");
            allValid = false;
        } else {
            field.input.classList.remove("error");
        }
    });

    if (allValid) {
        alert(
            `ПІБ: ${fullName.value}\n` +
            `Група: ${group.value}\n` +
            `Телефон: ${phone.value}\n` +
            `Адреса: ${address.value}\n` +
            `E-mail: ${email.value}`
        );
    } else {
        alert("Будь ласка, виправте виділені поля!");
    }
}

// --- Таблиця 6x6 ---
const table = document.getElementById("myTable");
const colorPicker = document.getElementById("colorPicker");
const variantNumber = 145%36; 

for (let i = 1; i <= 36; i++) {
    if ((i-1) % 6 === 0) { 
        var row = table.insertRow();
    }
    let cell = row.insertCell();
    cell.textContent = i;

    cell.addEventListener("mouseover", () => {
        if (i === variantNumber) {
            cell.style.backgroundColor = getRandomColor();
        }
    });

    cell.addEventListener("click", () => {
        cell.style.backgroundColor = colorPicker.value;
    });

    cell.addEventListener("dblclick", () => {
        const allCells = table.getElementsByTagName("td");
        for (let c of allCells) {
            if (c !== cell) {
                c.style.backgroundColor = colorPicker.value;
            }
        }
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
