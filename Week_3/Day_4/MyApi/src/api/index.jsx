// This file contains the API calls for the application. 
// It is used to fetch data from the API and return it to the components.

export const getPost = async () => {
  // The fetch() function is used to make a network request to the specified URL.
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{

        // The method property specifies the HTTP method to be used when making the request. 
        // In this case, it is set to "GET" to retrieve data from the specified URL.
        method: "GET",
});
// .json() is a method that parses the response body as JSON formate and returns a JavaScript object.   
    return response.json()  ;
} ;