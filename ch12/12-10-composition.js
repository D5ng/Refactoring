// 위임
class Printer {
  #printerDelegate;
  constructor(printerDelegate){
    this.#printerDelegate = printerDelegate ? printerDelegate : new defaultPrinter();
  }

  print() {
    return this.#printerDelegate.print()
  }
}

class defaultPrinter {
  print() {
    console.log("기본적인 출력");
  }
}

class RedPrinter {
  print() {
    console.log("🔴 빨간색 출력");
  }
}

class BluePrinter {
  print() {
    console.log("🔵 파란색 출력");
  }
}

const printers = [
  new Printer(),
  new Printer(new RedPrinter()),
  new Printer(new BluePrinter()),
];

printers.forEach((printer) => printer.print());
