$(document).ready(function () {
    let num = '';

    // Deleta itens.
    $("#del").click(() => {
        num = '';
        $("#painel").text('0');
        tamanhoCampo(num);
    });

    // Apaga um único item.
    $("#ac").click(() => {
        num = num.substring(0, num.length - 1); //extrai a string.
        if (num == '0' && num.length == 1) num = ''; //Ao apagar o ponto inserido com o 0.
        if (num.length == 0) $("#painel").text('0');
        else $("#painel").text(num);
        tamanhoCampo(num);
    });
   
    // Adiciona números ao 'visor'.
    $("#num-0, #num-1, #num-2, #num-3, #num-4, #num-5, #num-6, #num-7, #num-8, #num-9, #dot").click(function () {
        num += $(this).text();
        console.log(num)
        if (num != '.') $("#painel").text(num); //Evita que o ponto seja um caracter único ou primeiro número.

        switch (num) {
            case '.':
                num = '0.'
                $("#painel").text(num);
                break;
        
            case '0': 
                num = '';

            default:
                break;
        }
        tamanhoCampo(num);
    });

    // Operações.
    $("#add, #sub, #mult, #div").click(function () {
        switch ($(this).text()) {
            case '+':
                num += '+';
                $("#painel").text(num);
                break;
                
            case '-':
                num += '-';
                $("#painel").text(num);
                break;

            case '*':
                num += '*';
                $("#painel").text(num);
                break;

            case '/':
                num += '/';
                $("#painel").text(num);
                break;

            default:
                break;
        }
    });

    //Máximo de caracteres permitido.
    function tamanhoCampo(nm) {
        if (nm.length >= 16) num = nm.substring(0, 15);
    }
});