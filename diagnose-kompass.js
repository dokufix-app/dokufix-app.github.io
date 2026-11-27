/* Doku-Fix · Diagnose-Kompass (Entwurf)
   ICD-Code oder Diagnose eingeben → kurzer Abriss, Ziele, Vorgehen in Brunos Reihenfolge
   (Detonisierung → Mobilisation → aktive Übungen → Beratung) und ein Kurztext für die Doku.
   Grundlage: eigene Kompass-Einträge (DK_DATEN) und die Wissenskarten der App (Fb).
   Keine Patientendaten: gemerkt werden nur die zuletzt nachgeschlagenen Diagnosen. */
(function () {
  'use strict';
  var KEY_ZULETZT = 'doku-fix-kompass-zuletzt';
  var KEY_WAHL = 'doku-fix-kompass-wahl';
  var STATIONEN = [
    ['deton', 'Detonisierung', 'Weichteile und Tonus'],
    ['mobi', 'Mobilisation', 'Gelenke und Gleitfähigkeit'],
    ['aktiv', 'Aktive Übungen', 'Kraft, Kontrolle, Alltag'],
    ['berat', 'Beratung und Hilfsmittel', 'Entlastung, Heimprogramm']
  ];
  var SEITEN = [['re', 're.'], ['li', 'li.'], ['bds', 'bds.'], ['', 'ohne']];

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function speicher() { return window.TRESOR || window.localStorage; }
  function lesen(k, d) { try { var v = speicher().getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function schreiben(k, v) { try { speicher().setItem(k, JSON.stringify(v)); } catch (e) { } }
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ß/g, 'ss'); }

  /* ---------- Katalog: eigene Einträge + Wissenskarten + ICD-Liste ---------- */
  function karten() { try { return typeof Fb !== 'undefined' ? Fb : []; } catch (e) { return []; } }
  function icdListe() {
    if (icdListe.c) return icdListe.c;
    var out = [];
    try { var k = (typeof Gc !== 'undefined' && Gc.kodes) || {}; Object.keys(k).forEach(function (c) { out.push({ code: c, titel: k[c][0] }); }); } catch (e) { }
    return (icdListe.c = out);
  }
  function eintraege() { return window.DK_DATEN || []; }
  function eintragFuerCode(code) {
    var c = String(code || '').toUpperCase();
    return eintraege().filter(function (e) { return (e.icd || []).some(function (x) { return c === x || c.indexOf(x + '.') === 0 || (x.length === 3 && c.indexOf(x) === 0); }); });
  }
  function karteFuerCode(code) {
    var c = String(code || '').toUpperCase();
    return karten().filter(function (k) { return (k.icd10 || []).some(function (x) { return c === x || c.indexOf(x) === 0; }); });
  }

  function suchen(q) {
    var n = norm(q).trim(); if (n.length < 2) return [];
    var treffer = [], gesehen = {};
    function dazu(t) { if (gesehen[t.schluessel]) return; gesehen[t.schluessel] = 1; treffer.push(t); }
    var istCode = /^[a-z]\d/.test(n);
    eintraege().forEach(function (e) {
      var hit = (e.icd || []).some(function (x) { return norm(x).indexOf(n) === 0; }) || norm(e.titel).indexOf(n) >= 0 || (e.stichworte || []).some(function (w) { return norm(w).indexOf(n) >= 0; });
      if (hit) dazu({ schluessel: 'e:' + e.id, art: 'kompass', code: e.icd[0], titel: e.titel, id: e.id, punkte: 9 });
    });
    var ersetzt = {}; eintraege().forEach(function (e) { if (e.karte) ersetzt[e.karte] = 1; });
    karten().forEach(function (k) {
      if (ersetzt[k.id]) return;
      var hit = (k.icd10 || []).some(function (x) { return norm(x).indexOf(n) === 0; }) || norm(k.titel).indexOf(n) >= 0 || (k.stichworte || []).some(function (w) { return norm(w).indexOf(n) >= 0; });
      if (hit) dazu({ schluessel: 'k:' + k.id, art: 'karte', code: (k.icd10 || [])[0] || '', titel: k.titel, id: k.id, punkte: 7 });
    });
    icdListe().forEach(function (i) {
      var hit = istCode ? norm(i.code).indexOf(n) === 0 : norm(i.titel).indexOf(n) >= 0;
      if (!hit) return;
      if (treffer.some(function (t) { return t.code === i.code; })) return;
      var hat = eintragFuerCode(i.code).length || karteFuerCode(i.code).length;
      dazu({ schluessel: 'i:' + i.code, art: hat ? 'icd+' : 'icd', code: i.code, titel: i.titel, punkte: hat ? 6 : 3 });
    });
    return treffer.sort(function (a, b) { return b.punkte - a.punkte; }).slice(0, 8);
  }

  /* ---------- Wissenskarte automatisch in die Kompass-Form bringen ---------- */
  function abschnitt(k, re) { var a = (k.abschnitte || []).find(function (x) { return re.test(x.titel); }); return a ? a.text : ''; }
  function zeilen(t) { return String(t || '').replace(/\*\*/g, '').split(/\n+/).map(function (z) { return z.replace(/^\s*[-•]\s*/, '').trim(); }).filter(Boolean); }
  function saetze(t) { return String(t || '').split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ0-9])/).map(function (s) { return s.trim(); }).filter(Boolean); }
  function ohneQuelle(t) { return t.replace(/\s*\((Q\d+[^)]*)\)/g, '').replace(/\s*\(Q\d+\)/g, '').replace(/\s+/g, ' ').trim(); }
  function sortieren(z) {
    var n = norm(z);
    if (/detonis|weichteil|massage|querfriktion|triggerpunkt|myofasz|tonus|faszientechnik/.test(n)) return 'deton';
    if (/mobilis|traktion|manuelle therapie|gelenkspiel|dehn|beweglichkeit|rom\b/.test(n)) return 'mobi';
    if (/aufklar|beratung|edukation|einlage|tape|taping|schuh|orthese|belastungssteuer|heimprogramm|gewicht|stosswelle|arztlich|operat|op\b|kortison|injektion/.test(n)) return 'berat';
    if (/kraft|ubung|training|heben|stabil|koordination|gleichgewicht|gang|fersen|exzentr|isometr|ausdauer|short foot|zehenspreiz/.test(n)) return 'aktiv';
    return null;
  }
  function ausKarte(k) {
    var kurz = saetze(ohneQuelle(abschnitt(k, /^Kurz$/))).slice(0, 4);
    var zielT = abschnitt(k, /Ziele/);
    var ziele = (zeilen(zielT).length > 1 ? zeilen(zielT) : zielT.replace(/\.$/, '').split(/,\s*|;\s*/)).map(function (z) { return ohneQuelle(z).replace(/\.$/, ''); }).filter(Boolean).slice(0, 6);
    var strang = { deton: [], mobi: [], aktiv: [], berat: [] };
    zeilen(abschnitt(k, /^Durchführung/)).concat(zeilen(abschnitt(k, /^Therapieplanung/))).forEach(function (z) {
      var t = ohneQuelle(z); if (/^(nicht empfohlen|hohe reizbarkeit|niedrige reizbarkeit)|kernbehandlung|abklären|\bbis \d+\/10|empfehlungsgrad|nicht besser|bringen .* wenig/i.test(t)) return; var s = sortieren(t); if (!s) return;
      if (strang[s].some(function (m) { return m.t === t; })) return;
      if (strang[s].length < 5) strang[s].push({ t: t.split(':')[0].length < 50 && t.indexOf(':') > 0 ? t.split(':')[0] : t, info: t.indexOf(':') > 0 ? t.slice(t.indexOf(':') + 1).trim() : '', doku: '', an: strang[s].length < 2 });
    });
    var nicht = saetze(ohneQuelle(abschnitt(k, /Nicht empfohlen/)));
    var warn = abschnitt(k, /Warnzeichen/);
    return {
      id: 'k:' + k.id, titel: k.titel, kurzTitel: k.titel.replace(/\s*\(.*\)$/, ''), icd: k.icd10 || [], bereich: k.bereich,
      status: k.status || 'Entwurf', geprueft: !!k.geprueft, auto: true,
      abriss: kurz, ziele: ziele.map(function (z, i) { return { t: z, an: i < 3 }; }), strang: strang,
      vorsicht: nicht, warn: warn ? [ohneQuelle(warn)] : [], aerztlich: [],
      quellen: Object.keys(k.quellenKurz || {}).map(function (q) { return { k: q, t: k.quellenKurz[q] }; })
    };
  }
  function laden(art, id) {
    if (art === 'kompass') return eintraege().find(function (e) { return e.id === id; });
    if (art === 'karte') { var k = karten().find(function (x) { return x.id === id; }); return k ? ausKarte(k) : null; }
    return null;
  }

  /* ---------- Kurztext ---------- */
  function liste(a) { if (!a.length) return ''; if (a.length === 1) return a[0]; return a.slice(0, -1).join(', ') + ' und ' + a[a.length - 1]; }
  function dokuVon(m) { return m.doku || m.t; }
  function kurztext(E, w) {
    var seite = { re: ' re.', li: ' li.', bds: ' bds.' }[w.seite] || '';
    var ziele = E.ziele.filter(function (z, i) { return w.ziele[i]; }).map(function (z) { return z.doku || z.t; });
    var teile = STATIONEN.map(function (s) {
      var m = (E.strang[s[0]] || []).filter(function (x, i) { return w.m[s[0] + i]; }).map(dokuVon);
      return m.length ? { name: (E.stationen && E.stationen[s[0]] || [s[1]])[0], m: m } : null;
    }).filter(Boolean);
    var diag = (E.dokuDiagnose || E.kurzTitel || E.titel) + seite;
    if (w.modus === 'einheit') {
      var alleM = []; teile.forEach(function (t) { alleM = alleM.concat(t.m); });
      return 'Pat. mit ' + diag + ' berichtet […], NRS […]/10. Th.: ' + (alleM.length ? liste(alleM) : '[…]') + '. […vorher → nachher…]. Reaktion: […]. HA: […].';
    }
    if (w.modus === 'lang') {
      var z = ['Diagnose: ' + diag + (E.icd && E.icd[0] ? ' (' + E.icd[0] + ')' : '') + '.'];
      if (E.befundSatz) z.push(E.befundSatz);
      if (ziele.length) z.push('Ziele: ' + liste(ziele) + '.');
      teile.forEach(function (t) { z.push(t.name + ': ' + liste(t.m) + '.'); });
      if (E.dokuHinweis) z.push(E.dokuHinweis);
      return z.join('\n');
    }
    var s = 'Pat. mit ' + diag + '.';
    if (ziele.length) s += ' Ziel: ' + liste(ziele) + '.';
    var alle = []; teile.forEach(function (t) { alle = alle.concat(t.m); });
    if (alle.length) s += ' Th.: ' + liste(alle) + '.';
    return s;
  }

  /* ---------- Oberfläche ---------- */
  var ebene = null, zustand = { E: null, w: null, ergebnis: [] };
  var IC = {
    lupe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
    haken: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path class="dk-hakenpfad" d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    kopie: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>',
    warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/></svg>',
    weg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'
  };

  function auf(von) {
    if (ebene) return;
    ebene = document.createElement('div');
    ebene.className = 'dk-ebene'; ebene.setAttribute('role', 'dialog'); ebene.setAttribute('aria-label', 'Diagnose-Kompass');
    ebene.innerHTML =
      '<div class="dk-leiste"><button type="button" class="dk-zur">‹ Werkzeuge</button></div>' +
      '<div class="dk-scroll"><div class="dk-seite">' +
      '<h1 class="dk-h1">Diagnose-Kompass</h1>' +
      '<div class="dk-suche"><span class="dk-lupe" aria-hidden="true">' + IC.lupe + '</span>' +
      '<input class="dk-feld" type="search" enterkeyhint="search" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="ICD-Code oder Diagnose, z. B. M72.2" aria-label="ICD-Code oder Diagnose">' +
      '<button type="button" class="dk-leeren" aria-label="Eingabe löschen" hidden>' + IC.weg + '</button></div>' +
      '<div class="dk-vorschlaege" role="listbox" hidden></div>' +
      '<div class="dk-zuletzt"></div>' +
      '<div class="dk-ergebnis"></div>' +
      '</div></div>';
    document.body.appendChild(ebene);
    document.documentElement.classList.add('dk-offen');
    var feld = ebene.querySelector('.dk-feld');
    ebene.querySelector('.dk-zur').onclick = zu;
    feld.addEventListener('input', function () { vorschlaege(feld.value); ebene.querySelector('.dk-leeren').hidden = !feld.value; });
    feld.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { var t = zustand.ergebnis[0]; if (t) waehle(t); } if (ev.key === 'Escape') zu(); });
    ebene.querySelector('.dk-leeren').onclick = function () { feld.value = ''; vorschlaege(''); this.hidden = true; feld.focus(); };
    zuletztZeigen();
    if (!von || !von.ohneFokus) setTimeout(function () { feld.focus(); }, 280);
  }
  function zu() { if (!ebene) return; ebene.classList.add('dk-raus'); var e = ebene; ebene = null; document.documentElement.classList.remove('dk-offen'); setTimeout(function () { e.remove(); }, 180); }

  function vorschlaege(q) {
    var box = ebene.querySelector('.dk-vorschlaege');
    var t = zustand.ergebnis = suchen(q);
    if (!q || q.trim().length < 2) { box.hidden = true; box.innerHTML = ''; return; }
    box.hidden = false;
    if (!t.length) { box.innerHTML = '<p class="dk-leer">Nichts gefunden. Probier den ICD-Code (z. B. M75.1) oder ein Stichwort wie „Fersensporn“.</p>'; return; }
    box.innerHTML = t.map(function (x, i) {
      var tag = x.art === 'kompass' ? '<span class="dk-tag dk-tag-k">Kompass</span>' : x.art === 'karte' || x.art === 'icd+' ? '<span class="dk-tag">Wissenskarte</span>' : '<span class="dk-tag dk-tag-leer">nur ICD</span>';
      return '<button type="button" role="option" class="dk-vor" data-i="' + i + '"><b class="dk-code">' + esc(x.code) + '</b><span class="dk-vor-t">' + esc(x.titel) + '</span>' + tag + '</button>';
    }).join('');
    box.querySelectorAll('.dk-vor').forEach(function (b) { b.onclick = function () { waehle(t[+b.dataset.i]); }; });
  }

  function waehle(t) {
    var E = null, alternativen = [];
    if (t.art === 'kompass' || t.art === 'karte') E = laden(t.art, t.id);
    else {
      var ee = eintragFuerCode(t.code), kk = karteFuerCode(t.code);
      if (ee.length) E = ee[0];
      else if (kk.length) E = ausKarte(kk[0]);
    }
    var feld = ebene.querySelector('.dk-feld');
    feld.value = ''; ebene.querySelector('.dk-leeren').hidden = true; feld.blur();
    ebene.querySelector('.dk-vorschlaege').hidden = true;
    if (!E) { nurIcd(t); return; }
    merken({ art: E.auto ? 'karte' : 'kompass', id: E.auto ? E.id.slice(2) : E.id, code: (E.icd || [])[0] || t.code, titel: E.titel });
    zeigen(E);
  }
  function merken(x) {
    var z = lesen(KEY_ZULETZT, []).filter(function (y) { return !(y.art === x.art && y.id === x.id); });
    z.unshift(x); schreiben(KEY_ZULETZT, z.slice(0, 6));
  }
  function zuletztZeigen() {
    var z = lesen(KEY_ZULETZT, []), box = ebene.querySelector('.dk-zuletzt');
    if (!z.length) { box.innerHTML = ''; return; }
    box.innerHTML = '<span class="dk-klein">Zuletzt</span><div class="dk-chips">' + z.map(function (x, i) { return '<button type="button" class="dk-chip" data-i="' + i + '"><b>' + esc(x.code) + '</b> ' + esc(String(x.titel).replace(/\s*\(.*\)$/, '').replace(/\s*\[.*\]$/, '')) + '</button>'; }).join('') + '</div>';
    box.querySelectorAll('.dk-chip').forEach(function (b) { b.onclick = function () { var x = z[+b.dataset.i]; waehle({ art: x.art, id: x.id, code: x.code }); }; });
  }

  function nurIcd(t) {
    var box = ebene.querySelector('.dk-ergebnis');
    box.innerHTML = '<section class="dk-karte dk-rein"><div class="dk-kopf"><span class="dk-icd">' + esc(t.code) + '</span><h2>' + esc(t.titel) + '</h2></div>' +
      '<p class="dk-text">Zu diesem Code gibt es noch keinen Kompass-Eintrag und keine Wissenskarte. Er wird vorgemerkt, damit wir ihn als Nächstes recherchieren.</p></section>';
  }

  function wahlStart(E) {
    var alt = lesen(KEY_WAHL, {})[E.id];
    var w = { seite: alt && alt.seite != null ? alt.seite : '', modus: (alt && alt.modus) || 'kurz', ziele: {}, m: {} };
    E.ziele.forEach(function (z, i) { w.ziele[i] = alt && alt.ziele && alt.ziele[i] != null ? alt.ziele[i] : !!z.an; });
    STATIONEN.forEach(function (s) { (E.strang[s[0]] || []).forEach(function (m, i) { var k = s[0] + i; w.m[k] = alt && alt.m && alt.m[k] != null ? alt.m[k] : !!m.an; }); });
    return w;
  }
  function wahlSichern() { var a = lesen(KEY_WAHL, {}); a[zustand.E.id] = zustand.w; schreiben(KEY_WAHL, a); }

  function zeigen(E) {
    zustand.E = E; zustand.w = wahlStart(E);
    var box = ebene.querySelector('.dk-ergebnis');
    var stat = E.geprueft ? '<span class="dk-stand ok">' + IC.haken + esc(String(E.status).replace(/(\d{4})-(\d{2})-(\d{2})/, '$3.$2.$1')) + '</span>' : '<span class="dk-stand">Entwurf, fachlich prüfen</span>';
    var html = '';
    /* Kopf */
    html += '<section class="dk-kopfkarte dk-rein"><div class="dk-kopf"><span class="dk-icd">' + esc((E.icd || []).join(' · ')) + '</span>' + stat + '</div>' +
      '<h2 class="dk-titel">' + esc(E.titel) + '</h2>' +
      (E.untertitel ? '<p class="dk-unter">' + esc(E.untertitel) + '</p>' : '') +
      (E.icdHinweis ? '<div class="dk-hinweis">' + IC.info + '<div><b>' + esc(E.icdHinweis.titel) + '</b><p>' + esc(E.icdHinweis.text) + '</p>' +
        (E.icdHinweis.wechsel ? '<div class="dk-wechsel" role="group" aria-label="Welches Krankheitsbild">' + E.icdHinweis.wechsel.map(function (x) { return '<button type="button" class="dk-seg' + (x.id === E.id ? ' an' : '') + '" data-art="' + x.art + '" data-id="' + esc(x.id) + '">' + esc(x.t) + '</button>'; }).join('') + '</div>' : '') +
        '</div></div>' : '') +
      (E.auto ? '<p class="dk-auto">Automatisch aus der Wissenskarte zusammengestellt. Die Zuordnung zum Vorgehen bitte prüfen.</p>' : '') +
      '</section>';
    html += '<div class="dk-spalten"><div class="dk-links">';
    /* Abriss */
    html += '<section class="dk-block dk-rein"><h3>Worum es geht</h3><ul class="dk-abriss">' + E.abriss.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ul></section>';
    /* Ziele */
    html += '<section class="dk-block dk-rein"><h3>Ziele</h3><p class="dk-klein">Antippen nimmt das Ziel in den Kurztext.</p><div class="dk-ziele">' +
      E.ziele.map(function (z, i) { return '<button type="button" class="dk-kachel dk-ziel" aria-pressed="' + !!zustand.w.ziele[i] + '" data-z="' + i + '"><span class="dk-box">' + IC.haken + '</span><span>' + esc(z.t) + '</span></button>'; }).join('') + '</div></section>';
    /* Vorgehen */
    html += '<section class="dk-block dk-rein"><h3>Vorgehen</h3><ol class="dk-strang">' + STATIONEN.map(function (s, si) {
      var ms = E.strang[s[0]] || [], sn = E.stationen && E.stationen[s[0]] || [s[1], s[2]];
      return '<li class="dk-station' + (ms.length ? '' : ' leer') + '"><span class="dk-nr">' + (si + 1) + '</span><div class="dk-st-inhalt"><div class="dk-st-kopf"><b>' + esc(sn[0]) + '</b><small>' + esc(sn[1] || '') + '</small></div>' +
        (ms.length ? '<div class="dk-mass">' + ms.map(function (m, i) {
          var k = s[0] + i;
          return '<button type="button" class="dk-kachel dk-m" aria-pressed="' + !!zustand.w.m[k] + '" data-m="' + k + '"><span class="dk-box">' + IC.haken + '</span><span class="dk-m-t"><b>' + esc(m.t) + '</b>' + (m.info ? '<small>' + esc(m.info) + '</small>' : '') + '</span>' + (m.ev ? '<span class="dk-ev dk-ev-' + esc(m.ev) + '">' + esc({ s: 'Studie', l: 'Leitlinie', e: 'Erfahrung', u: 'unklar' }[m.ev] || m.ev) + '</span>' : '') + '</button>';
        }).join('') + '</div>' : '<p class="dk-klein">' + esc(E.leerText && E.leerText[s[0]] || 'Hier nichts Spezielles.') + '</p>') +
        '</div></li>';
    }).join('') + '</ol></section>';
    /* Vorsicht */
    if (E.vorsicht.length || E.warn.length) {
      html += '<section class="dk-block dk-vorsicht dk-rein"><h3>' + IC.warn + 'Vorsicht</h3>' +
        (E.vorsicht.length ? '<ul>' + E.vorsicht.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ul>' : '') +
        (E.warn.length ? '<p class="dk-rot"><b>Ärztlich abklären:</b> ' + esc(E.warn.join(' ')) + '</p>' : '') + '</section>';
    }
    /* Aufklappbar */
    if (E.aerztlich && E.aerztlich.length) html += '<details class="dk-auf dk-rein"><summary>Ärztliche Möglichkeiten</summary><ul>' + E.aerztlich.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ul></details>';
    if (E.quellen && E.quellen.length) html += '<details class="dk-auf dk-rein"><summary>Quellen</summary><ul class="dk-quellen">' + E.quellen.map(function (q) { return '<li><b>' + esc(q.k) + '</b> ' + esc(q.t) + '</li>'; }).join('') + '</ul></details>';
    html += '</div>';
    /* Kurztext */
    html += '<aside class="dk-rechts"><section class="dk-text-karte dk-rein"><div class="dk-text-kopf"><h3>Kurztext</h3>' +
      '<div class="dk-mini-seg" role="group" aria-label="Art des Textes"><button type="button" data-modus="kurz">Kurz</button><button type="button" data-modus="lang">Lang</button><button type="button" data-modus="einheit">Einheit</button></div></div>' +
      '<div class="dk-seite-wahl" role="group" aria-label="Seite">' + SEITEN.map(function (s) { return '<button type="button" class="dk-seg" data-seite="' + s[0] + '">' + s[1] + '</button>'; }).join('') + '</div>' +
      '<p class="dk-doku" aria-live="polite"></p>' +
      '<button type="button" class="dk-kopieren"><span class="dk-k-inhalt">' + IC.kopie + '<span>Kopieren</span></span></button>' +
      '<p class="dk-klein dk-mitte dk-hinw-einheit" hidden>Lücken mit den Werten des Tages füllen: Leistung, Reaktion und Besonderheiten gehören in jeden Eintrag.</p><p class="dk-klein dk-mitte">Ohne Datum, zum Einfügen in die Doku.</p></section></aside></div>';
    box.innerHTML = html;
    box.querySelectorAll('.dk-rein').forEach(function (el, i) { el.style.setProperty('--i', Math.min(i, 8)); });
    var sc = ebene.querySelector('.dk-scroll'); sc.scrollTo({ top: 0 });

    box.querySelectorAll('.dk-ziel').forEach(function (b) { b.onclick = function () { var i = +b.dataset.z; zustand.w.ziele[i] = !zustand.w.ziele[i]; b.setAttribute('aria-pressed', zustand.w.ziele[i]); textNeu(); }; });
    box.querySelectorAll('.dk-m').forEach(function (b) { b.onclick = function () { var k = b.dataset.m; zustand.w.m[k] = !zustand.w.m[k]; b.setAttribute('aria-pressed', zustand.w.m[k]); textNeu(); }; });
    box.querySelectorAll('[data-seite]').forEach(function (b) { b.onclick = function () { zustand.w.seite = b.dataset.seite; textNeu(); }; });
    box.querySelectorAll('[data-modus]').forEach(function (b) { b.onclick = function () { zustand.w.modus = b.dataset.modus; textNeu(); }; });
    box.querySelectorAll('.dk-wechsel .dk-seg').forEach(function (b) { b.onclick = function () { var E2 = laden(b.dataset.art, b.dataset.art === 'karte' ? b.dataset.id.replace(/^k:/, '') : b.dataset.id); if (E2) { E2.icdHinweis = E2.icdHinweis || E.icdHinweis; zeigen(E2); } }; });
    box.querySelector('.dk-kopieren').onclick = kopieren;
    textNeu();
  }

  function textNeu() {
    var box = ebene.querySelector('.dk-ergebnis'), w = zustand.w;
    box.querySelectorAll('[data-seite]').forEach(function (b) { b.classList.toggle('an', b.dataset.seite === w.seite); });
    box.querySelectorAll('[data-modus]').forEach(function (b) { b.classList.toggle('an', b.dataset.modus === w.modus); });
    var p = box.querySelector('.dk-doku');
    p.innerHTML = esc(kurztext(zustand.E, w)).replace(/\[…[^\]]*\]/g, function (x) { return '<mark>' + x + '</mark>'; });
    box.querySelector('.dk-hinw-einheit').hidden = w.modus !== 'einheit';
    var k = box.querySelector('.dk-kopieren'); k.classList.remove('fertig'); k.querySelector('.dk-k-inhalt').innerHTML = IC.kopie + '<span>Kopieren</span>';
    wahlSichern();
  }
  function kopieren() {
    var t = kurztext(zustand.E, zustand.w), k = ebene.querySelector('.dk-kopieren');
    function ok() {
      var inh = k.querySelector('.dk-k-inhalt');
      inh.classList.add('dk-blur');
      setTimeout(function () { inh.innerHTML = IC.haken + '<span>Kopiert</span>'; k.classList.add('fertig'); inh.classList.remove('dk-blur'); }, 110);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(ok, alt); else alt();
    function alt() { var a = document.createElement('textarea'); a.value = t; a.style.position = 'fixed'; a.style.opacity = '0'; document.body.appendChild(a); a.select(); try { document.execCommand('copy'); } catch (e) { } a.remove(); ok(); }
  }

  window.DK = { oeffneId: function (id) { auf({ ohneFokus: true }); var E = laden('kompass', id); if (E) zeigen(E); }, auf: auf, zu: zu, suchen: suchen, kurztext: kurztext, ausKarte: ausKarte, waehle: function (q) { auf({ ohneFokus: true }); var t = suchen(q)[0]; if (t) waehle(t); } };
})();
/* ---------- Gestaltung (W&W hell/dunkel über die App-Variablen) ---------- */
(function () {
  var css = `
.dk-ebene{position:fixed;inset:0;z-index:9000;background:var(--grund);color:var(--schrift);display:flex;flex-direction:column;font-family:var(--ww-font,inherit);
  animation:dk-rein-e 260ms cubic-bezier(.23,1,.32,1)}
.dk-ebene.dk-raus{animation:dk-raus-e 160ms cubic-bezier(.23,1,.32,1) forwards}
@keyframes dk-rein-e{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes dk-raus-e{to{opacity:0;transform:translateY(10px)}}
html.dk-offen,html.dk-offen body{overflow:hidden}
.dk-leiste{display:flex;align-items:center;padding:calc(env(safe-area-inset-top,0px) + 10px) 20px 4px}
.dk-zur{border:0;background:none;color:var(--tape);font:inherit;font-size:1.0625rem;font-weight:600;padding:8px 0;cursor:pointer}
.dk-scroll{flex:1;overflow:auto;-webkit-overflow-scrolling:touch}
.dk-seite{max-width:1180px;margin:0 auto;padding:0 20px calc(env(safe-area-inset-bottom,0px) + 40px)}
.dk-h1{font-size:2.25rem;font-weight:900;text-transform:uppercase;letter-spacing:-.01em;margin:4px 0 16px;line-height:1.05}
.dk-suche{position:relative;display:flex;align-items:center}
.dk-lupe{position:absolute;left:16px;width:22px;height:22px;color:var(--schrift2);pointer-events:none}
.dk-feld{width:100%;min-height:58px;border-radius:18px;border:1.5px solid var(--rahmen);background:var(--flaeche);color:var(--schrift);
  font:inherit;font-size:1.1875rem;padding:0 52px 0 50px;outline:none;transition:border-color 160ms ease,box-shadow 160ms ease;-webkit-appearance:none}
.dk-feld::placeholder{color:var(--schrift2);opacity:.8}
.dk-feld:focus{border-color:var(--tape);box-shadow:0 0 0 4px var(--norm)}
.dk-feld::-webkit-search-cancel-button{display:none}
.dk-leeren{position:absolute;right:10px;width:36px;height:36px;border-radius:50%;border:0;background:var(--seite);color:var(--schrift2);display:grid;place-items:center;cursor:pointer}
.dk-leeren svg{width:16px;height:16px}
.dk-vorschlaege{margin-top:8px;background:var(--flaeche);border-radius:18px;padding:6px;box-shadow:0 1px 2px rgba(0,0,0,.04),0 10px 30px rgba(30,40,20,.08)}
.dk-vor{display:grid;grid-template-columns:76px minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;min-height:54px;border:0;background:none;color:var(--schrift);font:inherit;text-align:left;padding:8px 12px;border-radius:12px;cursor:pointer}
.dk-vor+.dk-vor{box-shadow:0 -1px 0 color-mix(in srgb,var(--linie) 70%,transparent)}
.dk-vor:active{background:var(--chip)}
.dk-code{color:var(--tape);font-weight:700;font-variant-numeric:tabular-nums}
.dk-vor-t{font-size:1rem;line-height:1.3}
.dk-tag{font-size:.75rem;font-weight:600;border-radius:999px;padding:3px 9px;background:var(--seite);color:var(--schrift2);white-space:nowrap}
.dk-tag-k{background:var(--ww-fill,#ddf6a2);color:var(--ww-on-fill,#1a1a1a)}
.dk-tag-leer{background:none;border:1px dashed var(--rahmen)}
.dk-leer{margin:10px 12px;color:var(--schrift2)}
.dk-zuletzt{margin-top:14px}
.dk-klein{font-size:.8125rem;color:var(--schrift2);margin:0}
.dk-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:6px}
.dk-chip{border:1px solid var(--rahmen);background:var(--flaeche);color:var(--schrift);font:inherit;font-size:.9375rem;border-radius:999px;padding:8px 14px;min-height:40px;cursor:pointer;transition:transform 140ms cubic-bezier(.23,1,.32,1)}
.dk-chip b{color:var(--tape);font-variant-numeric:tabular-nums}
.dk-chip:active,.dk-kachel:active,.dk-kopieren:active,.dk-seg:active{transform:scale(.97)}
.dk-ergebnis{margin-top:22px}
.dk-rein{animation:dk-auf 300ms cubic-bezier(.23,1,.32,1) both;animation-delay:calc(var(--i,0) * 40ms)}
@keyframes dk-auf{from{opacity:0;transform:translateY(10px);filter:blur(3px)}to{opacity:1;transform:none;filter:none}}
.dk-kopfkarte,.dk-karte{background:var(--flaeche);border-radius:22px;padding:20px 22px;box-shadow:0 1px 2px rgba(0,0,0,.04),0 6px 16px rgba(20,40,30,.05)}
.dk-kopf{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
.dk-icd{font-weight:800;font-size:1rem;color:var(--ww-on-fill,#1a1a1a);background:var(--ww-fill,#ddf6a2);border-radius:10px;padding:4px 10px;font-variant-numeric:tabular-nums}
.dk-stand{font-size:.8125rem;font-weight:600;color:#8a5d00;background:#fff3d1;border-radius:999px;padding:4px 10px;display:inline-flex;align-items:center;gap:5px}
.dk-stand.ok{color:var(--tape);background:var(--chip)}
.dk-stand svg{width:13px;height:13px}
.dk-ebene [hidden]{display:none!important}
.dk-ebene .dk-titel{font-size:1.75rem;line-height:1.15;font-weight:800;margin:12px 0 0;text-wrap:balance}
.dk-unter{margin:6px 0 0;color:var(--schrift2);font-size:1rem}
.dk-auto{margin:12px 0 0;font-size:.875rem;color:#8a5d00}
.dk-hinweis{display:flex;gap:12px;margin-top:16px;padding:14px 16px;border-radius:16px;background:var(--chip);color:var(--schrift)}
.dk-hinweis>svg{flex:none;width:22px;height:22px;color:var(--tape);margin-top:1px}
.dk-hinweis b{font-size:1rem}.dk-hinweis p{margin:4px 0 0;font-size:.9375rem;line-height:1.4;color:var(--schrift)}
.dk-wechsel{display:inline-flex;gap:4px;margin-top:12px;padding:4px;border-radius:14px;background:var(--flaeche)}
.dk-seg{border:0;background:none;color:var(--schrift);font:inherit;font-size:.9375rem;font-weight:600;padding:8px 16px;min-height:40px;border-radius:10px;cursor:pointer;transition:background-color 160ms ease,color 160ms ease,transform 140ms cubic-bezier(.23,1,.32,1)}
.dk-seg.an{background:var(--tape);color:var(--tape-auf)}
.dk-spalten{display:grid;grid-template-columns:minmax(0,1fr);gap:16px;margin-top:16px}
@media (min-width:760px){.dk-spalten{grid-template-columns:minmax(0,1fr) 340px;align-items:start}.dk-rechts{position:sticky;top:12px}}
@media (min-width:1100px){.dk-spalten{grid-template-columns:minmax(0,1fr) 380px}}
.dk-links{display:flex;flex-direction:column;gap:16px;min-width:0}
.dk-block{background:var(--flaeche);border-radius:22px;padding:18px 20px 20px;box-shadow:0 1px 2px rgba(0,0,0,.04),0 6px 16px rgba(20,40,30,.05)}
.dk-block h3,.dk-text-kopf h3{font-size:1.25rem;font-weight:800;margin:0 0 10px;display:flex;align-items:center;gap:8px}
.dk-abriss{margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px;font-size:1rem;line-height:1.45;max-width:68ch}
.dk-abriss li::marker{color:var(--tape)}
.dk-ziele{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,230px),1fr));gap:8px;margin-top:10px}
.dk-ebene .dk-kachel{display:flex;flex-direction:row;align-items:flex-start;white-space:normal;gap:10px;width:100%;border:1.5px solid var(--linie);background:var(--flaeche);color:var(--schrift);font:inherit;font-size:.9375rem;line-height:1.3;
  text-align:left;padding:11px 12px;border-radius:14px;cursor:pointer;min-height:48px;transition:border-color 160ms ease,background-color 160ms ease,transform 140ms cubic-bezier(.23,1,.32,1)}
.dk-ebene .dk-kachel[aria-pressed="true"]{color:var(--schrift);font-weight:inherit;border-color:color-mix(in srgb,var(--tape) 55%,var(--linie));background:color-mix(in srgb,var(--chip) 70%,var(--flaeche))}
.dk-box{flex:none;width:22px;height:22px;border-radius:7px;border:2px solid var(--rahmen);display:grid;place-items:center;color:var(--tape-auf);margin-top:-1px;transition:background-color 160ms ease,border-color 160ms ease}
.dk-box svg{width:14px;height:14px}
.dk-hakenpfad{stroke-dasharray:24;stroke-dashoffset:24;transition:stroke-dashoffset 220ms cubic-bezier(.23,1,.32,1)}
.dk-kachel[aria-pressed="true"] .dk-box{background:var(--tape);border-color:var(--tape)}
.dk-kachel[aria-pressed="true"] .dk-hakenpfad,.dk-stand .dk-hakenpfad,.dk-kopieren .dk-hakenpfad{stroke-dashoffset:0}
.dk-strang{list-style:none;margin:6px 0 0;padding:0;display:flex;flex-direction:column}
.dk-station{display:grid;grid-template-columns:34px minmax(0,1fr);gap:12px;position:relative;padding-bottom:16px}
.dk-station:last-child{padding-bottom:0}
.dk-station:not(:last-child)::before{content:"";position:absolute;left:16px;top:34px;bottom:2px;width:2px;border-radius:1px;background:var(--linie)}
.dk-nr{width:34px;height:34px;border-radius:50%;background:var(--ww-fill,#ddf6a2);color:var(--ww-on-fill,#1a1a1a);font-weight:800;display:grid;place-items:center;font-variant-numeric:tabular-nums}
.dk-station.leer .dk-nr{background:var(--seite);color:var(--schrift2)}
.dk-st-kopf{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;min-height:34px;padding-top:5px}
.dk-st-kopf b{font-size:1.0625rem}.dk-st-kopf small{font-size:.8125rem;color:var(--schrift2)}
.dk-mass{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr));gap:8px;margin-top:6px}
.dk-m{position:relative}
.dk-m-t{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}
.dk-m-t b{font-weight:600}
.dk-m-t small{font-size:.8125rem;color:var(--schrift2);line-height:1.3}
.dk-ev{flex:none;font-size:.6875rem;font-weight:700;border-radius:6px;padding:2px 6px;align-self:flex-start;white-space:nowrap}
.dk-ev-s,.dk-ev-l{background:var(--chip);color:var(--tape)}
.dk-ev-e{background:var(--seite);color:var(--schrift2)}
.dk-ev-u{background:#fff3d1;color:#8a5d00}
.dk-vorsicht{background:color-mix(in srgb,#ffb020 9%,var(--flaeche))}
.dk-vorsicht h3 svg{width:20px;height:20px;color:#b86e00}
.dk-vorsicht ul{margin:0;padding-left:20px;display:flex;flex-direction:column;gap:5px;line-height:1.4}
.dk-rot{margin:10px 0 0;font-size:.9375rem;line-height:1.4;color:var(--schrift)}
.dk-rot b{color:var(--warn)}
.dk-auf{background:var(--flaeche);border-radius:18px;padding:0 20px}
.dk-auf summary{list-style:none;min-height:54px;display:flex;align-items:center;justify-content:space-between;font-weight:700;font-size:1.0625rem;cursor:pointer}
.dk-auf summary::-webkit-details-marker{display:none}
.dk-auf summary::after{content:"";width:9px;height:9px;border-right:2px solid var(--schrift2);border-bottom:2px solid var(--schrift2);transform:rotate(45deg) translateY(-3px);transition:transform 200ms cubic-bezier(.23,1,.32,1)}
.dk-auf[open] summary::after{transform:rotate(225deg) translateY(-1px)}
.dk-auf ul{margin:0 0 16px;padding-left:20px;display:flex;flex-direction:column;gap:6px;line-height:1.4;font-size:.9375rem}
.dk-quellen li{color:var(--schrift2)}.dk-quellen b{color:var(--schrift)}
.dk-text-karte{background:var(--flaeche);border-radius:22px;padding:18px 18px 14px;box-shadow:0 1px 2px rgba(0,0,0,.04),0 10px 28px rgba(30,40,20,.08);border:1.5px solid color-mix(in srgb,var(--tape) 25%,var(--linie))}
.dk-text-kopf{display:flex;align-items:center;justify-content:space-between;gap:8px}
.dk-text-kopf h3{margin:0;font-size:1.125rem}
.dk-mini-seg{display:inline-flex;padding:3px;border-radius:10px;background:var(--seite)}
.dk-mini-seg button{border:0;background:none;font:inherit;font-size:.8125rem;font-weight:600;color:var(--schrift2);padding:5px 10px;border-radius:8px;cursor:pointer;min-height:30px}
.dk-mini-seg button.an{background:var(--flaeche);color:var(--schrift);box-shadow:0 1px 3px rgba(0,0,0,.1)}
.dk-seite-wahl{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin:12px 0 10px;padding:4px;border-radius:12px;background:var(--seite)}
.dk-seite-wahl .dk-seg{padding:6px 0;min-height:36px}
.dk-doku{margin:0;padding:14px;border-radius:14px;background:var(--grund);font-size:.9688rem;line-height:1.5;white-space:pre-wrap;min-height:120px;-webkit-user-select:text;user-select:text}
.dk-kopieren{display:flex;align-items:center;justify-content:center;width:100%;min-height:54px;margin-top:12px;border:0;border-radius:16px;background:var(--ww-fill,#ddf6a2);color:var(--ww-on-fill,#1a1a1a);font:inherit;font-size:1.0625rem;font-weight:700;cursor:pointer;transition:transform 140ms cubic-bezier(.23,1,.32,1),background-color 200ms ease}
.dk-kopieren.fertig{background:var(--tape);color:var(--tape-auf)}
.dk-k-inhalt{display:inline-flex;align-items:center;gap:8px;transition:filter 110ms ease,opacity 110ms ease}
.dk-k-inhalt svg{width:20px;height:20px}
.dk-k-inhalt.dk-blur{filter:blur(2px);opacity:.6}
.dk-mitte{text-align:center;margin-top:8px}
.dk-doku mark{background:#fff3d1;color:#8a5d00;border-radius:4px;padding:0 2px}
.dk-feld::selection,.dk-doku::selection{background:var(--ww-fill,#ddf6a2);color:#1a1a1a}
@media (max-width:759px){.dk-h1{font-size:1.75rem}.dk-ebene .dk-titel{font-size:1.4rem}.dk-kopfkarte,.dk-block{padding:16px}.dk-vor{grid-template-columns:64px minmax(0,1fr)}.dk-vor .dk-tag{display:none}}
@media (prefers-reduced-motion:reduce){.dk-ebene,.dk-rein{animation:dk-blende 160ms ease both}@keyframes dk-blende{from{opacity:0}to{opacity:1}}.dk-chip:active,.dk-kachel:active,.dk-kopieren:active,.dk-seg:active{transform:none}}
`;
  var st = document.createElement('style'); st.id = 'dk-css'; st.textContent = css; document.head.appendChild(st);
})();
