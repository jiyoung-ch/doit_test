
// var test = function(){
//     var x = 1;
// }
// test();

//이 함수를 실행 할 경우 undefined가 도출됨
//실행되지 않는 이유
//1. 내부구문에 사용한 x가 함수내에서 사용된 지역변수 이기 때문에 반환할값이 선언되지 않았다
//2. return도 선언되지 않았기 때문


/* 값을 반환하는데 사용하는 return */
var test2 = function(){
    var x = 1;
    return x;
}
test2();
//test2(); -> 1 반환
//지역변수가 필요한 경우 return을 사용해 외부로 반환하여 사용해야함


/* 중간에 중지시키는데 사용하는 return문 */
//return은 현재 구문을 중지하고 빠져나오는(escape) 방법으로 사용이 가능함
var test3 = function (){
    var x = 1;
    if (x == 1) {
       return x; // 1
    }
    x = x + 1;
 }
 test3();


 /* return을 마지막에 넣어 줄 경우 */
 var test4 = function (){
    var x = 1;
    x = x + 1;
    return x; //2
 }
 test4();


//호출한 곳에서 값을 반환할 경우가 있으면
return true;
return false;


//반환할 경우가 없을때
return;






