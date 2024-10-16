# 18. 코드는 명확해야 한다.

모호함은 복잡성의 두 가지 주요 원인 중 하나이다. 

모호성 문제에 대한 해결책은 명확하게 만드는 방식으로 코드를 작성하는 것이다.

코드가 명확하다는 것은 누군가가 많은 생각 없이 코드를 빠르게 읽을 수 있고 코드의 동작이나 의미에 대한 첫 번째 추측이 정확하다는 것을 의미한다.

명백한 것은 독자의 마음속에 있다. 자신의 코드에 문제가 있다고 보는 것보다 다른 사람의 코드가 명확하지 않다는 것을 알기 쉽다. 

코드의 명확성을 결정하는 가장 좋은 방법은 코드 리뷰이다.

## 18.1 코드를 더욱 명확하게 만드는 것들

1. 좋은 이름 선택
2. 일관성

명확하지 않은 코드를 피할 수 없는 경우 주석을 통해서 보완하는 것이 중요하다. 

## 18.2 코드를 덜 명확하게 만드는 것들

이벤트 중심 프로그래밍으로 인해 제어 흐름을 따르기가 어렵다.

<aside>
💡

위험 신호: 명백하지 않은 코드
빠르게 읽어도 코드의 의미와 동작을 이해할 수 없는 경우 이는 위험 신호이다. 이는 종종 코드를 읽는 사람들에게 즉지 명확하지 않은 중요한 정보가 있음을 의미한다. 

</aside>

소프트웨어는 쓰기 용이성이 아니라 읽기 용이성을 위해 설계되어야 한다.

## 18.3 결론

명확성에 대해 생각하는 또 다른 방법은 정보 측면이다. 코드가 명확하지 않은 경우 이는 일반적으로 독자가 갖고 있지 않은 코드에 대한 중요한 정보가 있음을 의미한다. 

코드를 명확하게 만들려면 독자가 항상 코드를 이해하는 데 필요한 정보를 갖고 있는지 확인해야 한다. 

1. 추상화 및 특수 사례 제거와 같은 설계 기술을 사용하여 필요한 정보의 양을 줄이는 것이다.
2. 독자가 이미 다른 상황에서 획득한 정보를 활용하여 독자가 코드에 대한 새로운 정보를 배울 필요가 없도록 한다.
3. 좋은 이름과 전략적 설명과 같은 기술을 사용하여 코드에 있는 중요한 정보를 제시한다.