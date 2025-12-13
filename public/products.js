const token = new URLSearchParams(window.location.search).get("token");
const API = "https://asco-project-production.up.railway.app";

fetch(`${API}/api/products?token=${token}`)
  .then(r => r.json())
  .then(data => {
    const div = document.getElementById("products");
    data.forEach(p => {
      div.innerHTML += `
        <div class="card">
          <h3>${p.name}</h3>
          <p>${p.price} so'm</p>
          <button onclick="add(${p.id})">Savatga</button>
        </div>`;
    });
  });

function add(id) {
  fetch(`${API}/api/cart/add?token=${token}&productId=${id}&qty=1`, {
    method: "POST"
  }).then(() => alert("Qo‘shildi"));
}
