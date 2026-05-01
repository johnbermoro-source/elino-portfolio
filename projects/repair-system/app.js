function login() {
  window.location.href = "dashboard.html";
}
function addJob() {
  let customer = document.getElementById("customer").value;
  let device = document.getElementById("device").value;
  let issue = document.getElementById("issue").value;

  if (!customer || !device || !issue) {
    alert("Please fill all fields");
    return;
  }

  let table = document.querySelector("table");
  let newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${customer}</td>
    <td>${device}</td>
    <td>${issue}</td>
    <td class="status">Pending</td>
  `;

  // clear inputs
  document.getElementById("customer").value = "";
  document.getElementById("device").value = "";
  document.getElementById("issue").value = "";
}
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("status")) {
    if (e.target.innerText === "Pending") {
      e.target.innerText = "Done";
      e.target.style.color = "green";
    } else {
      e.target.innerText = "Pending";
      e.target.style.color = "orange";
    }
  }
});