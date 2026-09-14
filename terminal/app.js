const links = {
  portfolio: 'https://danish-portfolio-khaki.vercel.app/',
  github: 'https://github.com/Daniishhhhh',
  linkedin: 'https://www.linkedin.com/in/danish-sidiq-rather-b91b931bb',
  email: 'mailto:danishsidiqrather@gmail.com'
};
const projects = [
  ['Swasthya Setu AI', 'FastAPI + Azure OpenAI + ChromaDB assistant with emergency-response safeguards.', 'https://github.com/Daniishhhhh/healthcare-ai-assistant'],
  ['NutriGuard Pro', 'Applied AI and full-stack nutrition/compliance project.', 'https://github.com/Daniishhhhh/NutriGuard-Pro'],
  ['AI IPS', 'Network-security intrusion detection and prevention experimentation.', 'https://github.com/Daniishhhhh/AI-IPS'],
  ['Enterprise Auth System', 'Authentication and authorization patterns with JWT and RBAC.', 'https://github.com/Daniishhhhh/enterprise-auth-system'],
  ['AI Newsletter Agent', 'n8n workflow for AI-news collection, summarization, and delivery.', 'https://github.com/Daniishhhhh/ai-newsletter-agent']
];
const output = document.querySelector('#output');
const input = document.querySelector('#command');
const form = document.querySelector('#terminal-form');
const escape = value => value.replace(/[&<>"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));
function write(html) { const line = document.createElement('div'); line.className = 'line'; line.innerHTML = html; output.append(line); output.scrollTop = output.scrollHeight; }
function commandLine(value) { write(`<span class="command">$ <span>${escape(value)}</span></span>`); }
function anchor(url, label) { return `<a class="link" href="${url}" target="_blank" rel="noreferrer">${label} ↗</a>`; }
function run(raw) {
  const cmd = raw.trim().toLowerCase(); if (!cmd) return;
  commandLine(raw); input.value = '';
  if (cmd === 'clear') { output.replaceChildren(); return; }
  if (cmd === 'help') write('<span class="accent">Available commands</span>\nwhoami — identity\nfocus — engineering focus\nprojects — selected work\nstack — technical toolkit\nportfolio | github | linkedin | contact — open a link\nclear — reset this session');
  else if (cmd === 'whoami') write('Danish Sidiq Rather\n<span class="muted">Computer Science undergraduate building practical AI-assisted applications.</span>');
  else if (cmd === 'focus') write('AI/LLM · RAG · backend engineering · secure application design\n<span class="muted">Exploring responsible healthcare AI, AI agents, and network-security tooling.</span>');
  else if (cmd === 'projects') projects.forEach(([name, description, url]) => write(`<span class="project"><strong>${name}</strong>\n${description}\n${anchor(url, 'repository')}</span>`));
  else if (cmd === 'stack') write('AI / LLM: Azure OpenAI, RAG, ChromaDB, embeddings\nBackend: Python, FastAPI, Java, Spring Security, JWT, RBAC\nAutomation: n8n, API integrations\nSecurity: Scapy, intrusion detection\nWeb: JavaScript, HTML/CSS, React/Next.js (project-dependent)');
  else if (cmd === 'portfolio' || cmd === 'github' || cmd === 'linkedin') write(anchor(links[cmd], `open ${cmd}`));
  else if (cmd === 'contact' || cmd === 'email') write(anchor(links.email, 'email Danish'));
  else write(`command not found: <span class="accent">${escape(raw)}</span>\n<span class="muted">Try “help”.</span>`);
}
form.addEventListener('submit', event => { event.preventDefault(); run(input.value); });
document.querySelectorAll('[data-command]').forEach(button => button.addEventListener('click', () => { run(button.dataset.command); input.focus(); }));
write('<span class="accent">Developer directory v1.0</span>\n<span class="muted">A small, inspectable interface for navigating this profile. Type “help” to begin.</span>');
