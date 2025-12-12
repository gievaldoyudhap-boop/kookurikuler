// MENU RESPONSIF MOBILE
let menuList = document.getElementById("menuList");
menuList.style.height = "0px";

function toggleMenu() {
    if (menuList.style.height === "0px") {
        menuList.style.height = "200px";
    } else {
        menuList.style.height = "0px";
    }
}

// POPUP BACA SELENGKAPNYA
function readMore(id) {
    let artikel = {
        kasada: "Upacara Kasada merupakan tradisi suku Tengger di Gunung Bromo ...",
        ngaben: "Ngaben adalah upacara pembakaran jenazah umat Hindu Bali ...",
        toraja: "Rambu Solo' adalah upacara adat pemakaman masyarakat Toraja ..."
    };

    alert(artikel[id]);
}
function showMore(id) {
    let moreText = document.getElementById(id);

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
    } 
}function toggleMore(id, button) {
    let content = document.getElementById(id);

    // Jika belum tampil
    if (!content.classList.contains("show")) {
        content.classList.add("show");
        button.textContent = "Sembunyikan";
    } 
    // Jika sudah tampil
    else {
        content.classList.remove("show");
        button.textContent = "Baca Selengkapnya";
    }
}
function toggleMore(id, button) {
    let content = document.getElementById(id);

    if (!content.classList.contains("show")) {
        content.classList.add("show");
        button.textContent = "Sembunyikan";
    } else {
        content.classList.remove("show");
        button.textContent = "Baca Selengkapnya";
    }
}
function toggleMore(id, button) {
    let content = document.getElementById(id);
    if (!content.classList.contains("show")) {
        content.classList.add("show");
        button.textContent = "Sembunyikan";
    } else {
        content.classList.remove("show");
        button.textContent = "Baca Selengkapnya";
    }
}

