export function getColorName(hex: string): string {
  switch (hex.toUpperCase()) {
    case "#FF0000":
      return "Vermelho";
    case "#00FF00":
      return "Verde";
    case "#0000FF":
      return "Azul";
    case "#FFD700":
      return "Dourado";
    case "#C0C0C0":
      return "Prata";
    case "#8B4513":
      return "Marrom";
    case "#000000":
      return "Preto";
    case "#808080":
      return "Cinza";
    case "#DAA520":
      return "Dourado Escuro";
    case "#B22222":
      return "Vermelho Escuro";
    case "#2F4F4F":
      return "Cinza Escuro";
    case "#A9A9A9":
      return "Cinza Claro";
    default:
      return "não especificada";
  }
}
