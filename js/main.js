'use strict'

var gStrToScreen = ''
var gStrEquation = ''
var gIsEction = false
var elDisplay = document.querySelector('.screen')
var elEquation = document.querySelector('p')


function addDigit(digit) {
    if (digit === 'open') digit = '('
    else if (digit === 'close') digit = ')'
    gStrToScreen += digit
    elDisplay.innerText = gStrToScreen
    gIsEction = false
}

function setOp(operator) {
    if (!gStrEquation && !gStrToScreen && (operator === '*' || operator === '/')) return
    if (gIsEction) gStrEquation = gStrEquation.substring(0, gStrEquation.length - 1)
    gStrEquation += gStrToScreen + operator
    gStrToScreen = '' 
    elDisplay.innerText = operator
    elEquation.innerText = gStrEquation
    gIsEction = true
}

function resolt() {
    if (gIsEction) return
    gStrEquation += gStrToScreen
    gStrToScreen = ''
    var sum = eval(gStrEquation)
    elEquation.innerText = gStrEquation + ' = ' + sum
    elDisplay.innerText = sum
    gStrEquation = ''
    gIsEction = true
}

function reset() {
    gStrToScreen = ''
    gStrEquation = ''
    gIsEction = false
    elDisplay.innerText = ''
    elEquation.innerText = 0
}

