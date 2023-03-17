/* exported titleCase */
function titleCase(title) {
  var lowerCase = title.toLowerCase();
  var array = lowerCase.split(' ');
  var first = '';
  var output = '';
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (var i = 0; i < array.length; i++) {
    if (array[i].length >= 4 || i === 0 || !minorWords.includes(array[i])) {
      first = array[i][0].toUpperCase();
      array[i] = first + array[i].slice(1);
    }

    if (array[i].includes(':') && array[i + 1].length <= 3) {
      first = array[i + 1][0].toUpperCase();
      array[i + 1] = first + array[i + 1].slice(1);
    }

    if (array[i] === 'Javascript:') {
      array[i] = 'JavaScript:';
    } else if (array[i] === 'Javascript') {
      array[i] = 'JavaScript';
    }

    if (array[i] === 'Api') {
      array[i] = 'API';
    }
  }

  output = array.join(' ');

  if (!output.includes('-')) {
    return output;
  }

  for (var x = 0; x < output.length; x++) {
    if (output[x] === '-') {
      first = output[x + 1].toUpperCase();
      return output.replace(output[x + 1], first);
    }
  }
}
