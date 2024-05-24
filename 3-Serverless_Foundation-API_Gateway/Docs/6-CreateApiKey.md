# CREATE API KEY

1. Enter the *Amazon API Gateway*
2. Enter the desired resource
3. Choose *API Keys*
4. Choose *Actions* and select *Create API key*
5. Fill the required fields
6. Choose *Save*
7. Under *API key*, choose *Show* and copy this key
8. To associate with a method, enter the desired resource. Then, enter the desired method, and choose *Method Request*. Finally, under *API Key Required*, select *true*

<strong>Ps: after enabling API key required, on request, go to <u>Headers</u>, add the key <u>x-api-key</u> and its respective value, before send a request for the endpoint</strong>
