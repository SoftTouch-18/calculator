        // GLOBAL VARIABLE STARTS HERE
        let firstScreenValue = document.getElementById('text')
        let operands = ''
        let secondval = ''
        let equalval = ''
        let clear = true
        let removeperiod = false
        // GLOBAL VARIABLES ENDS HERE
        // ALL NUMBER FUNCTION STARTS HERE
        function param(message) {
            firstScreenValue.value += message
            if (clear){
                firstScreenValue.value = message
                clear = false
            }
            removeperiod = false
            if (operator.value == '1 / (0)') {
                operator.value = null
                // firstScreenValue.value = message
            }
        }
        // ALL NUMBERS FUNCTION ENDS HERE
        // PERIOD FUNCTION STARTS HERE
        function period(message) {
            let enter = document.getElementById('text').value
            firstScreenValue.value += message
            if (removeperiod){
                firstScreenValue.value = enter
            }
            if (clear){
                firstScreenValue.value = message
                clear = false
            }
            removeperiod = true 
            if (firstScreenValue.value == message) {
                firstScreenValue.value = '0' + message
            }
        }
        // ALL OPERATOR FUNCTION STARTS HERE
        function oper(message) {
            equals()
            operands = message
            operator.value = firstScreenValue.value + message
            secondval = firstScreenValue.value
            clear = true
            removeperiod = false

            if (operator.value == message) {
                operator.value = '0' + message
            }
            if (firstScreenValue.value == 'Cannot divide by zero') {
                operator.value = '1 / (0)'
            }
        }
        // ALL OPERATOR FUNCTIONS ENDS HERE 
        // EQUALS TO FUNSTION STARTS HERE
        function equals(){
            if (clear){
                operands = firstScreenValue.value
                firstScreenValue.value = operands
                clear = false
            }
            if (operands == ' ⨉ ') {
                firstScreenValue.value = secondval*firstScreenValue.value
            }
            else if (operands == ' + ') {
                firstScreenValue.value = Number(secondval)+Number(firstScreenValue.value)
            }
            else if (operands == ' - ') {
                firstScreenValue.value = secondval-firstScreenValue.value
            }
            else if (operands == ' ÷ ') {
                firstScreenValue.value = secondval / firstScreenValue.value
            }
            if (firstScreenValue.value == 'Infinity') {
                firstScreenValue.value = 'Cannot divide by zero'
            }

            operands = null
            operator.value = null
            clear = true
            removeperiod = false
        }
        // EQUALS TO FUNCTION ENDS HERE
        // CLEARALL FUNCTION STARTS HERE
        function clearall() {
            firstScreenValue.value = null
            operator.value=null
            secondval=null
            operands=null
            removeperiod = false
        }
        // CLEARALL FUNCTION ENDS HERE
        // CLEARTEXT FUNCTION STARTS HERE
        function cleartext() {
            firstScreenValue.value=null
        }
        // CLEAR TEXT FUNCTION ENDS HERE
          // INVERSEOPER FUNCTION STARTS HERE
          function inverseoper(message) {
            operator.value += message + firstScreenValue.value
            secondval = firstScreenValue.value
            operands = message
            clear=true
            if (operands == '1 / '){
                firstScreenValue.value = 1 / secondval
            }
            if (operands == '√') {
                firstScreenValue.value = Math.sqrt(secondval)
            }
            if (operator.value == '√') {
                operator.value = '√(0)'
            }
            if (operator.value == '1 / 0') {
                firstScreenValue.value = 'Cannot divide by zero'
                operator.value = '1 / (0)'
            }
            if (operator.value == '1 / ' && secondval == '') {
                firstScreenValue.value = 'Cannot divide by zero'
                operator.value = '1 / (0)'
            }
        }
        function del() {
            firstScreenValue.value = firstScreenValue.value.slice(0,-1)
        }
        // INVERSEOPER FUNCTION ENDS HERE
        // CLICKOPER FUNCTION STARTS HERE
        function clickoper(message) { 
            equals()
            operator.value += firstScreenValue.value + message
            secondval = firstScreenValue.value
            operands = message
            clear=true
            if (operands == '²'){
                firstScreenValue.value = secondval*secondval
            }
            if (operator.value = secondval+'²') {
                firstScreenValue.value
                operator.value = 'sqr ' + secondval
            }
            if (operator.value == 'sqr ') {
                operator.value = 'sqr(0)'
            }

            if (firstScreenValue.value == 'Cannot divide by zero') {
                operator.value = '1 / (0)'
            }
        }
        // CLICKOPER STARTS HERE
        // PERCENT FUNCTION STARTS
        function percent(message) {
            equals()
            operator.value = null
            secondval = firstScreenValue.value
            operands = message
            clear=true
            if (operands == '%') {
                firstScreenValue.value = secondval / 100
            }
        }
        // PERCENT FUNCTION ENDS
        // PLUSMINUS FUNCTION STARTS HERE
        function plusminus() {
            firstScreenValue.value = - + firstScreenValue.value
        }
        // PLUSMINUS FUNCTION ENDS HERE
        function zero(message) { 
            let enter = document.getElementById('text').value

            if (firstScreenValue.value == enter   ) {
                firstScreenValue.value += message
            }
            if (firstScreenValue.value == message){
                firstScreenValue.value = null  
            }

            if (clear){
                firstScreenValue.value = message
                clear = false
            }
        }