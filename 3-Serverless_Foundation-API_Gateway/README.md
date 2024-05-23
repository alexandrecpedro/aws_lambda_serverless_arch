# SERVERLESS FOUNDATION - AMAZON API GATEWAY

## BODY MAPPING TEMPLATE

### 1. REQUEST MAPPING

**(A) Integration Request**

- Mapping Template (Content-Type)

```bash
{
  "operation": "$input.params('operation')",
  "input": {
    # "operand1": "$input.json('$.num1')",
    "operand1": $inputRoot.num1,
    # "operand2": "$input.json('$.num2')"
    "operand2": $inputRoot.num2
  }
}
```

**(B) Test**

- Path

```bash
<math_operation>
# Ex: add, subtract, multiply, divide
```

- Request Body

```json
{
  "num1": 5, // must be a valid number
  "num2": 2 // must be a valid number
}
```

### 2. RESPONSE MAPPING

**Integration Response**

- Mapping Template (Content-Type)

```bash
{
  "result": $input.json('$.body')
}
```

- Header Mappings

```
Response header => Access-Control-Allow-Origin

Mapping value => *
```

**Method Response**

- Add Header

```bash
"Access-Control-Allow-Origin"
```

## CREATE ROLE FOR API GATEWAY

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
13. Return to *API Gateway* services
14. Choose *Settings*
15. At *CloudWatch log role ARN*, enter the *Role ARN* identification copied previously
16. Choose *Save*
17. Go back to *hello-world* resource created previously
18. Choose *Stages*
19. Choose *Logs/Tracing*
20. Mark *Enable CloudWatch Logs*
21. Change *Log level* to *INFO*
22. Mark *Log full requests/responses data* and *Enable Detailed CloudWatch Metrics*
23. Select *Save changes*

## GENERATE CLIENT SDK

1. Enter the *Amazon API Gateway*
2. Enter the desired resource
3. Choose *Stages*
4. Choose *test*
5. Choose *SDK Generation*
6. Select the *JavaScript* under *Platform*
7. Choose *Generate SDK*

## EXPORT SWAGGER FILES

1. Enter the *Amazon API Gateway*
2. Enter the desired resource
3. Choose *Stages*
4. Choose *test*
5. Choose *Export*
6. Pass the mouse over *Export as Swagger*, *Export as Swagger + API Gateway Extensions* or *Export as Swagger + Postman Extensions*
7. Choose *JSON* or *YAML*

## CREATING API DOCUMENTATION

1. Enter the *Amazon API Gateway*
2. Enter the desired resource
3. Choose *Documentation* 
4. To import a Swagger file, choose *Import Documentation*. Then choose *Select Swagger File*, enter the respective file and choose *Import*
5. To create a documentation inside the API Gateway, click on *Create Documentation Part*
6. Choose an option from *Type*
7. Enter the required fields
8. Edit the JSON
9. At the end, choose *Save*
10. When the documentation is finished, choose *Publish Documentation*
11. Select a *Stage*
12. Enter a *Version*
13. If important, enter a *Description*
14. Choose *Publish*

## CREATE API KEY

1. Enter the *Amazon API Gateway*
2. Enter the desired resource
3. Choose *API Keys*
4. Choose *Actions* and select *Create API key*
5. Fill the required fields
6. Choose *Save*
7. Under *API key*, choose *Show* and copy this key
8. To associate with a method, enter the desired resource. Then, enter the desired method, and choose *Method Request*. Finally, under *API Key Required*, select *true*

Ps: after enabling API key required, on request, go to *Headers*, add the key *x-api-key* and its respective value, before send a request for the endpoint

## CREATE USAGE PLANS

1. Enter the *Amazon API Gateway*
2. Enter the desired resource
3. Choose *Usage Plans*
4. Choose *Create*
5. Fill the required information
6. Choose *Next*
7. Choose *Add API Stage*
8. Under *API*, select the desired API
9. Under *Stage*, select the desired stage
10. Under *Method Throttling*, choose the *Configure Method Throttling*, choose *Add Resource/Method* and set the specifications if necessary
11. Click on the check mark icon
12. Choose *Next*
13. For a new API Key, choose *Create API Key and add to Usage Plan* and follow the instructions
14. For an existing API Key, choose *Add API Key to Usage Plan*
15. Under *Name*, enter the name of the API Key
16. Click on the check mark icon
17. Choose *Done*
18. To associate this usage plan with the AWS SaaS Marketplace, choose *Marketplace*, enter the code under *Product code* and choose *Save*

## API GATEWAY PRICING

|:---------:|:---------:|:---------:|
| Billing type | Number of requests (per month) | Price ($ / million) |
| Free Tier | 1,000,000 | Free under 12 months |
| HTTP APIs (API Calls) | First 300 million | 1.00 |
| REST APIs (API Calls) | First 333 million | 3.50 |
| WebSockets (Message Transfers) | First 1 billion | 1.00 |

## PROJECT

- [1] [Calculator](./calculator/)

## BIBLIOGRAPHICAL REFERENCES

- [1] API Gateway mapping template and access logging variable reference - https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
- [2] Apache Velocity Template Language (Apache VTL) - https://velocity.apache.org/
- [3] JSON Schema Documentation - https://json-schema.org/
- [4] Swagger Hub - https://app.swaggerhub.com/
- [5] Amazon API Gateway pricing - https://aws.amazon.com/api-gateway/pricing/
