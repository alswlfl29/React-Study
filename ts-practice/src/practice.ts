let count = 0; //숫자
count += 1;
count = "갑자기 분위기 문자열"; //에러 발생

const message = "hello world"; //문자열

const done: boolean = true; //불리언 값

const numbers: number[] = [1, 2, 3]; //숫자 배열
const messages: string[] = ["hello", "world"]; //문자열 배열

message.push(1); //에러 발생 -> 숫자는 안됨

let mightBeUndefined: string | undefined = undefined; //string/undefined 둘중에 하나
let nullableNumber: number | null = null; // number/null 둘중에 하나

let color: "red" | "orange" | "yellow" = "red"; //red/orange/yellow 셋 중에 하나
color = "yellow";
color = "green"; //3개말고 다른거면 에러
