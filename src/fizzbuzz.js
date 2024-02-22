function get_fizzbuzz(n) {
  if(n % 3 === 0){
    return "fizz"
  }
  return n+"";
}

export default get_fizzbuzz;