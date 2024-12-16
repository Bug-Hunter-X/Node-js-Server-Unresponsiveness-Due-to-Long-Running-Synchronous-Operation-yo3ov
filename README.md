# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a server can become unresponsive due to a long-running synchronous operation blocking the event loop.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution using asynchronous operations.

## Problem

Node.js is single-threaded and relies on its event loop to handle requests. When a long-running synchronous operation is executed, it blocks the event loop, preventing other requests from being processed.  This leads to server unresponsiveness and potential crashes.

## Solution

The solution involves refactoring the long-running task to use asynchronous operations.  This allows the event loop to continue processing other requests while the task runs in the background.  In the example, this is demonstrated using `setImmediate` for simple illustrative purposes.  For longer-running tasks, promises or async/await are preferred.