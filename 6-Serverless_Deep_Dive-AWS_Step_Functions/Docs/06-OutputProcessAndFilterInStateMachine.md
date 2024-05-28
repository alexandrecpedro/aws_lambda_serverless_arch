# OUTPUT PROCESSING AND FILTERING IN STATE MACHINES

## 1. INPUT-RESULT

### (A) CREATE THE STATE MACHINE (BY CONSOLE)

- Go to *Step Functions* console
- Choose *Get started*
- Select *Author from scratch*
- Under *Details*, enter the state machine name. In this case, *calculator*
- Under *IAM role*, select *I will use an existing role*
- Under *Existing IAM roles*, select *StatesExecutionRole*
- Under *State machine definition*, enter the code from [Project 5](../Projects/outputProcessingAndFiltering/calculatorStateMachineDefinitionInputResult.json)
- Choose *Create state machine*

### (B) TEST

#### i. SETTING AND EXECUTING THE TEST

- Choose *Start execution*
<!-- Each time of running request a new name to be executed -->
- Under *Enter an execution name - optional*, enter a specific execution name. If not desirable, AWS will do it automatically
- Under *Input - opcional*, you can set the input data for the state machine (JSON format)
```json
{
  "Comment": "Insert your JSON here",
  "lambda": {
    "operation": "add",
    "input": {
      "operand1": 5,
      "operand2": 3
    }
  },
  "moreData": "abcd"
}
```

- Choose *Start execution*

#### ii. VISUAL WORKFLOW

- In *Visual workflow*, you can see if the test was successful
- In *Code*, you can see the corresponding ASL code
- Under *Execution event history*, we can see the history of events

## 2. INPUT-RESULT-OUTPUT

### (A) CHANGE THE STATE MACHINE

- Go to the *Step Functions* console
- Enter the previous created state machine
- Choose *Edit*
- Under *State machine definition*, enter the code from [Project 6](../Projects/outputProcessingAndFiltering/calculatorStateMachineDefinitionInputResultOutput.json)
- Choose *Save*

### (B) TEST

#### i. SETTING AND EXECUTING THE TEST

- Choose *Start execution*
<!-- Each time of running request a new name to be executed -->
- Under *Enter an execution name - optional*, enter a specific execution name. If not desirable, AWS will do it automatically
- Under *Input - opcional*, you can set the input data for the state machine (JSON format)
```json
{
  "Comment": "Insert your JSON here",
  "lambda": {
    "operation": "add",
    "input": {
      "operand1": 5,
      "operand2": 3
    }
  },
  "moreData": "abcd"
}
```

- Choose *Start execution*

#### ii. VISUAL WORKFLOW

- In *Visual workflow*, you can see if the test was successful
- In *Code*, you can see the corresponding ASL code
- Under *Execution event history*, we can see the history of events

## 3. BIBLIOGRAPHICAL REFERENCES

- [1] [Input and Output Processing in Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-input-output-filtering.html)
- [2] [ResultPath](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-resultpath.html)
- [3] [OutputPath](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-outputpath.html)
- [4] [Configure inputs and outputs for your states](https://docs.aws.amazon.com/step-functions/latest/dg/workflow-studio-process.html)
