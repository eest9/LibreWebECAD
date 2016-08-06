function test() {
	var object = {
		name : '',
		available : 1
	};
	object.available = 1;//überprüfe die CSV auf weiter Objekte
	object.name = 'oh';//hole den Namen aus der csv
	do{
		document.write('<li>');
		document.write(object.name);
		document.write('</li>');
		object.available = 0;
	}while(object.available == 1);
}