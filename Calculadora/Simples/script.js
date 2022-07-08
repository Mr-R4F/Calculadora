$(document).ready(function () {
    let num = '';
    let num2 = '';
    let result = '';
    let display = '';
    let op = null;
    let i = 0;

    //Padrão quando não há valor.
    $("#painel").text('0');

    // Deleta itens.
    $("#del").click(() => {
        $("#painel").text('0');
        $("#results").text('');

        result = '';
        num2 = '';
        num = '';
        display = '';
        op = null;
        i = 0;
    });

    // Apaga um único item.
    $("#ac").click(() => {
        if (i == 0) {
            num = num.substring(0, num.length - 1); //extrai a string.
            if (num == '0' && num.length == 1) num = ''; //Ao apagar o ponto inserido com o 0.
            num.length == 0 ? $("#painel").text('0') : $("#painel").text(num);
            tamanhoCampo(num);
        } else {
            num2 = num2.substring(0, num2.length - 1);
            if (num2 == '0' && num2.length == 1) num2 = '';
            num2.length == 0 ? $("#painel").text('0') : $("#painel").text(num2);
            tamanhoCampo(num2);
        } 

    });

    // Adiciona números ao 'visor'.
    $("#num-0, #num-1, #num-2, #num-3, #num-4, #num-5, #num-6, #num-7, #num-8, #num-9, #dot").click(function () {
        if (i == 0) {
            num += $(this).text();   
            switch (num) {
                case '.':
                    if ($("#painel").text() == '0') num = '0.'; //0
                    $("#painel").text(num);
                    break;
            
                case '0':
                    if (op != null)  num = '0';
                    else  num = '';
                    break;

                default: 
                    $("#painel").text(num);
                    break;
            }
            tamanhoCampo(num);
        } else {
            num2 += $(this).text();

            switch (num2) {
                case '.':
                    if ($("#painel").text() == '0') num2 = '0.'; //0
                    $("#painel").text(num2);
                    break;
            
                case '0':
                    if (op != null)  num2 = '0';
                    else  num2 = '';
                    break;

                default:
                    $("#painel").text(num2);
                    break;
            }
            tamanhoCampo(num2);
        }
    });

    // Operações.
    $("#add, #sub, #mult, #div, #equal").click(function () {
        switch ($(this).text()) {
            case '+':
                op = ' + ';
                if (i == 0) { // num1
                    operador(op);
                } else { // num2
                    console.log(num)
                    result = somar(num, num2);
                    display = result + op;
                    num = result;
                    $("#painel").text(display);
                    $("#results").text(result);
                    num2 = '';
                }
            break;

            case '-':
                op = ' - ';
                if (i == 0) {
                    operador(op);
                } else {
                    result = subtrair(num, num2);
                    display = result + op;
                    num = result;
                    $("#painel").text(display);
                    $("#results").text(result);
                    num2 = '';
                }
            break;

            case '*':
                op = ' * ';
                if (i == 0) {
                    operador(op);
                } else {
                    result = multiplicar(num, num2);
                    display = result + op;
                    num = result;
                    $("#painel").text(display);
                    $("#results").text(result);
                    num2 = '';
                }
            break;

            case '/':
                op = ' / ';
                if (i == 0) {
                    operador(op);
                } else {
                    result = dividir(num, num2);
                    display = result + op;
                    num = result;
                    $("#painel").text(display);
                    $("#results").text(result);
                    num2 = '';
                }
            break;

            case '=':
                switch (op) {
                    case '+':
                        console.log(num)
                        result = somar(num, num2);
                        display = (result - num2) + op + num2;
                        num = result;
                        $("#painel").text(display);
                        $("#results").text(result);
                        result = '';
                        console.log(display)
                        num2 = '';
                        i = 2; 
                        break;

                    case '-':
                        result = subtrair(num, num2);
                        console.log((result + num2) + op + num2);
                        display = (parseFloat(num2) + result) + op + parseFloat(num2);
                        console.log(display);
                        $("#painel").text(display);
                        $("#results").text(result);
                        i = 2;
                        break;
                
                    default:
                        break;
                }
                break;

            default:
                break;    
        }      
    });

    //
    function somar(nm, nm2) {
        result = parseFloat(nm) + parseFloat(nm2);
        return result;
    }

    function subtrair(nm, nm2) {     
        result = parseFloat(nm) - parseFloat(nm2);
        console.log(result)
        return result;
    }

    function multiplicar(nm, nm2) {     
        result = parseFloat(nm) * parseFloat(nm2);
        console.log(result)
        return result;
    }

    function dividir(nm, nm2) {     
        result = parseFloat(nm) / parseFloat(nm2);
        console.log(result)
        return result;
    }

    //
    function operador(op) {
        if ($("#painel").text() == '0') {
            num = '0' + op;
            $("#painel").text(num);
        } else {
            $("#painel").text(num + op);
        }
        i = 1; //ativa a entrada do segundo valor (num2).
    }

    //Máximo de caracteres permitido.
    function tamanhoCampo(nm) {
        if (nm.length >= 16) num = nm.substring(0, 15);
    }
});