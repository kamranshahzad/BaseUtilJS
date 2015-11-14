# BaseUtilJS
BaseUtilJS provides basic functions about core javascript


## Description

During working in VanillaJS I faced many issues to develop applications. 
I solved them, create a file which contains all useful functions or methods. 
Everyone could use this tiny JS library.


## Usage


#### Url parameters array to string/ string to array 

``` javascript
	var url_object = new BaseUtil.url();
	url_object.addParam('bags');
	url_object.addParam('fruits');
	url_object.addParam('vegetables');
	console.log(url_object.toString());

	// remove param
	url_object.removeParam('fruits');
	
```
	* `toString()` : this method uses '-' delims as default argument. You can set any delims using `toString('&')`

#### Find array element using key 

``` javascript
var data_array = [
		{key:'one' ,  items : []},
		{key:'two' ,  items : []},
		{key:'three', items : []}
	];

var found_array_element = BaseUtil.findByKey(data_array , 'two');	
```