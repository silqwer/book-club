# 4. 모듈은 깊어야 합니다.

소프트웨어 복잡성을 관리하는 가장 중요한 기술 중 하나는 개발자가 주어진 시간에 전체 복잡성의 작은 부분만 직면하면 되도록 시스템을 설계하는 것이다.

## 4.1 모듈형 디자인

모듈형 설계에서는 소프트웨어 시스템이 상대적으로 독립적인 모듈 모음으로 분해된다. 모듈은 클래스, 하위시스템, 서비스 등 다양한 형태를 취할 수 있다. 이상적인 세계에서는 각 모듈이 다른 모듈과 완전히 독립적이다. 개발자는 다른 모듈에 대해 전혀 알지 못해도 어느 모듈에서든 작업할 수 있다.

불행하게도 이상적인 세계는 달성할 수 없다. 모듈은 서로 함수나 메소드를 호출해야 작동하므로 결과적으로 모듈은 서로에 대해 뭔가를 알고 있어야 한다. 

모듈형 사례의 목표는 모듈 간의 종속성을 최소화하는 것이다. 

종속성을 관리하기 위해 우리는 각 모듈을 인터페이스와 구현의 두 부분으로 생각한다. 인터페이스는 다른 모듈에서 작업하는 개발자가 알아야 할 모든 것으로 구성된다. 

일반적으로 인터페이스는 모듈이 수행하는 작업을 설명하지만, 수행 방법은 설명하지 않는다. 

구현은 인터페이스에 의해 만들어진 약속을 수행하는 코드로 구성된다. 

특정 모듈에서 작업하는 개발자는 해당 모듈의 인터페이스와 구현뿐만 아니라 해당 모듈에서 호출되는 사람의 모듈 인터페이스도 이해해야 한다. 

개발자는 자신이 작업 중인 모듈이 아닌 다른 모듈의 구현을 이해할 필요가 없다.

이 책의 목적에 따라 모듈은 인터페이스와 구현이 있는 코드 단위이다.

객체 지향 프로그래밍 언어의 각 클래스는 모듈이다. 

최고의 모듈은 인터페이스가 구현보다 훨씬 단순한 모듈이다. 

1. 간단한 인터페이스는 모듈이 시스템의 나머지 부분에 부과하는 복잡성을 최소화한다.
2. 인터페이스를 변경하지 않는 방식으로 모듈을 수정하면 수정으로 인해 다른 모듈이 영향을 받지 않는다. 

## 4.2 인터페이스에는 무엇이 있나요?

1. 공식 정보
2. 비공식 정보

## 4.3 추상화

모듈식 설계 아이디어와 밀접한 관련이 있다. 중요하지 않은 세부 사항을 생략한 엔터티의 단순화된 보기이다. 우리가 복잡한 것에 대해 더 쉽게 생각하고 조작할 수 있게 해주기 때문에 유용한다.

모듈식 프로그래밍에서 각 모듈은 인터페이스 형태로 추상화를 제공한다. 인터페이스는 모듈의 단순화된 보기를 제공한다. 

추상화의 정의에서 `중요하지 않음`이라는 단어가 매우 중요하다. 중요하지 않은 세부 사항을 생략할수록 좋다.

### 추상화의 잘못된 방식

1. 실제로 중요하지 않은 세부 정보가 포함될 수 있다. 이 경우 추상화가 필요 이상으로 복잡해지고 추상화를 사용하는 개발자의 인지 부하가 증가된다.
2. 추상화가 실제로 중요한 세부 사항을 생략하는 경우이다. 이로 인해 모호해지며 개발자는 개발에 필요한 모든 정보를 얻을 수 없다. 

추상화 디자인의 핵심은 무엇이 중요한지 이해하고, 중요한 정보의 양을 최소화하는 디자인을 찾는 것이다. 

## 4.4 딥 모듈

가장 좋은 모듈은 강력한 기능을 제공하면서도 간단한 인터페이스를 갖춘 모듈이다. 간단한 인터페이스 뒤에 많은 기능이 숨겨져 있다. 심층 모듈은 내부 복잡성이 극히 일부만 사용자에게 표시되므로 좋은 추상화이다.

<p align="center">
  <img width="460" height="300" src="./images/스크린샷 2024-09-03 오전 7.47.07.png">
</p>

인터페이스가 더 작고 단순할수록 복잡성이 줄어든다. 

## 4.5 얕은 모듈

얕은 모듈은 제공하는 기능에 비해 인터페이스가 상대적으로 복잡한 모듈이다. 복잡성을 관리하는 데 큰 도움이 되지 않는다. 복잡성 관리의 관점에서 볼 때 이 방법은 상황을 개선하기는커녕 오히려 악화시킨다.

<aside>
💡

위험 신호: 얕은 모듈
얕은 모듈은 제공하는 기능에 비해 인터페이스가 복잡한 모듈이다. 

</aside>

## 4.6 분류염

많은 클래스와 메서드는 전체 시스템을 복잡해질 수 있다. 

## 4.7 예: 자바와 유닉스 I/O

자바 프로그래밍 커뮤니티에는 분류염 문화가 뿌리를 내린 것 같다. 

## 4.8 결론

모듈의 인터페이스를 구현에서 분리함으로써 시스템의 나머지 부분에서 구현의 복잡성을 숨길 수 있다.

모듈 사용자는 해당 인터페이스가 제공하는 추상화만 이해하면 된다.