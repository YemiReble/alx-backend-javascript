// Define the weakMap constant
const weakMap = new WeakMap();

// Define the queryAPI function
function queryAPI(endpoint) {
  // Log the endpoint
  console.log(`queryAPI: Calling endpoint ${endpoint}`);

  // Track the number of queries for the endpoint in the weakMap
  weakMap.set(endpoint, (previousCount) => previousCount + 1);

  // Check if the number of queries is >= 5
  if (weakMap.get(endpoint) >= 5) {
    throw new Error(`Endpoint load is high: ${endpoint}`);
  }

  // Do the actual API call and log the response
  fetch(`https://api.example.com/${endpoint}`)
    .then((response) => response.json())
    .then((data) => console.log(`queryAPI: API response for ${endpoint}:`, data));
}