
import { daftarProyek } from "./app.js";

const container = document.querySelector("#list");

const empty = document.querySelector("#empty");

function buildCard(proyek) {
    const li = document.createElement("li");
    li.className = "card";
    li.textContent = proyek.judul;
    return li;
}

function render(daftar) {
    container.textContent = "";

    if (daftar.length === 0) {
        empty.hidden = false;
        return;
    }

    empty.hidden = true;

    daftar.forEach((proyek) => {
        container.append(buildCard(proyek));
    });
}

render(daftarProyek);
const filterRow = document.querySelector("#filter");

filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const category = button.dataset.category;

    const selected = daftarProyek.filter(
        (proyek) =>
            category === "all" || proyek.category === category
    );

    render(selected);
});
const form = document.querySelector("form");

const jenisLatihan = document.querySelector("#jenis-latihan");
const tanggal = document.querySelector("#tanggal");
const durasi = document.querySelector("#durasi");

const submitButton = form.querySelector('button[type="submit"]');

function validateField(field) {
    const value = field.value.trim();
    let valid = value !== "";

    if (field === durasi) {
        const number = Number(value);
        valid = value !== "" && number >= 1 && number <= 300;
    }

    if (field === tanggal) {
        valid = value !== "";
    }

    const error = document.querySelector(`#${field.id}-error`);

    if (valid) {
        field.removeAttribute("aria-invalid");
        error.hidden = true;
    } else {
        field.setAttribute("aria-invalid", "true");
        error.hidden = false;
    }

    return valid;
}

function validateForm() {
    const fields = [jenisLatihan, tanggal, durasi];
    const results = fields.map((field) => validateField(field));
    const valid = results.every(Boolean);

    submitButton.disabled = !valid;

    return valid;
}

form.addEventListener("input", validateForm);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateForm()) {
        const invalidField = form.querySelector('[aria-invalid="true"]');
        invalidField?.focus();
    }
});

validateForm();