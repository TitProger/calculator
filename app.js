let a = '';
let b = '';
let sign = '';
let finish = false;
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const symbols = ['^', '+', '-', '%', '/', '*'];
const out = document.querySelector('.p');

function clear() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.AC').onclick = clear;

document.querySelector('.calk').onclick = (event) => {

    if (!event.target.classList.contains('butten')) return

    if (event.target.classList.contains('AC')) return;

    out.textContent = '';

    const buttonText = event.target.textContent;

    if (numbers.includes(buttonText)) {
      if (b === '' && sign === '') {
           a += buttonText
          out.textContent = a;
       } 
       else if (a !== '' && b !== '' && finish) {
        b = buttonText
        finish = false
        out.textContent = b

       }
       else {
        b += buttonText
        out.textContent = b
       }
       return

    }
 
    if (symbols.includes(buttonText)) {
      sign = buttonText
      out.textContent = sign
    }  


    if (buttonText === '=') {
      if (b == '') {
        b = a
      }
      switch (sign) {
        case '+':
            a = parseFloat(a) + parseFloat(b);
            break;
        case '-':
            a = parseFloat(a) - parseFloat(b);
            break;
        case '*':
            a = parseFloat(a) * parseFloat(b);
            break;
        case '/':
            if (b === '0') {
              out.textContent = 'Ошибка';
              a = ''
              b = ''
              sign = ''
              return
            }
            a = parseFloat(a) / parseFloat(b);
            break;
        case '^':
          const number = a
          a = Math.pow(number, b)
          console.log(a, b, sign);
          break
        case '%':
          a = a / 100
          break
    }
    finish = true;
    out.textContent = a;
}
}