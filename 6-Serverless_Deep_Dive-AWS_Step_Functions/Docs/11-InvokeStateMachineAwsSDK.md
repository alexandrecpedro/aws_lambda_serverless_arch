# INVOKE STATE MACHINE WITH AWS SDK

## 1. INTRODUCTION

- Using the HelloWorld state machine build previously 
[HelloWorld](../Projects/taskStateStepFunctions/)

## 2. LAMBDA FUNCTION TRIGGERING STATE MACHINE

### (A) CREATE NEW LAMBDA FUNCTION

- Go to *Lambda Console*
- Choose *Functions*
- Choose *Create function*
- Select *Author from scratch*
- In the *Basic information* pane, for *Function name* enter *invokeStateMachine*
- For *Runtime*, choose either *Node.js 20.x*
- Under *Role*, select *Create a custom role*
- Under *Role Name*, enter a name for this role. In this case, *lambda_step_functions*
- Choose *Allow*
- Leave *architecture* set to *x86_64*
- Choose *Create function*

### (B) EDIT CUSTOM ROLE CREATED

- Go to *IAM*
- Choose *Roles*
- Enter the role previously created. In this case *lambda_step_functions*
- Open the role
- Choose *Attach policies*
- Look for *step*
- Enable *AWSStepFunctionsFullAccess*
- Choose *Attach policy*

### (C) SET CODE FOR LAMBDA FUNCTION

- Go to *Lambda Console*
- Choose *Functions*
- Enter the previous function created. In this case, *invokeStateMachine*
- Under code panel, substitute the previous code with the code on the [Project 7](../Projects/invokeStateMachineAwsSDK/index.mjs)
- Choose *Save*

**Ps: The <ins>state machine ARN</ins> is located on <ins>Step Functions console</ins>**

## 3. TEST

### (A) LAMBDA CONSOLE

#### i. SETTING AND EXECUTING THE TEST

- Choose *Test*
- Select *Create new test event*
- Under *Event template*, choose an option. In this case, *Hello World*
- Under *Event name*, enter a name. In this case, *test*
- Under code input space, you can set the input data for the function (JSON format)
```json
{
  "Comment": "Invoked from CloudWatch",
  "number": 5
}
```

- Choose *Create*
- Choose *Test*

#### ii. VISUAL RESULTS

- Under *Execution result: ... (logs)*, you can see if the test was successful

### (B) STEP FUNCTIONS CONSOLE

#### i. VERIFICATION

- Go to *Step Functions* console
- Enter the previous created state machine. In this case, *Helloworld*
- Open *Executions* tab
- Enter the most recent execution
- Verify the details shown

## 4. BIBLIOGRAPHICAL REFERENCES

- [1] [Creating a Lambda state machine for Step Functions using AWS CDK](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-lambda-state-machine-cdk.html#lambda-state-machine-cdk-step-3)
