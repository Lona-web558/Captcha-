function generateCaptcha() {
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += characters[Math.floor(Math.random() * characters.length)];
  }
  document.getElementById('captcha-container').textContent = captcha;
}

function validateCaptcha() {
  const userInput = document.getElementById('captcha-input').value;
  const captcha = document.getElementById('captcha-container').textContent;
  if (userInput === captcha) {
    alert('Captcha verified!');
  } else {
    alert('Invalid Captcha. Please try again.');
  }
  generateCaptcha();
}

generateCaptcha();