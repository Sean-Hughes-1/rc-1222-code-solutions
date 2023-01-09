var ul = document.getElementById('user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('status xhr: ', xhr.status);
  console.log('xhr response: ', xhr.response);
  for (let i = 0; i < xhr.response.length; i++) {
    console.log(xhr.response[i].name);
    var li = document.createElement('li');
    li.innerHTML = xhr.response[i].name;
    ul.appendChild(li);
  }
});
xhr.send();
