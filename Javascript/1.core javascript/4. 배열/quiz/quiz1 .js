
var sum = 0;
var scores = [83, 99, 100, 57, 72,];

for(i = 0; i < scores.length; i++) {
    sum += scores[i];
}
var av = sum / scores.length;

// for (var s of scores) {
//     total += s;
//   }

console.log(`총점:${sum}점 평균:${av}점`);
