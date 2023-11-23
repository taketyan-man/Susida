let btnStart = document.getElementsByClassName("startBtn");
let timer1, timer2;
let startTime, nowTime, whileTime, questionStart;
let hintCount = 0;

function startBtn(){
  var re = document.getElementById('result');
  re.innerHTML = '経過秒数: 0s';
  startTime = new Date();
  startTimer();
  for (let step = 0; step < btnStart.length; step ++){
    btnStart[step].style.display = 'none';
  }
  document.getElementsByClassName("game-title")[0].style.display = 'none';
  document.getElementById("question").style.display = 'block';
  document.getElementById('game-start').style.display = "block";
  question_select10();
  question_present();
};

function stopBtn(){
  stopTimer();
  btnStart.disabled = false;
};
// タイマー開始
function startTimer(){
  timer1 = setInterval(showSecond, 1000);
  timer2 = setInterval(whileSecond, 1000);
}


// タイマー終了
function stopTimer(){ 
  clearInterval(timer1);
  clearInterval(timer2);
}

// 秒数表示
function showSecond(){
  nowTime = new Date();
  var elapsedTime = Math.floor((nowTime - startTime) / 1000);
  var str = '経過秒数: ' + elapsedTime + 's';
  var re = document.getElementById('result');
  hintCount += 1;
  re.innerHTML = str;
}

// 問題の制限時間
function whileSecond(){
  whileTime = new Date();
  var elapsedTime2 = Math.floor((whileTime - questionStart) / 1000);
  if(elapsedTime2 == 5){
    var hintText = Question[1];
    var hi = document.getElementById('hint');
    hi.innerHTML = hintText;
    hi.style.display = "block";
  };
}