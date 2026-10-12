// Estilos propios de /landing-1: tema claro fijo de informe. Se inyectan con
// un <style> desde page.js y quedan acotados a la clase .lp1.
export const lp1Css = `
body{background-color:#F7F7F5!important}
#zsiq_float{display:none!important}
.lp1{--lp1-bg:#F7F7F5;--lp1-surface:#FFFFFF;--lp1-ink:#00182B;--lp1-ink-muted:rgba(0,24,43,.72);--lp1-rule:rgba(0,24,43,.12);--lp1-accent:#039695;--lp1-error:#B42318;background:var(--lp1-bg);color:var(--lp1-ink);color-scheme:light}
.lp1 ::selection{background:rgba(3,150,149,.22)}
.lp1 :focus-visible{outline:2px solid var(--lp1-accent);outline-offset:2px}
.lp1-serif{font-family:var(--font-lp1-serif),Georgia,"Times New Roman",serif}
.lp1-num{font-variant-numeric:tabular-nums lining-nums}
.lp1-muted{color:var(--lp1-ink-muted)}
.lp1-accent{color:var(--lp1-accent)}
.lp1-rule{border-color:var(--lp1-rule)}
.lp1-surface{background:var(--lp1-surface)}
.lp1-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
.lp1-eyebrow{font-size:13px;line-height:20px;letter-spacing:.08em;text-transform:uppercase;font-weight:600}
.lp1-link{color:var(--lp1-ink);text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px}
.lp1-link:hover{text-decoration-thickness:2px}
.lp1-cta{display:inline-flex;align-items:center;justify-content:center;text-align:center;background:var(--lp1-accent);color:var(--lp1-ink);font-weight:700;border-radius:6px;transition:background-color .15s ease,color .15s ease}
.lp1-cta:hover{background:var(--lp1-ink);color:#FFFFFF}
.lp1-cta[aria-disabled="true"]{opacity:.7;cursor:progress}
.lp1-square{display:inline-block;width:6px;height:6px;background:var(--lp1-accent);flex:none}
.lp1-faq summary{list-style:none;cursor:pointer}
.lp1-faq summary::-webkit-details-marker{display:none}
.lp1-plus{position:relative;width:16px;height:16px;flex:none;margin-top:6px}
.lp1-plus::before,.lp1-plus::after{content:"";position:absolute;left:0;top:7px;width:16px;height:2px;background:var(--lp1-ink);transition:transform .2s ease}
.lp1-plus::after{transform:rotate(90deg)}
.lp1-faq details[open] .lp1-plus::after{transform:rotate(0deg)}
.lp1-gobernar{clip-path:polygon(0 0,calc(100% - 14px) 0,100% 50%,calc(100% - 14px) 100%,0 100%)}
`;
