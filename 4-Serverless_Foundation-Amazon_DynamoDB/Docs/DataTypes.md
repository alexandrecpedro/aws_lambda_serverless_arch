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

- Multiple scalar values
- Unordered collection of strings, numbers or binary
  - e.g. string set, number set and binary set
- Only non-empty values
- No duplicates allowed
- No empty sets allowed
- All values must be of same scalar type

| Set Type | Examples |
| :---------: | :---------: |
| string set | ["Apples", "Oranges", "Grapes"]|
| number set | [1, 2.6, -28, 88, 51]|
| binary set | ["SGVsbG8=", "V29ybGQ="]|

## 3. DOCUMENT TYPES

- Complex structure with nested attributes
- Nesting up to 32 levels deep
  - e.g. lists and maps
- Only non-empty values within lists and maps
- Empty lists and maps are allowed

| Document type | Characteristics | Examples |
| :---------: | :---------: | :---------: |
| Lists | <ul><li>Ordered collection of values</li> <li>Can have multiple data types</li></ul> | <ul><li>["John", 128.88, "Apples"]</li></ul> |
| Maps | <ul><li>Unordered collection of Key-Value pairs</li> <li>Ideal for storing JSON documents</li></ul> | ```json
{ 
  name: "John", 
  age: 22, 
  address: { 
    city: "Stamford", 
    state: "Connecticut" 
  }
}
``` |
