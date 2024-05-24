# AWS LAMBDA LIMITS / QUOTAS

## 1. QUOTAS

| Concepts | Limits | More details |
| :---------: | :---------: | :---------: |
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

## 2. BIBLIOGRAPHICAL REFERENCES

- [1] AWS Lambda quotas - https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html
