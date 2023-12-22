let btnStart = document.getElementsByClassName("startBtn");
let timer1, timer2;
let startTime, nowTime, whileTime, questionStart;
let hintCount = 0;

// ゲーム開始
function startBtn(gameName){
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
  let gameMode = document.getElementsByClassName('game-title-active')[0].innerHTML;
  gameSelect(gameName, gameMode);

};

// ゲーム終了
function stopBtn(){
  stopTimer();
  btnStart.disabled = false;
  document.getElementById('game-start').style.display = "none";
  var score = document.getElementById('score');
  if(hintCount == 0){
    score.innerHTML = "S";
    score.classList.add('gold');
    document.getElementById('game-finish').style.display = "block";
  }else if(hintCount <= 2){
    score.innerHTML = "A";
    score.classList.add('red');
    document.getElementById('game-finish').style.display = "block";
  }else if(hintCount <= 4){
    score.innerHTML = "B";
    score.classList.add('sblue');
    document.getElementById('game-finish').style.display = "block";
  }else if(hintCount <= 7){
    score.innerHTML = "C";
    score.classList.add('yellowgreen');
    document.getElementById('game-finish').style.display = "block";
  }else if(hintCount <= 10){
    score.innerHTML = "D";
    score.classList.add('gray');
    document.getElementById('game-finish').style.display = "block";
  };
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
  re.innerHTML = str;
  document.getElementById('finishresult').innerHTML = "クリア秒数: " + elapsedTime
  document.getElementById('misCount').innerHTML = "ミス: " + miss
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
    hintCount += 1;
    document.getElementById('hintcount').innerHTML = "ヒント表示回数: " + hintCount
  };
}