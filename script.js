function fetchValue() {
  fetch('https://script.google.com/macros/s/AKfycby2NkzHnRGZSba4xKLofHUjWbg6-AmR5vqaLoHtNrZNqram9vJ8gOMuIHo6HkOd9fXtKA/exec') // 위에서 받은 웹 앱의 URL을 입력하세요
  .then(response => response.text())
  .then(data => {
    document.getElementById('value').innerText = data;
  });
}
