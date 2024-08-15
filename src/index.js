import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

console.log("hello");

document.querySelector("button#homeBtn").addEventListener('click', home);
document.querySelector("button#menuBtn").addEventListener('click', menu);
document.querySelector("button#aboutBtn").addEventListener('click', about);

home();