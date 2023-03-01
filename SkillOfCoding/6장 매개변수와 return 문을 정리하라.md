# TIP28 매개변수 기본값을 생성하라

매개변수 기본값은 매개변수에 값을 전달하지 않았을 때 미리 정해둔 값을 기본값으로 사용하는 것을 말한다. 매개변수에 값을 전달하지 않으면 설정한 기본값이 사용된다.

```jsx
function convertWeight(weight, ounces = O, roundto = 2) {
	const total = weight + (ounces / 16);
	const conversion = total / 2.2;
	return roundToDecimalPlace(conversion, roundTo);
}
```

값을 전달하고 싶지 않은 경우, 매개변수에 undefined를 전달하면 함수가 매개변수 기본값을 사용한다.

```jsx
convertWeight(4, undefined, 2);
```

이 방법은 주의해서 사용해야 한다. `undefined`를 전달하면 실수를 저지르기가 쉽다.

# TIP29 해체 할당으로 객체 속성에 접근하라

정보를 수집하기 위해 마침표 세 개를 사용하는 경우에는 펼침 연산자(`spread operator`)라고 부르지 않는다. 이때는 나머지 매개변수(`ret parameter`)라고 부르며, 변수 이름은 원하는 대로 지어도 좋다. 키 이름과 일치하지 않아야 한다. 

```jsx
const landscape = {
	photographer: 'Nathan',
	equipment: 'Canon',
	format: 'digital'
};

const {
	photographer, 
	...additional
} = landscape;

console.log(additional);
// { equipment: 'Canon', format: "digital' }
```

원래 코드를 보면 `photo.src`의 정보를 변수 이름에 `url`에 할당한다. 콜론에 키 이름을 먼저 쓰고 그 값을 할당할 변수 이름을 입력하면 된다.

```jsx
const landscape = {
	sec: '/landscape-nm.jpg', 
};

const { src: url } = landscape;

console.log(src);
// ReferenceError: sre is not defined
// 참조 오류: STC가 정의되지 않았습니다.

console.log(url);
// '/landscape-nm.jpg'
```

배열에도 해체 할당을 사용할 수 있는데 배열에는 키가 없기 때문에 변수 이름을 마음대로 정할 수 있지만, 대신 배열에 담긴 순서대로 할당을 해야한다. 

```jsx
const landscape = {
	location: [32.7122222, -103.1405556], 
};

const { location } = landscape;
const [latitude, longitude] = location;

latitude;
// 32.7122222

longitude;
// 103.1405556
```

해체 할당의 가장 큰 장점은 해체 할당을 함수의 매개변수에 적용할 수 있다는 점이다. 해체 할당을 매개변수에 사용하면, 변수를 선언하지 않아도 마치 정보를 함수 몸체에서 할당한 것처럼 작동한다. 참고로 해체 할당은 `let`으로 벼ㄴ수를 할당하기 때문에 해당 변수를 재할당할 수도 있다.

```jsx
function displayPhoto({
	title,
	photographer = 'Anonymous',
	location: [latitude, longitude], 
	src: url,
	...other
}) {
			const additional = Object.keys(other).map(key => `${key}: ${other[key]}`);
	return (`
		<img alt="${title} 사진 ${stphotographer} 촬영" src="${uri}" />
		(<div>${title}<div>
		<div>${photographer} <div>
		<div>위도: ${latitude} </div>
		<div>경도: ${longitude} </div>
		<div>${additional.join(' <br/› ')} </div>
	`);
}
```

# TIP30 키-값 할당을 단순화하라

객체 펼침 연산자와 일반적인 키-값 할당을 함께 사용해서 한 가지 정보를 제거하고 나머지 그대로 유지할 수 있다.

```jsx
function setRegion({ location, ...details }) {
	const ( city, state } = determineCityAndState(location);
	return {
		city, 
		state: state.abbreviation,
		...details,
	};
}
```

# TIP31 나머지 매개 변수로 여러 개의 인수를 변수로 전달하라

```jsx
function validateCharacterCount(max, ...items) {
	return items.every(item => item.length < max);
}

validateCharacterCount(10, 'wvoquie'); // true

validateCharacterCount(10, ...['wvoquie']); // true

const tag = ['Hobbs', 'Eagles'];
validateCharacterCount(10, ...tags); /// true

validateCharacterCount(10, 'Hobbs', 'Eagles'); // true
```

 단순하고 간결할 뿐만 아니라 예측 가능성도 높아졌다. 

## 나머지 인수를 사용하는 이유

1. 인수를 배열로 다루는 것을 다른 개발자들에게 알릴수 있다.
2. 나머지 매개변수는 코드 디버깅에 좋은 방법이 될 수 있다. 
3. 나머지 인수는 함수 간에 속성을 전달하면서 해당 속성을 조작할 필요가 없을 때 사용하기 좋다.