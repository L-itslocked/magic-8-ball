function shakeMagicEightBall() {
  const ball = document.querySelector(".magic-ball");
  let magicEight = Math.ceil(Math.random() * 9);

  switch (magicEight) {
    case 0:
      ball.innerHTML = "girl, byeeeee";
      break;
    case 1:
      ball.innerHTML = "Yes";
      break;
    case 2:
      ball.innerHTML = "No";
      break;
    case 3:
      ball.innerHTML = "Maybe";
      break;
    case 4:
      ball.innerHTML = "Very Doubtful";
      break;
    case 5:
      ball.innerHTML = "Ask again later";
      break;
    case 6:
      ball.innerHTML = "Reply hazy, try again";
      break;
    case 7:
      ball.innerHTML = "Most likely";
      break;
    case 8:
      ball.innerHTML = "My sources say no";

      break;
  }
}

shakeMagicEightBall();
