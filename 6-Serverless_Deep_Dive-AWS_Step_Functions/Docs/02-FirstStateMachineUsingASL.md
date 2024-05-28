# CREATE FIRST STATE MACHINE USING AMAZON STATES LANGUAGE (ASL)

## 1. CREATE THE STATE MACHINE (BY CONSOLE)

- Go to *Step Functions* console
- Choose *Get started*
- Select *Templates*
- Select *Hello world* template
- Under *Details*, enter the state machine name. In this case, *Helloworld*
- Under *IAM role*, select *I will use an existing role*
- Under *Existing IAM roles*, select *StatesExecutionRole*
- Under *State machine definition*, enter the code from [Project 1](../Projects/firstStateMachineUsingASL/HelloworldStateMachineDefinitionWIP1.json)
- Choose *Create state machine*

## 2. TEST

### i. SETTING AND EXECUTING THE TEST

- Choose *Start execution*
<!-- Each time of running request a new name to be executed -->
- Under *Enter an execution name - optional*, enter a specific execution name. If not desirable, AWS will do it automatically
- Under *Input - opcional*, you can set the input data for the state machine (JSON format)
```json
{
  "message": "This is my first state machine"
}
```

- Choose *Start execution*

### ii. VISUAL WORKFLOW

- In *Visual workflow*, you can see if the test was successful
- In *Code*, you can see the corresponding ASL code
- Under *Execution event history*, we can see the history of events
