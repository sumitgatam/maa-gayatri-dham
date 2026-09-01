const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.querySelectorAll("[data-room]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("room").value = btn.dataset.room;
  });
});

const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const today = new Date().toISOString().split("T")[0];
checkin.min = today;
checkout.min = today;

checkin.addEventListener("change", () => {
  checkout.min = checkin.value || today;
  if (checkout.value && checkout.value < checkout.min) checkout.value = "";
});

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // IMPORTANT: Replace this with the hotel's real WhatsApp number.
  const hotelWhatsApp = "91XXXXXXXXXX";

  const name = document.getElementById("guestName").value.trim();
  const guests = document.getElementById("guests").value;
  const inDate = checkin.value;
  const outDate = checkout.value;
  const room = document.getElementById("room").value;

  const message =
`Namaste Maa Gayatri Dham 🙏

I would like to request a room booking.

Name: ${name}
Guests: ${guests}
Room: ${room}
Check-in: ${inDate}
Check-out: ${outDate}

Please confirm availability and price.`;

  window.open(`https://wa.me/${hotelWhatsApp}?text=${encodeURIComponent(message)}`, "_blank");
});
