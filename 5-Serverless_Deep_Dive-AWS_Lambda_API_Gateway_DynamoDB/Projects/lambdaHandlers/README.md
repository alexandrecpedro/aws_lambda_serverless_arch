# LAMBDA HANDLERS

## 1. ROLES

```plaintext
- Create a new role
e.g. lambda_invoke

- Give permissions
```

## 2. ROLE PERMISSIONS (IAM)

- Access *IAM* in another tab
- Choose *Roles*
- Find *lambda_invoke* role
- Choose *Attach policies*
- Click on *Choose a service*
- Find *Lambda*
- Under *Actions*, inside *Write* block, select *InvokeFunction*
- Under *Resources*, choose *All resources*
- Choose *Review policy*
- Under *Name*, enter a policy name. In this case, *InvokeLambda*
- Choose *Create policy*
- Come back to *Lambda Console* and choose *Create function*

## 3. CONNECT WITH OTHER FUNCTION
