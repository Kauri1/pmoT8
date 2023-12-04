
function searchContent() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();// Küsi otsingusõna, teisenda väiketähtedeks ja eemalda tühikud
    var paragraphs = document.querySelectorAll('.content p'); // Vali kõik lõigud klassist 'content'

    if (searchTerm === '') {
        paragraphs.forEach(function(paragraph) {
            paragraph.style.backgroundColor = 'transparent'; // Välju funktsioonist, kui otsingusõna on tühi
        });
        return; 
    }

    paragraphs.forEach(function(paragraph) {
        var content = paragraph.textContent.toLowerCase();// Lõigu sisu väiketähtedeks
        if (content.includes(searchTerm)) {
            paragraph.style.backgroundColor = '#4767A6'; // Kui lõik sisaldab otsingusõna tosta esile sobivad lõigud
        } else {
            paragraph.style.backgroundColor = 'transparent'; // Läbipaistvaks muutmine teistele lõikudele
        }
    });
}
