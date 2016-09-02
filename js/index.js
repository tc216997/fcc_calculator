$(document).ready(function(){
  var string = '';
  var previousAnswer = 0;
  $('button').click(function(e){
    e.preventDefault();
    var $clicked = $(this).text();
    switch ($clicked) {
      case 'AC':
        string = '';
        $('#innerText').text('');
        break;
      case 'CE':
        var newString = string.slice(0, string.length - 1);
        $('#innerText').text(newString);
        string = newString;
        break;
      case '=':
        var exp = string.replace(/÷/g, '/').replace(/x/g, '*').replace(/%/g, '*.01');     
        var answer = math.eval(exp);
        previousAnswer = answer;
        string = answer.toString();
        string = '';
        if(answer.toString().length > 8) {
          $('#innerText').text(answer.toExponential(5))
        } else {
          $('#innerText').text(answer.toString());
          }
        break;
      case 'Ans':
        string += previousAnswer;
        $('#innerText').text(string);
        break;
      default:
        string += $(this).text();
        $('#innerText').text(string);
    }
  });
});