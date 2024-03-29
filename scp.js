function capitalizeFirstLetter() {
    var textInput = document.getElementById('text-input');
    var convertedText = document.getElementById('converted-text');

    // Obtém o texto da entrada
    var inputText = textInput.value;

    // Divide o texto em palavras
    var words = inputText.split(' ');

    // Palavras a serem ignoradas
    var ignoredWords = [
        "a", "o", "as", "os", "de", "dos", "das", "do", "da",
        "e", "ou", "para", "por", "no", "na", "nos", "nas"
    ].map(word => word.trim());

    // Capitaliza a primeira letra de cada palavra, exceto as palavras ignoradas
    for (var i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();
        if (!ignoredWords.includes(word)) {
            words[i] = word.charAt(0).toUpperCase() + word.slice(1);
        }
    }

    // Junta as palavras novamente em uma única string
    var capitalizedText = words.join(' ');

    // Define o valor do elemento de saída de texto
    convertedText.textContent = capitalizedText;
}

function convertToLowerCase() {
    var textInput = document.getElementById('text-input');
    var convertedText = document.getElementById('converted-text');

    // Obtém o texto da entrada
    var inputText = textInput.value;

    // Converte todo o texto para minúsculas
    var lowercaseText = inputText.toLowerCase();

    // Define o valor do elemento de saída de texto
    convertedText.textContent = lowercaseText;
}

function convertToUpperCase() {
    var textInput = document.getElementById('text-input');
    var convertedText = document.getElementById('converted-text');

    // Obtém o texto da entrada
    var inputText = textInput.value;

    // Converte todo o texto para maiúsculas
    var uppercaseText = inputText.toUpperCase();

    // Define o valor do elemento de saída de texto
    convertedText.textContent = uppercaseText;
}
