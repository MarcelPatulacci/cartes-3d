/* Intégration de la carte 3D ANTEMIC dans un site tiers.
   <div data-antemic-carte="orcines" data-height="640"></div>
   <script src="https://VOTRE-HEBERGEMENT/embed.js" defer></script>
   Variante sans script : <iframe src="https://VOTRE-HEBERGEMENT/?c=orcines" ...></iframe> */
(function () {
  var base = (document.currentScript && document.currentScript.src || '').replace(/embed\.js(\?.*)?$/, '');
  document.querySelectorAll('[data-antemic-carte]').forEach(function (el) {
    if (el.dataset.ready) return; el.dataset.ready = '1';
    var f = document.createElement('iframe');
    f.src = base + '?c=' + encodeURIComponent(el.dataset.antemicCarte) + (el.dataset.ui ? '&ui=' + el.dataset.ui : '');
    f.title = el.dataset.title || 'Carte 3D interactive de la commune';
    f.loading = 'lazy'; f.allow = 'geolocation; fullscreen'; f.allowFullscreen = true;
    f.style.cssText = 'display:block;width:100%;border:0;border-radius:' + (el.dataset.radius || '12') + 'px;height:' + (el.dataset.height || '640') + 'px;max-height:90vh';
    el.appendChild(f);
  });
})();
