import { DATA } from "./data.js";
import {
  renderFolders,
  renderWorks,
  renderWorkPage,
  renderCharacters,
  renderUniverseIndex,
  renderCharacterDoc,
} from "./render.js";

// ---- Window UI state ----
const overlay = document.getElementById("overlay");
const content = document.getElementById("content");
const winTitle = document.getElementById("winTitle");
const backBtn = document.getElementById("backBtn");
const closeBtn = document.getElementById("closeBtn");
const startBtn = document.getElementById("startBtn");

let stack = [];

// ---- Browser UI state ----
const browserOverlay = document.getElementById("browserOverlay");
const browserContent = document.getElementById("browserContent");
const browserTitle = document.getElementById("browserTitle");
const browserBack = document.getElementById("browserBack");
const browserClose = document.getElementById("browserClose");

let browserStack = [];

function openBrowser(title, html){
  browserStack.push({ title, html });
  browserTitle.textContent = title;
  browserContent.innerHTML = html;
  browserBack.style.display = browserStack.length > 1 ? "inline-block" : "none";
  browserOverlay.classList.add("show");
  browserOverlay.setAttribute("aria-hidden","false");
}

function closeBrowser(){
  browserOverlay.classList.remove("show");
  browserOverlay.setAttribute("aria-hidden","true");
  browserStack = [];
}

browserClose.addEventListener("click", closeBrowser);
browserOverlay.addEventListener("click", (e)=>{
  if(e.target === browserOverlay) closeBrowser();
});
browserBack.addEventListener("click", ()=>{
  if(browserStack.length > 1){
    browserStack.pop();
    const top = browserStack[browserStack.length - 1];
    browserTitle.textContent = top.title;
    browserContent.innerHTML = top.html;
    browserBack.style.display = browserStack.length > 1 ? "inline-block" : "none";
  }
});

// ---- Window open/close ----
function openWindow(title, html, canBack){
  winTitle.textContent = title;
  content.innerHTML = html;
  backBtn.style.display = canBack ? "inline-block" : "none";
  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden","false");
}

function closeWindow(){
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden","true");
  stack = [];
}

// ---- Routing-like navigation ----
function go(view, payload={}){
  if(stack.length === 0) stack.push({view:null, payload:{}});
  stack.push({view, payload});
  renderTop();
}

function back(){
  if(stack.length > 2){
    stack.pop();
    renderTop();
  }
}

function renderTop(){
  const top = stack[stack.length-1];
  const canBack = stack.length > 2;

  if(top.view === "folders"){
    openWindow("Works", renderFolders(DATA), canBack);
  } else if(top.view === "works"){
    openWindow("Works", renderWorks(DATA, top.payload.folderId), canBack);
  } else if(top.view === "work"){
    openWindow("Work", renderWorkPage(DATA, top.payload.folderId, top.payload.workId), canBack);
  } else if(top.view === "Characters"){
    openWindow("Characters", renderCharacters(DATA, "active"), canBack);
  } else if(top.view === "Deleted"){
    openWindow("Deleted", renderCharacters(DATA, "deleted"), canBack);
  } else if(top.view === "Universe"){
    openWindow("Universe", renderUniverseIndex(DATA), canBack);
  } else if(top.view === "Gallery"){
    openWindow("Gallery", DATA.gallery, canBack);
  } else if(top.view === "Links"){
    openWindow("Links", DATA.links, canBack);
  } else if(top.view === "about"){
    openWindow("about", DATA.about, canBack);
  } else {
    openWindow("Works", renderFolders(DATA), canBack);
  }
}

// ---- Desktop icons ----
document.getElementById("desktop").addEventListener("click", (e)=>{
  const btn = e.target.closest("[data-open]");
  if(!btn) return;
  const which = btn.getAttribute("data-open");
  stack = [{view:null,payload:{}}];
  go(which === "folders" ? "folders" : which);
});

startBtn.addEventListener("click", ()=>{
  stack = [{view:null,payload:{}}];
  go("folders");
});

// ---- Window buttons ----
closeBtn.addEventListener("click", closeWindow);
overlay.addEventListener("click", (e)=>{ if(e.target === overlay) closeWindow(); });
backBtn.addEventListener("click", back);

// ---- Clicks inside window content ----
content.addEventListener("click", (e)=>{
  const uni = e.target.closest("[data-universe]");
  if(uni){
    e.preventDefault();
    const id = uni.getAttribute("data-universe");
    const html = (DATA.universeDocs && DATA.universeDocs[id]) || `<p style="color:var(--muted)">not found</p>`;
    openBrowser("Universe", html);
    return;
  }

  const charCard = e.target.closest("[data-char]");
  if(charCard){
    e.preventDefault();
    const charId = charCard.getAttribute("data-char");
    openBrowser("Character", renderCharacterDoc(DATA, charId));
    return;
  }

  const charFilter = e.target.closest("[data-char-filter]");
  if(charFilter){
    e.preventDefault();
    const f = charFilter.getAttribute("data-char-filter");
    go(f === "deleted" ? "Deleted" : "Characters");
    return;
  }

  const nav = e.target.closest("[data-nav]");
  if(nav){
    e.preventDefault();
    const to = nav.getAttribute("data-nav");
    if(to === "folders"){
      go("folders");
    } else if(to === "works"){
      go("works", {folderId: nav.getAttribute("data-folder")});
    } else if(to === "Characters"){
      go("Characters");
    }
    return;
  }

  const folderCard = e.target.closest("[data-folder][data-work]");
  if(folderCard){
    const folderId = folderCard.getAttribute("data-folder");
    const workId = folderCard.getAttribute("data-work");
    go("work", {folderId, workId});
    return;
  }

  const folderOnly = e.target.closest("[data-folder]:not([data-work])");
  if(folderOnly){
    const folderId = folderOnly.getAttribute("data-folder");
    go("works", {folderId});
  }
});

function tick(){
  const d = new Date();
  const hh = String(d.getHours()).padStart(2,"0");
  const mm = String(d.getMinutes()).padStart(2,"0");
  document.getElementById("clock").textContent = `${hh}:${mm}`;
}
tick(); setInterval(tick, 1000*10);
