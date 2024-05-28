# OTHER STATE TYPES IN STEP FUNCTIONS

## 1. FAIL STATE

### (A) DEFINITION

- stops the execution of the state machine and marks it as a failure, unless it is caught by a Catch block
- allows to use
  - only 2 common fields
    => Type
    => Comment
  - 2 optional fields:
    => Cause <!-- description of the error/exception -->
    => Error <!-- name of the error/exception -->

### (B) EXAMPLE
```json
{
  "FailState": {
    "Comment": "This is a Fail state",
    "Type": "Fail",
    "Cause": "This is the error description",
    "Error": "GenericException"
  }
}
```

Look at reference [1]

## 2. SUCCEED STATE

### (A) DEFINITION

- stops an execution successfully
- only 1 field
  => Type

### (B) EXAMPLE
```json
{
  "SucceedState": {
    "Type": "Succeed"
  }
}
```

Look at reference [2]

## 3. CHOICE STATE

### (A) DEFINITION

- adds conditional logic to a state machine
<!-- similar to switch-case -->
- fields
  - optional
    => Default
  - required
    => Type
    => Choices (array of conditions)
      (a) Variable - path/value to compare
      (b) Conditions 
        - StringEquals
        - NumericEquals
        - BooleanEquals
        - TimestampEquals
        
        - NumericGreaterThan
        - NumericGreaterThanEquals
        - NumericLessThan
        - NumericLessThanEquals
        
        - StringGreaterThan
        - StringGreaterThanEquals
        - StringLessThan
        - StringLessThanEquals

        - TimestampGreaterThan
        - TimestampGreaterThanEquals
        - TimestampLessThan
        - TimestampLessThanEquals

        - And
        - Or
        - Not

### (B) EXAMPLE
```json
{
  "ChooseColor": {
    "Type": "Choice",
    "Choices": [
      {
        "Variable": "$.color",
        "StringEquals": "blue",
        "Next": "Blue"
      },
      {
        "Variable": "$.color",
        "StringEquals": "pink",
        "Next": "Pink"
      }
    ],
    "Default": "Blue" // executed only if none of the conditions are true
  }
}
```

Look at reference [3]

## 4. PARALLEL STATE

### (A) DEFINITION

- add separate branches of execution in your state machine
- each branch cannot access the data outside of it
  - only access the input passed to its branch
  
- fields
  - required
    => Type
    => Branches (array of independent state machine)
      - we must define the start and the last state in each branch
      (a) States
        i. End
      (b) StartAt

### (B) EXAMPLE
```json
{
  "ParallelState": {
    "Type": "Parallel",
    "Branches": [
      {
        "StartAt": "A1",
        "States": {
          "A1": { ... },
          "A2": {
            ...,
            "End": true
          }
        }
      },
      { ... }
    ]
  }
}
```

Look at reference [2]

## BIBLIOGRAPHICAL REFERENCES

- [1] [Fail](https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-fail-state.html)
- [2] [Succeed](https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-succeed-state.html)
- [3] [Choice](https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-choice-state.html)
- [] [Parallel](https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-parallel-state.html)
- [] []()
