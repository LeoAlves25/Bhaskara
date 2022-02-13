//Calcular equação do segundo grau.
    function delta(a, b, c){
        var dlt=Math.pow(b,2)-4*a*c;
        return dlt;
    }
    function x1(a, b, delta){
        var valor=(-b+Math.sqrt(delta))/(2*a);
        return valor;
    }
    function x2(a, b, delta){
        var valor1=(-b-Math.sqrt(delta))/(2*a);
        return valor1;
    }
    
    var a=parseFloat(prompt("Informe o valor do primeiro coeficiente:"));
    if(a!=0){
        var b=parseFloat(prompt("Informe o valor do segundo coeficiente:"));
        var c=parseFloat(prompt("Informe o valor do terceiro coeficiente:"));
        var d=delta(a, b, c);
        if (d<0){
            document.write("Não foi possível efetuar o cálculo, pois o valor de delta deu negativo.");
        } else {
            if (d==0){
                document.write("O valor de X é: "+x1(a, b, d).toFixed(2));
            } else{
                document.write("O valor de X1 é: "+x1(a, b, d).toFixed(2)+"<br>");
                document.write("O valor de X2 é: "+x2(a, b, d).toFixed(2));
            }
        }
    } else{
        document.write("O primeiro coeficiente não pode ser nulo.");
    }
