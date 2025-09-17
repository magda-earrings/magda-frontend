export function getColorName(hex: string): string {
  switch (hex.toUpperCase()) {
    case "#350B4B":
      return "Roxo";
    case "#0A0B0B":
      return "Preto";
    case "#2E1D19":
      return "Marrom";
    case "#111B71":
      return "Azul";
    case "#1C351F":
      return "Verde";
    case "#A8350B":
      return "Laranja";
    case "#950B19":
      return "Vermelho";
    case "#AC0B5B":
      return "Rosa";
    case "#AA950B":
      return "Dourado";
    default:
      return "não especificada";
  }
}
