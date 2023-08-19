import { Duck } from "../../interface/Dock";

class MallardDuck implements Duck {
  constructor() {
    console.log("청둥오리 생성");
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
}

class RedheadDuck implements Duck {
  constructor() {
    console.log("아메리카흰죽지 생성");
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
}

const duck1 = new MallardDuck();
const duck2 = new RedheadDuck();

duck1.display();
duck1.quack();
duck1.swim();

duck2.display();
duck2.quack();
duck2.swim();
