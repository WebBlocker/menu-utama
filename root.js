import { blockedSites } from './url.js';

// Ambil parameter dari URL (?site=...)
const params = new URLSearchParams(window.location.search);
const site = params.get("site");

if (site) {
  console.log("Membuka:", site);

  // Cek apakah termasuk blacklist
  const isBlocked = blockedSites.some(blocked => site.includes(blocked));

  if (isBlocked) {
    window.location.href = "blocked.html";
  }
}
