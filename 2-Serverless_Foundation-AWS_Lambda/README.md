# AWS LAMBDA

## LIMITS / QUOTAS

|:---------:|:---------:|:---------:|
| Concepts | Limits | More details |
| Memory Size | 128 MB to 3008 MB | 64 MB in increments |
| Ephemeral Disk Capacity | 512 MB | |
| Timeout | 900 seconds (15 min) | |
| Body Payload Size (synch) | 6 MB | Synchronous Invocation |
| Body Payload Size (async) | 128 KB | Asynchronous Invocation |
| Deployment Package Size (compressed) | 50 MB | zipped, for direct upload |
| Deployment Package Size (uncompressed) | 250 MB | uncompressed |
| Deployment Package Size | 3 MB | AWS Lambda console (online editing) |
| Total Package Size within a region | 75 GB | |
| Concurrency | 1000 executions | each function, every 10 seconds |

For more information, take a look at reference [1]

## PRICING

|:---------:|:---------:|:---------:|
| Pricing | Number of requests | Compute usage |
| Free Tier | no cost | 1,000,000 requests / month | 400,000 GB-seconds / month |
| | $ 0.2 / million requests | $0.0000166667 / GB-second |

For more information, take a look at reference [2]

**Example**

|:---------:|:---------:|:---------:|:---------:|
| Usages | Memory (MB) | Number of requests (million/month) | Time of each running (ms) |
| Function 1 | 128 | 2 | 200 |
| Function 2 | 512 | 3 | 300 |

*Part 1 - Calculate Request Charges*

(1) Total Billable Requests = 2 + 3 - 1 = 4 million requests / month
(2) Request Charges =  Total Billable Request * ($ 0.2 / million requests) = $ 0.8 / month

*Part 2 - Calculate Compute Charges*

(1) Compute Seconds for Function 1 = (2 million / month) * (200/1000) seconds = 0.4 million seconds / month
(2) Compute Seconds for Function 2 = (3 million / month) * (300/1000) seconds = 0.9 million seconds / month
(3) GB-seconds for Function 1 = 128 MB * (1 GB / 1024 MB) * Compute Seconds for Function 1 = 50,000 GB-seconds / month
(4) GB-seconds for Function 2 = 512 MB * (1 GB / 1024 MB) * Compute Seconds for Function 2 = 450,000 GB-seconds / month
(5) Billable Compute Usage = 50,000 + 450,000 - 400,000 = 100,000 GB-second/month
(6) Compute Charges = Billable Compute Usage * ($ 0.0000166667 / GB-second) = $ 1.67 / month

*Part 3 - Total Charges*

Total Charges = Request Charges + Compute Charges = ($ 0.8 / month) + ($ 1.67 / month) = $ 2.47 / month

## BIBLIOGRAPHICAL REFERENCES

- [1] AWS Lambda quotas - https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html
- [2] AWS Lambda Pricing - https://aws.amazon.com/lambda/pricing/
