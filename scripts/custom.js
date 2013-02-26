function generate() {
	document.getElementById("qrcode").innerHTML = "";

	var qrcodesvg	= null;
	var qrtest		= document.getElementById("qrtest").value;
	var input		= document.getElementById("qrinput").value;
	var colorOne	= document.getElementById("colorOne").value;
	var colorTwo	= document.getElementById("colorTwo").value;
  var colorThree	= document.getElementById("colorThree").value;
  var intensity	= parseInt(document.getElementById("intensity").value);
	var size		= 420;
	var ecclevel	= 1;

	switch(parseInt(qrtest))
	{
	case 0: //classic
		var qrcodesvg 	= new Qrcodesvg( input, "qrcode", size);

		qrcodesvg.draw();
	  break;
	case 1: //ecclevel 4
		var qrcodesvg 	= new Qrcodesvg( input, "qrcode", size, {"ecclevel" : 4});
		qrcodesvg.draw();
	  break;
	case 2: //size 100
		var qrcodesvg 	= new Qrcodesvg( input, "qrcode", 100, {"ecclevel" : ecclevel});
		qrcodesvg.draw();
	  break;
	case 3: //round
		var qrcodesvg 	= new Qrcodesvg( input, "qrcode", size, {"ecclevel" : ecclevel});
		qrcodesvg.draw({"method":"round", "radius" : intensity, "fill-colors":[colorOne, colorTwo, colorThree]},{"stroke-width":0});
	  break;
	case 4: //bevel
		var qrcodesvg 	= new Qrcodesvg( input, "qrcode", size, {"ecclevel" : ecclevel});

		qrcodesvg.draw({"method":"bevel", "radius" : intensity, "fill-colors":[colorOne, colorTwo, colorThree]}, {"stroke-width":1} );
	  break;
	case 5: //bevel square
		var qrcodesvg 	= new Qrcodesvg( input, "qrcode", size, {"ecclevel" : ecclevel});

		qrcodesvg.draw({"method":"bevel", "radius" : intensity, "fill-colors":[colorOne, colorTwo, colorThree],"scope":"square"});
		break;
	case 6: //colored pattern
		var qrcodesvg 	= new Qrcodesvg( input, "qrcode", size, {"ecclevel" : ecclevel});

		qrcodesvg.draw({"method":"classic", "fill-colors":[colorOne, colorTwo, colorThree]}, {"stroke-width":1});
	  break;
	case 7: //colored square
		var qrcodesvg 	= new Qrcodesvg( input, "qrcode", size, {"ecclevel" : ecclevel});

		qrcodesvg.draw({"method":"classic", "fill-colors":[colorOne, colorTwo, colorThree], "fill-colors-scope":"square"}, {"stroke-width":0});
	  break;
	case 8: //background
		var qrcodesvg 	= new Qrcodesvg( input, "qrcode", size, {"ecclevel" : ecclevel});

		qrcodesvg.setBackground(null, {"fill":"90-#FFF-#CECECE", "stroke-width":1, "stroke":"#FFF"});

		qrcodesvg.draw();
	  break;

	case 9: //frame
		var qrcodesvg 	= new Qrcodesvg( input, "qrcode", size, {"ecclevel" : ecclevel});

		qrcodesvg.setBackground({"padding" : 10, "margin" : 10}, {"stroke-width" : 20, "stroke" : "#3DBC27"});

		qrcodesvg.draw();
	  break;
	}
}
