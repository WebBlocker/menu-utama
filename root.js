import { blockedSites } from './url.js';

const params = new URLSearchParams(window.location.search);
const site = params.get("site");

if (site) {
  const isBlocked = blockedSites.some(blocked => site.includes(blocked));

  if (isBlocked) {
    window.location.href = "./blocked.html";
  }
}

function openSite(site) {
  const blockedSites = ["youtube.com", "facebook.com"];

  const isBlocked = blockedSites.some(b => site.includes(b));

  if (isBlocked) {
    window.location.href = "blocked.html";
  } else {
    window.location.href = "https://" + site;
  }
}
