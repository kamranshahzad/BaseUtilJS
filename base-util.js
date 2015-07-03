/*
	Javascript data type transformation , traversing etc helper functions
*/

var BaseUtil = function(){


	/*
		URL manipulates
	*/
	function URL(block_id){
		this.url_params = [];
	}

	URL.prototype.addParam = function(param_value){
		this.url_params.push(param_value);
	}

	URL.prototype.removeParam = function(param_value){
		var foundIndex = this.url_params.indexOf(param_value); 
		if(foundIndex != -1 ){
			this.url_params.splice(foundIndex,1);
		}
	}

	URL.prototype.toString = function(delims){
		var delims = delims || '-';
		return this.url_params.join(delims);
	}




	//public functions
	return {
		url : URL
	};

}({});