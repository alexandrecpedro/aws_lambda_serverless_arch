# DYNAMODB STREAMS AND AWS LAMBDA TRIGGERS

## 1. DYNAMODB STREAMS

### (A) DEFINITION

- DynamoDB Streams maintain a time-ordered log of all changes in the given DynamoDB table
  - stores all write activities in last 24-hour period

- Examples
| Types | Examples |
| :---: | :------: |
| Replication | replicating data from one region to another |
| Notifications | <ul><li>Create a sort of read-replica</li> <li>Sending notifications based on changes to table data</li> <li>New order notifications</li> <li>Order shipment or delivery notifications</li></ul> |
| Logging | Log processing applications |
| Archival | Archive old data |

### (B) WAYS TO CONSUME AND PROCESS DATA

| Ways to consume and process data | Explanation |
| :------------------------------: | :---------: |
| Kinesis Adapter + KCL (Kinesis Client Library) | Kinesis is a platform for processing high volume streaming data on AWS |
| DynamoDB Streams SDK | |
| AWS Lambda Triggers | We create triggers which are events that fire based on the activity within DynamoDB Streams |

```plaintext
Whenever are any changes to DynamoDB table items, if the DynamoDB Streams are enabled for the table, these changes will be written to the stream, which in turn will invoke a Lambda function

The Lambda function will run the code to react to the DynamoDB item changes
```

## BIBLIOGRAPHICAL REFERENCES

- [1] DynamoDB Streams and AWS Lambda triggers - https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html

