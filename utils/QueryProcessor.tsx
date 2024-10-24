export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "hhamad" );
  }

  if (query.includes("What is your name?")) {
    return "hhamad-313";  // Use your name as the response
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const numbers = query.match(/\d+/g);  // Extracts all numbers from the query
    if (numbers) {
      const largest = Math.max(...numbers.map(Number));  // Finds the largest number
      return `${largest}`;
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g); // Extracts numbers from the query
    if (numbers && numbers.length === 2) {
      const sum = Number(numbers[0]) + Number(numbers[1]); // Adds the two numbers
      return `${sum}`;
    }
  }

  if (query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/\d+/g); // Extracts numbers from the query
    if (numbers && numbers.length === 2) {
      const product = Number(numbers[0]) * Number(numbers[1]); // Multiplies the two numbers
      return `${product}`;
    }
  }
  
  


  return "";

}
