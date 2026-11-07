const orcamentos = [{ data: '2026-11-08', hora: '10:00' }];

function calcularTotal(valor) {
  if (!valor || valor <= 0) return 0;
  return valor + valor * 0.10;
}

function verificarConflito(data, hora) {
  return orcamentos.some(o => o.data === data && o.hora === hora);
}

if (typeof module !== 'undefined') {
  module.exports = { calcularTotal, verificarConflito };
} 
