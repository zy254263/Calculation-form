//数値1と数値2、決定ボタン、答え出すPへの参照を定義
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
const btn = document.querySelector('.confirm');
const result = document.querySelector('.result');
//決定ボタンClick時実行する関数を定義
btn.addEventListener('click', arithmetic);
function arithmetic() {
    //結果のテキストを空にする（必要ないかも）
    //入力した数値1と数値2を数値として受け取れるように型を担保する
    result.textContent = '';
    let a = Number(number1.value);
    let b = Number(number2.value);

    /*
    チェック中のラジオボタンごとに計算して、結果を出す
    JS計算時2進数に変換してから計算を行うため、小数の計算がおかしくなることがある
    それを回避するため、下記のやり方では小数点以降6位まで担保できるらしい
    参考したサイト
    https://blog.apar.jp/program/8900/
    掛け算と割り算についての回避方法は分からない
    */
    if(document.getElementById('add').checked) {
        result.textContent = (Math.round(a*1000000) + Math.round(b*1000000))/1000000;
    }if(document.getElementById('min').checked) {
        result.textContent = (Math.round(a*1000000) - Math.round(b*1000000))/1000000;
    }if(document.getElementById('mul').checked) {
        result.textContent = a * b;
    }if(document.getElementById('divi').checked) {
        result.textContent = a / b;
    }
}
