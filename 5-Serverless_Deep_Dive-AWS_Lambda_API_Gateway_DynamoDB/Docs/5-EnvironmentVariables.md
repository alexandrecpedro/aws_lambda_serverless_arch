# ENVIRONMENT VARIABLES

## (A) SET THE ENVIRONMENT VARIABLES

- Go to *Lambda Console*
- Enter a desired function
- Set the environment variables below the code template:

| Environment variable | Value |
| :------------------: | :---: |
| APP_NAME | My App |
| APP_SECRET | ABCD1234 |

## (B) CREATE THE KMS ENCRYPTION KEYS

- After setting the environment variables, choose *Encryption configuration*
- Select *Enable helpers for encryption in transit*, then deselect it
- Choose *Create one*
- Choose *Get Started Now*
- Select the desired region
- Choose *Create key*
- Fill the blanks
| Field | Value |
| :---: | :---: |
| Alias | LambdaCustom |
| Description | Lambda Custom KMS Key |

- Choose *Advanced Option*
- Select *KMS*
- Choose *Next Step*
- If desirable, add tags key-pair values
- Choose *Next Step*
- Choose IAM users and roles that can administer this key
<!-- e.g. serverless-admin -->
- Choose *Next Step*
- Choose IAM users and roles that can make use of this key for encryption / decryption
<!-- e.g. lambda_kms -->
- Choose *Next Step*
- Choose *Finish*

## (C) ENCRYPT ENVIRONMENT VARIABLES USING KMS

- After create the kms encryption keys, return to Lambda function page and choose *Encryption configuration*
- Select *Enable helpers for encryption in transit*
- Under *KMS key to encrypt in transit*, enter the desired KMS key
- Under *KMS key to encrypt in transit*, select an option. In this case, *Use a customer master key*, and choose one
- Choose *Encrypt* for each desired environment variable
- Choose *Save*

### IMPORTANT

<strong>Ps: Under <u>Execution role</u> field, make sure to use the same role selected for KMS key generation. In this case, <u>lambda_kms</u></strong>
