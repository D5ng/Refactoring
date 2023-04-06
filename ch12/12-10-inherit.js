// 상속
class Printer {
  print(){
    console.log('기본 출력');
  }
}

class RedPrinter extends Printer {
  print(){
    console.log("🔴 빨간색 출력");
  }
}

class BluePrinter extends Printer {
  print() {
    console.log("🔵 파란색 출력");
  }
}

const printers = [
  new Printer(),
  new RedPrinter(),
  new BluePrinter()
]

printers.forEach(printer => printer.print());