export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("plus") && query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/\d+/g); // Extracts numbers from the query
    if (numbers && numbers.length === 3) {
      const product = Number(numbers[1]) * Number(numbers[2]); // Multiplies the second and third numbers
      const result = Number(numbers[0]) + product; // Adds the first number to the product
      return result.toString(); // Returns the result as a string
    }
  }

  if (query.toLowerCase().includes("to the power of")) {
    const numbers = query.match(/\d+/g); // Extracts numbers from the query
    if (numbers && numbers.length === 2) {
      const result = Math.pow(Number(numbers[0]), Number(numbers[1])); // Raises the first number to the power of the second number
      return result.toString(); // Returns the result as a string
    }
  }

  if (query.toLowerCase().includes("anagram of dictionary")) {
    const words = query.match(/\b\w+\b/g); // Extracts the words from the query
    const targetWord = "dictionary";
  
    // Helper function to check if two words are anagrams
    const isAnagram = (word1: string, word2: string) => {
      const sortedWord1 = word1.toLowerCase().split('').sort().join('');
      const sortedWord2 = word2.toLowerCase().split('').sort().join('');
      return sortedWord1 === sortedWord2;
    };
  
    const result = words.find((word) => isAnagram(word, targetWord));
  
    return result ? result : ""; // Return the anagram or an empty string if none found
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
    if (numbers && numbers.length >= 2) { // Ensure there are at least two numbers
      const result = numbers.reduce((sum, num) => sum + Number(num), 0); // Adds all numbers
      return result.toString(); // Returns the result as a string
    } else if (numbers && numbers.length === 1) { // Case for a single number
      return numbers[0]; // Just return the single number
    }
  }
  

  if (query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/\d+/g); // Extracts numbers from the query
    if (numbers && numbers.length === 2) {
      const product = Number(numbers[0]) * Number(numbers[1]); // Multiplies the two numbers
      return `${product}`;
    }
  }
  
  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    const numbers = query.match(/\d+/g); // Extracts numbers from the query
    if (numbers) {
      const result = numbers.find((num) => {
        const number = Number(num);
        const sqrt = Math.sqrt(number);
        const cbrt = Math.cbrt(number);
        return Number.isInteger(sqrt) && Number.isInteger(cbrt); // Checks if it's both a square and a cube
      });
  
      return result ? result.toString() : ""; // Return the number as a string or an empty string if not found
    }
  }
  

  if (query.toLowerCase().includes("which of the following numbers are primes")) {
    const numbers = query.match(/\d+/g); // Extracts numbers from the query
    if (numbers) {
      const isPrime = (num: number) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
  
      const primes = numbers.filter((num) => isPrime(Number(num)));
      
      return primes.join(', ');
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/\d+/g); // Extracts numbers from the query
    if (numbers && numbers.length === 2) {
      const result = Number(numbers[0]) - Number(numbers[1]); // Subtracts the two numbers
      return result.toString(); // Returns the result as a string
    }
  }
  
  
  
  

  
  


  return "";

}
