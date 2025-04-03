document.getElementById('clickMe').addEventListener('click', () => {
    alert('No Virus, I Swear!');
});

const button = document.getElementById('clickMe');
let clicked = false;

button.addEventListener('click', () => {
  if (!clicked) {
    button.innerText = 'Clicked!';
    document.body.style.backgroundColor = '#c6f6d5'; // light green
    clicked = true;
  } else {
    button.innerText = 'Click Me Again';
    document.body.style.backgroundColor = '#f9f9f9'; // reset
    clicked = false;
  }
});
