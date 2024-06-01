# ERROR HANDLING IN STEP FUNCTIONS WITH RETRY AND CATCH

## 1. ERRORS / FAILURES

A state in a state machine can fail for different reasons
- network failures
- logical errors in state definition

When it happens, the entire state machine fails, unless we handle the error

Step Functions provide error handling options to address these situations
- built-in error codes
- custom error codes

## 2. PREDEFINED ERROR CODES

Built-in error codes / error names always begin with States.prefix

| Predefined Error Code | Details |
| :-------------------: | :-----: |
| States.ALL | A wild-card that matches any Error Name |
| States.Timeout | When timeout occurs |
| States.TaskFailed | When a Task state fails during execution |
| States.Permissions | When a Task state had insufficient permissions  |

## 3. RETRYING AFTER AN ERROR (RETRIERS)

### (A) APPLICATION

- Field *Retry*
  => for <ins>Task states</ins> and <ins>Parallel states</ins>
  => array of retry rules or objects (*Retriers*)
    (a) ErrorEquals <!-- array of error names to match -->
    (b) IntervalSeconds <!-- time interval before 1st retry (default = 1 second) -->
    (c) MaxAttempts <!-- number of retries (default = 3 retries) -->
    (d) BackoffRate <!-- multiplier by which the retry interval increases at every retry attempt -->

### (B) EXAMPLE

```json
{
  "SomeState": {
    "Comment": "This can be a Task or a Parallel state",
    "Type": "Task", // or "Parallel"
    "Resource": "arn:aws:lambda:us-west-2:0123456789:function:myFunction",
    "Retry": [
      {
        "ErrorEquals": ["States.Timeout", "MyCustomError"],
        "IntervalSeconds": 1,
        "MaxAttempts": 3,
        "BackoffRate": 2.0
      },
      ...
    ]
  }
}
```

## 4. FALLBACK STATES (CATCHERS)

### (A) APPLICATION

- Field *Catches*
  => for <ins>Task states</ins>, <ins>Parallel states</ins> or <ins>Map states</ins>
  => array of retry rules or objects (*Catchers*)
    - define the fallback state
    (a) ErrorEquals <!-- array of error names to match -->
    (b) Next <!-- next state to redirect the control flow -->
    (c) ResultPath <!-- (optional) filter the input before send it to the next state -->

### (B) EXAMPLE

```json
{
  "SomeState": {
    "Comment": "This can be a Task, a Parallel or a Map state",
    "Type": "Task", // or "Parallel", or "Map"
    "Resource": "arn:aws:lambda:us-west-2:0123456789:function:myFunction",
    "Catch": [
      {
        "ErrorEquals": ["States.Timeout", "MyCustomError"],
        "Next": "HandleErrorState",
        "ResultPath": "$.result"
      },
      ...,
      {
        "ErrorEquals": ["States.ALL"],
        "Next": "UnhandledErrorState"
      }
    ]
  }
}
```

## 5. USING RETRIERS AMD CATCHERS TOGETHER

### (A) USING BOTH

- In this case, the retry logic is executed first
- Only if all retries have run, the control will be passed to the matching Fallback state
(catch field)

### (B) EXAMPLE

```json
{
  "SomeState": {
    "Comment": "This can be a Task or a Parallel state",
    "Type": "Task", // or "Parallel"
    "Resource": "arn:aws:lambda:us-west-2:0123456789:function:myFunction",
    "Retry": [
      ...
    ],
    "Catch": [
      ...
    ]
  }
}
```

## 6. BIBLIOGRAPHICAL REFERENCES

- [1] [Error handling in Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html)
