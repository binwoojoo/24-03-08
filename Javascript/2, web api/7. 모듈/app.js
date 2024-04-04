import { $btn as $button } from "./getDom.js";  // 불러온 변수
import { clickHandler } from "./event.js";
import zzzzzz from "./pow.js"

const pow = () => {
    console.log('powpowpow');
};  // 불러온 pow는 객체안에 있는 pow

const $btn = '123'; // 내가만든 변수
console.log(`내가만든 btn: ${$btn}`);
console.log(`불러온 btn:`, $button);
console.log(zzzzzz.pow(5));
console.log(zzzzzz.add(2,4));
pow();

// event.js에서 만든 이벤트 핸들러 등록
$button.addEventListener('click', clickHandler);
