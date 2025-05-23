# 아이템 38 any 타입은 가능한 한 좁은 범위에서만 사용하기

최소한의 범위에서만 any를 사용하는 것이 좋다.

@te-ignore를 사용해 강제로 타입 오류를 제거하는 편이 낫다.

# 아이템 39 any를 구체적으로 변형해서 사용하기

일반적인 상황에서는 any보다 더 구체적으로 표현할 수 있는 타입이 존재할 가능성이 높기 때문에 더 구체적인 타입을 찾아 타입 안전성을 높이도록 해야 한다.

# 아이템 40 함수 안으로 타입 단언문 감추기

함수 내부에는 타입 단언을 사용하고 함수 외부로 드러나는 타입 정의를 정확히 명시하는 정도로 작성하는 게 낫다.

제대로 타입이 정의된 함수 안으로 타입 단언문을 감추는 것이 더 좋은 설계이다.

# 아이템 41 any의 진화를 이해하기

타입스크립트에서 일반적으로 변수의 타입은 변수를 선언할 때 결정된다.

any[]로 선언되었지만 number 타입의 값을 넣는 순간부터 타입은 number[]로 진화한다. 배열에 다양한 타입의 요소를 넣으면 배열의 타입이 확장되며 진화한다. 변수의 초깃값이 null인 경우도 any의 진화가 일어난다.

→ 이렇게 동작하는지 이제 처음 알았다.

any 타입의 진화는 noImplicitAny가 설정된 상태에서 변수의 타입이 암시적으로 any인 경우에만 일어난다. 명시적으로 any를 선언하면 타입이 그대로 유지된다.

배열의 map과 filter 메서드를 통해 단일 구문으로 배열을 생성하여 any 전체를 진화시키는 방법을 생각해 볼 수 있다.

→ 내가 사용하던 방식 서버에 response을 받아서 map 을 통해 클래스로 타입을 진화시켜서 사용했었네?

# 아이템 42 모르는 타입의 값에는 any 대신 unknown을 사용하기

unknown은 any 대신 쓸 수 있는 타입 시스템에 부합하는 타입이다.

- 어떤 타입이든 unknown에 할당 가능
- unknown은 오직 unknown과 any에만 할당 가능

어떠한 값이 있지만 그 타입을 모르는 경우에 unknown을 사용한다. instanceof를 체크한 후 unknown에서 원하는 타입으로 변환할 수 있다.

unknown 대신 제너릭 매개변수가 사용되는 경우도 있다. 제네릭을 사용한 스타일은 타입 단언문과 달라 보이지만 기능적으로는 동일하다.

unknown은 any 대신 사용할 수 있는 안전한 타입이다. 어떠한 값이 있지만 그 타입을 알지 못하는 경우라면 unknown을 사용하면 된다.

→ 이런 용도로 any를 사용했는데 unknown를 대신 사용하도록 해야겠다.

사용자가 타입 단언문이나 타입 체크를 사용하도록 강제하려면 unknown을 사용하면 된다.

# 아이템 43 몽키 패치보다는 안전한 타입을 사용하기

1. interface의 특수 기능 중 하나인 보강을 사용하는 것이다.
2. 더 구체적인 타입 단언 문을 사용하는 것이다.

# 아이템 44 타입 커버리지를 추적하여 타입 안전성 유지하기

any 타입이 여전히 프로그램 내에 존재할 수 있는 두 가지 경우가 있다.

1. 명시적 any 타입
2. 서드파트 타입 선언

any 타입은 타입 안전성과 생산성에 부정적 영향을 미칠 수 있으므로 any의 개수를 추적하는 것이 좋다. type-coverage를 활용하여 any를 추적할 수 있다.

→ 각 프로젝트에 설치해서 얼마나 사용하고 있는지 확인하고 개선해 볼 수 있겠다.
