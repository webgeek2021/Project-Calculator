
const textfield = document.getElementById("textfield")
let expression  = ""
let symbols = ['+','/','*','-','%','.']

function display(c)
{
    let lastchar = expression.charAt(expression.length-1)
    if(symbols.includes(lastchar) && symbols.includes(c))
    {
        expression = expression.slice(0,expression.length-1) + c
    }
    else{
    expression += c;
    }
    textfield.innerText = expression
}
function erase(){
    expression = expression.slice(0,expression.length-1)
    textfield.innerText = expression
}
function clearAll(){
    expression = ""
    textfield.innerText = ""
}
function evalute(){
    expression = eval(expression).toString()
    textfield.innerText = expression

}