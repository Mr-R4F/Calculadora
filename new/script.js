//ts-check
$(document).ready(function () {
    let num1 = '';
    let num2 = '';
    let result = '';
    let op = null;
    let hasDot = false;

    $("#ac").click(() => {    
        
        




    });

    $("#del").click(() => {
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

            if (num1 === '0') {
                num1 = '';
                $("#painel").text('0');
            } else if (num1 === '.') {
                $("#painel").text(num1 = '0.');
            } else {
                $("#painel").text(num1);
            }
        } else {
            num2 += $(this).text();

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
                op = ' + ';
                showResultsWithOutEqual();
                num2 = '';
                break;

            case '-':
                op = ' - ';
                showResultsWithOutEqual();
                num2 = '';
                break;

            case '*':
                op = ' * ';
                showResultsWithOutEqual();
                num2 = '';
                break;

            case '=': //com o igual
                switch (op) { //caso o operador seja
                    case ' + ':
                        showResultsWithEqual(op);
                        break;

                    case ' - ':
                        sub(num1, num2);
                        showResultsWithEqual(op);
                        break;

                    case ' * ':
                        mult(num1, num2);
                        showResultsWithEqual(op);
                        break;

                    default:
                        break;
                }

                break;
        
            default:
                break;
        }
    });

    function showResultsWithOutEqual() {
        num1 === '' ? num1 = '0' : null;
        num2 += num1;
        console.log(num1, num2)
        $("#painel").text(num1 + op);
        $("#results").text(num2);
        resizeText();
    }

    function showResultsWithEqual(op) {
        num2 == '' ? num2 = num1 : null;
        switch (op) {
            case ' + ':
                result = sum(num1, num2);
                break;

            case ' - ':
                result = sub(num1, num2);
                break;
        
            default:
                break;
        }
        $("#painel").text(parseFloat(num1) + op + parseFloat(num2));
        resizeText();
        $("#results").text(result);
        num1 = result;
    }

    //Modifica o tamanho da fonte de acordo com a largura do painel
    function resizeText() {
        let i = 42;

        while ($("#painel").width() > 335) {
            i -= 2;
            console.log($("#painel").width())
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
});