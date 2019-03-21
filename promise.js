const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject){
      const handler = function() {
        if(type === "get"){
          $.get(url, (data) => {
              if(data.status === "200") {
                  resolve(data);
              } else {
                  reject(data.err);
              }
          });
      }
      if(type === "post"){
          $.post(url, (data) => {
              if(data.status === "200") {
                  resolve(data);
              } else {
                  reject(data.err);
              }
            });
          }

      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = handler;
      xhr.responseType = "json";
      xhr.setRequestHeader("Accept", "application/json");
      xhr.send();
        }
    });
  
    return promise;
  };
  
  getJSON(url).then(function(json) {
    console.log('Contents: ' + json);
  }, function(error) {
    console.error('出错了', error);
  });

 

  