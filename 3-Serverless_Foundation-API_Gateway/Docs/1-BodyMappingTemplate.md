# BODY MAPPING TEMPLATE

## 1. REQUEST MAPPING

### (A) INTEGRATION REQUEST

- Mapping Template (Content-Type)

```bash
{
  "operation": "$input.params('operation')",
  "input": {
    # "operand1": "$input.json('$.num1')",
    "operand1": $inputRoot.num1,
    # "operand2": "$input.json('$.num2')"
    "operand2": $inputRoot.num2
  }
}
```

### (B) TEST

- Path

```bash
<math_operation>
# Ex: add, subtract, multiply, divide
```

- Request Body

```json
{
  "num1": 5, // must be a valid number
  "num2": 2 // must be a valid number
}
```

## 2. RESPONSE MAPPING

### (A) INTEGRATION RESPONSE

- Mapping Template (Content-Type)

```bash
{
  "result": $input.json('$.body')
}
```

- Header Mappings

```
Response header => Access-Control-Allow-Origin

Mapping value => *
```

### (B) METHOD RESPONSE

- Add Header

```bash
"Access-Control-Allow-Origin"
```
