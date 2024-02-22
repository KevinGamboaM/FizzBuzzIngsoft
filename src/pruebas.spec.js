import get_fizzbuzz from "./fizzbuzz.js";


describe("FizzBuzz", () =>{
  it("Si genero un numero sin regla me genera el mismo numero ejemplo: generar(1) => 1", () => {
    expect(get_fizzbuzz(1)).toEqual("1");
  });
  it("Si genero un numero sin regla me genera el mismo numero sin importar cual sea ejemplo: generar(n) => n", () => {
    expect(get_fizzbuzz(2)).toEqual("2");
  });
  it("Si genero el numero 3, la regla me genera fizz ejemplo: generar(3) => fizz", () => {
    expect(get_fizzbuzz(3)).toEqual("fizz");
  });
  it("Si genero cualquier numero multiplo de 3, la regla me genera fizz ejemplo: generar(6) => fizz", () => {
    expect(get_fizzbuzz(6)).toEqual("fizz");
  });
  it("Si genero el numero 5, la regla me genera buzz ejemplo: generar(5) => buzz", () => {
    expect(get_fizzbuzz(5)).toEqual("buzz");
  });
  it("Si genero cualquier numero multiplo de 5, la regla me genera buzz ejemplo: generar(10) => buzz", () => {
        expect(get_fizzbuzz(10)).toEqual("buzz");
  });
  it("Si genero el numero 15, la regla me genera fizzbuzz ejemplo: generar(15) => fizzbuzz", () => {
    expect(get_fizzbuzz(15)).toEqual("fizzbuzz");
  });
});