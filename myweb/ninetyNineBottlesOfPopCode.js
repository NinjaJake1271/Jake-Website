var word = "bottles";
						
var count = 99;
						
while (count > 0)
{
	
	console.log(count + " " + word + " of pop on the wall");
	document.write(" " + count + " " + word + " of pop on the wall <br>");
	console.log(count + " " + word + " of pop, ");
	document.write(count + " " + word + " of pop, <br>");
	if(count == 2)
	{
		word = "bottle";
	}
	
	console.log("Take one down, pass it around, ");
	document.write("Take one down, pass it around, <br>");
	count -= 1;
	
	if (count > 0)
	{
		console.log(count + " " + word + " of pop on the wall");
		document.write(count + " " + word + " of pop on the wall <br>");
	}
	else
	{
		word = "bottles";
		console.log("No more " + word + " of pop on the wall");
		document.write("No more " + word + " of pop on the wall <br>");
	}
}
						