# LAMBDA ALIASES

## (A) CREATE A NEW METHOD ON EXISTING RESOURCE

- Using the eventLogger function

## (B) SET A NEW RETURN PARAM

- Inside *API Gateway*, choose *Resources*
- Choose the previous created method
- Choose *Integration Request*
- Under *Mapping Templates*, select the recommended option on *Request body passthrough*
- Choose *Add mapping template*
- Under *Content-Type*, enter *application/json*, then select the check mark icon
- Under template field, enter the following object:
```json
{
  "stage": "$context.stage"
}
```
- Choose *Save*
- Deploy the API

## (C) SWITCH TO ANOTHER VERSION MANUALLY

- Inside *API Gateway*, choose *Resources*
- Choose the previous created method
- Choose *Integration Request*
- Under *Lambda Function*, edit it to the following pattern: <function_name>:<version_number>
- Choose the check mark icon
- Choose *OK*
- Deploy the API

## (D) SWITCH TO ANOTHER VERSION USING ALIASES

- Go to *Lambda Console*
- Choose *Actions*
- Choose *Create alias*
- Fill the required fields and choose *Create*

- Go to *API Gateway*
- Choose the previous created method
- Choose *Integration Request*
- Under *Lambda Function*, edit it to the following pattern: <function_name>:<alias_name>
- Choose the check mark icon
- Choose *OK*
- Deploy the API
