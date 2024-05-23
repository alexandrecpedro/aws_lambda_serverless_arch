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
| | | |

## 2. SET TYPES

- Multiple scalar values
  - e.g. string set, number set and binary set

## 3. DOCUMENT TYPES

- Complex structure with nested attributes
 - e.g. list and map
