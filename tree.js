function tree() {
	function en81346_object(aspect_function, aspect_location, aspect_product) {
		this.aspect_function = aspect_function;
		this.aspect_location = aspect_location;
		this.aspect_product = aspect_product;
	}
	
	var item = [
	    new en81346_object("=PSU","+C01","-UC1"),
	    new en81346_object("=PSU","+C01","-UC2"),
	    new en81346_object("=PSU","+C01","-UC3")
	];
	var amount_of_items = item.length;
	for(i = 0; i < amount_of_items; i++){
		document.write('<li>');
		document.write(item[i].aspect_product);
		document.write('</li>');
	};
}