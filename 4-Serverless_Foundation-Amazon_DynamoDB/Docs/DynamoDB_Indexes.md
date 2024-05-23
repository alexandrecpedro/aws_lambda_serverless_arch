# AMAZON DYNAMODB INDEXES

## TYPES OF INDEXES

### 1. PRIMARY INDEX (TABLE INDEX)

Any DynamoDB index can either have a simple key or a composite one

| Index Key | Details |
| :-----: | :-----: |
| Simple Key | Partition key (hash key) |
| Composite Key | <ul><li>Partition key (hash key)</li> <li>Sort key (range key)</li></ul> |

- <strong>Partition key</strong>
  - decides the target partition (where the corresponding item would be stored)

```alert
Scan operations should be avoided as far as possible
If required, they should be used with utmost caution

<!-- Scans read every item in a table, regardless of your query criteria, impacting performance and cost -->
<!-- Consider using filtered queries with indexes instead, which can significantly improve efficiency -->
```

### 2. SECONDARY INDEX

- Allow you to query data based on attributes other than the partition and sort keys of the primary index
- There are two types of secondary indexes

| Secondary Index | Details | Examples |
| :-----: | :-----: | :-----: |
| Local Secondary Index | <ul><li>Defined on a single table</li> <li>Share the same partition key as the primary index but can have a different sort key</li> <li>Useful for frequently used queries that involve the same partition key but need to be sorted differently</li></ul> | |
| Global Secondary Index | <ul><li>Can be queried independently of the base table</li> <li>Can have a different partition key and sort key from the primary index</li> <li>Offer greater flexibility for querying data across different partitions based on various attributes</li></ul> | <ul><li>E-commerce application<ol><li>Primary key - productID</li> <li>Sort key - creationDate</li></ol></li> <li>Social media platform <ol><li>Primary key - userID</li> <li>Sort key - postID</li></ol></li></ul> |
