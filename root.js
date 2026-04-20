import { blockedSites } from './url.js';

const params = new URLSearchParams(window.location.search);
const site = params.get("site");

if (site) {
  const isBlocked = blockedSites.some(blocked => site.includes(blocked));

  if (isBlocked) {
    window.location.href = "./blocked.html";
  }
}

