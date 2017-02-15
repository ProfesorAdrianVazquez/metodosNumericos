


$(document).ready(function(){

var funcion = function(input){
    var result;
    result = (input*input) - (10*input) + 23;
    return result;
}

var sign = function(num){
    if(num == 0) return 0;
    if(num < 0) return -1;
    return 1;
}

var print = function(a,b,c,IA,IB,IC){
    console.log(a);
    console.log(b);
    console.log(c);

    console.log("A: "+IA);
    console.log("B: "+IB);
    console.log("C: "+IC);
    console.log("el valor de f(x) = 0 es: "+c);
    console.log("con una presicion de: "+(input_B-input_A));
    console.log("el valor de f(c) es: "+YC);
    console.log("------------------------------");

    insert = '<tr ><td>'+IA+'</td> <td>'+IB+'</td> <td>'+IC+'</td> <td>'+a+'</td> <td>'+b+'</td> <td>'+c+'</td> </tr>';
    console.log($("table tbody"))
    $("table tbody").append(insert);
    $(".res").html("<h4>"+IC+"</h4>")
}


    var delta = Math.pow(10,-6);    //Tolerancia
    $(".delta").html(delta)
    var bandera = false;            //condicion para terminar el loop

    var input_A = 3.5;
    var input_B = 4;
    $(".intervalo").html("["+input_A+", "+input_B+"]")
    var c = 0;

    var YC = 0;
    var YA = funcion(input_A);      //funcion evaluada en A
    var YB = funcion(input_B);      //funcion evaluada en B

    print(YA, YB, YC,input_A,input_B,c);
    var max = 1 + parseInt( (Math.log(input_B-input_A)-Math.log(delta))/Math.log(2) ) // calculo de maximo numero de iteraciones

    if(sign(YA)==sign(YB)){
        alert("Los valores F(A) y F(B), no tienen cambio de signo");
    }

    for(var k=1;max>=k;k++){
        c = (input_A + input_B)/2
        YC = funcion(c);

        if(YC==0){
            input_A = c;
            input_B = c;
        }else if(sign(YB)==sign(YC)){
            input_B = c;
            YB = YC;
        }else{
            input_A = c;
            YA = YC;
        }

        print(YA, YB, YC,input_A,input_B,c);
        if((input_B - input_A) > delta) bandera = true;
        if(!bandera) break;


    }
})
