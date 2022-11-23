# 10.1 조건문 분해하기

```jsx
if (!aDate.isBefore(plan.summerStart) && !adate.isAfter(plan.sumberEnd))
	charge = quantity * plan.summerRate;
else
	charge = quantity * plan.regularRate + plan.regularServiceCharge;
```

```jsx
if (summer())
	charge = summerCharge();
else
	charge = regularCharge();
```

## 배경

- 복잡한 조건부 로직은 프로그램을 복잡하게 만드는 가장 흔한 원흉에 속한다.
- 거대한 코드 블록이 주어지면 코드를 부위별로 분해한 다음 해체된 코드 덩어리들을 각 덩어리의 의도를 살린 이름의 함수 호출로 바꿔주자.
- 전체적인 의도가 더 확실히 드러난다.

## 절차

1. 조건식과 그 조건식에 딸린 조건절 각각을 함수로 추출한다.

# 10.2 조건식 통합하기

```jsx
if (anEmployee.seniority < 2) return 0;
if (anEmployee.monthsDisabled > 12) return 0;
if (anEmployee.isPartTime) return 0;
```

```jsx
function disabilityAmount(employee) {
  // 해당 부분의 의도가 들어나도록 함수를 만든다.
	if (
    employee.seniority < 2 || 
    employee.monthsDisabled > 12 ||
    employee.isPartTime) {
    return 0;
  }
  return 1;
}
```

```jsx
if (isNotEligibleForDisability()) return 0

function isNotEligibleForDisability() {
	return ((anEmployee.seniority < 2) 
					|| (anEmployee.monthsDisabled > 12) 
					|| (anEmployee.isPartTime));
}
```

## 배경

- 비교하는 조건은 다르지만, 그 결과로 수행하는 동작은 똑같은 코드들이 더러 있다.
- 어차피 같은 일을 할 거라면 조건 검사도 하나로 통합하는 게 낫다.
- 조건부 코드를 통합하는 게 중요한 이유 두 가지
    1. 여러 조각으로 나뉜 조건들을 하나로 통합함으로써 내가 하려는 일이 더 명확해진다.
    2. 이 작업이 함수 추출하기까지 이어질 가능성이 높기 때문이다. 

## 절차

1. 해당 조건식들 모두에 부수 효과가 없는지 확인한다.
→ 부수 효과가 있는 조건식들에는 질의 함수와 변경 함수 분리하기를 먼저 적용한다.
2. 조건문 두 개를 선언하여 두 조건문의 조건식들을 논리 연산자로 결합한다.
→ 순차적으로 이뤄지는 (레벨이 같은) 조건문은 `or`로 결합하고, 중첩된 조건문은 `and`로 결합한다.
3. 테스트한다.
4. 조건이 하나만 남을 때까지 2~3 과정을 반복한다.
5. 하나로 합쳐진 조건식을 함수로 추출할지 고려해본다.

# 10.3 중첩 조건문을 보호 구문으로 바꾸기

```jsx
function getPayAmount() {
	let result;
	if (idDead)
		result = deadAmount();
	else {
		if (isSeparated)
			result = separatedAmount()
		else {
			if (isRetired)
				result = retiredAmount();
			else
				result = normalPayAmount();
		}
	}
	return result;
}
```

```jsx
function getPayAmount() {
	if (isDead) return deadAmount();
	if (isSeparated) return separatedAmount();
	if (isRetired) return retiredAmount();
	return normalPayAmount()
}
```

## 배경

- 중첩 조건문을 보호 구문으로 바꾸기 리팩터링의 핵심은 의도를 부각하는 데 있다.
- 반환점이 하나일 때 함수의 로직이 더 명백하다면 그렇게 하자.

## 절차

1. 교체해야 할 조건 중 가장 바깥 것을 선택하여 보호 구문으로 바꾼다.
2. 테스트한다.
3. 1~2 과정을 필요한 만큼 반복한다.
4. 모든 보호 구문이 같은 결과를 반환한다면 보호 구문들의 조건식을 통합한다. 

# 10.4 조건부 로직을 다형성으로 바꾸기

## 배경

```jsx
switch (bird.type) {
	case "유럽 제비":
		return "보통이다.";
	case "아프리카 제비":
		return (bird.numberOfCocounts > 2) ? "지쳤다" : "보통이다";
	case "노르웨이 파랑 앵무":
		return (bird.voltage > 100) ? "그을렸다" : "예쁘다";
	default:
		return "알 수 없다"
}
```

