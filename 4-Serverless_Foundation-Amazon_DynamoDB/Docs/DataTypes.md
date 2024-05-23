# AMAZON DYNAMODB DATA TYPES

## 1. SCALAR TYPES

- Exactly one value
  - e.g. string, number, binary, boolean, and null
- Keys or index attributes only support string, number and binary scalar types

| Scalar type | Characteristics | Examples |
| :---------: | :---------: | :---------: |
| String | <ul><li>Stores text data (UTF-8 encoded)</li> <li>Only non-empty values</li></ul> | <ul><li>"John"</li> <li>"California"</li> <li>"Fox in Socks"</li></ul> |
| Number | <ul><li>Stores all numeric types</li></ul> | <ul><li>123</li> <li>100.88</li> <li>-5</li></ul> |
| Binary | <ul><li>Blobs of binary data <ol><li>compressed text</li> <li>encrypted data</li> <li>images</li></ol></li> <li>Only non-empty values</li> <li>Size under <ol><li>2KB if used as hash key</li> <li>1KB if used as sort key</li></ol></li></ul> | <ul><li>"QmFzZTYOIGVuY29kZWQgdGV4dA"</li></ul> |
| Boolean | | <ul><li>true</li> <li>false</li></ul> |
| Null | <ul><li>Unknown or undefined state</li></ul> | <ul><li>null</li></ul> |

## 2. SET TYPES

| Overview | Examples |
| :---------: | :---------: |
| <ul><li>Multiple scalar values</li> <li>Unordered collection of strings, numbers or binary <ol><li>string set</li> <li>number set</li> <li>binary set</li></ol></li> <li>Only non-empty values</li> <li>No duplicates allowed</li> <li>No empty sets allowed</li> <li>All values must be of same scalar type</li></ul> | <ul><li>["Apples", "Oranges", "Grapes"]</li> <li>[1, 2.6, -28, 88, 51]</li> <li>["SGVsbG8=", "V29ybGQ="]</li></ul>|

## 3. DOCUMENT TYPES

- Complex structure with nested attributes
 - e.g. list and map
