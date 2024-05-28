# INVOKING STATE MACHINE WITH API GATEWAY

## 1. INTRODUCTION

- Using the HelloWorld state machine build previously 
[HelloWorld](../Projects/taskStateStepFunctions/)

## 2. TRIGGERING THE STATE MACHINE (BY API GATEWAY CONSOLE)

### i. CREATE IAM ROLE FOR EXECUTION ROLE

- Go to *IAM*
- Go to *Roles*
- Create a new role
- Choose *AWS service*
- Under *Lambda*, choose *API Gateway*
- Choose *Next: Permissions*
- Choose *AmazonAPIGatewayPushToCloudWatchLogs* policy
- Choose *Next: Review*
- Enter the following data:
```
Role name => "APIGatewayStepFunctions"
Role description => "Allows API Gateway to push logs to CloudWatch Logs."
```

- Choose *Create role*

### ii. ATTACH POLICIES TO THE IAM ROLE CREATED

- Enter the role *APIGatewayStepFunctions*
- Choose *Attach policies*
- Filter policy *step*
- Enable *AWSStepFunctionsFullAccess*
- Choose *Attach policy*
- Copy *Role ARN* identification

### iii. ADD HTTP POST METHOD

- Go to *API Gateway* console
- Enter the Hello World API
- Choose the */math* resource
- Add new method (HTTP POST)
- Setup the new method
| Field | Value |
| :---: | :---: |
| **Integration type** | AWS Service |
| **AWS Region** | us-west-2 |
| **AWS Service** | Step Functions |
| **HTTP method** | POST |
| **Action Type** | Use action name |
| **Action** | StartExecution |
| **Execution role** | Paste the IAM role ARN copied previously |
| **Content Handling** | Passthrough |
| **Use Default Timeout** | Enable |

- Choose *Save*
- Choose *Stages*
- Enter the test stage
- Choose the method created
- Copy the *Invoke URL*
- Deploy the API

## 3. TEST WITH POSTMAN

### i. REQUEST

- Enter the request URL (HTTP method = POST)
- Under *Headers*, enter the following
```plaintext
Key = Content-Type
Value = application/json
```
- Under *Body*, choose *raw* (*JSON (application/json)*)
- Enter the following:
```json
{
  "input": "{\"Comment\": \"Invoked from API Gateway\",\"number\": 5}", // input data for the state machine
  "name": "api_gateway_test_1", // unique name for the state machine execution
  "stateMachineArn": "arn:aws:states:us-west-2:0123456789:stateMachine:Helloworld" // ARN for desired state machine
}
```
- Choose *Save*
- Send the request

### ii. RESPONSE

- Execution has started successfully

```json
{
  "executionArn": "arn:aws:states:us-west-2:0123456789:execution:Helloworld:api_gateway_test_1",
  "startDate": 1537116811.05
}
```

## 4. BIBLIOGRAPHICAL REFERENCES

- [1] [Creating a Step Functions API using API Gateway](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-api-gateway.html)
