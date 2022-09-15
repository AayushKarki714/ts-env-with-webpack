import add from "./add";
import subtract from "./subtract";
import "./styles/main.css";

const computation = add(subtract(10, 5), 11);
const root = document.createElement("div");
const heading = document.createElement("h1");
heading.textContent = computation + "";
root.appendChild(heading);
document.body.appendChild(root);
