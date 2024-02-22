import get_fizzbuzz from "./fizzbuzz.js";


describe("FizzBuzz", () =>{
  it("Si genero un numero sin regla me genera el mismo numero ejemplo: generar(1) => 1", () => {
    expect(get_fizzbuzz(1)).toEqual("1");
  });
 
});