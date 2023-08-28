function fetchValue() {
  fetch('https://script.google.com/macros/s/AKfycbw6-E_lx-a-_fXebPPAe3-RTFaTxQYf-xqyZdM8gW1Q0M8N8I3STVyKPxeTIkp-eese5w/exec') // 위에서 받은 웹 앱의 URL을 입력하세요
  .then(response => response.text())
  .then(data => {
    document.getElementById('value').innerText = data;
  });
}
