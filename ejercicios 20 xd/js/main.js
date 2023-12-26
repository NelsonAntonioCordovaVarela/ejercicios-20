//console.log("probando si esta conectado")
class Ejercicios{
    
    divisores(numero){
        let divisores = [];
        for (let i = 1; i <= numero; i++) {
          if (numero % i === 0) {
            divisores.push(i);
          }
        }
        return divisores;
    }

    Ejercicio1() {
        //Divisores de un número
        let numero = document.getElementById("n1").value;
        let divisores_del_numero = this.divisores(numero);
        //console.log("Los divisores del número son:", divisores_del_numero);
        document.getElementById("Respuesta1").innerHTML = "Divisores del numero son : " + divisores_del_numero;
    }
    
    
    Es_numero_perfecto(numero) {
        const divisores = this.divisores(numero);
        let suma_divisores = 0;
       
        for (let i = 0; i < divisores.length; i++) {
           suma_divisores += divisores[i];
        }
        if (suma_divisores === numero){
          return true;
        }
    
        return false;
    }
    
    // *** 
    Ejercicio2() {
        let numero = document.getElementById("n1").value;
        let Es_perfecto = this.Es_numero_perfecto(numero);
        //console.log("¿El número es perfecto?:", Es_perfecto);
        document.getElementById("Respuesta2").innerHTML = "El numero perfecto es..... : " + Es_perfecto;
    }
    
    
    
    
    
    // ***
    Es_primo(numero) {
        if (numero <= 2) {
          return false;
        }
    
        for (let i = 2; i <= numero ; i++) {
          if (numero % i === 0) {
            return false;
          }
        }
    
        return true;
    }



    Ejercicio3() {
        let numero = document.getElementById("n1").value;
        let Es_primo = this.Es_primo(numero);
        //console.log("¿El número es primo?:", Es_primo);
        document.getElementById("Respuesta3").innerHTML = "Numero primo : " + Es_primo;
    }
    
    
    

    // ***
    Son_primos_gemelos(numero1, numero2) {
        if (numero1 === numero2) {
            return false;
        }
        return Es_primo(numero1) && Es_primo(numero2);
    }

    Ejercicio4(){
        let numero1 = document.getElementById("n1").value;
        let numero2 = document.getElementById("n2").value;
        let son_gemelos = this.Son_primos_gemelos(numero1, numero2);
        //console.log("¿Son primos gemelos?:", son_primos_gemelos);
        document.getElementById("Respuesta4").innerHTML = "Son primos gemelos... " + son_gemelos;
    }


    
    Concatenar(cadena1, cadena2) {
        return cadena1+ " " +cadena2;
    }
    
    Ejercicio5(){
        let cadena1 = document.getElementById("n1").value;
        let cadena2 = document.getElementById("n2").value;
        let cadena_concatenada = this.Concatenar(cadena1, cadena2);
        //console.log("La cadena concatenada es:", cadena_concatenada);
        document.getElementById("Respuesta5").innerHTML = "Cadena concatenada : " + cadena_concatenada;
    }
    
    
    
    
    
    
    
    
    
    buscarsubcadena(cadena, buscado){
        let longCad = 0, longBus = 0, enc= false, posaux= 0, posb= 0, posc=0
        longCad = cadena.length
        longBus = buscado.length
        while (posc < longCad && enc == false) {
            if (cadena[posc] == buscado[0]) {
                posaux = posc
                while (posaux < longCad && posb < longBus && cadena[posaux] == buscado[posb]) {
                    posaux++
                    posb++
                }
                if (posb == longBus) {
                    enc = true
                }else{
                    posc = posc + 1
                }
            }
            else{
                posc = posc + 1
            }
        }
        if (enc == true) {
            return posc
        }else{
            return -1
        }
    }
    
    Ejercicio6(){
    let cadena = document.getElementById("n1").value
    let buscado = document.getElementById("n2").value
    let resp = document.getElementById("Respuesta6")
    let pos
    pos = this.buscarsubcadena(cadena, buscado)
    if (pos>=0) {
        resp.innerHTML = `${buscado} se encontro en la posicion ${pos} de la cadena`
    }else{
        resp.innerHTML= `${buscado} no se encuentra en la cadena`
    }
    }
    
    


