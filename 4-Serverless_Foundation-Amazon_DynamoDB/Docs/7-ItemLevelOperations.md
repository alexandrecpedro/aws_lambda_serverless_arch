# ITEM LEVEL OPERATIONS

## 1. CONDITIONAL WRITES

```bash
- Are Idempotent
# If the same conditional write request is requested multiple times,
# only the first request would be considered
- Returns ConditionalCheckFailedException if condition fails
- Consumed Capacity not returned
# If an exception is thrown, DynamoDB will not return the number of WCUs 
# consumed by the operation
- WCUs are consumed
# This is independent of the response (success or fail)
```

## 2. QUERY AND SCAN OPERATIONS

Amount of data that can be returned = Maximum 1 MB per request

For more than it, use *Paginated Results*

### PAGINATED RESULTS

```bash
Technique for retrieving data in smaller chunks 
when the total data size exceeds the 1 MB limit
```

| Parameter | Definition |
| :-------------: | :--------------: |
| Limit parameter | Number of records retrieved from a single query or scan request |
| LastEvaluatedKey | Next set of results when paginating through a large result set |
| ExclusiveStartKey | Starting point for a query or scan operation |
