https://www.mycompiler.io/ko/new/nodejs

# B.1 비교 연습하기

```tsx
const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes){
    
    function getMiutes (time){
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    }
    
    // 시작시간을 분으로 변경
    const starTimeTotalMinutes = getMiutes(startTime);

    // dayStart 분으로 변경
     const dayStartTotalMinutes = getMiutes(dayStart);

    // 시작 시간이 근무 전이면 false
    if(starTimeTotalMinutes < dayStartTotalMinutes){
         return console.log('false'); 
    }

    // 회의가 진행된 시간을 분으로 변경
    const durationTotalMinutes = starTimeTotalMinutes + durationMinutes;
    
    // dayEnd을 분으로 변경
     const dayEndTotalMinutes = getMiutes(dayEnd);

    // 회의가 진행된 시간이 근무시작 전인가?
    if(durationTotalMinutes < dayStartTotalMinutes) {
        return console.log('false');
    }

    // 회의가 진행된 시간이 근무 시간을 넘는가?
    if(durationTotalMinutes > dayEndTotalMinutes) {
        return console.log('false');
    }

    return console.log('true');

}

scheduleMeeting("7:00", 15);
scheduleMeeting("07:15", 30);
scheduleMeeting("7:30", 30);
scheduleMeeting("11:30", 60);
scheduleMeeting ("17:00", 45);
scheduleMeeting("17:30", 30);
scheduleMeeting("18:00", 15);
```

# B.2 클로저 연습하기

```jsx
function range(start, end) {
    // 작성
    if(!end){
        // start 가 시작인 함수를 만들어 리턴
        return function(number){
            const arr = []
            for (let index = start; index <= number; index++) {
                arr.push(index);
            }
            console.log(arr);
        }
    }

    const arr = [];
    for (let index = start; index <= end; index++) {
        arr.push(index);
    }

    console.log(arr);
}

range(3, 3); // [3]
range(3, 8); // [3, 4, 5, 6, 7, 8]
range(3, 0); // []

var start3 = range(3);
var start4 = range(4);

start3(3); // [3]
start3(8); // [3, 4, 5, 6, 7, 8]
start3(0); // []

start4(6); // [4, 5, 6]
```

# B.3 프로토타입 연습하기

```jsx
function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
    symbols: ["♠", "♥", "♦", "♣", "☺", "★", "☽", "✻"],
    spin() {
        if (this.position == null) {
           this.position = randMax(this.symbols.length - 1); 
        }
        this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1);
        }
        return this.symbols[this.position];
    }
};

var slotMachine = {
    reels: [
        // 여기에 코드를 작성하세요
        // 슬롯머신에는 세 개의 릴이 필요합니다.
        // 힌트: Object.create()를 사용하세요
        Object.create(reel),
        Object.create(reel),
        Object.create(reel)
    ],
    spin() {
        this.reels.forEach(function spinReel(reel) {
           reel.spin(); 
        });
    },
    display() {
        // 여기에 코드를 작성하세요
        for (let index = 0; index < this.reels.length; index++) {
             this.spin();
            console.log(`${this.reels[0].display()} | ${this.reels[1].display()} | ${this.reels[2].display()}`);
        }
    }
};

slotMachine.spin();
slotMachine.display();

console.log('=========')

slotMachine.spin();
slotMachine.display();
```