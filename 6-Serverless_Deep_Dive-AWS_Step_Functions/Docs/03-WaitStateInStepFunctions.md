# WAIT STATE IN STEP FUNCTIONS

## 1. INTRODUCTION

- Get the previous state [First state machine using ASL](./2-FirstStateMachineUsingASL.md)
- Add more steps to the workflow

## 2. NEW STEPS

### i. ADD NEW STEPS TO THE PREVIOUS STATE MACHINE (BY CONSOLE)

- Go to *Step Functions* console
- Enter the previous created state machine. In this case, *Helloworld*
- Choose *Edit*
- Under *State machine definition*, substitute the previous code with the code on the [Project 2](../Projects/waitStateStepFunctions/HelloworldStateMachineDefinitionWIP2.json)
<!-- Change "SecondsPath": "$.WaitTime" row to "Timestamp": "2023-05-28T15:00:00Z" or "TimestampPath": "$.WaitTimestamp" -->
- Choose *Save*

- Choose *Start execution*
<!-- Each time of running request a new name to be executed -->
- Under *Enter an execution name - optional*, enter a specific execution name. If not desirable, AWS will do it automatically
- Under *Input - opcional*, you can set the input data for the state machine (JSON format)
```json
{
  "Comment": "Insert your JSON here",
  "WaitTime": 3 // in seconds
  // "WaitTimestamp": "2023-05-28T15:00:00Z"
}
```
- Choose *Start execution*

### ii. VISUAL WORKFLOW

- In *Visual workflow*, you can see if the test was successful
- In *Code*, you can see the corresponding ASL code
- Under *Execution event history*, we can see the history of events