```jsx
class EuropeanSwallow {
	get plumage() {
		return "보통이다";
	}
}
...
class AfricanSwallow {
	get plumage() {
		return (this.numberOfCocounts > 2) ? "지쳤다" : "보통이다";
	}
}
...
class NorwegianBlueParrot {
	get plumage() {
		return (this.voltage > 100) ? "그을렸다" : "예쁘다"
	}
}
...
```
```jsx
class Bird{
  #name;
  constructor(name) {
    this.#name = name
  }

  get name() {
    return this.#name;
  }

  get plumage() {
    return 'unknown';
  }

  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  constructor() {
    super('EuropeanSwallow');
  }

  get plumage() {
    return 'average';
  }

  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  constructor() {
    super('AfricanSwallow')
  }

  get plumage() {
    return this.numberOfCoconuts > 2 ? 'tired' : 'average';
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor() {
    super('NorwegianBlueParrot')
  }

  get plumage() {
    return this.voltage > 100 ? 'scorched' : 'beautiful';
  }

  get airSpeedVelocity() {
    return  this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

const result = plumages([new NorwegianBlueParrot(), new AfricanSwallow(), new EuropeanSwallow()]);
console.log(result);
```

```jsx
export function rating(voyage, history) {
  // 투자 등급
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > vr + chr * 2) return 'A';
  else return 'B';
}

function voyageRisk(voyage) {
  // 항해 경로 위험요소
  let result = 1;
  if (voyage.length > 4) result += 2;
  if (voyage.length > 8) result += voyage.length - 8;
  if (['china', 'east-indies'].includes(voyage.zone)) result += 4;
  return Math.max(result, 0);
}

function captainHistoryRisk(voyage, history) {
  // 선장의 항해 이력 위험 요소
  let result = 1;
  if (history.length < 5) result += 4;
  result += history.filter((v) => v.profit < 0).length;
  if (voyage.zone === 'china' && hasChina(history)) result -= 2;
  return Math.max(result, 0);
}

function hasChina(history) {
  // 중국을 경유하는가?
  return history.some((v) => 'china' === v.zone);
}

function voyageProfitFactor(voyage, history) {
  // 수익 요인
  let result = 2;
  if (voyage.zone === 'china') result += 1;
  if (voyage.zone === 'east-indies') result += 1;
  if (voyage.zone === 'china' && hasChina(history)) {
    result += 3;
    if (history.length > 10) result += 1;
    if (voyage.length > 12) result += 1;
    if (voyage.length > 18) result -= 1;
  } else {
    if (history.length > 8) result += 1;
    if (voyage.length > 14) result -= 1;
  }
  return result;
}

const voyage = { zone: 'west-indies', length: 10 };
const history = [
  { zone: 'east-indies', profit: 5 },
  { zone: 'west-indies', profit: 15 },
  { zone: 'china', profit: -2 },
  { zone: 'west-africa', profit: 7 },
];

const rate = rating(voyage, history);
console.log(rate);
```

```jsx
class Rating {
  constructor(voyage, history){
    this.voyage = voyage;
    this.history = history
  }

  get voyageProfitFactor() {
    let result = 2;
    if (this.voyage.zone === 'china') result += 1;
    if (this.voyage.zone === 'east-indies') result += 1;
    result += this.voyageHistoryAndLengthFator;
    return result;
  }

  get voyageHistoryAndLengthFator() {
    let result = 0;
    if (this.history.length > 8) result += 1;
    if (this.voyage.length > 14) result -= 1;
    return result;
  }

  get voyageRisk() {
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (['china', 'east-indies'].includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter((v) => v.profit < 0).length;
    return Math.max(result, 0);
  }

  get value() {
    const profit = this.voyageProfitFactor;
    const risk = this.voyageRisk;
    const historyRisk = this.captainHistoryRisk;
    
    return profit * 3 > risk + historyRisk * 2 ? 'A' : 'B';
  }

}

class ExperiencedChinaRating extends Rating{
  get captainHistoryRisk() {
    const result= super.captainHistoryRisk - 2;
    return Math.max(result, 0) 
  }

  get voyageHistoryAndLengthFator() {
    let result = 3;
    if (this.history.length > 10) result += 1;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }
}

export function rating(voyage, history) {
  if(voyage.zone === 'china' && history.some((v) => 'china' === v.zone)){
    return new ExperiencedChinaRating(voyage, history).value
  }
  return new Rating(voyage, history).value
}


const voyage = { zone: 'west-indies', length: 10 };
const history = [
  { zone: 'east-indies', profit: 5 },
  { zone: 'west-indies', profit: 15 },
  { zone: 'china', profit: -2 },
  { zone: 'west-africa', profit: 7 },
];

const voyage2 = { zone: 'china', length: 3 };
const history2 = [
  { zone: 'east-indies', profit: 5 },
  { zone: 'east-indies', profit: 15 },
  { zone: 'china', profit: -2 },
  { zone: 'east-indies', profit: 7 },
  { zone: 'east-indies', profit: 17 },
  { zone: 'china', profit: -7 },
];

const rate1 = rating(voyage, history);
console.log(rate1);

const rate2 = rating(voyage2, history2);
console.log(rate2);
```


