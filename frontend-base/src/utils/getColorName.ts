export function getColorName(hex: string): string {
  switch (hex.toUpperCase()) {
    case "#350B4B":
      return "Roxo Escuro";
    case "#0A0B0B":
      return "Preto Profundo";
    case "#2E1D19":
      return "Marrom Escuro";
    case "#111B71":
      return "Azul Marinho";
    case "#1C351F":
      return "Verde Floresta";
    case "#A8350B":
      return "Laranja Escuro";
    case "#950B19":
      return "Vermelho Escuro";
    case "#AC0B5B":
      return "Magenta Escuro";
    case "#AA950B":
      return "Dourado Sujo";
    default:
      return "não especificada";
  }
}
