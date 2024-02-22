function get_fizzbuzz(n) {
  if(n % 3 === 0){
    return "fizz"
  }else if(n % 5 === 0){
    return "buzz"
  }
  return n+"";
}

export default get_fizzbuzz;