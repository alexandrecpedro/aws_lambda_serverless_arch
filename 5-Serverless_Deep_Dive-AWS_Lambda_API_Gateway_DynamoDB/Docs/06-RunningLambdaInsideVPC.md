# RUNNING LAMBDA FUNCTION INSIDE THE VPC

## (A) CHARACTERISTICS

When connected to a VPC, a lambda function is not exposed to the outside world
It automatically looses access to the internet

## (B) STEPS

- Enter the *Lambda Console*
- Choose the desired function
- Under *Network*, select a VPC option
- Provide, at least, 2 *Subnets*
- Choose the *Security Groups*
- Choose *Save*

```bash
Before setting the VPC to a lambda function, guarantee that your role has VPC permissions for access and execution
```
