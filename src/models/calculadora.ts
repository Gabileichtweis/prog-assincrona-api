export class Calculadora {
  public operação: Operação;
  public valorA: Number;
  public valorB: Number;
}

enum Operação {
  SOMAR = 'somar',
  SUBTRAIR = 'subtrair',
  MULTIPLICAR = 'multiplicar',
  DIVIDIR = 'dividir',
}
