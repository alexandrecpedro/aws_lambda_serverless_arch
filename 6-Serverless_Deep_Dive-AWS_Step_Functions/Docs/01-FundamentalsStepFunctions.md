# FUNDAMENTALS OF AWS STEP FUNCTIONS

## 1. INTRODUCTION

```plaintext
AWS Step Functions are the logical progression of AWS Lambda functions
In a simplified way, it is a service that allows you to coordinate multiple
AWS services into serverless workflows
```

- Service that allows you to coordinate multiple AWS services into serverless workflows
- Visual workflows (state machines) to orchestrate different Lambda functions to work together
- Sequence of steps (states) that execute in a specific order

<strong>Ps: <ins>Lambda function</ins> can remain idle or run up to limit of <ins>15 minutes</ins>
<ins>Step Functions</ins>, on the other hand, <ins>1 year</ins>
</strong>

Look at reference [1]

## 2. KEY CONCEPTS

### i. AMAZON STATE LANGUAGE (ASL)

- Used to define the workflow
- Define different states (steps) and interactions (connections) between these States

### ii. STATE MACHINE

- Workflow that defines a series of steps
- Displayed in graphical format (flow chart)
- Built-in error handling mechanism
  - Allow retry operations based on different errors or certain conditions
  - Allow retrial with different logic depending on certain errors/conditions

### iii. STATE

- Single step in a state machine
- Types of states:

| State | Definition |
| :---: | :--------: |
| <bold>Task</bold> | State that performs work by calling an AWS service, like invoking a Lambda function |
| <bold>Choice</bold> | State that makes decisions based on the input to determine which step to execute next |
| <bold>Parallel</bold> | State that allows multiple branches of execution to run simultaneously |
| <bold>Wait</bold> | State that delays the execution for a specified time |
| <bold>Fail</bold> | State that stops the execution and marks the workflow as failed |
| <bold>Succeed</bold> | State that stops the execution and marks the workflow as successful |
| <bold>Pass</bold> | State that passes its input to its output, performing no work |

### iv. REFERENCES

- Look at reference [2]

## 3. USAGES

Automate routine jobs
  - deployments
  - upgrades
  - migrations
  - patches

## 4. ADVANTAGES

| Advantage | Details |
| :-------: | :-----: |
| <bold>Visual Workflow</bold> | Provides visual representation of application logic |
| <bold>Error Handling</bold> | Simplifies retry logic and error handling |
| <bold>Scalability</bold> | Automatically scales with your application's needs |
| <bold>Integration</bold> | Easily integrates with various AWS services like Lambda, S3, DynamoDB, etc |

<strong>Ps: No need to provision any resources...<ins>server resources or infrastructure</ins>
</strong>

## 5. EXAMPLE

### i. CREATING A SIMPLE PROCESSING WORKFLOW

| Process | Details |
| :-------: | :-----: |
| <bold>Receive Order</bold> | Accept an order from a customer |
| <bold>Validate Order</bold>| Check the order details for correctness |
| <bold>Process Payment</bold>| Charge the customer's payment method |
| <bold>Ship Order</bold>| Send the order to the customer |
| <bold>Send Confirmation</bold>| Notify the customer about the successful processing of their order |

```plaintext
Start State: ReceiveOrder
States:
  ReceiveOrder:
    Type: Task
    Resource: "arn:aws:lambda:region:account-id:function:ReceiveOrder"
    Next: ValidateOrder
  ValidateOrder:
    Type: Task
    Resource: "arn:aws:lambda:region:account-id:function:ValidateOrder"
    Next: ProcessPayment
  ProcessPayment:
    Type: Task
    Resource: "arn:aws:lambda:region:account-id:function:ProcessPayment"
    Next: ShipOrder
  ShipOrder:
    Type: Task
    Resource: "arn:aws:lambda:region:account-id:function:ShipOrder"
    Next: SendConfirmation
  SendConfirmation:
    Type: Task
    Resource: "arn:aws:lambda:region:account-id:function:SendConfirmation"
    End: true
```

### ii. PSEUDOCODE

```json
{
  "Comment": "An example of an order processing workflow",
  "StartAt": "ReceiveOrder",
  "States": {
    "ReceiveOrder": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:region:account-id:function:ReceiveOrder",
      "Next": "ValidateOrder"
    },
    "ValidateOrder": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:region:account-id:function:ValidateOrder",
      "Next": "ProcessPayment"
    },
    "ProcessPayment": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:region:account-id:function:ProcessPayment",
      "Next": "ShipOrder"
    },
    "ShipOrder": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:region:account-id:function:ShipOrder",
      "Next": "SendConfirmation"
    },
    "SendConfirmation": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:region:account-id:function:SendConfirmation",
      "End": true
    }
  }
}
```

## 6. STEPS TO CREATE AND DEPLOY

| Step | Details |
| :--: | :-----: |
| <bold>Define State Machine</bold> | Write the JSON definition of your state machine |
| <bold>Create Lambda Functions</bold> | Implement the Lambda functions referenced in your state machine |
| <bold>Deploy State Machine</bold> | Use AWS Management Console, AWS CLI, or Infrastructure as Code (e.g., AWS CloudFormation) to deploy your state machine |

## 7. PAYMENT

- Only pay for the transitions between steps

## 8. BIBLIOGRAPHICAL REFERENCES

- [1] [AWS Step Functions Documentation](https://docs.aws.amazon.com/step-functions/)
- [2] [Getting started with AWS Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/getting-started-with-sfn.html)
