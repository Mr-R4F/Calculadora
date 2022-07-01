$(document).ready(function () {
    let num = '';
    
    // Deleta itens
    $("#del").click(() => {
        num = '';
        $("#painel").text('');
        $("button").removeAttr('disabled', 'off');
    })

    $("#ac").click(() => {
        num = num.substring(0, num.length - 1); //extrair string da posição 0 a ´-1´.
        $("#painel").text(num);
        if (num.length < 16) 
            $("button").removeAttr('disabled', 'off');
        console.log(num);
    });

    //Preenche
    $("#num-0").click(() => {
        num += 0;
        console.log(num);
        $("#painel").text(parseInt(num));
        if (num.length == 1) 
            num = '';

        if (num.length > 16) 
            $("button:not(#div, #sub, #add, #equal, #mult, #ac, #del)").attr('disabled', 'disabled');
    })

    $("#num-1").click(() => {
        num += 1;
        console.log(num);
        $("#painel").text(parseInt(num));
    })

    $("#num-2").click(() => {
        num += 2;
        $("#painel").text(parseInt(num));
        console.log(num);
    })

    $("#num-3").click(() => {
        num += 3;
        $("#painel").text(parseInt(num));
        console.log(num);
    })

    $("#num-4").click(() => {
        num += 4;
        $("#painel").text(parseInt(num));
        console.log(parseInt(num));
    })

    $("#num-5").click(() => {
        num += 5;
        $("#painel").text(parseInt(num));
        console.log(num);
    })

    $("#num-6").click(() => {
        num += 6;
        $("#painel").text(parseInt(num));
        console.log(num);
    })

    $("#num-7").click(() => {
        num += 7;
        $("#painel").text(parseInt(num));
        console.log(num);
    })

    $("#num-8").click(() => {
        num += 8;
        $("#painel").text(parseInt(num));
        console.log(num);
    })

    $("#num-9").click(() => {
        num += 9;
        $("#painel").text(parseInt(num));
        console.log(num);
    })

    // Operações
  
});