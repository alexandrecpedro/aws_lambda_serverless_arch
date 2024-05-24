# AWS LAMBDA PRICING

## 1. PRICING

| Pricing | Number of requests | Compute usage |
| :---------: | :---------: | :---------: |
| Free Tier | no cost | 1,000,000 requests / month | 400,000 GB-seconds / month |
| | $ 0.2 / million requests | $0.0000166667 / GB-second |

For more information, take a look at reference [1]

### (A) EXAMPLE

| Usages | Memory (MB) | Number of requests (million/month) | Time of each running (ms) |
| :---------: | :---------: | :---------: | :---------: |
| Function 1 | 128 | 2 | 200 |
| Function 2 | 512 | 3 | 300 |

#### i. PART 1 - CALCULATE REQUEST CHARGES

(1) Total Billable Requests = 2 + 3 - 1 = 4 million requests / month
(2) Request Charges =  Total Billable Request * ($ 0.2 / million requests) = $ 0.8 / month

#### ii. PART 2 - CALCULATE COMPUTE CHARGES

(1) Compute Seconds for Function 1 = (2 million / month) * (200/1000) seconds = 0.4 million seconds / month
(2) Compute Seconds for Function 2 = (3 million / month) * (300/1000) seconds = 0.9 million seconds / month
(3) GB-seconds for Function 1 = 128 MB * (1 GB / 1024 MB) * Compute Seconds for Function 1 = 50,000 GB-seconds / month
(4) GB-seconds for Function 2 = 512 MB * (1 GB / 1024 MB) * Compute Seconds for Function 2 = 450,000 GB-seconds / month
(5) Billable Compute Usage = 50,000 + 450,000 - 400,000 = 100,000 GB-second/month
(6) Compute Charges = Billable Compute Usage * ($ 0.0000166667 / GB-second) = $ 1.67 / month

#### iii. PART 3 - TOTAL CHARGES

Total Charges = Request Charges + Compute Charges = ($ 0.8 / month) + ($ 1.67 / month) = $ 2.47 / month

## 2. BIBLIOGRAPHICAL REFERENCES

- [1] AWS Lambda Pricing - https://aws.amazon.com/lambda/pricing/
