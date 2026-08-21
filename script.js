const ageGate = document.getElementById("ageGate");
const enterBtn = document.getElementById("enterBtn");
const leaveBtn = document.getElementById("leaveBtn");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (localStorage.getItem("sv_age_confirmed") === "yes") {
  ageGate.classList.add("hidden");
}

enterBtn.addEventListener("click", () => {
  localStorage.setItem("sv_age_confirmed", "yes");
  ageGate.classList.add("hidden");
});

leaveBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <main style="min-height:100vh;display:grid;place-items:center;padding:30px;text-align:center;background:#080808;color:#fff;font-family:Arial,sans-serif">
      <div><h1>Thanks for visiting.</h1><p style="color:#aaa">This website is intended for adults of legal age only.</p></div>
    </main>`;
});

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
