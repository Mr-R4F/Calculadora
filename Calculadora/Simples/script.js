$(document).ready(function () {
    let num = '';

    // Deleta itens
    $("#del").click(() => {
        num = '';
        $("#painel").text('');
        tamanhoCampo(num);
    });

    $("#ac").click(() => {
        num = num.substring(0, num.length - 1); //extrai a string.
        $("#painel").text(num);
        tamanhoCampo(num);
    });

    // Adiciona números ao 'visor'.

    //Se o 0 for o 1º nº.
    $("#num-0").click(function () {
        num += $(this).text();
        $("#painel").text(num);
        if (num.length == 1) num = '';
        tamanhoCampo(num);
    });
    
    $("#num-1, #num-2, #num-3, #num-4, #num-5, #num-6, #num-7, #num-8, #num-9, #dot").click(function () {
        num += $(this).text();
        $("#painel").text(num);
        tamanhoCampo(num);
    });

    // Operações
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
        if (nm.length > 16) num = nm.substring(0, 16);
    }
});