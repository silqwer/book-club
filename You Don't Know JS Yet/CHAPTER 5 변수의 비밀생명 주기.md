# 5.1 변수 사용 가능 시점

선언은 스코프 아래에 있더라도 스코프 시작 부분에 변수의 가시성이 확보되는 걸 호이스팅이라고 한다.

함수 선언문으로 함수를 선언하면 함수 이름에 해당하는 식별자가 스코프 최상단에 등록되고 함수 참조로 그 값이 자동으로 초기화된다.

참고로 함수 호이스팅과 var를 사용해 선언한 변수의 호이스팅 모두에서 이름 식별자가 블록 스코프가 아닌 가장 가까운 함수 스코프에 등록된다.

## 5.1.1 선언문과 표현식에서의 호스팅 차이

함수 호이스팅은 일반적인 함수 선언문에만 적용되고 함수 표현식에는 적용되지 않는다.

var로 선언한 변수는 호이스팅이 되고 여기에 더해 스코프가 시작될 때 undefined로 자동 초기화된다. 초기화가 된 이수에는 스코프 전체에서 이 변수를 사용할 수 있다.

선언문과 표현식에서 주의해야 할 차이점을 정리하면 다음과 같다. 함수 선언문은 호이스팅되고 해당 함숫값으로 초기화된다. 반면 var로 선언한 변수는 호이스팅이 되긴 하지만 undefined로 초기화된다. 그리고 함수 표현식에서 실제 할당은 런타임에 해당 코드가 실행되기 전까지는 일어나지 않는다.

### **함수 호이스팅과 변수 호이스팅의 차이**

| **구분**        | **설명**                                                                          |
| --------------- | --------------------------------------------------------------------------------- |
| **함수 선언문** | 호이스팅되고 **정의까지 올라감** → 코드 실행 전에 함수 사용 가능                  |
| **함수 표현식** | 호이스팅 **되지 않음** (정확히는 변수는 호이스팅되지만 값은 undefined)            |
| **var 변수**    | 선언만 호이스팅되고 **초기값은 undefined**로 설정됨                               |
| **스코프 기준** | 가장 가까운 **함수 스코프** 또는 **전역 스코프** 기준으로 호이스팅 및 초기화 발생 |

> 함수 선언문은 코드보다 먼저 정의되어 실행 가능하지만, 함수 표현식은 undefined로 초기화되어 호출 시 오류 발생함.

선언문과 표현식 모드에서 이름 식별자는 호이스팅된다는 공통점이 있지만 초기화 시 함수 선언문이 아닌 경우에는 함수 참조 관련 작업이 처리되지 않는다.

## 5.1.2 변수 호이스팅

- 식별자가 호이스팅됨
- 스코프 최상단에서 식별자가 undefined로 자동 초기화됨

# 5.2 호이스팅: 비유일 뿐입니다.

리프팅에 비유한 호이스팅에서 함수 선언문 모두 먼저 호이스팅하고 그다음 변수를 호이스팅한다는 규칙이 있다.

호이스팅을 코드 재정렬 매커니증이라고 생각하는 게 이해에는 도움을 주지만 정확하진 않다.

# 5.3 중복 선언 처리하기

```tsx
var studentName;
var studentName; // 중복 선언 → 무의미한 작업

studentName = "보라";
console.log(studentName); // 출력: 보라

console.log(studentName); // 출력: 보라
```

호이스팅은 스코프의 시작 부분에 변수를 등록하는 방식이다. 두 번째 줄에 있는 var studendtName은 아무런 역할을 하지 못한다.

```tsx
var greeting; // 변수 선언 (호이스팅됨)

function greeting() {
  console.log("안녕하세요!");
}
// 함수 선언문 → 이 시점에서 greeting은 함수로 정의됨

var greeting; // 이미 선언된 변수 → 의미 없음 (무시됨)

typeof greeting; // "function" → 함수로 인식됨

var greeting = "안녕하세요!"; // 변수에 문자열 할당 → 기존 함수 참조를 덮어씀

typeof greeting; // "string" → 이제는 문자열로 인식됨
```

greeting 함수 선언에서는 greeting을 다시 스코프에 등록하지는 않지만 함수 호이스팅이 일어나고, 함수 호이스팅은 변수 호이스팅보다 우선순위가 높기 때문에 greeting을 함수 참조로 초기화 시킨다

두 번째 greeting은 greeting이 이미 식별자로 등록되어 있고 함수 호이스팅이 더 우선순위가 높기 때문에 아무 작업도 수행하지 않는다.

