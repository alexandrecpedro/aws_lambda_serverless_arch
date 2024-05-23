# AMAZON DYNAMODB CAPACITY UNITS

## DYNAMODB TABLES

- Top-level entities
<!-- Independent from each other -->
- No strict inter-table relationships
<!-- Concept of foreign keys is not advocated -->
- Mandatory primary keys
<!-- Enforces mandatory use of primary keys in all query operations -->
<!-- Ensures that you always write highly efficient queries -->
- Control performance at the table level
<!-- Table performance can be controlled and tuned individually -->

*Ps: Each table created must be provisioned with throughput capacity*

## THROUGHPUT CAPACITY

- Allows for predictable performance at scale
<!-- Predictable performance based on needs -->
- Used to control read/write throughput
- Supports auto-scaling
<!-- Capacity can be scaled up or down  -->
- Defined using RCUs and WCUs
<!-- RCUs = Read Capacity Units -->
<!-- WCUs = Write Capacity Units -->
- Major factor in DynamoDB pricing
<!-- DynamoDB charges are based on number of RCUs and WCUs provisioned to your tables -->
<!-- Some storage fees are based on the volume of data -->
<!-- Full control on provisioning these capacity units -->
- 1 capacity unit = 1 request / second (1 request / s)
<!-- Throughput is specified in terms of capacity units -->
<!-- 1 capacity unit = 1 read / second or 1 write / second -->

### 1. CAPACITY UNITS

| Capacity Unit | Abbreviation | Details |
| :--------------: | :-----: | :------: |
| Read Capacity Units | RCUs | <ul><li>1 RCU = 1 strongly consistent table read / second</li> <li>1 RCU = 2 eventually consistent table reads / second</li> <li>In blocks of 4 KB / item</li></ul> |
| Write Capacity Units | WCUs | <ul><li>1 WCU = 1 table write / second</li> <li>In blocks of 1 KB / item</li></ul> |

*Ps1: DynamoDB rounds the item size upward to the next 4KB to determine the number of RCUs needed*
*Ps2: DynamoDB rounds the item size upward to the next 1KB to determine the required WCUs*

### 2. EXAMPLE - CAPACITY UNIT CALCULATION

| Average Item Size (KB) | Provisioned RCUs (quantity) | Provisioned WCUs (quantity) |
| :--------------------: | :-------------------------: | :-------------------------: |
| 10 | 10 | 10 |

**Part 1 - Provisioned Capacity**

(A) Read throughput with strong consistency = 4 KB * 10 RCUs * (1 read / second / RCU) = 40 KB of data / second

(B) Read throughput = 4 KB * 10 RCUs * (2 read / second / RCU) = 80 KB of data / second

(C) Write throughput = 1 KB * 10 WCUs * (1 write / second / WCU) = 10 KB of data / second

**Part 2 - Required Capacity for Average Item Size**

(A) RCUs to read 10 KB of data per second with strong consistency = 10 KB / (4 KB / RCU) = 2.5 => rounded up => 3 RCUs

(B) RCUs to read 10 KB of data per second = 10 KB / [ (4 KB / RCU) * 2 ] = 1.25 => rounded up => 2 RCUs

(C) WCUs to write 10 KB of data per second = 10 KB / ( 1 KB / WCU) = 10 WCUs

### 3. BURST CAPACITY

```bash
When your application attempts to use more capacity than what you've provisioned, 
DynamoDB provides some burst capacity, allowing overages

However, if application continues to perform read and write operations beyond the provisioned capacity,
then DynamoDB will start throttling our requests

In anticipation of such potential scenario, DynamoDB reserves a portion of your unused capacity for future utilization
```

| Details | Amount | Situation |
| :-----: | :---------: | :-------: |
| <ul><li>Provided for occasional bursts or spikes</li> <li>Can get consumed quickly</li> <li>Must not be relied upon</li></ul> | 5 minutes (300 seconds) of unused RCUs and WCUs  | Heavily under-provisioned table |

### 4. CAPACITY LIMITS

#### SCALING

- Scaling Up: As and when needed
- Scaling Down: Up to 4 times per calendar day
<!-- Calendar day = UTC time zone -->
- <strong>Affects partition behavior (Important!)</strong>
- 1 partition supports up to <u>1000 WCUs</u> or <u>3000 RCUs</u>

*Ps: happens asynchronously*
