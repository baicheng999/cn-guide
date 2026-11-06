/* ============================================================
   China Guide — UI dictionary loader (ja / fr / ko / de / vi / ru / ms / th)

   Each language lives in assets/js/i18n/<lang>.js and is fetched only
   when a visitor actually switches to it. This keeps the first paint
   light (~1 KB here) instead of downloading all eight dictionaries.
   Dictionaries are attached to window.CLA_I18N_EXTRA, which main.js
   merges onto the English baseline.
   ============================================================ */
(function () {
  "use strict";
  var EXTRA = window.CLA_I18N_EXTRA = window.CLA_I18N_EXTRA || {};
  var ready = window.CLA_I18N_READY = {};
  var queues = {};
  var AVAILABLE = { ja: 1, fr: 1, ko: 1, de: 1, vi: 1, ru: 1, ms: 1, th: 1 };

  function finish(lg) {
    ready[lg] = true;
    var q = queues[lg] || [];
    delete queues[lg];
    q.forEach(function (fn) { try { fn(); } catch (e) {} });
  }

  window.CLA_LOAD_LANG = function (lg, cb) {
    if (!AVAILABLE[lg]) { if (cb) cb(); return; }
    if (ready[lg]) { if (cb) cb(); return; }
    if (cb) (queues[lg] = queues[lg] || []).push(cb);
    if (queues[lg] && queues[lg].length > 1) return;   // already in flight
    var s = document.createElement("script");
    s.src = "assets/js/i18n/" + lg + ".js";
    s.async = true;
    s.onload = function () { finish(lg); };
    /* Network failure: mark as ready so we fall back to the English
       baseline instead of looping or leaving the UI stuck. */
    s.onerror = function () { finish(lg); };
    document.head.appendChild(s);
  };
})();