즉, let이나 const 를 사용한 `재선언`은 명시적으로 허용되지 않는다. 변수를 재선언하는 유일한 방법은 선언에 모두 var를 사용하는 것뿐이다.

## 5.3.1 const 재선언

const로 선언된 변수를 다시 선언하는 것은 해당 변수를 재할당하는 것과 같다. 그런데 const 선언은 재할당할 수 없으며 항상 할당이 필요하다. 따라서 이런 기술적인 이유로 const를 사용한 재선언은 허용되지 않는다.

## 5.3.2 반복문

반복문에서는 새로운 반복이 시작될 때마다 자체적인 새 스코프가 생성된다.

> var는 블록 스코프를 무시하고 상위 스코프에 묶이며, 변수 선언은 실행 전에 이미 처리되어 있는 것처럼 작동한다.

### **var의 스코프와 변수 선언 처리 방식**

| **항목**                     | **설명**                                                            |
| ---------------------------- | ------------------------------------------------------------------- |
| **var는 블록 스코프가 아님** | 블록 안에서 선언해도 **전역 또는 함수 스코프**에 연결됨             |
| **반복문 안의 var**          | 별도의 블록 스코프를 만들지 않아 **기존 선언을 덮지 않음**          |
| **value는 재선언되지 않음**  | 기존 스코프의 value와 동일하게 유지됨                               |
| **var, let, const 모두**     | 실행 전 컴파일 단계에서 처리되므로 **사전에 스캔 된 것처럼 동작함** |

for 반복문에서 변수 i와 value는 각 스코프 인스턴스마다 정확히 한 번만 선언된다. 재선언이 일어나지 않는다.

for…in과 for…of 반복문에서도 동일하다. 선언한 변수는 반복문 본문 스코프에 속한 변수로 취급되므로 반복이 일어날 때마다 해당 스코프 내에서 처리된다. 그리고 역시 재선언은 일어나지 않는다.

const 변수에는 재할당이 허용되지 않는다.

결론은 명확하다. 일반 for문에서 const를 사용하면 재할당이 필요하기 때문에 사용하면 안 된다.

# 5.4 초기화되지 않은 변수와 TDZ

var로 선언한 변수는 해당 스코프의 맨 위로 올라가는데, undefined으로 자동으로 초기화되므로 스코프 전체에서 사용할 수 있다.

TDZ(temporal dead zone)란 변수는 존재하지만 초기화되지 않아 어떤 방식으로도 해당 변수에 접근할 수 없는 시간대를 의미한다. 변수의 초기화는 컴파일러가 원래 선언 지점에 남긴 명령을 실행할 때만 발생한다. 초기화가 이뤄진 이후에 TDZ는 종료되고, 스코프 내에서 변수를 자유롭게 사용할 수 있게 된다.

엄밀히 말하자면 var에도 TDZ가 있지만 길이가 0이므로 프로그램 내에서 var로 선언한 변수는 TDZ를 관찰할 수 없다. let과 const에서만 TDZ를 관찰할 수 있다. TDZ는 위치(zone)라기보다 시간대라고 해석하는 게 낫다.

<aside>
💡

TDZ(Temporal Dead Zone)는 **JavaScript에서 let, const로 선언된 변수들이 초기화되기 전까지 접근할 수 없는 구간**을 의미한다.

이는 var와는 다르게 let, const가 **호이스팅은 되지만 사용은 불가능한 시기**가 있다는 특징을 가지게 만든다.

TDZ는 무분별한 변수 참조를 방식하고 명확하게 선언하므로써 사용 흐름을 유도하고 const, let의 블록 스코프를 보장한다.

</aside>

```tsx
// 코드
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 10;

// 시각적 흐름
// TDZ 시작 ----[ (let a 선언) ]--- TDZ 끝
           ↑                       ↑
    접근 불가 (ReferenceError)     ↓
                          초기화 (a = 10)

// var와 비교
console.log(b); // undefined (호이스팅 OK)
var b = 20;
```

let과 cosnt 선언은 스코프 맨 위에 둬라.

# 5.5 정리

호이스팅은 컴파일 중에 JS가 변수 선언을 처리하는 다양한 방식을 설명하기 위한 비유에 가깝다.

변수 선언과 재선언은 컴파일 타임 작업이라고 사고를 전환하면 단점이 사라지고 보이지 않던 것들이 보이게 된다.
