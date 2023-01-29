class Telephone {
  constructor() {
    this.phoneNumber = new Set();
    this.observers = new Set();
  }

  //   Adding new phone number
  addPhoneNumber(number) {
    this.phoneNumber.add(number);
  }

  //   Removing phone number
  removePhoneNumber(number) {
    this.phoneNumber.delete(number);
  }

  //   Dialling added phone numbers
  dialPhoneNumber(number) {
    if (this.phoneNumber.has(number)) {
      this.notify(number);
    } else {
      console.log(
        `🔴INVALID PHONE NUMBER!🔴\nTRY ADDING THIS PHONE NUMBER BEFORE DIALING!😉`
      );
    }
  }

  //   Adding observer
  add(observer) {
    this.observers.add(observer);
  }

  // Removing observer
  remove(observer) {
    this.observers.delete(observer);
  }

  //   Notifying observers
  notify(number) {
    for (let observer of this.observers) {
      observer.update(number);
    }
  }
}

// first observer
class Observer {
  constructor() {}

  update(number) {
    console.log("Phone Number: " + number);
  }
}

// second observer
class Observer2 {
  constructor() {}

  update(number) {
    console.log("Now Dialling... " + number + "\n");
  }
}

const phone = new Telephone();

const num1 = "07034332367";
const num2 = "09021555698";

phone.addPhoneNumber(num1);
phone.addPhoneNumber(num2);

const dial = new Observer();
const call = new Observer2();

phone.add(dial);
phone.add(call);

phone.dialPhoneNumber(num1);
phone.dialPhoneNumber(num2);
