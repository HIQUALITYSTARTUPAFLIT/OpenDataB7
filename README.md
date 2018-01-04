# OpenDataB7

I made a clean way to use open data from javascript

## Usage

### Step 1

I tried to model it like firebase. The first thing you need to do is `init` it.

```javascript
var options = {
	url: "http://opendata.br7.org.il/datasets/geojson/Shimur.geojson",
	async: false
};
b7.init(options);
```

### Step 2

Once it has everything loaded and cached you can do searches! This is done by using `b7.query` like so:

```javascript
var search = {
	'key that exists in object': 'value you want it to be'
};
b7.query(search, (object) => {
	//`object` is the result of the search
});
```
