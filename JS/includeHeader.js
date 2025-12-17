document.addEventListener('DOMContentLoaded', async () => {
  const holder = document.getElementById('site-header');
  if (!holder) return;
  try {
    const res = await fetch(new URL('header.html', window.location.href));
    if (!res.ok) throw new Error('Header not found');
    const html = await res.text();
    holder.innerHTML = html;
    // Load helper scripts needed for header behaviors (categories, search)
    function loadScript(src) {
      return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = new URL(src, window.location.href).href;
        s.onload = resolve;
        s.onerror = reject;
        document.body.appendChild(s);
      });
    }

    try {
      await loadScript('JS/config.js');
      await loadScript('JS/api.js');
      await loadScript('JS/categorias.js');
      await loadScript('JS/search.js');
      await loadScript('JS/account.js');
    } catch (err) {
      console.warn('Could not load header helper scripts:', err);
    }
    window.dispatchEvent(new Event('header-included'));
  } catch (e) {
    console.error('Error loading header:', e);
    const holder = document.getElementById('site-header');
    if (holder) holder.innerHTML = '<div style="padding:16px;color:#b91c1c;">Error cargando la cabecera: ' + e.message + '</div>';
  }
});