    insertar(cad, insert, posicion){
        let cadf=""
        //primera parte de la cadena antes de la posicion ingresada
        for (let i = 0; i < posicion; i++) {
            cadf= cadf + cad[i]
        }
        //se agrega la subcadena
        cadf= cadf + insert
        //segunda parte de la cadena despues de la posicion ingresada
        for (let i = posicion; i < cad.length; i++) {
            cadf = cadf + cad[i]
        }
        return cadf
    }

    Ejercicio7(){
        let cad = document.getElementById("n1").value
        let insert = document.getElementById("n2").value
        let posicion = document.getElementById("n3").value
        let resp = document.getElementById("Respuesta7")
        let pos = this.insertar(cad, insert, posicion)
        resp.innerHTML = `cadena final: ${pos}`
    }
    
    
    eliminar(cad, elim){
        let cadf="", enc = false, posc= 0
        //se verifica si la subcadena es verdadera
        for (let i = 0; i < cad.length; i++) {
            //se define variable de control
            let verdadero = true
            //se inicia un bucle para la subcadena 
                for (let j = 0; j < elim.length; j++) {
                    //ejem. cad = abcde elim = cd i= 2 
                    if (cad[i+j] !== elim[j]) {//cad[i+j] compara caracteres de la subcadena en la cad original de manera consecutiva osea cad[2+0] = c == elim[0] -> cad[2+1] = d == elim[1]
                        verdadero= false
                        break
                    }
                }
                if (verdadero == true) {
                    // Se encontró una coincidencia
                    enc = true
                    i = i + elim.length -1 // Saltar la longitud de la subcadena, resta -1 xq el bucle externo ya esta sumando 1
                }else{
                     // No hay coincidencia, agregar el carácter a la cadena resultante
                    cadf= cadf + cad[i]
                }
            }
            if (enc == true) {
                return cadf
            }else{
                return cad
            }
    }
    
    
    
    Ejercicio8(){
        let cad = document.getElementById("n1").value
        let elim = document.getElementById("n2").value
        let resp = document.getElementById("Respuesta8")
        let pos = this.eliminar(cad, elim)
        resp.innerHTML = `La cadena final es: ${pos}`
    }
    
    
    
    arreglocadena(array){
        let cad = ""
        for (let i = 0; i < array.length; i++) {
            cad = cad + array[i]
            if (i < array.length - 1) {
                cad = cad + " "
            }
        }
        return cad
    }

    Ejercicio9(){
        let array=["hola","soy", "un", "arreglo"]
        let resp= document.getElementById("Respuesta9")
        let cadresp = this.arreglocadena(array)
        resp.innerHTML = `La cadena final es: ${cadresp}`
    }
    

    mayordearreglo(arreglo){
        let  mayor = 0
        mayor = arreglo[0]
        for (let i = 0; i < arreglo.length; i++) {
            if (mayor <= arreglo[i]) {
                mayor = arreglo[i]
            }
        }
        return mayor
    }

    Ejercicio10(){
        let n1= document.getElementById("n1").value
        let arreglo = n1.split(",").map(Number)
        let resp = document.getElementById("Respuesta10")
        let nummayor = this.mayordearreglo(arreglo)
        resp.innerHTML = `El numero mayor dentro del arreglo es ${nummayor}`
    }
    
    //Aqui van despues los de Karen (11 - 15)
    
    
    BUSCARARREGLO(n1, n2){
        let arreglo, i=0, longi, data=false, resp= 0;
        arreglo = n1.split(",");
        longi = arreglo.length;
        for (i = 0; i < longi; i++) {
            if (n2 == arreglo[i]) {
                data=true;
            }
        }
        if (data==true) {
            document.getElementById("Respuesta11").innerHTML = "Si esta en el arreglo";
            //console.log("Si esta en el arreglo")
        
        } else {
            document.getElementById("Respuesta11").innerHTML = "NO esta en el arreglo";
            //console.log("No esta en el arreglo")
        }   
        return resp;    
    }

    Ejercicio11(){
        let num1=[], num2="", result=0;
        num1 = document.getElementById("n1").value;
        num2 = document.getElementById("n2").value;
        result = this.BUSCARARREGLO(num1, num2);
    }
    
    
    
    INSARREGLO(data, ins){
        let arreglo, longi, resp=0;
        arreglo = data.split(",");
        longi = arreglo.length;
        arreglo.push(ins)
        document.getElementById("Respuesta12").innerHTML= "Nuevo arreglo: " + arreglo;
        return resp;
    }
    
    
    Ejercicio12(){
        let dataa=[], inse="", result=0;
        dataa = document.getElementById("n1").value;
        inse = document.getElementById("n2").value;
        result = this.INSARREGLO(dataa, inse);
    }
    
    
    
