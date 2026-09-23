"use strict";

/* =========================================================
   HAPPY ROLLS - DEMO INTERACTIONS
========================================================= */

const modal = document.querySelector("#demoModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");

const closeModalButton = document.querySelector("#closeModal");
const modalAcceptButton = document.querySelector("#modalAccept");

const orderButtons = document.querySelectorAll(".order-button");
const navigationCards = document.querySelectorAll(".nav-card");

const menuCTA = document.querySelector("#menuCTA");
const menuButton = document.querySelector("#menuButton");

const year = document.querySelector("#year");


/* =========================================================
   MODAL
========================================================= */

function openModal(title, description) {
  modalTitle.textContent = title;
  modalDescription.textContent = description;

  modal.classList.add("is-visible");
  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}


function closeModal() {
  modal.classList.remove("is-visible");
  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}


/* =========================================================
   ORDER BUTTONS
========================================================= */

orderButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const location = button.dataset.action;

    openModal(
      `Pedir en ${location}`,
      `En la versión final este botón podrá abrir WhatsApp, una plataforma de pedidos o el menú correspondiente a la sucursal ${location}.`
    );

  });

});


/* =========================================================
   NAVIGATION CARDS
========================================================= */

navigationCards.forEach((card) => {

  card.addEventListener("click", () => {

    const section = card.dataset.section;

    const descriptions = {
      "Menú":
        "Aquí mostraremos el menú completo de Happy Rolls con fotografías, categorías, precios y productos.",

      "Promociones":
        "Aquí aparecerán las promociones vigentes de Happy Rolls.",

      "Sucursales":
        "Aquí podremos mostrar Orquídeas y Valle Alto, incluyendo ubicación y acceso directo a Google Maps.",

      "Opiniones":
        "Esta sección podrá enviar al cliente directamente a dejar una reseña."
    };

    openModal(
      section,
      descriptions[section] ||
      "Esta sección estará disponible próximamente."
    );

  });

});


/* =========================================================
   MENU CTA
========================================================= */

menuCTA.addEventListener("click", () => {

  openModal(
    "Menú Happy Rolls",
    "La siguiente etapa puede incluir un menú interactivo con rolls, entradas, bebidas, precios y carrito de pedido."
  );

});


/* =========================================================
   MOBILE MENU
========================================================= */

menuButton.addEventListener("click", () => {

  openModal(
    "Happy Rolls",
    "Aquí podemos agregar un menú móvil con accesos a Inicio, Menú, Promociones, Sucursales y Contacto."
  );

});


/* =========================================================
   CLOSE MODAL
========================================================= */

closeModalButton.addEventListener("click", closeModal);

modalAcceptButton.addEventListener("click", closeModal);


modal.addEventListener("click", (event) => {

  if (
    event.target.classList.contains("modal__backdrop")
  ) {
    closeModal();
  }

});


document.addEventListener("keydown", (event) => {

  if (
    event.key === "Escape" &&
    modal.classList.contains("is-visible")
  ) {
    closeModal();
  }

});


/* =========================================================
   SOCIAL PLACEHOLDERS
========================================================= */

document
  .querySelectorAll('a[href="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      event.preventDefault();

      const platform =
        link.getAttribute("aria-label") ||
        "Red social";

      openModal(
        platform,
        `Aquí conectaremos la cuenta oficial de ${platform} de Happy Rolls.`
      );

    });

  });


/* =========================================================
   CURRENT YEAR
========================================================= */

year.textContent = new Date().getFullYear();
