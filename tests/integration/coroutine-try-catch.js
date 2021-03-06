/*
foo
Caught foo
bar
Caught bar
*/

class WWW {
  public var value: String;
	
  function WWW(value: String) {
	this.value = value;
  }
}

function wwws(names) {
  for (var str in names) {
	var www = new WWW(str as String);
	yield www;
	try {
	  var v = www.value;
	  throw new System.Exception();
	} catch (x) {
	   print("Caught " + str);
	}
  }
}

for (var www in wwws(["foo", "bar"]))
	print((www as WWW).value);
