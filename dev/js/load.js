(function () {
  // let xhr= new  XMLHttpRequest();
  // xhr.responseType='json';
  // xhr.addEventListener('load', function (evtLoad) {
  //   console.log(xhr.status);
  //   console.log(xhr.response);
  // });
  // xhr.open('GET', 'http://httpbin.org/ip');
  // xhr.send();
  // xhr.open('GET', 'http://httpbin.org/user-agent');
  // xhr.send();
  // xhr.open('GET', 'http://httpbin.org/cookies');
  // xhr.send();
  let button= document.createElement('button');
  button.textContent='Загрузить данные';
  button.style.cssText='position:absolute; top:50px; left: 50px; background-color:red; z-index:10; ';
  button.classList.add('55555');
  document.body.prepend(button);
  function renderResponse(response){
    let div=document.createElement('div');
    div.classList.add('div-55555');
    div.style.cssText='width:300px; height:100px; background-color: green; position:absolute; top:200px; left:200px; z-index:10;';
    div.innerHTML=`${response}`;
    document.body.prepend(div);
  }
  window.__jsonpCallback= function (data) {
    renderResponse(data);
  };
  button.addEventListener('click', function () {
    console.log('starting download');
    // let loader=document.createElement('script');
    // loader.src='http://httpbin.org/ip?callback=__jsonpCallback';
    // document.body.append(loader);
    let xhr=new XMLHttpRequest();
    xhr.responseType='text';
    xhr.addEventListener('load', function () {
      console.log('finish download');
      renderResponse(xhr.response);
    });
    xhr.open('GET','my.html');
    xhr.send();
  });
})();

