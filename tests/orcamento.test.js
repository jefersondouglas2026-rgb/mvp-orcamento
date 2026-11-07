const { calcularTotal, verificarConflito } = require('../src/orcamento.js');
test('calcula total com 10%', () => { expect(calcularTotal(300)).toBe(330); });
test('detecta conflito', () => { expect(verificarConflito('2026-11-08', '10:00')).toBe(true); });
test('sem conflito', () => { expect(verificarConflito('2026-11-08', '11:00')).toBe(false); }); 