# 10.5 특이 케이스 추가하기

```jsx
if (aCustomer === "미확인 고객") customerName = "거주자"
```

```jsx
class UnknownCustomer {
	get name() { return "거주자" }
}
```

## 배경

- 특수한 경우의 공통 동작을 요소 하나에 모아서 사용하는 특이 케이스 패턴이라는 것이 있다.
- 이 패턴을 활용하면 특이 케이스를 확인하는 코드 대부분을 단순한 함수 호출로 바꿀 수 있다.
- 널 객체 패턴

## 절차

1. 컨테이너에 특이 케이스인지를 검사하는 속성을 추가하고, fail를 반환하게 한다.
2. 특이 케이스 객체를 만든다. 이 객체는 특이 케이스인지를 검사하는 속성만 포함하여, 이 속성은 true를 반환하게 한다.
3. 클라이언트에서 특이 케이스인지를 검사하는 코드를 함수로 추출한다. 모든 클라이언트가 값을 직접 비교하는 대신 방금 추출한 함수를 사용하도록 고친다.
4. 코드에 새로운 특이 케이스 대상을 추가한다. 함수의 반환 값으로 받거나 변환 함수를 적용하면 된다. 
5. 특이 케이스를 검사하는 함수 본문을 수정하여 특이 케이스 객체의 속성을 사용하도록 한다. 
6. 테스트한다. 
7. 여러 함수를 클래스로 묶기나 여러 함수를 변환 함수로 묶기를 적용하여 특이 케이스를 처리하는 공통 동작을 새로운 요소를 옮긴다.
→ 특이 케이스 클래스는 간단한 요청에는 항상 같은 값을 반환하는 게 보통이므로, 해당 특이 케이스의 리터럴 레코드를 만들어 활용할 수 있을 것이다.
8. 아직도 특이 케이스 검사 함수를 이용하는 곳이 남아 있다면 검사 함수를 인라인 한다. 

# 10.6 어서션 추가하기

```jsx
if (this.discountRate) 
	base = base - (this.discountRate * Base);
```

```jsx
assert(this.discountRate >= 0);
if(this.discountRate)
	base = base - (this.discountRate * base)
```

```jsx
import { strict as assert } from 'node:assert';

class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    assert(number >= 0);
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

new Customer().applyDiscount(-1);
```

## 배경

- 어서션을 이용해서 코드 자체에 삽입
- 어셔선은 항상 참이라고 가정하는 조건부 문장
- 프로그램이 어떤 상태임을 가정한 채 실행되는지를 다른 개발자에게 알려주는 훌륭한 소통 도구이다.

## 절차

1. 참이라고 가정하는 조건이 보이면 그 조건을 명시하는 어서션을 추가한다.

# 10.7 제어 플래그를 탈출문으로 바꾸기

```jsx
for (const p of peeple) {
	if (!found) {
		if (p === "조커") {
			sendAlert();
			found = true;
		} 
	}
}
...
```

```jsx
for (const p of peeple) {
	if (p === "조커") {
		sendAlert();
		break;
	} 
}
	...
```

## 배경

- 제어 플래그란 코드의 동작을 변경하는 데 사용되는 변수를 말한다.

## 절차

1. 제어 플래그를 사용하는 코드를 함수로 추출할지 고려한다.
2. 제어 플래그를 갱신하는 코드 각각을 적절한 제어문으로 바꾼다. 하나 바꿀 때마다 테스트한다.
3. 모두 수정했다면 제어 플래그를 제거한다.