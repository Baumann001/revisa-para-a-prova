document.addEventListener('DOMContentLoaded', function() {
    const jsTituloContainer = document.getElementById('js-titulo-container');
    const jsTitulo = document.getElementById('js-titulo');

    if (jsTituloContainer && jsTitulo) {
        jsTituloContainer.addEventListener('mouseover', function() {
            jsTitulo.style.backgroundColor = '#ffeb3b'; /* Amarelo */
            jsTitulo.style.color = '#212121'; /* Preto */
            jsTitulo.style.padding = '10px';
            jsTitulo.style.borderRadius = '5px';
        });

        jsTituloContainer.addEventListener('mouseout', function() {
            jsTitulo.style.backgroundColor = ''; /* Remove a cor de fundo */
            jsTitulo.style.color = ''; /* Remove a cor do texto */
            jsTitulo.style.padding = ''; /* Remove o padding */
            jsTitulo.style.borderRadius = ''; /* Remove a borda arredondada */
        });
    }
});