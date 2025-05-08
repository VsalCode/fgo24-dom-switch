const tombol1 = document.querySelector(".tombol > button:first-child");
const tombol2 = document.querySelector(".tombol > button:nth-child(2)");
const tombol3 = document.querySelector(".tombol > button:last-child");

const gelas1 = document.querySelector(".gelas > div:first-child");
const gelas2 = document.querySelector(".gelas > div:nth-child(2)");
const gelas3 = document.querySelector(".gelas > div:last-child");

tombol1.addEventListener("click", () => {
  if (!gelas2.classList.contains("kosong")) {
    alert("Pindahkan Dulu Gelas 2 ke Gelas Kosong !");
  } else if (gelas3.classList.contains("kopi")) {
    gelas2.classList.replace("kosong", "teh");
    gelas1.classList.replace("teh", "kosong");
  } else {
    gelas2.classList.replace("kosong", "kopi");
    gelas1.classList.replace("kopi", "kosong");
  }
});

tombol2.addEventListener("click", () => {
  if (!gelas3.classList.contains("kosong")) {
    alert("Pindahkan Dulu Gelas 3 ke Gelas Kosong !");
    gelas2.classList.replace("kosong", "teh");
  }
  if (gelas1.classList.contains("teh")) {
    gelas3.classList.replace("kosong", "kopi");
    gelas2.classList.replace("kopi", "kosong");
  }
  gelas3.classList.replace("kosong", "teh");
  gelas2.classList.replace("teh", "kosong");
});

tombol3.addEventListener("click", () => {
  if (gelas1.classList.contains("kosong")) {
    gelas1.classList.replace("kosong", "teh");
    gelas3.classList.replace("teh", "kosong");
  } else {
    alert("Pindahkan dulu gelas 1 ke gelas kosong!");
  }
});
