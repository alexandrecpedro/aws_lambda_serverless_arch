# CANARY DEPLOYMENTS

```bash
Technique for rolling out new versions of your backend application with minimal risk
```

## (A) HOW IT WORKS

| Steps | Details |
| :---: | :-----: |
| Prepare Two Versions | You have your current production version (let's call it version A) and a new version (version B) with potential changes or bug fixes |
| Identify a Canary Group | This is a small group of users, ideally representing a diverse mix of your user base. They could be internal testers, a small percentage of your total users, or users in a specific geographic location |
| Route Traffic | Use a traffic management tool to route a small percentage of incoming traffic (e.g., 10%) to version B for the canary group. The rest of your users (90%) continue using version A |
| Monitor Closely | Keep a close eye on key metrics like application performance, error rates, user behavior, and any negative feedback from the canary group. Tools can help you monitor these metrics for differences between versions A and B |
| Evaluate and Decide | Based on your monitoring data, you can make an informed decision: <ul><li><strong>Success:</strong> If everything looks good with version B in the canary group, you can gradually increase the traffic percentage to expose it to a larger portion of users. Eventually, you can fully roll out version B to everyone</li> <li><strong>Issues Found:</strong> If you identify problems with version B during the canary deployment, you can quickly roll back traffic to version A and address the issues before releasing the new version again</li></ul> |

## (B) CREATING A CANARY DEPLOYMENT

- Access *API Gateway* Console
- Choose an API
- Choose *Stages*
- Select a desired stage
- Choose *Canary*
- Click on *Create Canary*
- Enter the desired values for each field

- Go to *Resources*
- Choose a desired method from an specific resource
- Choose *Integration Request*
- Click on *Mapping Templates*
- Under *Content-Type*, choose *application/json*
- Modify the previous template with the code below:
```json
{
  "stage": "$context.stage",
  "timestamp": "$context.requestTime"
}
```
- Click on *Save*
- Deploy the API

## (C) PROMOTE THE CANARY

- Enter the previous canary created
- Choose *Promote Canary*
- Select/Deselect the desired options
- Choose *Update*