    ELIMINARREGLO(dat1, delet){
        let arreglo, longi, indice;
        arreglo = dat1.split(",");
        longi = arreglo.length;
        indice = arreglo.indexOf(delet);
        if (indice >= 0){
            arreglo.splice(indice, 1)
        }
        document.getElementById("Respuesta13").innerHTML= "Nuevo arreglo: "+ arreglo;
        return arreglo;     
    }

    Ejercicio13(){
        let numme=[], delett="", result = 0;
        numme = document.getElementById("n1").value;
        delett = document.getElementById("n2").value;
        result = this.ELIMINARREGLO(numme, delett);
    }
    

    CADARR(name1){
        let arreglo, resp=0;
        arreglo = name1.split("");
        document.getElementById("Respuesta14").innerHTML = "Arreglo : "+ arreglo;
        return arreglo;

    }

    Ejercicio14(){
        let namee=[], result=0;
        namee = document.getElementById("n1").value;
        result = this.CADARR(namee);
    }
    
    


    //EJERCICIO 15 KAREN **
    BASE2(b10){
        let array, div=0, res, ent, c = 0, x = 0, rr, cc = 0, array2, longi;
        array = [];
        array2 = 0
        while (div >= 0){
            if (c == 0) {
                div = Math.trunc(b10/2);
                x = div;
                res = b10%2;
                array[c] = res;
            } else if (c > 0 && div != 0){
                div = Math.trunc(x/2);
                res = x%2;
                array[c] = res;
                x = div;
            } else {
                break;
            }
            c++
        }
        longi = array.length;
        for (let i = longi-1; i >= 0; i--){
            array2 += array[i];
        }
        rr = array2;
        return rr;
    }

