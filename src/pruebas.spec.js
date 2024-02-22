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
 
});