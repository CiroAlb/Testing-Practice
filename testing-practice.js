function capitalize(string){
    const capitalized =
    string.charAt(0).toUpperCase()
    + string.slice(1);
    return capitalized
}

function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
}

const calculator = {
    add : function(a,b){
        return a + b
    },
    subtract: function(a,b){
        return a - b
    },
    divide: function(a,b){
        return b === 0 ? 'No dividir por 0' : a/b
    },
    multiply: function(a,b){
        return a * b
    }
}

function caesarCipher(str, shift) {
    var output = "";
     
    for (var i = 0; i < str.length; i++) {
      var ascii = str[i].charCodeAt();
       
      if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
        ascii += shift;
        if ((ascii > 90 && str[i] <= 'Z') || ascii > 122) {
          ascii -= 26;
        }
      }
     
      output += String.fromCharCode(ascii);
    }

    return output;
  }

function analyzeArray(arr){
    let prom = 0;
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        prom = prom + arr[i];
        if(min > arr[i]){min = arr[i]};
        if(max < arr[i]){max = arr[i]};
    }
    prom = prom / arr.length;
    return {
        average: prom,
        min : min,
        max : max,
        length: arr.length
    }
}


module.exports = {capitalize,reverseString,calculator,analyzeArray, caesarCipher};