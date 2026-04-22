import { blockedSites } from './url.js';

// ambil element (INI YANG DIMINTA DOSEN)
const btnYoutube = document.getElementById("btnYoutube");
const btnGoogle = document.getElementById("btnGoogle");

// function handler
function openSite(site) {
  const isBlocked = blockedSites.some(b => site.includes(b));

  if (isBlocked) {
    window.location.href = "./blocked.html";
  } else {
    window.location.href = "https://" + site;
  }
}

// event listener (pakai element)
btnYoutube.addEventListener("click", () => {
  openSite("youtube.com");
});

btnGoogle.addEventListener("click", () => {
  openSite("google.com");
});
