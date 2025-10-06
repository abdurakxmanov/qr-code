const input = document.getElementById("text-input");
const btn = document.getElementById("generate-btn");
const qrContainer = document.getElementById("qr-code");

btn.addEventListener("click", () => {
  qrContainer.innerHTML = "";
  const text = input.value.trim();

  if (text === "") {
    alert("Iltimos, matn yoki URL kiriting!");
    return;
  }

  new QRCode(qrContainer, {
    text: text,
    width: 180,
    height: 180,
    colorDark: "#1e293b",
    colorLight: "#ffffff",
  });
});
