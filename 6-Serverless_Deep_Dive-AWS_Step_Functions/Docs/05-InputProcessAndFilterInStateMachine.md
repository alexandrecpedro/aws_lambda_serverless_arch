# INPUT PROCESSING AND FILTERING IN STATE MACHINES

## 1. CREATE THE STATE MACHINE (BY CONSOLE)

- Go to *Step Functions* console
- Choose *Get started*
- Select *Author from scratch*
- Under *Details*, enter the state machine name. In this case, *calculator*
- Under *IAM role*, select *I will use an existing role*
- Under *Existing IAM roles*, select *StatesExecutionRole*
- Under *State machine definition*, enter the code from [Project 4](../Projects/inputProcessingAndFiltering/calculatorStateMachineDefinition.json)
- Choose *Create state machine*

## 2. TEST

### i. SETTING AND EXECUTING THE TEST

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

### ii. VISUAL WORKFLOW

- In *Visual workflow*, you can see if the test was successful
- In *Code*, you can see the corresponding ASL code
- Under *Execution event history*, we can see the history of events

## 3. BIBLIOGRAPHICAL REFERENCES

- [1] [Input and Output Processing in Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-input-output-filtering.html)
- [2] [InputPath, Parameters and ResultSelector](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html)
