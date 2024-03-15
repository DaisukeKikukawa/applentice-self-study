function main(input) {
  const args = input.split("\n");
  const N = parseInt(args, 10);
  let minSum = Infinity;
  
  function allsum(num){
    //String型に変換
    num = num.toString();
    //各桁の和を表す変数sumを定義
    let sum = 0;
    //文字列のi番目を取り出し、sumに足していく
    for(let i=0; i < num.length; i++){
    sum = sum + parseInt(num[i])
  }
  return parseInt(sum);
}
  
  for (let i = 1; i < N; i++) {
    let A = i;
    let B = N - i;
    
    let sumOfA = allsum(A);
    let sumOfB = allsum(B);
    let sumOfAandB = sumOfA + sumOfB;
    
    if (sumOfAandB <= minSum) {
      minSum = sumOfAandB;
    }
  }
  console.log(minSum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
