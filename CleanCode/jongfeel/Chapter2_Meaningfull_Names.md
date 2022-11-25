## 2장 의미있는 이름

```
논의내용)
의미 있는 이름을 짓기 위해서 나중에 이름을 바꿔봤는지
그리고 다른 사람이 작성한 코드의 이름이 잘못되서 바꿔본 적이 있는지 생각해 보면 좋을 것 같다.
```

### 들어가면서

소프트웨어에서 이름은 어디나 쓰인다.
이름을 잘 지으면 여러모로 편하다.

### 의도를 분명히 밝혀라

의도가 분명한 이름이 정말로 중요하다.
더 나은 이름이 떠오르면 개선하자.

``` java
public List<int[]> getThem() {
  List<int[]> list1 = new ArrayList<int[]>();
  for (int[] x : theList)
    if (x[0] == 4)
      list1.add(x);
  return list1;
}
```

문제는 코드의 단순성이 아니라 코드의 함축성이다.
코드 맥락이 코드 자체에 명시적으로 드러나지 않는다.

``` java
public List<int[]> getFlaggedCells() {
  List<int[]> flaggedCells = new ArrayList<int[]>();
  for (int[] cell : gameBoard)
    if (cell[STATUS_VALUE] == FLAGGED)
      flaggedCells.add(cell);
  return flaggedCells;
}
```

``` java
public List<Cell> getFlaggedCells() {
  List<Cell> flaggedCells = new ArrayList<Cell>();
  for (Cell cell : gameBoard)
    if (cell.isFlagged())
      flaggedCells.add(cell);
  return flaggedCells;
}
```

단순히 이름만 고쳤는데도 함수가 하는 일을 이해하기 쉬워졌다.
이것이 좋은 이름이 주는 위력이다.

### 그릇된 정보를 피하라

여러 계정을 그룹으로 묶을 때, 실제 List가 아니라면 accountList라 명명하지 않는다.
accountGroup, bunchOfAcounts, accounts라 명명한다.

흡사한 이름을 사용하지 않는다.
ForEfficientHandlingOfStrings
XYZControllerForEffcientStorageOfStrings

유사한 개념은 유사한 표기법을 사용한다. 이것도 정보다.
일관성이 떨어지는 표기법은 그릇된 정보다.

### 의미 있게 구분하라

컴파일러를 통과할지라도 연속된 숫자를 덧붙이거나 불용어noise word를 추가하는 방식은 적절하지 못하다.
이름이 달라야 한다면 의미도 달라져야 한다.

불용어를 추가한 이름 역시 아무런 정보도 제공하지 못한다.
Product class에서 ProductInfo, ProductData는 개념을 구분하지 않은 채 이름만 달리하는 경우다.

불용어는 중복이다.
변수 이름에 variable
표 이름에 table
NameString과 Name이 다른 점
Customer와 CustomerObject의 차이

읽는 사람이 차이를 알도록 이름을 지어라

### 발음하기 쉬운 이름을 사용하라

발음하기 쉬운 이름은 중요하다.
프로그래밍은 사회 활동이기 때문이다.

genymdhms(generate date, year, month, day, hour, minute, second)
"젠 와이 엠 디 에이취 엠 에스"
"젠 야 무다 힘즈"

### 검색하기 쉬운 이름을 사용하라

이름 길이는 범위 크기에 비례해야 한다.
변수나 상수를 코드 여러 곳에서 사용한다면 검색하기 쉬운 이름이 바람직하다.

### 인코딩을 피하라

문제 해결에 집중하는 개발자에게 인코딩은 불필요한 정신적 부담이다.

#### 헝가리식 표기법

윈도우 C API에서 사용. 
컴파일러가 타입을 점검하지 않았으므로 프로그래머에게 타입을 기억할 단서가 필요했다.

지금은 IDE가 코드를 컴파일하지 않고도 타입 오류를 감지하므로
헝가리식 표기법이나 인코딩 방식이 오히려 방해가 된다.

#### 멤버 변수 접두어

멤버 변수에 m_ 접두어를 붙일 필요도 없다.
IDE가 멤버 변수를 다른 색상으로 표시한다.

코드를 읽을수록 접두어는 관심 밖으로 밀려난다.
접두어는 옛날에 작성한 구닥다리 코드라는 징표가 되버린다.

#### 인터페이스 클래스와 구현 클래스

인터페이스 이름은 접두어를 붙이지 않는 편이 좋다는 의견.
옛날 코드에서 많이 사용하는 접두어 I는 주의를 흐트리고 과도한 정보를 제공한다.

```
의견)
사용하는 언어가 java라면 의심의 여지 없이 찬성 의견인데
아직도 I 접두어를 쓰는 C++과 C# 이라면 논란의 여지는 있을 것으로 보인다.

이와 관련한 흥미로운 질문 답변의 글이 있다.
질문자는 clean code를 읽고 이 내용에 동의할 수 없다는 질문을 올린 글인데
답변자의 대답 중에 인상적인 것은
인터페이스에 I를 쓰지 말아야 할 규칙을 설명하는 것 보다
Microsoft의 규칙을 설명하는게 덜 귀찮다는(far less hassle) 대답에 동의하는 편이다.
아니 많이 동의한다.

https://softwareengineering.stackexchange.com/questions/117348/should-interface-names-begin-with-an-i-prefix
```

### 자신의 기억력을 자랑하지 마라

