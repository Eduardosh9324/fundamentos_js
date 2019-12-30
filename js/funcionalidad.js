/*


*/

function getValues(){
    console.log('entre a la funcion..')
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
   
    //console.log(num1)
    //console.log(num2)
    //console.log('resultado = ' + num1 + num2)
    //console.log(num1 + '+' + num2 + '=' + result) //backticks ``
    suma(num1,num2)
   

function suma(){
    let result = num1 + num2
    // console.log(`${num1} + ${num2} = ${result}`)// template strin
    let response = `${num1} + ${num2} = ${result}`
    document.getElementById('response').innerHTML = response
}

}