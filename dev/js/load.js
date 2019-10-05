(function () {
  let  URL='https://js.dump.academy/code-and-magic/data';
  window.load=function (onSuccess, onError) {
  let xhr=new XMLHttpRequest();
  xhr.responseType='json';
  xhr.open('GET', URL);
  xhr.addEventListener('load', function () {
    onSuccess(xhr.response);
  });
  xhr.send();
  };
})();