(기억력을 자랑하는) 똑똑한 프로그래머와 전문가 프로그래와 차이점은
명료함이 최고라는 사실에 있다.
전문가 프로그래머는 자신의 능력을 좋은 방향으로 사용해 남들이 이해하는 코드를 내놓는다.

```
의견)
남들이 이해하는 코드를 짠다는 건 상당히 중요하고
많이 동의하는 내용이다.

가장 최악은
자신이 짠 코드를 이해 못하고 설명을 못하는 프로그래머일 것이다.
```

### 클래스 이름

클래스 이름과 객체 이름은 명사나 명사구가 적합하다. 동사는 사용하지 않는다.

좋은 예) Customer, WikiPage, Account, AddressParser
나쁜 예) Manager, Processor, Data, Info

### 메서드 이름

메서드 이름은 동사나 동사구가 적합하다. (postPayment, deletePage, save 등)
접근자Accessor, 변경자Mutator, 조건자Predicate는 값 앞에
get, set, is를 붙인다. (javabean 표준)

### 기발한 이름은 피하라

HolyHandGrenade라는 함수 보다 DeleteItems가 더 좋다.
재미난 이름보다 명료한 이름을 선택하라.

### 한 개념에 한 단어를 사용하라

추상적인 개념 하나에 단어 하나를 선택해 이를 고수한다.
같은 메서드인데 fetch, retrieve, get으로 제각각 부르면 혼란스럽다.

메서드 이름은 독자적이고 일관적이어야 한다.
그래야 주석을 뒤져보지 않고도 프로그래머가 올바른 메서드를 선택한다.

일관성 있는 어휘는 코드를 사용할 프로그래머가 간갑게 여길 선물이다.

### 말장난을 하지 마라

한 단어를 두 가지 목적으로 사용하지 마라.
다른 개념에 같은 단어를 사용한다면 그것은 말정난에 불과하다.

프로그래머는 코드를 최대한 이해하기 쉽게 짜야 한다.
집중적인 탐구가 필요한 코드가 아니라 대충 훑어봐도 이해할 코드 작성이 목표다.

```
의견)
모든 프로그래머는 이 사실을 알고 있고 이게 좋다는 것도 알고 있고 당연히 이렇게 해야 한다는 것도 알고 있다.
하지만 실제 코드를 작성하고 이것이 이해하기 쉬운 코드라고 보여주는 프로그래머는 드문 것 같다.
```

### 해법 영역에서 가져온 이름을 사용하라

코드를 읽을 사람도 같은 프로그래머이므로 전산 용어, 알고리즘 이름, 패턴 이름, 수학 용어 등은 허용할 수 있다.
프로그래머에게 익숙한 기술 개념은 기술 이름이 가장 적합한 선택이다.

### 문제 영역에서 가져온 이름을 사용하라

문제 영역domain은 프로그래머가 분야 전문가에게 의미를 물어 파악할 수 있다.
우수한 프로그래머와 설계자라면 해법 영역과 문제 영역을 구분할 줄 알아야 한다.

### 의미 있는 맥락을 추가하라

``` java
private void printGuessStatistics(char candidate, int count) {
  String number;
  String verb;
  String pluralModifier;
  if (count == 0) {
    number = "no";
    verb = "are";
    pluralModifier = "s";
  } else if (count == 1) {
    number = "1";
    verb = "is";
    pluralModifier = "";
  } else {
    number = Integer.toString(count);
    verb = "are";
    pluralModifier = "s";
  }
  String guessMessage = String.format( "There %s %s %s%s", verb, number, candidate, pluralModifier );
  print(guessMessage);
}
```

``` java
public class GuessStatisticsMessage {
  private String number;
  private String verb;
  private String pluralModifier;

  public String make(char candidate, int count) {
    createPluralDependentMessageParts(count);
    return String.format(
      "There %s %s %s%s",
      verb, number, candidate, pluralModifier );
  }

  private void createPluralDependentMessageParts(int count) {
    if (count == 0) {
      thereAreNoLetters();
    } else if (count == 1) {
      thereIsOneLetter();
    } else {
      thereAreManyLetters(count);
    }
  }

  private void thereAreManyLetters(int count) {
    number = Integer.toString(count);
    verb = "are";
    pluralModifier = "s";
  }

  private void thereIsOneLetter() {
    number = "1";
    verb = "is";
    pluralModifier = "";
  }

  private void thereAreNoLetters() {
    number = "no";
    verb = "are";
    pluralModifier = "s";
  }
}
```

### 불필요한 맥락을 없애라

일반적으로는 짧은 이름이 긴 이름보다 좋다.
단, 의미가 분명한 경우에 한해서다.
이름에 불필요한 맥락을 추가하지 않도록 주의한다.

accountAddress와 customerAddress는 Address 클래스 인스턴스로는 좋은 이름이나 클래스 이름으로는 적합하지 못하다.

### 마치면서

좋은 이름을 선택하려면 설명 능력이 뛰어나야 하고 문화적인 배경이 같아야 한다.
이것이 제일 어렵다.
좋은 이름을 선택하는 능력은 기술, 비즈니스, 관리 문제가 아니라 교육 문제다.

이름을 바꾸지 않으려는 이유 중 하나는 다른 개발자가 반대할까 두려워서인데
그렇다고 해도 코드를 개선하려는 노력을 중단해서는 안 된다.