# AWS LAMBDA CLI COMMANDS

## 1. COMMANDS

### (A) UPLOAD FILE TO S3

```bash
aws s3 cp <file> s3://<bucket-name>/<file>
# Ex: aws s3 cp resize-images.zip s3://my-images/resize-images.zip
```

### (B) UPDATE LAMBDA FUNCTION AND DEPLOY

```bash
aws lambda update-function-code --function-name <function_name> --s3-bucket <bucket_name> --s3-key <s3_key> --publish
# Ex: aws lambda update-function-code --function-name resize-images --s3-bucket my-images --s3-key resize-images.zip --publish
```

## 2. BIBLIOGRAPHICAL REFERENCES

- [1] [AWS SDK for JavaScript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/)
- [2] [AWS Lambda CLI Commands](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lambda/index.html)
- [3] [AWS Lambda context object in Node.js](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html)
- [4] [Use JavaScript promises](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/using-promises.html)
