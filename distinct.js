//实现数组去重
function distinct1(array){
    var result = [];
    for(var i = 0; i < array.length; i++){
        if(result.indexOf(array[i]) == -1){
            result.push(array[i]);
        }
    }
    return result;
}

function distinct2(arr){
    var result=[];
    for (var i = 0; i < arr.length; i++) {
      for (var j = i+1; j < arr.length; j++) {
        if(arr[i]===arr[j]){
          ++i;
        }
      }
        result.push(arr[i]);
    }
    return result;
  }

  function distinct3(arr){
    var x = new Set(arr);
   return [...x];
  }
