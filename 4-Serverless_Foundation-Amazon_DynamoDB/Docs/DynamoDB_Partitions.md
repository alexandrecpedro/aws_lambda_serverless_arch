# AMAZON DYNAMODB PARTITIONS

## DYNAMODB PARTITIONS

```bash
A partition is a block of memory allocated by DynamoDB for storage
```

### 1. OVERVIEW

- Store DynamoDB table data
- A table can have multiple partitions
- Number of table partitions depend on its size and provisioned throughput
- Managed internally by DynamoDB
<!-- A customer or database administrator doesn't have to manage these partitions -->
<!-- They can influence the partition behavior indirectly (set table size and provisioning capacity) -->
- 1 partition = <strong>10 GB of data</strong> = <strong>1000 WCUs</strong> or <strong>3000 RCUs</strong>

*Ps: if application exceeds one or more limits, DynamoDB will allocate additional partitions. This happens in background and without any downtime*

### 2. PARTITION BEHAVIOR - EXAMPLE

| ////// | RCUs (quantity) | WCUs (quantity) |
| :-----: | :-----: | :-----: |
| Provisioned Capacity | 500 | 500 |


**Part 1 - Calculate the initial number of partitions**

Number of Partitions = Pt
Pt = [500 RCUs * (1 partition / 3000 RCUs)] + [500 WCUs * (1 partition / 1000 WCUs)] = 0.67 => rounded up => 1 partition

**Part 2 - Recalculate the number of partitions after an increase of capacity**

Pt = [1000 RCUs * (1 partition / 3000 RCUs)] + [1000 WCUs * (1 partition / 1000 WCUs)] = 1.33 => rounded up => 2 partitions

| //////////////////// | RCUs (quantity) | WCUs (quantity) |
| :------------------: | :-----: | :-----: |
| Partition 1          |   500   |   500   |
| Partition 2          |   500   |   500   |
| Total (New Capacity) |  1000   |  1000   |

*Ps: Once a partition is allocated, it will not be de-allocated when you scale down the table capacity*
