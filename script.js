function shakeMagicEightBall() {
  const ball = document.querySelector(".magic-ball");
  let magicEight = Math.ceil(Math.random() * 20);

  switch (magicEight) {
    case 0:
      ball.innerHTML = "It is certain";
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
      ball.innerHTML = "Reply hazy";
      break;
    case 7:
      ball.innerHTML = "Most likely";
      break;
    case 8:
      ball.innerHTML = "My sources say no";
      break;
    case 9:
      ball.innerHTML = "My reply is no";
      break;
    case 10:
      ball.innerHTML = "Don't count on it";
      break;
    case 11:
      ball.innerHTML = "Without a doubt";
      break;
    case 12:
      ball.innerHTML = "Yes definitely";
      break;
    case 13:
      ball.innerHTML = "Cannot predict now";
      break;
    case 14:
      ball.innerHTML = "Don't count on it";
      break;
    case 15:
      ball.innerHTML = "Good luck!";
      break;
    case 16:
      ball.innerHTML = "Concentrate and ask again";
      break;
    case 17:
      ball.innerHTML = "It is decidedly so";
      break;
    case 18:
      ball.innerHTML = "Future is bright";
      break;
    case 19:
      ball.innerHTML = "Outlook good";
      break;
    case 20:
      ball.innerHTML = "Signs say yes";
      break;
  }
}
