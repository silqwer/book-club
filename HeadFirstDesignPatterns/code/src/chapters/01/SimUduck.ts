class Duck {
  constructor() {}
  quack = () => {
    console.log("오리 꽥");
  };
  swim = () => {
    console.log("오리 수영");
  };
  display = () => {
  };
  fly = () => {
    console.log("오리 납니다");
  };
}

class MallardDuck extends Duck {
  constructor() {
    console.log("청둥오리 생성");
    super();
  }

  quack = () => {
    console.log("청둥오리 꽥");
  };

  swim = () => {
    console.log("청둥오리가 수영을 합니다.");
  };

  display = () => {
    console.log("청둥오리 입니다.");
  };

  fly = () => {
    console.log("청둥오리가 납니다");
  };
}

class RedheadDuck extends Duck {
  constructor() {
    console.log("아메리카흰죽지 생성");
    super();
  }

  quack = () => {
    console.log("아메리카흰죽지 꽥");
  };

  swim = () => {
    console.log("아메리카흰죽지가 수영을 합니다.");
  };

  display = () => {
    console.log("아메리카흰죽지 입니다.");
  };

  fly = () => {
    console.log("아메리카흰죽지 납니다");
  };
}

class RubberDuck extends Duck {
  constructor() {
    console.log("고무오리 생성");
    super();
  }

  quack = () => {
    console.log("고무오리 꽥");
  };

  swim = () => {
    console.log("고무오리 수영을 합니다.");
  };

  display = () => {
    console.log("고무오리 입니다.");
  };

  fly = () => {
    // 고무오리는 날 수 없습니다.
  };
}

const duck1 = new MallardDuck();
const duck2 = new RedheadDuck();
const duck3 = new RubberDuck();

duck1.display();
duck1.quack();
duck1.swim();
duck1.fly();

duck2.display();
duck2.quack();
duck2.swim();
duck2.fly();

duck3.display();
duck3.quack();
duck3.swim();
duck3.fly();
