const _ = {
    clamp(number, lower, upper) {
      
      const lowerClampedValue = Math.max(number, lower);
  
      const clampedValue = Math.min(lowerClampedValue, upper);
  
      return clampedValue;
    },
  
    inRange(number, start, end) {
      
      if (end === undefined) {
        end = start;
        start = 0;
      }
      if (start > end) {
        let temp = end;
        end = start;
        start = temp;
      }
      let isInRange = (start <= number && number < end);
  
      return isInRange;
    },
  
    words(string) {
      
      const arrayOfWords = string.split(' ');
  
      return arrayOfWords;
    },
  
    pad(stringToPad, length) {
     
      if (stringToPad.length >= length) {
        return stringToPad;
      };
  
      const startPaddingLength = Math.floor(((length - stringToPad.length) / 2));
      
  
      const endPaddingLength = (length - stringToPad.length) - startPaddingLength;
  
      const paddedString = ' '.repeat(startPaddingLength) + stringToPad + ' '.repeat(endPaddingLength);
      //console.log(startPaddingLength);
      return paddedString;
    },
  
    has(object, key) {
      
      let hasValue;
  
      if (object[key] === undefined) {
        hasValue = false;
      } else {
        hasValue = true;
        // console.log(hasValue);
      }
      //console.log(hasValue);
      return hasValue;
    },
  
    invert(object) {
  
      let invertedObject = {};
  
      for (const [key, value] of Object.entries(object)) {
        //console.log(`${value}: ${key}`);
        invertedObject[value] = key;
  };
      return invertedObject;
    },
  
    findKey(object, predicate) {
  
      for (const [key, value] of Object.entries(object)){
        
        let predicateReturnValue = predicate(value);
        //console.log(key, value, predicateReturnValue);
        if (predicateReturnValue === true){
          return key;
        }
      }
      return undefined;
    },
  
    drop(array, number) {
  
      if (number === undefined) {
        number = 1;
      }
      droppedArray = array;
      droppedArray.splice(0, number);
      
      return droppedArray;
    },
  
    dropWhile(array, predicate) {
      
      let dropNumber = array.findIndex(function(element, index){
        return !predicate(element, index, array);
      });
      console.log(dropNumber);
      droppedArray = this.drop(array, dropNumber);
      console.log(droppedArray);
      
      return droppedArray;
    },
  
    chunk(array, size) {
      
      if(size === undefined) {
        size = 1;
      };
      let arrayChunks = [];
      
      for (let i = 0; i < array.length; i += size){
  
        let arrayChunk = array.slice(i, i + size);
        arrayChunks.push(arrayChunk);
      };
      
      return arrayChunks;
    }
  
  };
  
  /* const clamp = (n1, n2, n3) => Math.min(Math.max(n1, n2), n3); */
  
  console.log(_.clamp(4, 1, 2)); 
  console.log(_.inRange(7, 2));
  console.log(_.words('A dog jumped in a car.'));
  console.log(_.pad('string', 18));
  const obj = {
    'A': 1,
    'B': 2,
    'C': 3
  };
  console.log(_.has(obj, 'A'));
  console.log(_.invert(obj));
  function p(nr) {
     //console.log(obj.key);
     return nr > 0; 
  };
  function p2(nr) {
    return nr > 2;
  };
  //console.log(p(obj.key));
  console.log(_.findKey(obj, p));
  
  let array = [1, 2, 3, 4];
  console.log(_.drop(array, 5));
  let array2 = [1, 2, 3, 4, 5, 6];
  console.log(_.dropWhile(array, p2));
  console.log(_.chunk(array2, 3));
  /*let array0 = [0, 1, 2, 3, 4, 5, 8];
  let array3 = [23, 9, 0, 5];
  let array4 = [40, 41, 42, 43, 45];
  console.log(_.concat(array0, -45, array3, array4, 7)); */
  // Do not write or modify code below this line.
  module.exports = _;