    Ejercicio15(){
        let b10 = 0, result = 0;
        b10 = document.getElementById("n1").value;
        result = this.BASE2(b10)
        document.getElementById("Respuesta15").innerHTML = "Base 10 : " + b10;
        document.getElementById("Respuesta15").innerHTML = "Base 2 : " + result;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    tobase8(b10) {
        let array, dive=0, resi, ent, c = 0, x = 0, rr, cc = 0, array2, longi;
        array = [];
        array2 = 0;
        
        while (dive >= 0) {
            
            if (c == 0) {
                dive = Math.trunc(b10/8);
                x = dive;
                resi = b10%8;
                array[c] = resi;
            } else if (c > 0 && dive != 0) {
                dive = Math.trunc(x/8);
                resi = x%8;
                array[c] = resi;
                x = dive;
            } else {
                break;
            }
            c++;
        }

        longi = array.length;
        for (let i = longi-1; i >= 0; i--) {
            array2 += array[i];
        }
        rr = array2;
        return rr;


        
    }

    Ejercicio16() {
        let b10, result;
        b10 = document.getElementById("n1").value;
        result = this.tobase8(b10)
        document.getElementById("Respuesta16").innerHTML = "Base 10 :" + b10;
        document.getElementById("Respuesta16").innerHTML += "<br> Base 8 :" + result;
    }


    tobase16(b10) {
        let array, dive=0, resi, ent, c = 0, x = 0, rr, cc = 0, array2, longi;
        array = [];
        array2 = 0;
        while (dive >= 0) {
            
            if (c == 0) {
                dive = Math.trunc(b10/16);
                resi = b10%16;
                if (resi > 9) {
                    switch (resi) {
                        case 10:
                            array[c] = "A";
                            break;
                        case 11:
                            array[c] = "B";
                            break;
                        case 12:
                            array[c] = "C";
                            break;
                        case 13:
                            array[c] = "D";
                            break;
                        case 14:
                            array[c] = "E";
                            break;
                        case 15:
                            array[c] = "F"
                               
                    }
                } else {
                    array[c] = resi;
                }
                x = dive;
            } else if (c > 0 && dive != 0) {
                dive = Math.trunc(x/16);
                resi = x%16;
                if (resi > 9) {
                    switch (resi) {
                        case 10:
                            array[c] = "A";
                            break;
                        case 11:
                            array[c] = "B";
                            break;
                        case 12:
                            array[c] = "C";
                            break;
                        case 13:
                            array[c] = "D";
                            break;
                        case 14:
                            array[c] = "E";
                            break;
                        case 15:
                            array[c] = "F"
                               
                    }
                } else {
                    array[c] = resi;
                }
                x = dive;
            } else {
                break;
            }
            c++;
        }
        longi = array.length;
        for (let i = longi-1; i >= 0; i--) {
            array2 += array[i];
        }
        rr = array2;
        return rr;



    }

    Ejercicio17() {
        let b10 = 0, result = 0;
        b10 = parseInt(document.getElementById("n1").value);
        result = this.tobase16(b10);
        document.getElementById("Respuesta17").innerHTML = "Base 10 :" + b10;
        document.getElementById("Respuesta17").innerHTML += "<br>Base 16 :" + result;

    }
    

    tobase10(b2) {
        let i = 0, array, multi, acu = 0, longitud, ii=0, z, c;
        array = [];
        for (ii = 0; ii < b2.length; ii++) {
            array[ii] = b2[ii];
        }
        
        z = array.map(Number);
        longitud = array.length;
        for (i = 0; i < longitud; i++) {
            c = longitud-1 -i;
            acu += z[i] * 2**c;
        }
        return acu;
    }

    Ejercicio18() {
        let b2 = "" , result;
        b2 = document.getElementById("n1").value;
        result = this.tobase10(b2);
        console.log(result)
        document.getElementById("Respuesta18").innerHTML = "Base 2 :" + b2;
        document.getElementById("Respuesta18").innerHTML += "<br>Base 10 :" + result; 
    }

    




    twobase8(b2) {
        let longitud, i, comp, am = true, c = 0, rr = "", dive, pp = 0, anotherv;
        let idk = "", tam;
        longitud = b2.length;
        comp = longitud%3;
        if (comp == 0) {
            while (am == true) {
                switch (b2.substring(c, c+3)) {
                    case "000":
                        rr += "0";
                        break;
                    case "001":
                        rr += "1";
                        break;
                    case "010":
                        rr += "2";
                        break;
                    case "011":
                        rr += "3";
                        break;
                    case "100":
                        rr += "4";
                        break;
                    case "101":
                        rr += "5";
                        break;
                    case "110":
                        rr += "6";
                        break;
                    case "111":
                        rr += "7";
                        break;
                }
                c += 3;
                if (c==longitud) {
                    break;
                }
            }
            
            return rr;
        } else {
            dive = Math.trunc(longitud/3);
            pp = longitud -1;
            while (am == true) {
                if (c<=dive) {
                    
                    switch (b2.substring(pp-2, pp+1)) {
                        case "000":
                            rr += "0";
                            break;
                        case "001":
                            rr += "1";
                            break;
                        case "010":
                            rr += "2";
                            break;
                        case "011":
                            rr += "3";
                            break;
                        case "100":
                            rr += "4";
                            break;
                        case "101":
                            rr += "5";
                            break;
                        case "110":
                            rr += "6";
                            break;
                        case "111":
                            rr += "7";
                            break;

                    }
                    pp -= 3;
                    c += 1;

                } else if (c>dive) {
                    if (comp==2) {
                        anotherv = "0" + b2.substring(0, 2);
                    } else {
                        anotherv = "00" + b2[0];
                    }
                    
                    switch (anotherv) {
                        case "000":
                            rr += "0";
                            am = false;
                            break;
                        case "001":
                            rr += "1";
                            am = false;
                            break;
                        case "010":
                            rr += "2";
                            am = false;
                            break;
                        case "011":
                            rr += "3";
                            am = false;
                            break;
                        case "100":
                            rr += "4";
                            am = false;
                            break;
                        case "101":
                            rr += "5";
                            am = false;
                            break;
                        case "110":
                            rr += "6";
                            am = false;
                            break;
                        case "111":
                            rr += "7";
                            am = false;
                            break;


                            
                    }


                }

            }
            tam = rr.length;
            for (i = tam -1; i >= 0; i--) {
                idk += rr[i];
            }
            return idk;
        }
    }


    Ejercicio19() {
        let b2 = "", result = "";
        b2 = document.getElementById("n1").value;
        result = this.twobase8(b2);
        console.log(result);
        document.getElementById("Respuesta19").innerHTML = "Base 2 (Binario) : " + b2;
        document.getElementById("Respuesta19").innerHTML += "<br>Base 8 (octal) : " + result;
    }



    twobase16(b2) {
        let longitud, i, comp, am = true, c = 0, rr = "", dive, pp = 0, anotherv;
        let idk = "", tam;
        longitud = b2.length;
        comp = longitud%4;
        if (comp == 0) {
            while (am == true) {
                switch (b2.substring(c, c+4)) {
                    case "0000":
                        rr += "0";
                        break;
                    case "0001":
                        rr += "1";
                        break;
                    case "0010":
                        rr += "2";
                        break;
                    case "0011":
                        rr += "3";
                        break;
                    case "0100":
                        rr += "4";
                        break;
                    case "0101":
                        rr += "5";
                        break;
                    case "0110":
                        rr += "6";
                        break;
                    case "0111":
                        rr += "7";
                        break;
                    case "1000":
                        rr += "8";
                        break;
                    case "1001":
                        rr += "9";
                        break;
                    case "1010":
                        rr += "A";
                        break;
                    case "1011":
                        rr += "B";
                        break;
                    case "1100":
                        rr += "C";
                        break;
                    case "1101":
                        rr += "D";
                    case "1110":
                        rr += "E";
                        break;
                    case "1111":
                        rr += "F";
                        break
                }
                c += 4;
                if (c>=longitud) {
                    break;
                }
            }
            
            return rr;
        } else {
            dive = Math.trunc(longitud/4);
            pp = longitud -1;
            while (am == true) {
                if (c<=dive) {
                    
                    switch (b2.substring(pp-3, pp+1)) {
                        case "0000":
                        rr += "0";
                        break;
                        case "0001":
                        rr += "1";
                        break;
                        case "0010":
                        rr += "2";
                        break;
                        case "0011":
                        rr += "3";
                        break;
                        case "0100":
                        rr += "4";
                        break;
                        case "0101":
                        rr += "5";
                        break;
                        case "0110":
                        rr += "6";
                        break;
                        case "0111":
                        rr += "7";
                        break;
                        case "1000":
                        rr += "8";
                        break;
                        case "1001":
                        rr += "9";
                        break;
                        case "1010":
                        rr += "A";
                        break;
                        case "1011":
                        rr += "B";
                        break;
                        case "1100":
                        rr += "C";
                        break;
                        case "1101":
                        rr += "D";
                        case "1110":
                        rr += "E";
                        break;
                        case "1111":
                        rr += "F";
                        break

                    }
                    pp -= 4;
                    c += 1;

                } else if (c>dive) {
                    if (comp==3) {
                        anotherv = "0" + b2.substring(0, 3);
                    } else if (comp == 2) {
                        anotherv = "00" + b2.substring(0, 2);
                    } else {
                        anotherv = "000" + b2[0];
                    }
                    
                    switch (anotherv) {
                        case "0000":
                            rr += "0";
                            am = false;
                            break;
                        case "0001":
                            rr += "1";
                            am = false;
                            break;
                        case "0010":
                            rr += "2";
                            am = false;
                            break;
                        case "0011":
                            rr += "3";
                            am = false;
                            break;
                        case "0100":
                            rr += "4";
                            am = false;
                            break;
                        case "0101":
                            rr += "5";
                            am = false;
                            break;
                        case "0110":
                            rr += "6";
                            am = false;
                            break;
                        case "0111":
                            rr += "7";
                            am = false;
                            break;
                        case "1000":
                            rr += "8";
                            am = false;
                            break;
                        case "1001":
                            rr += "9";
                            am = false;
                            break;
                        case "1010":
                            rr += "A";
                            am = false;
                            break;
                        case "1011":
                            rr += "B";
                            am = false;
                            break;
                        case "1100":
                            rr += "C";
                            am = false;
                            break;
                        case "1101":
                            rr += "D";
                            am = false;
                            break;
                        case "1110":
                            rr += "E";
                            am = false;
                            break;
                        case "1111":
                            rr += "F";
                            am = false;
                            break;

                            
                    }


                }

            }
            tam = rr.length;
            for (i = tam -1; i >= 0; i--) {
                idk += rr[i];
            }
            return idk;
        }
    }
    

    Ejercicio20() {
        let b2 = "", result = "";
        b2 = document.getElementById("n1").value;
        result =this.twobase16(b2);
        console.log(result);
        document.getElementById("Respuesta20").innerHTML = "Base 2 (Binario) : " + b2;
        document.getElementById("Respuesta20").innerHTML += "<br>Base 16 (Hexadecimal) : " + result;
    }



















}


//Para poder usar una clase hay que crear una variable con el nombre igual de nuestra clase para ejecutar todo
let eje = new Ejercicios()
//eje.Ejercicio18()
//eje.Ejercicio19()
//eje.Ejercicio20()

