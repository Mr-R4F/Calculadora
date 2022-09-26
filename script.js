$(document).ready(function () {
    let num1 = '';
    let num2 = '';
    let result = '';
    let op = null;
    //let hasDot = false; **

    $("#ac").click(() => { //apaga um por um
        if (!op) {
            num1 = num1.substring(0, num1.length - 1); //extrai a string. (apaga um por um (valor))
            if (num1 == '0' && num1.length == 1) num1 = ''; //Ao apagar o ponto inserido com o 0.
            num1.length == 0 ? $("#painel").text('0') : $("#painel").text(num1); 
        } else {
            num2 = num2.substring(0, num2.length - 1);
            if (num2 == '0' && num2.length == 1) num2 = '';
            num2.length == 0 ? $("#results").text('0') : $("#results").text(num2);   
        }
    });

    $("#del").click(() => { //apaga tudo
        $("#painel").text('0');
        $("#painel").css("font-size", '42px');
        $("#results").text('');

        num1 = num2 = '';
        op = null;
        hasDot = false;
    });
   
    $("#num-0, #num-1, #num-2, #num-3, #num-4, #num-5, #num-6, #num-7, #num-8, #num-9, #dot").click(function () {
        resizeText();
   
        if (!op) { //se o operador for nulo o primeiro valor pode ser digitado
            num1 += $(this).text();
            limitField();

            if (num1 === '0') { //limita a qtd de zeros
                num1 = '';
                $("#painel").text('0');
            } else if (num1 === '.') {
                $("#painel").text(num1 = '0.');
            } else {
                $("#painel").text(num1);
            }
        } else {
            num2 += $(this).text();
            limitField();

            if (num2 === '0') {
                num2 = '';
                $("#results").text('0');
            } else if (num2 === '.') {
                $("#results").text(num2 = '0.');
            } else {
                $("#results").text(num2);
            }
        }
    });

    $("#add, #sub, #mult, #div, #equal, #neg").click(function () {
        switch ($(this).text()) { //se clicar
            case '+':
                operator(' + ');
                showResultsWithOutEqual();
                num2 = '';
                break;

            case '-':
                operator(' - ');
                showResultsWithOutEqual();
                num2 = '';
                break;

            case '*':
                operator(' * ');
                showResultsWithOutEqual();
                num2 = '';
                break;

            case '/':
                operator(' / ');
                showResultsWithOutEqual();
                num2 = '';
                break;

            case '=': //com o igual
                showResultsWithEqual(operator(op));
                
            default:
                break;
        }
    });

    function showResultsWithOutEqual() {        
        num1 === '' ? num1 = '0' : null;
        num2 += num1;
        $("#painel").text(num1 + op);
        $("#results").text(num2);
        resizeText();
    }

    function showResultsWithEqual(op) {
        num2 === '' ? num2 = num1 : null; //Se nada for digitado no segundo valor

        switch (op) {
            case ' + ':
                result = sum(num1, num2);
                break;

            case ' - ':
                result = sub(num1, num2);
                break;

            case ' * ':
                result = mult(num1, num2);
                break;

            case ' / ':
                result = div(num1, num2);
                break;

            default:
                break;
        }

        $("#painel").text(parseFloat(num1) + op + parseFloat(num2));
        resizeText();
        if (isNaN(result) || result == Infinity) result = '0'; //se o nº for dividido por zero.
        $("#results").text(result);
        num1 = result;
    }

    //Modifica o tamanho da fonte de acordo com a largura do painel
    function resizeText() {
        let i = 42; //text font

        while ($("#painel").width() > 335) {
            i -= 2;
            $("#painel").css("font-size", i + 'px');
        }
    }

    //Operações
    function sum(nm1, nm2) {  
        return parseFloat(nm1) + parseFloat(nm2);
    }

    function sub(nm1, nm2) {
        return parseFloat(nm1) - parseFloat(nm2);
    }

    function mult(nm1, nm2) {
        return parseFloat(nm1) * parseFloat(nm2);
    }

    function div(nm1, nm2) {
        return parseFloat(nm1) / parseFloat(nm2);
    }

    //verifica operador
    function operator(opr) {
        return op = opr;
    }

    //Qtd de caracteres
    function limitField() {
        if (num1.length >= 16) num1 = num1.substring(0, 15);
        if (num2.length >= 16) num2 = num2.substring(0, 15);
    }
});