# CONTAINER REUSE IN LAMBDA

## 1. INTRODUCTION

- AWS Lambda functions execute within a containerized environment
  - Preconfigured environments that allows you to run code in an isolated fashion
  - Container has its own resources based on memory allocated to the function

## 2. CONTAINER REUSE

### (A) STEPS

- AWS Lambda creates a new container when:
  - create/update a function (code or configuration)
  - function is invoked for the first time after creation or update (code or configuration)

- After the container creation, the function code will be loaded into this container
- Then, the function code gets executed
- Once execution is completed, the container is shutdown after a while
- Meanwhile, if the container is still running when the same function is invoked again, Lambda will reuse it
  - In this case, it will only run the code inside Lambda handler and not the entire function code

### (B) BACKGROUND THREAD

- If you start a background thread, Lambda will not wait for the thread to complete
- Once the Lambda handler returns the call, Lambda will finish execution
  - In this case, the background process that was running will be frozen
  - If the same container gets reused, the frozen process will be thawed by Lambda and will resume

## 3. WARM START

-  If the function is invoked again before the execution environment is terminated, it can benefit from a <strong>"warm start"</strong>, where the environment is reused, and only the handler code needs to run
- This results in much faster response times
