// Badge commun à tous les projets : retour vers le journal de l'expérience.
// C'est aussi l'endroit unique où brancher les statistiques de visite.
(() => {
  const number = document.currentScript.dataset.n;

  const style = document.createElement('style');
  style.textContent = `
    .cb-badge {
      position: fixed; right: 12px; bottom: 12px; z-index: 9999;
      font: 600 12px/1 system-ui, -apple-system, "Segoe UI", sans-serif;
      padding: 8px 12px; border-radius: 999px; text-decoration: none;
      background: rgba(22, 21, 19, .88); color: #f3efe6;
      box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
    }
    .cb-badge:hover { background: #161513; }
    @media print { .cb-badge { display: none; } }
  `;
  document.head.append(style);

  const link = document.createElement('a');
  link.className = 'cb-badge';
  link.href = '../';
  link.textContent = number ? `✦ Carte blanche · N°${number}` : '✦ Carte blanche';
  document.body.append(link);
})();
