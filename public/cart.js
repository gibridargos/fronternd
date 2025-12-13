const token = new URLSearchParams(window.location.search).get("token");
const API = "https://asco-project-production.up.railway.app";

fetch(`${API}/api/cart?token=${token}`)
  .then(r => r.json())
  .then(data => {
    const div = document.getElementById("cart");
    data.forEach(i => {
      div.innerHTML += `<p>${i.product.name} x ${i.quantity}</p>`;
    });
  });

function order() {
  fetch(`${API}/api/order?token=${token}`, { method: "POST" })
    .then(() => alert("Zakaz qabul qilindi"));
}
