# Handlebars lipsum
Handlebars helper that returns a substring of characters of lorem ipsum latin text.

## Usage
```javascript
{{lipsum 0 300}}
```

```javascript
{{lipsum "random" 300}}
```

## Parameters

| Argument	| Type 				| Description																						|
|:----------|:------------------|:--------------------------------------------------------------------------------------------------|
| from		| Number or String 	| The starting index. If the value is 'random' a random index will be selected						|
| to 		| Number 			| The ending index.																					|
