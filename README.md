# Express.js Unexpected Code Execution After Sending Response

This repository demonstrates a common, yet subtle, issue in Express.js applications where code execution continues after a response has been sent to the client. This can lead to unexpected behavior or even errors, especially when asynchronous operations are involved.

## Bug Description

The bug lies in the `app.get` handler.  After `res.send()` sends the response, the code continues to execute `console.log('Request handled')`. While not inherently harmful in this simple example, in more complex scenarios, this could lead to unexpected side effects, particularly if the subsequent code interacts with the response object or modifies data related to the request.