# COLD STARTS IN AWS LAMBDA

## 1. INTRODUCTION

- AWS Lambda functions execute within a containerized environment
  - Preconfigured environments that allows you to run code in an isolated fashion
  - Container has its own resources based on memory allocated to the function

### 2. AWS LAMBDA FUNCTION INVOCATION PHASES

### (A) INITIALIZATION PHASE

- When a Lambda function is first invoked, AWS creates an execution environment (a container) for the function
  - This involves initializing the container and provisioning the necessary resources before running the code
  - It results in some increased latency
  <!-- Amount of time delay -->
- During this phase:

| Happenings | Explanation |
| :--------: | --------- |
| Handler Code Loading | <ul><li>The handler code (entry point of the Lambda function) is loaded and executed</li> <li>This includes any initialization logic outside the handler function</li></ul> |
| Initialization Code Execution | <ul><li>Code outside the handler function runs once per container</li> <li>This can include importing libraries, setting up connections, or loading configuration data</li> <li>This is also the best place to initialize resources that you want to reuse across multiple invocations</li></ul> |

**=> This is called <u>COLD START</u>**

### (B) INVOCATION PHASE

- Once the initialization phase is complete, the Lambda service invokes the function handler to process events
- Here's what happens:

| Happenings | Explanation |
| :--------: | --------- |
| Handler Invocation | <ul><li>AWS Lambda invokes the handler method, passing in the event data and context object</li> <li>The handler is where the main logic of the function resides</li></ul> |
| Event Processing | The handler processes the event, performs necessary operations (like reading from or writing to a database), and then returns a response |

### (C) FROZEN AND THAWED STATES

- AWS Lambda optimizes performance by reusing execution environments for subsequent invocations
- This leads to the concepts of "frozen" and "thawed" states:

| State | Explanation |
| :--------: | --------- |
| Frozen State | <ul><li>After processing a request, the Lambda function can enter a frozen state</li> <li>In this state, the execution environment is paused (frozen) to save resources</li></ul> |
| Thawed State | <ul><li>When a new request comes in, if the same container is reused, the Lambda execution environment is resumed (thawed) from its frozen state</li> <li>This allows the function to bypass the initialization phase and go straight to handling the new event, thus saving time</li></ul> |

## 3. COLD START CONCEPTS

```plaintext
Refers to the initial time it takes to set up the execution environment for a Lambda function
when it is invoked for the first time, or after a period of inactivity, or running inside a VPC
```

### (A) EXECUTION ENVIRONMENT INITIALIZATION

- During a cold start, AWS Lambda needs to create a new execution environment (container). This includes:
  - Allocating compute resources
  - Loading the function's code and dependencies
  - Running any initialization code outside the handler function

### (B) LATENCY IMPACT

- Cold starts add latency to the function's response time 
  - the setup process can take a few hundred milliseconds to a few seconds 

#### i. POSSIBLE REASONS
    
- Size of the function's code
- Dependencies
- The complexity of the initialization logic
- Delay inserted by the VPC

### (C) MITIGATION STRATEGIES

- Keeping functions small and lightweight
- Using provisioned concurrency to keep environments warm
- Optimizing the initialization code to be as fast as possible
- Sending some dummy requests to Lambda every few minutes

## 4. EXAMPLE

### (A) COLD START PROCESS

```plaintext
1. Invocation Request: A request to execute the Lambda function is received.
2. Container Setup: AWS allocates resources and sets up the execution environment.
3. Code Loading: The function's code and dependencies are loaded into the environment.
4. Initialization Code Execution: Any code outside the handler is executed.
5. Handler Execution: The handler function processes the event.
```

### (B) COLD START SCENARIO

```javascript
// Example initialization code
import { connectToDatabase } from './database';

let dbConnection;

// This initialization code runs during a cold start
async function initialize() {
  dbConnection = await connectToDatabase();
}

// Lambda handler
export const handler = async (event) => {
  if (!dbConnection) {
    await initialize(); // Runs during cold start
  }

  // Process event using dbConnection
  return { statusCode: 200, body: 'Hello, world!' };
};
```

- In this example, the initialize function sets up a database connection during a cold start
- On subsequent invocations (warm starts), the existing dbConnection is reused, avoiding the overhead of re-establishing the connection
