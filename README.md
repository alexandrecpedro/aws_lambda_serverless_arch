# AWS LAMBDA & SERVERLESS ARCHITECTURE BOOTCAMP

## COMMANDS

### Set AWS User credentials

```bash
aws configure
```

### Information about AWS User

```bash
aws sts get-caller-identity
```

### Upload file to S3

```bash
aws s3 cp <file> s3://<bucket-name>/<file>
# Ex: aws s3 cp resize-images.zip s3://my-images/resize-images.zip
```

### Update Lambda Function and Deploy

```bash
aws lambda update-function-code --function-name <function_name> --s3-bucket <bucket_name> --s3-key <s3_key> --publish
# Ex: aws lambda update-function-code --function-name resize-images --s3-bucket my-images --s3-key resize-images.zip --publish
```

## PROJECTS

- [1][Get Random Message](./1-Getting_Started_AWS_Console/getRandomMessage/)
- [2][GreetMe](./2-Serverless_Foundation-AWS_Lambda/greetme/)
- [3][S3 Events Example - Image Resizing](./2-Serverless_Foundation-AWS_Lambda/s3-events-example-serverless-image-resizing/)
- [4][Creating Lambda Function]()
- []()

## BIBLIOGRAPHICAL REFERENCES

- [1] Environment variables to configure the AWS CLI - https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html
- [2] Configuration and credential file settings - https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html
- [3] Install or update to the latest version of the AWS CLI - https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
- [4] Configure the AWS CLI - https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
- [5] AWS Lambda CLI Commands - https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lambda/index.html
- [6] AWS Lambda context object in Node.js - https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html
- [7] AWS Lambda quotas - https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html
- [8] AWS Lambda Pricing - https://aws.amazon.com/lambda/pricing/
- [9] API Gateway mapping template and access logging variable reference - https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
- [10] Apache Velocity Language - https://velocity.apache.org/
- [11] JSON Schema - https://json-schema.org/
- [12] Swagger Hub - https://app.swaggerhub.com/
- []
