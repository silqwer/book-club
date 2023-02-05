## 16장 SerialDate 리팩터링

```
논의내용)
역시 리팩터링이 주된 내용이라 리팩터링 관련된 얘기를 가볍게 해보면 좋겠습니다.
```

데이비드 길버트가 SerialData 클래스 구현
책의 주소는 오래되서 없고 아래 주소에서 확인 가능하다.
https://www.jfree.org/jcommon/api/org/jfree/date/SerialDate.html

또 github opensource로 확인해 볼 수 있다.
https://github.com/jfree/jcommon/blob/master/src/main/java/org/jfree/date/SerialDate.java

SerialData 클래스는 시간 기반 날짜 클래스가 아닌 순수 날짜 클래스를 위해 만들어졌다.

### 첫째, 돌려보자

테스트 코드가 모든 테스트 케이스를 통과하지 않는다. 그래서 독자적으로 단위 테스트 케이스를 구현했다.
기존은 185개에서 91개를 실행했는데 (커버리지 50%), 변경한 코드는 185개 중 170개를 실행한다 (커버리지 92%)
나머지 버그나 로직이 틀린 부분을 손봐서 모든 테스트 케이스가 통과하게 만든다.

### 둘째, 고쳐보자

SerialDate에서 serial이라는 단어가 들어간 이유
일련번호(serial number)를 사용해서 구현했기 때문에 그렇고, 1899-12-30을 기준으로 경과한 날짜 수를 사용한다.
일련번호보다는 상대 오프셋(relative offset)이 정확하다. SerialDate는 서술적이지 못한 이름이고 서술적인 이름으로 한다면 서수(ordinal)가 있다.

그리고 SerialDate는 구현을 암시하지만 실상은 추상 클래스다. 구현은 암시할 필요 없이 숨기는 편이 좋다.
추상화 수준이 올바르지 못하므로 그냥 Date가 적합하다.
하지만 java에는 Date 관련 클래스가 있으므로 편의상 DayDate라고 명명하는데 SerialDate를 뜻한다.

월을 표시하는 상수는 static final의 상수 모음으로 표시했는데 enum으로 변경하는 것이 좋다.
LAST_DAY_OF_MONTH 배열을 설명하는 주석이 비슷하므로 삭제.

오해의 소지가 있는 코드

``` java
DayDate date = DateFactory.makeDate(5, Month.DECEMBER, 1952);
date.addDays(7);
```

addDays가 date 객체를 변경할 것이라고 생각하지만, 실제로는 date 객체는 변화가 없고 addDays가 적용된 반환 값을 받아야 한다.
그래서 plusDays로 메서드의 원래 의도를 반영하는 이름으로 변경했다.

``` java
DayDate date = oldDate.plusDays(5);
```

위 코드를 봤을 때 oldDate 객체가 변경된다는 느낌은 없다.

작업을 정리해 보면

- 오래된 주석 삭제
- enum으로 정리하고 독립적인 파일로 옮긴다.
- 정적 변수와 정적 메서드 등은 새로 만든 DateUtil 클래스로 옮긴다.
- 추상 메서드는 DayDate 클래스로 올림
- Month.make는 Month.fromInt로 변경
- plusYears, plusMonths에 중복이 있어 correctLastDayOfMonth라는 메서드를 생성해 중복을 없앴다.
- 매직넘버 1을 없애고 enum의 toInt() 로 변경

### 결론

다시 한 번 우리는 보이스카우트 규칙을 따랐다.
체크아웃한 코드보다 좀 더 깨끗한 코드를 체크인하게 되었다.
시간은 걸렸지만 가치 있는 작업이었다.
테스트 커버리지가 증가했으며, 버그 몇 개를 고쳤으며, 코드 크기가 줄었고, 코드가 명확해졌다.
다음 사람은 더 쉽게 코드를 이해할 수 있다.
그래서 코드를 좀 더 쉽게 개선할 수 있다.