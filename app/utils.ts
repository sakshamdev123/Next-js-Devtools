export function getHtmlTags(element: HTMLElement): [HTMLElement, string][] {
  const result: [HTMLElement, string][] = [];

  function traverse(node: Node) {
    if (node instanceof HTMLElement && node.childNodes.length === 1) {
      result.push([node, node.outerHTML]);
    }
    node.childNodes.forEach((child) => traverse(child));
  }

  traverse(element);
  return result;
}

export function changeColor(i: number, content: [HTMLElement, string][]) {
  const element = document.getElementById(i.toString());
  element?.style.setProperty("background", "indigo");
  content[i][0].style.setProperty("background", "indigo");
  content[i][0].classList.add("outline-blue-500");
}

export function resetColor(i: number, content: [HTMLElement, string][]) {
  const element = document.getElementById(i.toString());
  element?.style.removeProperty("background");
  content[i][0].removeAttribute("style");
  content[i][0].removeAttribute("class");
}

export function handlechange(i: number, content: [HTMLElement, string][]) {
  const element = document.getElementById(i.toString());
  const inner = element?.innerHTML?.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  if (element) {
    element.innerHTML = `<input type='text' placeholder="  Write here..." required /><button>Submit</button>`;
    const input = document.querySelector("input");
    const button = document.querySelector("button");
    input?.style.setProperty("color", "black");
    input?.style.setProperty("width", "85%");
    input?.style.setProperty("height", "50px");
    button?.style.setProperty("width", "60px");
    button?.addEventListener("click", () => {
      element.innerHTML = input?.value || inner || "";
      content[i][0].innerHTML = element.innerHTML;
    });
  }
}
