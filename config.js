/**
 * Admitad affiliate URL map.
 * Do NOT invent tracking URLs — paste them from Admitad publisher panel.
 */
window.ADMITAD_LINKS = {
  nordvpn: "#admitad-nordvpn",
  surfshark: "#admitad-surfshark",
  protonvpn: "#admitad-protonvpn",
  expressvpn: "#admitad-expressvpn",
  mullvad: "#admitad-mullvad",
  wpsoffice: "https://yynbx.com/g/nv5qc75bd98ba50fa66a0e10b6b7ca/",
  wondershare: "https://kjuzv.com/g/8u3trxihmwc5205e972def655e4ac9/",
  prohoster: "https://ntzgd.com/g/gaetfoqpj7c5205e972d934d4157fe/"
};

document.addEventListener("DOMContentLoaded", function () {
  var map = window.ADMITAD_LINKS || {};
  document.querySelectorAll("a.cta[data-partner]").forEach(function (el) {
    var key = el.getAttribute("data-partner");
    if (key && map[key]) {
      el.setAttribute("href", map[key]);
    }
  });
});
