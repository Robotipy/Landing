// Estilos propios de /home-2 (panel técnico oscuro). Se inyectan con un
// <style> desde page.js y quedan acotados a la clase .h2, que envuelve main.
// Contraste medido: muted sobre bg 7,3:1 y sobre surface 6,4:1; acento sobre
// bg 5,0:1. Sobre surface el acento no llega a AA en texto chico, por eso los
// enlaces van en --h2-text con subrayado en acento.
export const h2Css = `
.h2{--h2-bg:#00182B;--h2-surface:#03253D;--h2-line:rgba(255,255,255,0.08);--h2-line-strong:rgba(255,255,255,0.16);--h2-accent:rgb(3,150,149);--h2-accent-soft:rgba(3,150,149,0.15);--h2-text:#E6F1F5;--h2-muted:#8FA9B8;background-color:var(--h2-bg);color:var(--h2-text);color-scheme:dark}
.h2 ::selection{background:rgba(3,150,149,0.35);color:#fff}
.h2 :focus-visible{outline:2px solid var(--h2-accent);outline-offset:2px;border-radius:4px}
.h2-text{color:var(--h2-text)}
.h2-muted{color:var(--h2-muted)}
.h2-accent{color:var(--h2-accent)}
.h2-bg{background-color:var(--h2-bg)}
.h2-surface{background-color:var(--h2-surface)}
.h2-line{border-color:var(--h2-line)}
.h2-line-strong{border-color:var(--h2-line-strong)}
.h2-divide>*+*{border-color:var(--h2-line)}
.h2-mono{font-family:var(--font-h2-mono),ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
.h2-num{font-variant-numeric:tabular-nums}
.h2-eyebrow{font-family:var(--font-h2-mono),ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12px;line-height:16px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--h2-muted)}
.h2-chip{display:inline-flex;align-items:center;border-radius:4px;background:var(--h2-accent-soft);color:var(--h2-text);font-family:var(--font-h2-mono),ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:11px;line-height:14px;padding:4px 7px}
.h2-link{color:var(--h2-text);text-decoration-line:underline;text-decoration-color:var(--h2-accent);text-decoration-thickness:1px;text-underline-offset:4px;transition:color .15s ease,text-decoration-color .15s ease}
.h2-link:hover{color:#fff;text-decoration-color:#fff}
.h2-card{border:1px solid var(--h2-line);border-radius:8px;background:var(--h2-surface);transition:border-color .15s ease,background-color .15s ease}
a.h2-card:hover,.h2-card-hover:hover{border-color:rgba(3,150,149,0.6)}
.h2-grid{background-image:linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.04) 1px,transparent 1px);background-size:64px 64px;background-position:-1px -1px}
.h2-vtext{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}
.h2-dot{display:block;width:10px;height:10px;border-radius:9999px;flex:none}
.h2-dot-on{background:var(--h2-accent);box-shadow:0 0 0 0 rgba(3,150,149,0);transition:box-shadow .15s ease,background-color .15s ease}
.h2-dot-off{border:1px solid var(--h2-muted);opacity:.55}
.h2-cell:hover .h2-dot-on,.h2-cell:focus-visible .h2-dot-on{box-shadow:0 0 0 4px rgba(3,150,149,0.28);background:#14b8b6}
.h2-head-on{color:#fff!important;text-decoration-color:var(--h2-accent)!important}
.h2 details>summary{list-style:none;cursor:pointer}
.h2 details>summary::-webkit-details-marker{display:none}
.h2-chev{transition:transform .2s ease}
.h2 details[open]>summary .h2-chev{transform:rotate(180deg)}
.h2-select{appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%238FA9B8' stroke-width='1.8'%3E%3Cpath d='M5 7.5l5 5 5-5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;background-size:18px 18px}
.h2-select option{background:#03253D;color:#E6F1F5}
.h2-tab[aria-selected="true"]{color:#fff;border-color:var(--h2-accent);background:rgba(3,150,149,0.08)}
.h2-tab[aria-selected="true"] .h2-tab-count{color:var(--h2-text)}
@media (prefers-reduced-motion:reduce){.h2 *,.h2 *::before,.h2 *::after{transition:none!important;scroll-behavior:auto!important}}
`;
