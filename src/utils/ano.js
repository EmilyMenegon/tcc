export const ANO_MINIMO = 2026;

const CAMPOS_PADRAO = ["ano", "criado_em", "created_at", "createdAt"];

// Pega o ano direto do texto ("2026-05-10", "2026-05-10 14:30:00", 2026),
// sem usar new Date(), para não errar perto da virada do ano por causa do fuso.
//
// Para eventos, passe os campos de data do evento:
//   descobrirAno(evento, ["data", "data_evento"])
export function descobrirAno(item, campos = CAMPOS_PADRAO) {
  for (const campo of campos) {
    const valor = item?.[campo];

    if (valor === undefined || valor === null || valor === "") continue;

    const ano = Number(String(valor).slice(0, 4));

    if (ano >= 2000 && ano <= 2100) return ano;
  }

  return ANO_MINIMO;
}