const blockedSites = ["test.html"];

const currentURL = window.location.href;

blockedSites.forEach(site => {
    if (currentURL.includes(site)) {
        window.location.href = "blocked.html";
  }
});
