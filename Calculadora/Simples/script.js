$(document).ready(function () {
    let num, num2, result, display, op;
    num = num2 = result = display = op = '';
    let i = 0;

    //Padrão quando não há valor.
    $("#painel").text('0');

    // Deleta itens.
    $("#del").click(() => {
        $("#painel").text('0');
        $("#results").text('');
        num = num2 = result = display = op = '';
        i = 0;
    });

    // Apaga um único item.
    $("#ac").click(() => {      
        if ($("#results").text() == '') { //Caso não haja valor no resultado.
            if (i == 0) { 
                num = num.substring(0, num.length - 1); //extrai a string. (apaga um por um (valor))
                if (num == '0' && num.length == 1) num = ''; //Ao apagar o ponto inserido com o 0.
                num.length == 0 ? $("#painel").text('0') : $("#painel").text(num);
                tamanhoCampo(num);
            } else {
                num2 = num2.substring(0, num2.length - 1);
                if (num2 == '0' && num2.length == 1) num2 = '';
                num2.length == 0 ? $("#painel").text('0') : $("#painel").text(num2);
                tamanhoCampo(num2);
            }
        } else { //Ao apagar (tudo do painel) e quiser usar o valor do resultado para efetuar outra conta.
            $("#painel").text('0');
            num2 = 0; //0, pois com string fica NaN.
            if (op == ' / ')  num2 = 1;
            console.log(num, num2)
        }
    });

    // Adiciona números ao visor.
    $("#num-0, #num-1, #num-2, #num-3, #num-4, #num-5, #num-6, #num-7, #num-8, #num-9, #dot").click(function () {
        if (i == 0) {
            num += $(this).text();   
            switch (num) {
                case '.':
                    if ($("#painel").text() == '0') num = '0.'; //0
                    $("#painel").text(num);
                    break;
            
                case '0':
                    num = '';
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
                    if ($("#painel").text() == '0' || $("#painel").text() != '0') num2 = '0.'; //Ao inserir o ponto sem valor, o 0 é adicionado automaticamente.
                    $("#painel").text(num2);
                    break;
            
                case '0':
                    num2 = '';
                    break;

                default:
                    $("#painel").text(num2);
                    break;
            }
            tamanhoCampo(num2);
        }
    });

    // Operações.
    $("#add, #sub, #mult, #div, #equal, #neg").click(function () {
        switch ($(this).text()) {
            //Operação contínua
            case '+':
                op = ' + ';
                if (i == 0) { // num1
                    operador(op);
                } else { // num2
                    result = somar(num, num2);
                    resultado(result);
                }
                break;

            case '-':
                op = ' - ';
                if (i == 0) {
                    operador(op);
                } else {
                    result = subtrair(num, num2);
                    resultado(result);
                }
                break;

            case '*':
                op = ' * ';
                if (i == 0) {
                    operador(op);
                } else {
                    result = multiplicar(num, num2);
                    resultado(result);
                }
                break;

            case '/':
                op = ' / ';
                if (i == 0) {
                    operador(op);
                } else {
                    result = dividir(num, num2);
                    resultado(result);
                }
                break;
/*  *** */
            case '+/-':
                if (i == 0) {
                    num = `(- ${num})`;
                    $("#painel").text(num); 
                } else {
                    num2 = `(- ${num2})`;
                    $("#painel").text(num2); 
                }
                break;

            /* Operação normal, podendo ser contínua. 
            (se depois que pressionado o igual, quiser continuar 
            a operação a partir do resultado). */
            case '=':
                if (num2 == '') num2 = num; //Caso num2 não tenha valor e seja pressionado o '='.
                switch (op) {
                    case ' + ':
                        result = somar(num, num2);
                        display = (parseFloat(result) - parseFloat(num2)) + op + parseFloat(num2); //mostra valor na tela*.
                        resultado2(result, display);
                        break;

                    case ' - ':
                        result = subtrair(num, num2);
                        display = (parseFloat(result) + parseFloat(num2)) + op + parseFloat(num2); //*
                        resultado2(result, display);
                        break;

                    case ' * ':
                        result = multiplicar(num, num2);
                        display = parseFloat(num) + op + parseFloat(num2); //*
                        resultado2(result, display);
                        break;

                    case ' / ':
                        result = dividir(num, num2);
                        display = parseFloat(num) + op + parseFloat(num2); //*
                        resultado2(result, display);
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
        return result = parseFloat(nm) + parseFloat(nm2);
    }

    function subtrair(nm, nm2) {     
        return result = parseFloat(nm) - parseFloat(nm2);
    }

    function multiplicar(nm, nm2) {     
        return result = parseFloat(nm) * parseFloat(nm2);
    }

    function dividir(nm, nm2) {     
        return result = parseFloat(nm) / parseFloat(nm2);
    }

    //Verifica operador.
    function operador(op) {
        if ($("#painel").text() == '0') {
            num = '0' + op;
            $("#painel").text(num);
        } else {
            $("#painel").text(num + op);
        }
        i = 1; //ativa a entrada do segundo valor (num2).
    }

    //Mostra resultado na tela. 
    //Operação sem o igual
    function resultado(result) {
        display = result + op;
        $("#painel").text(display);
        $("#results").text(result);
        num2 = '';
        num = result;
    }
    
    //Operação com o igual.
    function resultado2(result, display) {  
        $("#painel").text(display);
        $("#results").text(result); 
        num = result;
    }

    //Máximo de caracteres permitido.
    function tamanhoCampo(nm) {
        if (nm.length >= 16) num = nm.substring(0, 15);
    }
});