//maths operator function
let add = (num1, num2 )=>{
    return (num1 + num2);
}
let subtract = (num1, num2)=>{
    return (num1 - num2)
}
let multiply = (num1, num2)=>{
    return (num1*num2)
}
let divide = (num1, num2) =>{
    return (num1/num2)
}
let operate = ( operator, num1, num2)=>{
        return operator(num1, num2)
}

// Get values of button
let buttonLength = document.querySelectorAll(".buttonValue").length;
let result = document.getElementById('result')
let displayResult = document.getElementById('displayResult')

//Loop through the buttons and display text on the Screen
for (let i = 0; i < buttonLength; i++) {
    document.querySelectorAll(".buttonValue")[i].addEventListener(
        "click", function(){
            switch (this.innerHTML) {
                case 'C':
                    result.innerHTML = ''
                    displayResult.innerHTML = ''
                    break;
                case '←':
                    result.innerHTML = result.innerHTML.slice(0, -1)
                    displayResult.innerHTML = result.innerHTML
                    break;
                case '=':
                  if(displayResult.innerHTML === ''){
                    return displayResult.innerHTML = "Error! Make Calculation Please."
                  }
                  for (let i = 0; i < result.innerHTML.length; i++) {
                    if (result.innerHTML[i] === "+") {
                        let adding = operate(add, parseFloat(result.innerHTML.split('+')[0]), 
                        parseFloat(result.innerHTML.split('+')[1]))
                        result.innerHTML = adding
                        displayResult.innerHTML = adding
                    }else if(result.innerHTML[i] === "-") {
                        let subtracting = operate(subtract, parseFloat(result.innerHTML.split('-')[0]),
                        parseFloat(result.innerHTML.split('-')[1]))
                        result.innerHTML = subtracting
                        displayResult.innerHTML = subtracting
                    }else if(result.innerHTML[i] === "x"){
                        let multiplying = operate(multiply, parseFloat(result.innerHTML.split('x')[0]), 
                        parseFloat(result.innerHTML.split('x')[1]))
                        result.innerHTML = multiplying
                        displayResult.innerHTML = multiplying
                    }else if(result.innerHTML[i] === "÷"){
                        if (result.innerHTML[i+1] === "0") {
                           displayResult.innerHTML = "Error cannot divide by zero"
                        }
                        else {
                           let division = operate(divide, parseFloat(result.innerHTML.split('÷')[0]), 
                           parseFloat(result.innerHTML.split('÷')[1]))
                           result.innerHTML = division
                           displayResult.innerHTML = division
                        }
                    }
                  }
                  break;
                  case '+':
                    result.innerHTML+= this.innerHTML
                    break
                  case '-':
                    result.innerHTML+= this.innerHTML
                    break
                  case '÷':
                    result.innerHTML+= this.innerHTML
                    break
                  case 'x':
                    result.innerHTML+= this.innerHTML
                    break
                default:
                    result.innerHTML+= this.innerHTML
                    result.innerHTML.includes('+') ? 
                    displayResult.innerHTML = this.innerHTML.split("+").pop() 
                    :result.innerHTML.includes('-') ?  
                    displayResult.innerHTML = this.innerHTML.split("-").pop()
                    :result.innerHTML.includes('x') ?
                    displayResult.innerHTML = this.innerHTML.split("x").pop()
                    :result.innerHTML.includes('÷') ?
                    displayResult.innerHTML = this.innerHTML.split("÷").pop()
                    :displayResult.innerHTML = result.innerHTML         
            }
        })
    }








