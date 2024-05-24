# DYNAMODB PROJECT

## 1. DESCRIPTION

Using DynamoDB, create a table to store user notes or messages, write and read data

## 2. DETAILS

*name* = td_notes

| Column name | Data Type |
| :---------: | :-------: |
|   user_id   |   String  |
|  timestamp  |   Number  |
|    title    |   String  |
|   content   |   String  |
|   category  |   String  |
|   note_id   |   String  |
|  user_name  |   String  |

### (A) TABLE INDEX

- Primary Key
  - Partition Key: user_id
  - Sort Key: timestamp

### (B) SECONDARY INDEX

|     Secondary Index     |      Index name        |     Key     | Partition Key |   Sort Key  | Projected attributes |
|  :--------------------: | :--------------------: | :---------: | :-----------: | :---------: | :------------------: |
|  Local Secondary Index  | user_id-title-index    | Primary Key |    user_id    |   title     |         All          |
|  Local Secondary Index  | user_id-category-index | Primary Key |    user_id    |   category  |         All          |
| Global Secondary Index  |       note_id-index    | Primary Key |    note_id    |             |         All          |

## 3. PROVISIONED CAPACITY

|     Capacity Unit    | Table | note_id-index |
|  :-----------------: | :---: | :-----------: |
| Read capacity units  |   1   |       1       |
| Write capacity units |   1   |       1       |

Estimated cost = $1.17 / month

## 4. COMMANDS

```bash
node <file_name>
# e.g. node table-ops.mjs
```
