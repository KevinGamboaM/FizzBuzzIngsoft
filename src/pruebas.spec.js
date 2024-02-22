import get_fizzbuzz from "./fizzbuzz.js";


describe("FizzBuzz", () =>{
  it("Si genero un numero sin regla me genera el mismo numero ejemplo: generar(1) => 1", () => {
    expect(get_fizzbuzz(1)).toEqual("1");
  });
  it("Si genero un numero sin regla me genera el mismo numero sin importar cual sea ejemplo: generar(n) => n", () => {
    expect(get_fizzbuzz(2)).toEqual("2");
  });
 
});