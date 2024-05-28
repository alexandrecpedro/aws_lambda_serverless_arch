# SERVERLESS FOUNDATION - AMAZON DYNAMODB

## REASONS

**Advent of Big Data**

*Big Data Demands*

- High Speed
- High Scale
- High Performance

```bash
Big Data characteristics

- High Volume
- High Variety
# largely unstructured or semi-structured data
- High Velocity
#  huge number of concurrent read/write operations
```

## CHARACTERISTICS

**NoSQL Database Service**

- Fully Managed Cloud Database
- Seamless On-demand Scaling
- Unlimited Concurrent Read/Write Operations
- Single-digit millisecond latency
- Microsecond latency with DAX (caching service provided by AWS)

**DynamoDB in Practice**

- Little to No Learning Curve
- DynamoDB Best Practices - Crucial to Success
<!-- Avoids over-spending for example -->

```bash
Resuming...

DynamoDB is...

- Serverless
# No need to manage any servers or infrastructure to use
# Fully managed => requires almost zero administration
- Cloud
# Available as a service over AWS cloud
# no setups / installations required
- NoSQL database
# Allows work with big data
- Fast
# Provides very high throughput with very low latency
# Latency (or response times) under 10 milliseconds
# Response time can be brought down to microseconds (DAX or DynamoDB Accelerator service)
- Flexible
# Can store unstructured data
# Strict schema is not mandatory
# Provides a rich data model that allows storage of a variety of data types
- Cost effective
# Only pay for what you use
# Priced based on the capacity provisioned for each table
- Highly scalable
# Can be scaled up or scaled down depending on the needs
# Virtually supports unlimited read/write operations by scaling on-demand
- Fault tolerant
# Automatically replicates the data to multiple available zones
# and thus reduces any risk associated with failures
# Supports cross-region replication
- Secure
# Very fine-grained access control
```

## OVERVIEW

**DynamoDB Basics**

- [1] [Terminology Comparison with SQL](./Docs/1-Terminology.md)
- [2] [Data Types](./Docs/2-DataTypes.md)
- [3] [Consistency Model](./Docs/3-ConsistencyModel.md)
- [4] [Capacity Units](./Docs/4-CapacityUnits.md)
- [5] [DynamoDB Partitions](./Docs/5-DynamoDB_Partitions.md)
- [6] [DynamoDB Indexes](./Docs/6-DynamoDB_Indexes.md)
- [7] [Item Level Operations](./Docs/7-ItemLevelOperations.md)

## PROJECTS

- [1] [DynamoDB Project](./dynamodb/)

## BIBLIOGRAPHICAL REFERENCES

- [1] [Amazon DynamoDB](https://aws.amazon.com/dynamodb/)
- [2] [AWS Free Tier](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all)
- [3] [Amazon DynamoDB pricing](https://aws.amazon.com/dynamodb/pricing/)
- [4] [DynamoDB JavaScript SDK Documentation](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_dynamodb_code_examples.html)
- [5] [DynamoDB DocumentClient Class Documentation](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-example-dynamodb-utilities.html)
- [6] [Async NPM Module](https://caolan.github.io/async/v3/)
- [7] [Underscore.js Documentation](https://underscorejs.org/)
