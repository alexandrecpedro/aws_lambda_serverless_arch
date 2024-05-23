# AMAZON DYNAMODB TERMINOLOGY COMPARISON WITH SQL

## TABLE COMPARISON

| SQL / RDBMS | DynamoDB |
| :-----------: | :--------: |
| Tables | Tables |
| Rows | Items |
| Columns | Attributes |
| Primary Keys - Multicolumn and Optional | Primary Keys - Mandatory <br>Minimum One and Maximum Two Attributes |
| Indexes | Local Secondary Indexes |
| Views | Global Secondary Indexes |

## DYNAMODB

### 1. PRIMARY KEYS

- Mandatory attribute => partition_key (or hash_key)
- Optional attribute => sort_key (or range_key)

### 2. QUERY THE DATABASE

The best way to scan the database to query an specific data is using the primary key or table indexes
 - Cheaper
 - More efficient

### 3. LOCAL SECONDARY INDEXES

Indexes that share the partition_key with the primary key, but have a different sort_key

### 4. GLOBAL SECONDARY INDEXES

Indexes where partition_key is different from that of the primary key
