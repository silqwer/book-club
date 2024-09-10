# 5. 정보 은폐

## 5.1 정보 숨기기

가장 중요한 기술로 기본 아이디어는 각 모듈이 설계 결정을 나타내는 몇 가지 지식을 캡슐화해야 한다는 것이다. 

정보 숨기기는 두 가지 방법으로 복잡성을 줄인다.

1. 모듈에 대한 인터페이스를 단순화한다.
2. 시스템 발전을 더 쉽게 만든다. 

정보 은폐의 가장 좋은 형태는 정보가 모듈 내에 완전히 숨겨져 모듈 사용자에게 관련성이 없고 보이지 않는 것이다.

## 5.2 정보 유출

정보 은닉의 반대말이다. 정보 유출로 인해 종속성이 생성된다. 정보의 변경이 되면 관련된 모든 모듈을 변경해야 하는 상황도 생긴다. 

정보 유출은 소프트웨어 설계에서 가장 중요한 위험 신호 중 하나이다.

소프트웨어 디자이너로서 배울 수 있는 최고의 기술 중 하나는 정보 유출에 대한 높은 수준의 민감성이다.

<aside>
💡

위험 신호: 정보 유출
정보 유출은 특정 유형의 파일 형식을 이해하는 두 개의 서로 다른 클래스와 같이 동일한 지식이 여러 위치에서 사용될 때 발생한다.

</aside>

## 5.3 시간적 분해

정보 유출의 일반적인 원인 중 하나는 저자가 말하는 시간적 분해라고 부르는 디자인 스타일이다.

시간적 분해에서 시스템의 구조는 작업이 발생하는 시간 순서에 해당한다.

모듈을 설계할 때 작업이 발생하는 순서가 아니라 각 작업을 수행하는 데 필요한 지식을 집중하라.

<aside>
💡

위험 신호: 시간적 분해
시간적 분해에서는 실행 순서가 코드 구조에 반영된다. 즉 서로 다른 시간에 발생하는 작업은 서로 다른 메서드나 클래스에 있다. 동일한 지식이 실행의 서로 다른 지점에서 사용되면 여러 위치에서 인코딩되어 정보 유출이 발생한다.

</aside>

## 5.4 예: HTTP 서버

HTTP는 웹 브라우저가 웹 서버와 통신하는 데 사용하는 메커니즘이다.

<p align="center">
  <img width="460" height="300" src="./images/스크린샷 2024-09-05 오전 8.09.08.png">
</p>

## 5.5 예: 클래스가 너무 많습니다.

학생들이 저지르는 가장 흔한 실수는 코드를 다수의 얕은 클래스로 나누어 클래스 간 정보 유출을 초래하는 것이다.

## 5.6 예: HTTP 매개변수 처리

대부분의 학생들은 너무 얕은 매개변수 반환 인터페이스를 사용했고 이로 인해 정보 숨김 기회가 손실되었다.

## 5.7 예: HTTP 응답의 기본값

이 분야에서 학생들이 저지르는 가장 흔한 실수는 부적절한 기본값이었다. 

<aside>
💡

위험 신호: 노출 과다
일반적으로 사용되는 기능에 대한 API가 사용자에게 거의 사용되지 않는 다른 기능에 대해 학습하도록 강요한다면, 거의 사용되지 않는 기능이 필요하지 않은 사용자의 인지 부하가 증가한다.

</aside>

## 5.8 클래스 내에 숨겨진 정보

각 인스턴스 변수가 사용되는 장소 수를 최소화

변수가 사용되는 위치 수를 줄일 수 있다면 클래스 내의 종속성을 제거하고 복잡성을 줄일 수 있다.

## 5.9 너무 멀리 나아가다

정보 숨기기는 숨겨진 정보가 해당 모듈 외부에 필요하지 않은 경우에만 의미가 있다.

소프트웨어 디자이너로서 목표는 모듈 외부에 필요한 정보의 양을 최소화하는 것이다.

## 5.10 결론

정보 은닉과 심층 모듈은 밀접하게 연관되어 있다. 모듈이 많은 정보를 숨기면 모듈이 제공하는 기능의 양이 늘어나는 동시에 인터페이스도 줄어드는 경향이 있다. 이렇게 하면 모듈이 더 깊어진다.

반대로 모듈이 많은 정보를 숨기지 않으면 기능이 많지 않거나 인터페이스가 복잡하다. 어느 쪽이든 모듈을 얕다.

시스템을 모듈로 분해할 때 런타임에 작업이 발생하는 순서에 영향을 받지 않도록 하라. 이는 시간적 분해의 경로로 이어지며, 이로 인해 정보 유출과 얕은 모듈이 발생하게 된다.