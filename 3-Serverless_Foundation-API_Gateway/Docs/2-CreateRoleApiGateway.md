# CREATE ROLE FOR API GATEWAY

## (A) PART 1 - IAM

1. Go to *IAM*
2. Go to *Roles*
3. Create a new role
4. Choose *AWS service*
5. Choose *API Gateway* besides *Lambda*
6. Choose *Next: Permissions*
7. Choose *AmazonAPIGatewayPushToCloudWatchLogs* policy
8. Choose *Next: Review*
9. Enter the following data:
```
Role name => "apigateway_logs_role"
Role description => "Allows API Gateway to push logs to CloudWatch Logs."
```

10. Choose *Create role*
11. Enter the role *apigateway_logs_role*
12. Copy *Role ARN* identification

## (B) SET ROLE TO RESOURCE

1. Return to *API Gateway* services
2. Choose *Settings*
3. At *CloudWatch log role ARN*, enter the *Role ARN* identification copied previously
4. Choose *Save*

## (C) ENABLE CLOUDWATCH LOGS

1. Go back to *hello-world* resource created previously
2. Choose *Stages*
3. Choose *Logs/Tracing*
4. Mark *Enable CloudWatch Logs*
5. Change *Log level* to *INFO*
6. Mark *Log full requests/responses data* and *Enable Detailed CloudWatch Metrics*
7. Select *Save changes*
