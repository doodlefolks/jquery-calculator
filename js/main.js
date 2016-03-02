'use strict';
(function () {
  let calc = {
    operands: ['', ''],
    operator: '',
    calculate: function () {
      let result;
      switch (this.operator) {
        case '+':
          result = parseInt(this.operands[0]) + parseInt(this.operands[1]);
          break;
        case '-':
          result = parseInt(this.operands[0]) - parseInt(this.operands[1]);
          break;
        case 'x':
          result = parseInt(this.operands[0]) * parseInt(this.operands[1]);
          break;
        case '/':
          result = parseInt(this.operands[0]) / parseInt(this.operands[1]);
      }
      this.operands = ['', ''];
      this.operator = '';
      return result;
    },
    clearCalc: function () {
      this.setScreenText('');
      this.operands = ['', ''];
      this.operator = '';
    },
    setOperator: function (operator) {
      if (this.operator === '' && this.operands[0] !== '') {
        this.operator = operator;
        this.setScreenText(this.operands[0] + this.operator);
      }
    },
    setScreenText: function (text) {
      $('#screen').text(text);
    },
    updateOperand: function (num) {
      if (this.operator === '') {
        this.operands[0] += num;
        this.setScreenText(this.operands[0]);
      } else {
        this.operands[1] += num;
        this.setScreenText(this.operands[0] + this.operator + this.operands[1]);
      }
    },
  };
  $('.buttons span').on('click', function () {
    if (this.className === 'operator') {
      switch ($(this).attr('id')) {
        case 'cancel':
          calc.clearCalc();
          break;
        case 'divide':
          calc.setOperator('/');
          break;
        case 'multiply':
          calc.setOperator('x');
          break;
        case 'subtract':
          calc.setOperator('-');
          break;
        case 'add':
          calc.setOperator('+');
          break;
        case 'calc':
          calc.setScreenText(calc.calculate());
      }
    } else {
      calc.updateOperand(this.innerHTML);
    }
  });
})();
