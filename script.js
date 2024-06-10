let fileContent = '';

function loadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Prosím, vyberte soubor.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        fileContent = e.target.result;
        document.getElementById('fileContent').textContent = fileContent;
        document.getElementById('wordCount').textContent = countWords(fileContent);
    };
    reader.readAsText(file);
}

function countWords(text) {
    const words = text.split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

function searchWord() {
    const searchWord = document.getElementById('searchWord').value.trim();
    if (!searchWord) {
        alert('Prosím, zadejte slovo k vyhledání.');
        return;
    }

    const words = fileContent.split(/\s+/);
    let count = 0;
    words.forEach(word => {
        if (word.toLowerCase() === searchWord.toLowerCase()) {
            count++;
        }
    });

    document.getElementById('searchResult').textContent = `Slovo '${searchWord}' se v souboru vyskytuje ${count} krát.`;
}