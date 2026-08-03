/* Brama dostępu — komplet ofertowy Audi Grupa Plichta.
   Kod wpisuje się raz; zapamiętuje go przeglądarka (localStorage).
   To zamknięte drzwi, nie sejf — patrz BRIEF_SESJA_POPRAWKI.md. */
(function () {
  var KLUCZ = 'plichta-2026', KOD = '2212';
  try { if (localStorage.getItem(KLUCZ) === '1') return; } catch (e) { return; }

  var st = document.createElement('style');
  st.textContent =
    'body > *{display:none !important}' +
    '#brama{display:flex !important;position:fixed;inset:0;z-index:99999;background:#fff;' +
    'align-items:center;justify-content:center;padding:24px;' +
    "font-family:'Space Grotesk',-apple-system,sans-serif}" +
    '#brama .pud{width:100%;max-width:420px;text-align:center}' +
    "#brama .kick{font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:.16em;" +
    'text-transform:uppercase;color:#1800ad;font-weight:700;margin-bottom:18px}' +
    '#brama h1{font-size:27px;font-weight:700;letter-spacing:-.03em;color:#0a0a0a;margin:0 0 10px;line-height:1.2}' +
    '#brama p{font-size:15px;color:#5b6472;margin:0 0 26px;line-height:1.5}' +
    '#brama form{display:flex;gap:8px}' +
    "#brama input{flex:1;font-family:'IBM Plex Mono',monospace;font-size:19px;font-weight:600;" +
    'letter-spacing:.28em;text-align:center;padding:14px 12px;border:1.5px solid #e6e6e9;' +
    'border-radius:12px;color:#0a0a0a;background:#fff;outline:none}' +
    '#brama input:focus{border-color:#1800ad}' +
    "#brama button{font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;letter-spacing:.08em;" +
    'padding:0 20px;border:0;border-radius:12px;background:#1800ad;color:#fff;cursor:pointer}' +
    '#brama button:hover{background:#12007e}' +
    "#brama .zle{font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#8d0a31;margin-top:14px;" +
    'min-height:16px;letter-spacing:.03em}';
  document.head.appendChild(st);

  function rysuj() {
    var d = document.createElement('div');
    d.id = 'brama';
    d.innerHTML =
      '<div class="pud">' +
      '<div class="kick">Audi Grupa Plichta</div>' +
      '<h1>Odpowiedź na brief z 10.06.2026</h1>' +
      '<p>Materiały dostępne po wpisaniu hasła. Hasło dostępu przez SMS.</p>' +
      '<form><input id="bkod" type="password" inputmode="numeric" maxlength="12" ' +
      'autocomplete="off" aria-label="Kod dostępu" placeholder="••••"> ' +
      '<button type="submit">Wejdź</button></form>' +
      '<div class="zle" id="bzle"></div></div>';
    document.body.appendChild(d);
    var inp = d.querySelector('#bkod');
    inp.focus();
    d.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      if (inp.value.trim() === KOD) {
        try { localStorage.setItem(KLUCZ, '1'); } catch (er) {}
        location.reload();
      } else {
        d.querySelector('#bzle').textContent = 'Nieprawidłowy kod.';
        inp.value = ''; inp.focus();
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', rysuj);
  else rysuj();
})();
