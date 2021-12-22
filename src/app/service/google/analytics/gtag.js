export function gtag() {
  initDataLayer()
  window.dataLayer.push(arguments);
}

function initDataLayer() {
  if (window.dataLayer === undefined || window.dataLayer == null) {
    window.dataLayer = []
  }
}
