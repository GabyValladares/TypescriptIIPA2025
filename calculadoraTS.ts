function sumarTS():void {
    let n1:number=(document.getElementById('n1')as HTMLInputElement).valueAsNumber;
    let n2:string = (document.getElementById('n2')as HTMLInputElement).value;
    let resultado:number = (n1) +parseFloat(n2);
   (document.getElementById('resultado') as HTMLElement).innerHTML="El resultado es:"+resultado.toString();}




//PRACTICA GENERAL DE LA SINTAXIS
let suma:number=0;
let n1:string|number|number[]=[1,2,4,];
//let lista:string|boolean|number|string[]=['hola'];
let n2:number=10;
n1.forEach(e => {
   suma=e+n2;
   console.log("número 1:"+e+"número 2:"+n2+"="+suma);
});
 
 

   let multiplicacion:number=1;
   let listaNum:number[]=[2,10,19,9,78];
   listaNum.forEach(e => {
      multiplicacion*=e;
     console.log("El número:"+e+" "+esPrimo(e));
   });
   console.log("La Multiplicación es:"+multiplicacion);


function esPrimo(n: number): string {
    if (n <= 1) return "No es primo";
    if (n === 2) return "Es primo";

    let raiz: number = Math.sqrt(n);

    for (let i = 2; i <= raiz; i++) {
        if (n % i === 0) {
            return "No es primo";
        }
    }

    return "Es primo";
}