// ── helpers.js ──
const currency = (n) => `BsD ${n.toFixed(2)}`;
const iva = (monto) => monto * 0.18;
const descuento = (monto, pct) => monto * (1 - pct / 100);

// ── main.js ──
console.log(iva(100));                // 18
console.log(currency(99.9));          // "BsD 99.90"
console.log(descuento(100, 20));    // 80
