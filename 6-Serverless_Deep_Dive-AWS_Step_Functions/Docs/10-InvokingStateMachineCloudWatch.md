# INVOKING STATE MACHINE WITH CLOUD_WATCH

## 1. INTRODUCTION

- Using the HelloWorld state machine build previously 
[HelloWorld](../Projects/taskStateStepFunctions/)

## 2. TRIGGERING THE STATE MACHINE (BY CLOUD_WATCH CONSOLE)

### (A) COPY EXECUTION INPUT STRING

- Go to *Step Functions* console
- Enter the previous created state machine. In this case, *Helloworld*
- Open *Executions* tab
- Choose an execution. In this case, *api_gateway_test_1*
- Open *Input* tab
- Copy the JSON
```json
{
  "Comment": "Invoked from API Gateway",
  "number": "5"
}
```

### (B) CREATE NEW RULE FOR EXECUTION

- Go to *CloudWatch* console
- Go to *Rules*
- Choose *Create rule*
- Under *Event Source*, enter the following data:
```html
Enable <u>Schedule</u>
<!-- Trigger the event every 5 minutes -->
Fixed rate of => 5 minutes
```

- Choose *Add target*
- Under *Targets*, select *Step Functions state machine*
- Under *State machine*, select a state machine to be executed. In this case, *Helloworld*
- Open *Configure input* tab
- Select an option. In this case, *Constant (JSON text)*, and enter the following data:
```json
{ "Comment": "Invoked from CloudWatch", "number": 5 }
```

- Select *Create a new role for this specific resource*
- Choose *Configure details*
- Under *Rule definition*, enter the following data:
```
Name => InvokeStateMachineHelloworld
State => Enabled
```

- Choose *Create rule*

### (C) VERIFICATION

- Go to *Step Functions* console
- Enter the previous created state machine. In this case, *Helloworld*
- Open *Executions* tab
- Check if there is one more execution, and enter it
- Open *Input* tab
- Verify if there is the following data:
```json
{
  "Comment": "Invoked from CloudWatch",
  "number": 5
}
```

- Open *Output* tab
- Verify if there is the following data:
```
"25"
```

### (D) DELETE THE TRIGGERING CONFIGURATION

- Go to *CloudWatch* console
- Go to *Rules*
- Choose an option. In this case, *InvokeStateMachineHelloworld*
- Under *Actions*, choose an option. In this case, *Delete*
- Choose *Delete*

## 3. BIBLIOGRAPHICAL REFERENCES

- [1] [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html)
- [2] [Monitoring Step Functions Using CloudWatch](https://docs.aws.amazon.com/step-functions/latest/dg/procedure-cw-metrics.html)

