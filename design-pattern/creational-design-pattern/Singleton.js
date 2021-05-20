"use strict";
/*
-싱글톤 패턴-
하나의 객체만 생성하는 목적으로 사용
디비 커넥션 처럼 한 시스템에서 매번 커넥션을 연결할 필요 없을 때
싱글톤을 이용하여 하나의 커넥션만 유지
*/
class SingleCar {
    wheels;
    constructor(_wheels) {
      this.wheels = _wheels;
    }
  
    setWheels(_n) {
      this.wheels = _n;
    }
  
  }
  
  const Singleton = {
    instance: null,
    getInstance(_param1) {
      if(!this.instance) this.instance = new SingleCar(_param1);
      return this.instance;
    }
  }
  
  let car1 = Singleton.getInstance(4);
  let car2 = Singleton.getInstance(3);
  let car3 = Singleton.getInstance(2);
  
  console.log(car1.wheels, car2.wheels, car3.wheels);
  car2.setWheels(10);
  console.log(car1.wheels, car2.wheels, car3.wheels);