export function languageColor(language: string) {
  /* As cores oficiais das 10 linguagens mais usadas no Github em 2022,
  mais linguagens poderiam ser adicionadas no futuro*/
  switch (language) {
    case "JavaScript":
      return { background: "#f1e05a", font: "black" };
    case "Python":
      return { background: "#3572A5", font: "white" };
    case "Java":
      return { background: "#B07219", font: "white" };
    case "TypeScript":
      return { background: "#3178C6", font: "white" };
    case "C#":
      return { background: "#178600", font: "white" };
    case "C++":
      return { background: "#F34B7D", font: "white" };
    case "PHP":
      return { background: "#4F5D95", font: "white" };
    case "Shell":
      return { background: "#89E051", font: "black" };
    case "C":
      return { background: "#555555", font: "white" };
    case "Ruby":
      return { background: "#701516", font: "white" };
    default:
      return { background: "#A05EC9", font: "white" };
  }
}
