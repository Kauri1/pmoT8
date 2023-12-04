
function searchContent() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    var paragraphs = document.querySelectorAll('.content p'); // Select all paragraphs within the content class

    if (searchTerm === '') {
        paragraphs.forEach(function(paragraph) {
            paragraph.style.backgroundColor = 'transparent'; // Reset all highlights when search term is empty
        });
        return; // Exit the function if the search term is empty
    }
    
    paragraphs.forEach(function(paragraph) {
        var content = paragraph.textContent.toLowerCase();
        if (content.includes(searchTerm)) {
            paragraph.style.backgroundColor = '#4767A6'; // Highlight matching paragraphs
        } else {
            paragraph.style.backgroundColor = 'transparent'; // Reset others
        }
    });
}
