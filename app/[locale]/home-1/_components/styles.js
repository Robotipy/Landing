// Estilos propios de /home-1: portada editorial clara. Se inyectan con un
// <style> desde page.js y quedan acotados a la clase .home1 del <main>.
// #039695 (acento) solo va en el trazo del método, el foco y la selección:
// en texto no pasa AA. Enlaces y botón principal usan #027877 (5,3:1 sobre
// blanco y 4,8:1 sobre #F4F3EF).
export const home1Css = `
.home1{--h1-paper:#FFFFFF;--h1-band:#F4F3EF;--h1-ink:#0A2540;--h1-navy:#00182B;--h1-muted:rgba(10,37,64,.72);--h1-rule:rgba(0,24,43,.12);--h1-rule-strong:rgba(0,24,43,.22);--h1-accent:#039695;--h1-link:#027877;background:var(--h1-paper);color:var(--h1-ink);color-scheme:light;font-size:16px;line-height:1.6}
.home1 ::selection{background:rgba(3,150,149,.22)}
.home1 :focus-visible{outline:2px solid var(--h1-accent);outline-offset:3px;border-radius:2px}
.home1 .h1-dark :focus-visible{outline-color:#FFFFFF}
.home1 .h1-dark ::selection{background:rgba(255,255,255,.25)}
.h1-serif{font-family:var(--font-home1-serif),Georgia,"Times New Roman",serif}
.h1-num{font-variant-numeric:tabular-nums lining-nums}
.h1-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,"Liberation Mono",monospace}
.h1-caps{font-size:12px;line-height:16px;letter-spacing:.14em;text-transform:uppercase;font-weight:600}
.h1-navy{color:var(--h1-navy)}
.h1-muted{color:var(--h1-muted)}
.h1-paper{background:var(--h1-paper)}
.h1-band{background:var(--h1-band)}
.h1-rule{border-color:var(--h1-rule)}
.h1-rule-strong{border-color:var(--h1-rule-strong)}
.h1-ink-rule{border-color:var(--h1-navy)}
.h1-link{color:var(--h1-link);text-decoration-line:underline;text-decoration-color:transparent;text-decoration-thickness:1px;text-underline-offset:3px;transition:text-decoration-color .15s ease}
.h1-link:hover{text-decoration-color:currentColor}
.h1-link-inline{color:var(--h1-link);text-decoration-line:underline;text-decoration-thickness:1px;text-underline-offset:3px}
.h1-link-inline:hover{text-decoration-thickness:2px}
.h1-title-link{color:var(--h1-navy);text-decoration-line:underline;text-decoration-color:transparent;text-decoration-thickness:1px;text-underline-offset:4px;transition:text-decoration-color .15s ease}
.h1-title-link:hover{text-decoration-color:currentColor}
.h1-link-light{color:#FFFFFF;text-decoration-line:underline;text-decoration-thickness:1px;text-underline-offset:3px}
.h1-link-light:hover{text-decoration-thickness:2px}
.h1-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:12px 22px;border-radius:4px;font-size:16px;line-height:24px;font-weight:600;text-align:center;transition:background-color .15s ease,color .15s ease,border-color .15s ease}
.h1-btn-primary{background:var(--h1-link);border:1px solid var(--h1-link);color:#FFFFFF}
.h1-btn-primary:hover{background:var(--h1-navy);border-color:var(--h1-navy)}
.h1-btn-secondary{background:transparent;border:1px solid var(--h1-navy);color:var(--h1-navy)}
.h1-btn-secondary:hover{background:var(--h1-navy);color:#FFFFFF}
.h1-btn-light{background:#FFFFFF;border:1px solid #FFFFFF;color:var(--h1-navy)}
.h1-btn-light:hover{background:transparent;color:#FFFFFF}
.h1-textbtn{display:inline-flex;align-items:center;min-height:40px;font-weight:600;color:var(--h1-navy);text-decoration-line:underline;text-decoration-thickness:1px;text-underline-offset:4px;transition:color .15s ease}
.h1-textbtn:hover{color:var(--h1-link);text-decoration-thickness:2px}
.h1-chip{display:inline-flex;align-items:center;max-width:100%;border:1px solid var(--h1-rule-strong);background:#FFFFFF;border-radius:2px;padding:2px 8px;font-size:13px;line-height:20px;color:var(--h1-ink);overflow-wrap:anywhere}
.h1-faq summary{list-style:none;cursor:pointer}
.h1-faq summary::-webkit-details-marker{display:none}
.h1-plus{position:relative;width:14px;height:14px;flex:none;margin-top:6px}
.h1-plus::before,.h1-plus::after{content:"";position:absolute;left:0;top:6px;width:14px;height:1.5px;background:var(--h1-navy);transition:transform .2s ease}
.h1-plus::after{transform:rotate(90deg)}
.h1-faq details[open] .h1-plus::after{transform:rotate(0deg)}
.h1-faq summary:hover .h1-q{color:var(--h1-link)}
`;
