export function escapeHtml(str){
  return String(str ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

export function renderFolders(DATA){
  const cards = DATA.folders.map(f => `
    <div class="card" data-folder="${f.id}">
      <h3>📁 ${escapeHtml(f.name)}</h3>
      <p>${escapeHtml(f.desc)}</p>
      <span class="tag">${escapeHtml(f.tag)}</span>
    </div>
  `).join("");

  return `
    <div class="crumb"><span>Desktop</span> › <b>Works</b></div>
    <div class="grid">${cards}</div>
  `;
}

export function renderWorks(DATA, folderId){
  const folder = DATA.folders.find(x => x.id === folderId);
  const works = (DATA.works[folderId] || []);

  const cards = works.length
    ? works.map(w => `
        <div class="card" data-work="${w.id}" data-folder="${folderId}">
          <h3>📄 ${escapeHtml(w.title)}</h3>
          <p>${escapeHtml(w.subtitle)} · <span style="opacity:.9">${escapeHtml(w.status)}</span></p>
          <span class="tag">open</span>
        </div>
      `).join("")
    : `<div class="card" style="cursor:default">
        <h3>비어 있음</h3>
        <p>여기에 작품을 추가하면 목록이 생김.</p>
      </div>`;

  return `
    <div class="crumb">
      <a href="#" data-nav="folders">Works</a> › <b>${escapeHtml(folder?.name || folderId)}</b>
    </div>
    <div class="grid">${cards}</div>
  `;
}

export function renderWorkPage(DATA, folderId, workId){
  const w = (DATA.works[folderId] || []).find(x => x.id === workId);
  if(!w) return `<p style="color:var(--muted)">not found</p>`;

  const links = (w.links||[]).map(l =>
    `<a href="${l.href}" ${l.href.startsWith("http") ? `target="_blank" rel="noreferrer"` : ""}>${escapeHtml(l.label)}</a>`
  ).join("");

  const cast = DATA.characters
    .filter(c => (c.work || "").trim() === (w.title || "").trim() && c.status === "active")
    .map(c => `<a href="#" class="pill" data-char="${c.id}">🧍 ${escapeHtml(c.name)}</a>`)
    .join("");

  return `
    <div class="crumb">
      <a href="#" data-nav="folders">Works</a> ›
      <a href="#" data-nav="works" data-folder="${folderId}">${escapeHtml((DATA.folders.find(x=>x.id===folderId)||{}).name||folderId)}</a>
      › <b>${escapeHtml(w.title)}</b>
    </div>

    <div class="work">
      <h2>${escapeHtml(w.title)}</h2>
      <div class="meta">${escapeHtml(w.subtitle)} · <span>${escapeHtml(w.status)}</span></div>
      <div class="box">${escapeHtml(w.body || "").replaceAll("\n","<br/>")}</div>

      ${cast ? `
        <div style="margin-top:12px; color:var(--muted); font-size:12px;">Cast</div>
        <div class="row" style="margin-top:8px;">${cast}</div>
      ` : ""}

      <div class="actions">${links || ""}</div>
    </div>
  `;
}

export function renderCharacters(DATA, filter="active"){
  const list = DATA.characters.filter(c => c.status === filter);

  const groups = {};
  for (const c of list){
    const key = c.work && c.work.trim() ? c.work.trim() : "단독/기타";
    (groups[key] ||= []).push(c);
  }

  const groupHtml = Object.entries(groups)
    .sort((a,b)=>a[0].localeCompare(b[0],"ko"))
    .map(([work, chars]) => {
      const cards = chars.map(c => `
        <div class="card" data-char="${c.id}">
          <h3>🧍 ${escapeHtml(c.name)}</h3>
          <p>${escapeHtml(work)}</p>
          <span class="tag">open</span>
        </div>
      `).join("");

      return `
        <div style="margin:6px 0 10px; color:var(--muted); font-size:12px;">
          <b style="color:var(--txt)">${escapeHtml(work)}</b> · ${chars.length}명
        </div>
        <div class="grid" style="margin-bottom:14px;">${cards}</div>
      `;
    }).join("");

  const label = filter === "deleted" ? "Deleted" : "Characters";

  return `
    <div class="crumb">
      <span>Desktop</span> › <b>${label}</b> ·
      <a href="#" data-char-filter="active">Active</a> /
      <a href="#" data-char-filter="deleted">Deleted</a>
    </div>
    ${groupHtml || `<div class="card" style="cursor:default"><h3>비어 있음</h3><p>아직 없음.</p></div>`}
  `;
}

export function renderCharacterDoc(DATA, charId){
  const c = DATA.characters.find(x => x.id === charId);
  if(!c) return `<p style="color:var(--muted)">not found</p>`;

  return `
    <div class="work">
      <h2>${escapeHtml(c.name)}</h2>
      <div class="meta">${escapeHtml(c.work || "단독/기타")} · <span>${escapeHtml(c.status)}</span></div>

      <div class="box">
        <b>Profile</b><br/>
        (키/나이/성격/관계 등)<br/><br/>
        <b>Notes</b><br/>
        (메모)<br/><br/>
        <b>Links</b><br/>
        (관련 작품/세계관 링크)
      </div>
    </div>
  `;
}

export function renderUniverseIndex(DATA){
  const cards = (DATA.universeIndex || []).map(u => `
    <div class="card" data-universe="${u.id}">
      <h3>📌 ${escapeHtml(u.title)}</h3>
      <p>${escapeHtml(u.desc)}</p>
      <span class="tag">open</span>
    </div>
  `).join("");

  return `
    <div class="crumb"><span>Desktop</span> › <b>Universe</b></div>
    <div class="grid">${cards}</div>
  `;
}
