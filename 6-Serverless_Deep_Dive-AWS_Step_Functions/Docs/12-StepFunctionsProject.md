# STEP FUNCTIONS PROJECT

This project will be about a state machine to process uploaded files to S3

If the file is a JPEG, it will be resized. Otherwise, the file will be discarded
The resized files will be delivered to another S3 bucket

## 1. STEPS

- [1] [Create new state machine](./12.1-CreateStateMachine.md)
- [2] [Definition of S3 Trigger to invoke state machine](./12.2-S3TriggerInvokeStateMachine.md)
- [3] [Writing Backend Lambda functions](./12.3-WriteBackendFunctions.md)
- [4] [Writing Metadata to DynamoDB](./12.4-WriteMetadataDynamoDB.md)
- [5] [Finishing the State Machine with Error Handling](./12.5-StateMachineErrorHandling.md)

## 2. TESTING

- [1] [Testing the State Machine Workflow](./12.6-TestingStateMachineWorkflow.md)
