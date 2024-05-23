# AMAZON DYNAMODB TERMINOLOGY COMPARISON WITH SQL

## TABLE COMPARISON

|:-----------:|:--------:|
| SQL / RDBMS | DynamoDB |
| Tables | Tables |
| Rows | Items |
| Columns | Attributes |
| Primary Keys - Multicolumn and Optional | Primary Keys - Mandatory
Minimum One and Maximum Two Attributes |
| Indexes | Local Secondary Indexes |
| Views | Global Secondary Indexes |

## DYNAMODB

**Primary Keys**

- Mandatory attribute => partition_key (or hash_key)
- Optional attribute => sort_key (or range_key)

**Query the Database**

The best way to scan the database to query an specific data is using the primary key or table indexes
 - Cheaper
 - More efficient

**Local Secondary Indexes**

Indexes that share the partition_key with the primary key, but have a different sort_key

**Global Secondary Indexes**

Indexes where partition_key is different from that of the primary key
