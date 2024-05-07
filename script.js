function showBeranda() {
  hideAllSections();
  document.getElementById('beranda').style.display = 'block';
}

function showTentang() {
  hideAllSections();
  document.getElementById('tentang-kami').style.display = 'block';
}

function showProgram() {
  hideAllSections();
  document.getElementById('program').style.display = 'block';
}

function showKontak() {
  hideAllSections();
  document.getElementById('kontak').style.display = 'block';
}

function showAktivitas() {
  hideAllSections();
  document.getElementById('aktivitas').style.display = 'block';
}

function showYouTube() {
  hideAllSections();
  document.getElementById('youtube').style.display = 'block';
}

function hideAllSections() {
  var sections = document.querySelectorAll('section');
  sections.forEach(function(section) {
    section.style.display = 'none';
  });
}

