(function() {
	
    if (!document.getElementById("BlackBakgroundDiv")) {
		
		var style = document.createElement("link");
		style.href="https://creative.exponential.com/creative/creative_dev/pharma/SS/AdLoader.css";
		//style.href="AdLoader1.css";
		style.rel="stylesheet";
        document.head.appendChild(style);
	
		
		var blackDiv = document.createElement("div");
        blackDiv.id = "BlackBakgroundDiv";
		blackDiv.className ="BlackBakgroundDiv opacityShow";
        document.body.appendChild(blackDiv);
		
		// Create the main holder div
		var MainHolder = document.createElement("div");
		MainHolder.id = "maincontainer";
		MainHolder.className = "maincontainer animationDown";
		// Append the main holder to the body
		document.body.appendChild(MainHolder);

		

		// Add title with icon
		const title = document.createElement("p");
		title.style.marginLeft = "13px";
		title.style.marginTop = "-10px";
		const icon = document.createElement("img");
		icon.src = "//creative.exponential.com/creative/creative_dev/screenshot/expo.jpg";
		icon.id = "Img";
		title.appendChild(icon);
		const titleText = document.createElement("strong");
		titleText.textContent = "VDX Ad Loader";
		title.appendChild(titleText);
		MainHolder.appendChild(title);

		 
		// Create the close button
		var closeButton = document.createElement("div");
		closeButton.id = "closeTool";
		closeButton.onclick = closeTool;
		closeButton.innerText = "X";
		MainHolder.appendChild(closeButton);
		
		
		// Add MediaDataID label and input
		const mediaDataIDLabel = document.createElement("label");
		mediaDataIDLabel.htmlFor = "MediaDataID";
		mediaDataIDLabel.textContent = "MediaDataID:";
		MainHolder.appendChild(mediaDataIDLabel);

		const mediaDataIDInput = document.createElement("input");
		mediaDataIDInput.type = "text";
		mediaDataIDInput.id = "MediaDataID";
		mediaDataIDInput.value = "13053630";
		mediaDataIDInput.placeholder = "Enter mediaDataID";
		MainHolder.appendChild(mediaDataIDInput);
		
		// Add ccRevision label and input
		const ccRevisionLabel = document.createElement("label");
		ccRevisionLabel.htmlFor = "ccRevision";
		ccRevisionLabel.textContent = "ccRevision:";
		MainHolder.appendChild(ccRevisionLabel);

		const ccRevisionInput = document.createElement("input");
		ccRevisionInput.type = "text";
		ccRevisionInput.id = "ccRevision";
		ccRevisionInput.value = "e";
		ccRevisionInput.placeholder = "Enter ccRevision";
		MainHolder.appendChild(ccRevisionInput);

		// Add ccRevisionVariation label and input
		const ccRevisionVariationLabel = document.createElement("label");
		ccRevisionVariationLabel.htmlFor = "ccRevisionVariation";
		ccRevisionVariationLabel.textContent = "ccRevisionVariation:";
		MainHolder.appendChild(ccRevisionVariationLabel);

		const ccRevisionVariationInput = document.createElement("input");
		ccRevisionVariationInput.type = "text";
		ccRevisionVariationInput.id = "ccRevisionVariation";
		ccRevisionVariationInput.value = "0";
		ccRevisionVariationInput.placeholder = "Enter ccRevisionVariation";
		MainHolder.appendChild(ccRevisionVariationInput);
				
		// Add Ad Size label and select
		const adSizeLabel = document.createElement("label");
		adSizeLabel.htmlFor = "AdSize";
		adSizeLabel.id="adSizeLabel";
		adSizeLabel.textContent = "Ad Size:";
		MainHolder.appendChild(adSizeLabel);

		const adSizeSelect = document.createElement("select");
		adSizeSelect.id = "AdSize";
		adSizeSelect.name = "AdSize";
		["300x600", "300x250", "970x250", "160x600", "728x90"].forEach(size => {
		  const option = document.createElement("option");
		  option.value = size;
		  option.id = size;
		  option.textContent = size;
		  adSizeSelect.appendChild(option);
		});
		MainHolder.appendChild(adSizeSelect);
		
		// Add Ad Format label and select
		const adFormatLabel = document.createElement("label");
		adFormatLabel.htmlFor = "AdFormat";
		adFormatLabel.id="AdFormatLabel";
		adFormatLabel.textContent = "Ad Format:";
		MainHolder.appendChild(adFormatLabel);

		const adFormatSelect = document.createElement("select");
		adFormatSelect.id = "AdFormat";
		adFormatSelect.name = "AdFormat";
		["VdxDesktopInframe", "VdxMobileInframe", "VdxMobileExpandable", "VdxDesktopExpandable", "DesktopInstream", "MobileInstream"].forEach(format => {
		  const option = document.createElement("option");
		  option.value = format;
		  option.textContent = format;
		  adFormatSelect.appendChild(option);
		});
		MainHolder.appendChild(adFormatSelect);
		
		
		// Create a label element of Ad choice
		const AdchoiceLabel = document.createElement('label');
		AdchoiceLabel.htmlFor = 'AdchoiceCheckbox'; // Associate the label with the checkbox
		AdchoiceLabel.textContent = 'Ad choice icon'; // Set the label's text
		AdchoiceLabel.id="AdchoiceLabel";
		MainHolder.appendChild(AdchoiceLabel);
		
		const AdchoiceCheckbox = document.createElement('input');
		AdchoiceCheckbox.type = 'checkbox';
		AdchoiceCheckbox.style.position="relative";
		AdchoiceCheckbox.style.left="92%";
		AdchoiceCheckbox.style.top="-37px";
		AdchoiceCheckbox.id = 'AdchoiceCheckbox';
		MainHolder.appendChild(AdchoiceCheckbox);
		

		// Create the load ad button
		var loadAdButton = document.createElement("input");
		loadAdButton.type = "button";
		loadAdButton.value = "Load Ad";
		loadAdButton.id="loadAdButton";
		loadAdButton.onclick = loadAd;
		loadAdButton.size = "8";
		loadAdButton.id="Load_Ad";
		MainHolder.appendChild(loadAdButton);
		
		console.log("adFormet...."+document.getElementById('AdFormat').value);
		
		document.getElementById('AdFormat').addEventListener('change', () => {
			
			if (document.getElementById('AdFormat').value === 'DesktopInstream') {
				document.getElementById('AdSize').style.display ='none';
				document.getElementById('adSizeLabel').style.display ='none';
				document.getElementById('AdFormat').style.display ='none';
				document.getElementById('AdFormatLabel').style.display ='none';
				document.getElementById('AdchoiceLabel').style.display ='none';
				document.getElementById('AdchoiceCheckbox').style.display ='none';				
				
			} else if (document.getElementById('AdFormat').value === 'MobileInstream') {
				document.getElementById('AdSize').style.display ='none';
				document.getElementById('adSizeLabel').style.display ='none';
				document.getElementById('AdFormat').style.display ='none';
				document.getElementById('AdFormatLabel').style.display ='none';
				document.getElementById('AdchoiceLabel').style.display ='none';
				document.getElementById('AdchoiceCheckbox').style.display ='none';	
				
			} else {
				document.getElementById('AdSize').style.display ='block';
				document.getElementById('adSizeLabel').style.display ='block';
				document.getElementById('AdchoiceLabel').style.display ='block';
				document.getElementById('AdchoiceCheckbox').style.display ='block';	
			}
			if (document.getElementById('AdFormat').value === 'VdxMobileExpandable') {
				document.getElementById('160x600').style.display = 'none';
				document.getElementById('970x250').style.display = 'none';
				document.getElementById('728x90').style.display = 'none';
			} else {
				document.getElementById('160x600').style.display = 'block';
				document.getElementById('970x250').style.display = 'block';
				document.getElementById('728x90').style.display = 'block';
			}
			
			if (document.getElementById('AdFormat').value === 'VdxMobileInframe') {
				document.getElementById('160x600').style.display = 'none';
				document.getElementById('970x250').style.display = 'none';
				document.getElementById('728x90').style.display = 'none';
			} else {
				document.getElementById('160x600').style.display = 'block';
				document.getElementById('970x250').style.display = 'block';
				document.getElementById('728x90').style.display = 'block';
			}
		});
		
		//**************PRS*************************//

	} else {
       showAdstrom();     	
    }
	
})();


function showAdstrom(){
	document.getElementById("maincontainer").setAttribute("class","maincontainer animationDown");
	document.getElementById("BlackBakgroundDiv").setAttribute("class","BlackBakgroundDiv opacityShow");
	document.getElementById("maincontainer").style.border="4px solid #ebebeb";
	document.getElementById("maincontainer").style.display="block";
	document.getElementById("BlackBakgroundDiv").style.display="block";
		
}

function closeTool(){
	document.getElementById("maincontainer").removeAttribute("maincontainer");
	document.getElementById("maincontainer").setAttribute("class","maincontainer animationUp");
	document.getElementById("BlackBakgroundDiv").setAttribute("class","BlackBakgroundDiv opacityHide");

}


function vdxAdLoad(t){
    var src = "//a.tribalfusion.com/tags/AdApp/ads/tags.js"; 
    var e9 = JSON.parse(decodeURIComponent(t.src).split("?data =")[1])
    idoc = document.getElementById(t.id).contentWindow;
    idoc.e9 = e9
    content = '<!DOCTYPE html><html>  <head></head>' +
        '<body style="margin-left:0;margin-top:0px;">' +
        '<scr' + 'ipt> var inSingleAsyncFrame = true; </sc' + 'ript>' +
        '<scr' + 'ipt type="text/javascript" src="' + src + '">  </sc' + 'ript>' +
        '</body></html>';
    idoc.document.open();
    idoc.document.write(content);
    idoc.document.close();
    document.getElementById("BlackBakgroundDiv").style.display = "none";
	document.getElementById("maincontainer").style.display = "none";
    
}
function loadAd() {
	
	  /*const mediaDataID = 13047110;
	  const ccRevision = 'ag';
	  const adSize = "970x250";
	  const AdFormat = "VdxDesktopExpandable";*/
	
	  const MediaDataID = document.getElementById('MediaDataID').value;
	  const ccRevision = document.getElementById('ccRevision').value;
	  const ccRevisionVariation = document.getElementById('ccRevisionVariation').value;
	  const adSize = document.getElementById('AdSize').value;
	  var AdFormat = document.getElementById('AdFormat').value;
	  
	  var e9 = new Object();
	  e9.adformat = AdFormat;
	  e9.size = adSize;
	  e9.noAd = 1;
	  e9.clientID = 293233;
	  e9.playTrackURL = "https://";
	  e9.clickTrackURL = "https://";
	  e9.flushMedia = 1;
	  e9.environment = "prod";
	  e9.tagparams = { "productControlConfig": { "isBokehModeEnabled": true, "productName": ""+AdFormat+"", "isTurnOffTabAutoSwitch": true }, "renderingenv": "showcase", "productcontrolconfig": { "isofftabautoswitch": { "enabled": true } } };
	  e9.mediaType = 8;
	  e9.mockApp = 1;
	  e9.mediaDataID = MediaDataID;  
	  // CCRV UPDATE
	  e9.productId = 2;
	  if (AdFormat === "VdxDesktopExpandable") {
		e9.productId = 14;
		AdFormat = "VdxDesktopExpandable";
	 }
	 if (AdFormat === "VdxMobileExpandable") {
		e9.productId = 17;
		AdFormat = "VdxMobileExpandable";
	 }
	 if (AdFormat === "VdxDesktopInframe") {
		e9.productId = 2;
		AdFormat = "VdxDesktopInframe";
	 }
	 if (AdFormat === "VdxMobileInframe") {
		e9.productId = 5;
		AdFormat = "VdxMobileInframe";
	}
	  e9.mediaDir = MediaDataID;
	  e9.ccRevisionVariation = ccRevisionVariation;
	  e9.ccRevision = ccRevision;
	  e9.vdxFrameworkTemplateVersion = "3.15.0";
	  e9.mediaID = 0;
	  e9.isByPassCrossDomain = false;
	  e9.fragmentedVideo = { "enabled": false };
	  e9.elastic = undefined;
	  e9.tagparams = { "productControlConfig": { "productName": ""+AdFormat+"", "isPlayFragmentedVideo": false } };
	  e9.adApp = 1;	  
	  // delete non-requireds
	  delete e9.mockApp;
	

	const div = document.createElement('div');	
	div.id = 'AdTargetHolder'; // Set the div's ID	
	div.style.position = 'absolute'; 
	div.style.top = '50px';
	div.style.left = '30px';	

	 

	if (adSize === "970x250") {
		div.style.width = '970px';
		div.style.height = '250px';	
	}
	if (adSize === "300x600") {
		div.style.width = '300px';
		div.style.height = '600px';
	}
	if (adSize === "300x250") {
		div.style.width = '300px';
		div.style.height = '250px';
	}
	if (adSize === "160x600") {
		div.style.width = '160px';
		div.style.height = '600';
	}
	if (adSize === "728x90") {
		div.style.width = '728px';
		div.style.height = '90px';
	}	
	
	let highestZIndex = Array.from(document.querySelectorAll('*')) // Select all elements
    .map(el => parseFloat(window.getComputedStyle(el).zIndex) || 0) // Get their zIndex as a number
    .reduce((max, z) => Math.max(max, z), 0); // Find the maximum zIndex
	
	div.style.backgroundColor = 'transparent';
	//div.style.border = '2px solid #000';
	div.style.color="black";
	//div.innerHTML = "Ad Loading...";
	div.style.textAlign="center";
	div.style.fontSize="18px";	
	div.style.paddingTop="30px";
	div.style.cursor = 'move';
	//div.style.zIndex = '9999'; // Ensure it's on top
	div.style.zIndex = (highestZIndex + 1).toString();
   	document.body.appendChild(div);		
	
	var style = "";
	var frameid = "PRS";
	var src = "about:blank?data =" + encodeURIComponent(JSON.stringify(e9));
	asyncIframe =
		'<iframe style="width:' +
		(parseInt(adSize.split("x")[0])) +
		'px" onload ="vdxAdLoad(this)" src="' +
		src +
		'" id="' +
		frameid +
		'"' +
		' marginwidth=0 align="center" marginheight=0 hspace=0 vspace=0 frameBorder=0 scrolling=no allowTransparency=true ' +
		'width="' +
		(parseInt(adSize.split("x")[0])) +
		'" height="' +
		(parseInt(adSize.split("x")[1])) +
		'"  ' +
		style +
		"> </iframe>";

    document.getElementById('AdTargetHolder').innerHTML =  asyncIframe;


	
	//**************************** Move Ad Div **********************************************//		
	var DragDiv = document.createElement('div');	
	DragDiv.id = 'DragDiv'; // Set the div's ID	
	DragDiv.style.position = 'absolute'; 
	DragDiv.style.backgroundColor = 'green';	
	DragDiv.style.top='0px';
	DragDiv.style.left='40%';
	DragDiv.style.color="white";
	DragDiv.innerHTML = "MoveAd";
	DragDiv.style.textAlign="center";
	div.appendChild(DragDiv);
	if(document.getElementById('AdFormat').value ==="VdxDesktopExpandable"){
		DragDiv.style.left='100%';
	}else{
		DragDiv.style.left='40%';
	}
	
	//************************ Implement Ad Choise Image ***************************************//
	var adChoiseImage = document.createElement("img");
	adChoiseImage.src = "https://creative.exponential.com/creative/creative_dev/screenshot/Ad_Logo.png";
	adChoiseImage.id = "AdChoiseImg";
	adChoiseImage.style.width="15px";
	adChoiseImage.style.height="15px";
	adChoiseImage.style.position="absolute";
	adChoiseImage.style.zIndex = "11";
	adChoiseImage.style.top="30px";	
	adChoiseImage.style.visibility="hidden";
	document.getElementById('AdTargetHolder').appendChild(adChoiseImage);	
	
	console.log("Pankaj...."+document.getElementById('AdchoiceCheckbox').checked);

	console.log("adFormet...."+document.getElementById('AdFormat').value);
	
		if (document.getElementById('AdchoiceCheckbox').checked == true) {
			console.log('Checkbox is checked (true)');

			if(document.getElementById('AdFormat').value ==="VdxDesktopExpandable" || document.getElementById('AdFormat').value ==="VdxMobileExpandable"){
				adChoiseImage.style.right="0px";
			}else{
				adChoiseImage.style.left="0px";
			}
			if (adSize === "970x250") {
			   adChoiseImage.style.left="0px";
			}
		    if(document.getElementById('AdFormat').value ==="DesktopInstream"){
				adChoiseImage.style.visibility="hidden";
			}
			document.getElementById('AdChoiseImg').style.visibility="visible";
		} else {
			document.getElementById('AdChoiseImg').style.visibility="hidden";
			console.log('Checkbox is unchecked (false)');
		}
        document.addEventListener('keydown', function(event) {
            if (event.shiftKey && event.code === 'KeyC') {
                const myAdChoiseImg = document.getElementById('AdChoiseImg');
                myAdChoiseImg.style.visibility = 'hidden';
            }
        });

		 //**************************** Border Div for Inframe sizes **********************************//	
		 var BorderDiv = document.createElement('div');	
		 BorderDiv.id = 'BorderDiv'; // Set the div's ID	
		 BorderDiv.style.position = 'absolute'; 
		 BorderDiv.style.backgroundColor = 'white';	
		 BorderDiv.style.top='29px';
		 BorderDiv.style.left='-1px';
		 BorderDiv.style.zIndex="-1";
		 BorderDiv.style.border = '1px solid #000';
		 BorderDiv.style.visibility="hidden";
		 div.appendChild(BorderDiv);

		const adFormat = document.getElementById('AdFormat').value;
		// Default to hidden
		BorderDiv.style.visibility = "hidden";

		switch (adSize) {
			case "300x600":
				BorderDiv.style.width = "302px";
				BorderDiv.style.height = "602px";
				break;
			case "300x250":
				BorderDiv.style.width = "302px";
				BorderDiv.style.height = "252px";
				break;
			case "970x250":
				BorderDiv.style.width = "972px";
				BorderDiv.style.height = "252px";
				break;
			case "728x90":
				BorderDiv.style.width = "730px";
				BorderDiv.style.height = "92px";
				break;
			case "160x600":
				BorderDiv.style.width = "162px";
				BorderDiv.style.height = "602px";
				break;
			default:
				BorderDiv.style.visibility = "hidden";
				return; // Exit early if adSize is invalid
		}

		// Show border only if adFormat is one of the allowed values
		if (adFormat === "VdxDesktopInframe" || adFormat === "VdxMobileInframe") {
			BorderDiv.style.visibility = "visible";
		}else {
			BorderDiv.style.visibility = "hidden";
		}
	
	//********************************* To load desktop Instream ********************************//

	var Myiframe = document.createElement("iframe");	
	Myiframe.style.zIndex = '9999'; 
	Myiframe.frameBorder = "0";      
    Myiframe.scrolling = "no";      
	Myiframe.allowTransparency = true;     

	var DesktopInstreamControl = document.createElement('div');	
	DesktopInstreamControl.id = 'DesktopInstreamControl'; // Set the div's ID	
	DesktopInstreamControl.style.position = 'absolute'; 
	DesktopInstreamControl.style.backgroundColor = 'red';	
	DesktopInstreamControl.style.top='-50px';
	DesktopInstreamControl.style.right='-5%';
	DesktopInstreamControl.style.width="125px";
	DesktopInstreamControl.style.height="90px";
	DesktopInstreamControl.style.zIndex="9999";
	
	// Create the close button
	var closeButton = document.createElement('button');
	closeButton.innerText = 'X'; // Text for the close button
	closeButton.style.position = 'absolute';
	closeButton.style.top = '5px';
	closeButton.style.right = '5px';
	closeButton.style.width = '20px';
	closeButton.style.height = '20px';
	closeButton.style.border = 'none';
	closeButton.style.backgroundColor = 'black';
	closeButton.style.color = 'white';
	closeButton.style.cursor = 'pointer';
	closeButton.style.borderRadius = '50%';
	closeButton.style.fontSize = '12px';
	closeButton.style.lineHeight = '20px';
	closeButton.style.textAlign = 'center';

	// Add functionality to close the DesktopInstreamControl div
	closeButton.onclick = function () {
		DesktopInstreamControl.remove();
	};

// Append the close button to the DesktopInstreamControl div
DesktopInstreamControl.appendChild(closeButton);

	
	const labelWidth = document.createElement("label");
	labelWidth.textContent = "Width:";
	labelWidth.style.fontSize="12px";
	labelWidth.style.color="#fff";
	DesktopInstreamControl.appendChild(labelWidth);

	// Create a number input element
    const numberInput = document.createElement('input');
	numberInput.type = 'number';
	numberInput.min = '1'; // Minimum value
    numberInput.max = '8000'; // Maximum value
    numberInput.step = '1'; // Step value
    numberInput.placeholder = '770'; // Placeholder text
	numberInput.value="770";
    numberInput.id = 'numberInput'; // Set an ID for reference
	DesktopInstreamControl.appendChild(numberInput);

	numberInput.addEventListener('input', () => {
		console.log('Current value:', numberInput.value);
		Myiframe.style.width = numberInput.value+"px";
	});


	/*const labelHeight = document.createElement("label");
	labelHeight.textContent = "height:";
	labelHeight.style.fontSize="12px";
	labelHeight.style.color="#fff";
	DesktopInstreamControl.appendChild(labelHeight);

	// Create a number input element
    const heightInput = document.createElement('input');
	heightInput.type = 'number';
	heightInput.min = '1'; // Minimum value
    heightInput.max = '8000'; // Maximum value
    heightInput.step = '1'; // Step value
    heightInput.placeholder = '657'; // Placeholder text
	heightInput.value="657";
    heightInput.id = 'heightInput'; // Set an ID for reference
	DesktopInstreamControl.appendChild(heightInput);
	
	heightInput.addEventListener('input', () => {
		console.log('Current value height:', heightInput.value);
		Myiframe.style.height = heightInput.value+"px";
	});*/

	   

		

	
	if(AdFormat === "DesktopInstream"){
		div.style.width="770px";
	    div.style.height="465px";
	    div.style.top="300px";
		
		Myiframe.style.width = "770px";
		Myiframe.style.height = "657px";
		Myiframe.src="https://creative.exponential.com/creative/creative_dev/screenshot/MobInstPlayer.html?_MoIns="+MediaDataID+"&latestRevision="+ccRevision+"&isCCRV=true&latestVariation=0";
		document.getElementById('PRS').style.position = 'absolute'; 
		document.getElementById('PRS').style.width = '0px'; 
		document.getElementById('DragDiv').style.top='0px';	
		div.appendChild(Myiframe);
		div.appendChild(DesktopInstreamControl);
	}	

	
	//***************************** To load Mobile Instream ***************************************//
    const MInstreamIframe = document.createElement('iframe');
	MInstreamIframe.style.position = 'absolute';
	MInstreamIframe.style.zIndex = '9999'; 
	MInstreamIframe.frameBorder = '0';
	MInstreamIframe.allowFullscreen = true;
	if(AdFormat === "MobileInstream"){		
		MInstreamIframe.style.top = '0';
		MInstreamIframe.style.left = '0';
		MInstreamIframe.style.width = '100%';
		MInstreamIframe.style.height = '100%';
		MInstreamIframe.src ="https://creative.exponential.com/creative/creative_dev/screenshot/MobInstPlayer.html?_MoIns="+MediaDataID+"&latestRevision="+ccRevision+"&isCCRV=true&latestVariation=0";		
		div.style.width = '100%';
		div.style.left = '0px';
		div.style.paddingTop = '56.25%';
		document.getElementById('PRS').style.position = 'relative'; 
		document.getElementById('DragDiv').style.top='-18px';	
		div.appendChild(MInstreamIframe);
	}
	
	
	
	//************************ Drag and Drop code Start *********************************//
	var positionX, positionY;
	const step = 1; // Step size in pixels
	const adTargetHolder = document.getElementById('AdTargetHolder');

	let isDragging = false; // Track whether dragging is active

	// Dragging with mouse or touch
	function startDragging(event) {
	  let shiftX, shiftY;
	  isDragging = true; // Set dragging to active

	  if (event.type === "mousedown") {
		shiftX = event.clientX - adTargetHolder.getBoundingClientRect().left;
		shiftY = event.clientY - adTargetHolder.getBoundingClientRect().top;
		document.addEventListener("mousemove", onMouseMove);    
	  } else if (event.type === "touchstart") {
		shiftX = event.touches[0].clientX - adTargetHolder.getBoundingClientRect().left;
		shiftY = event.touches[0].clientY - adTargetHolder.getBoundingClientRect().top;
		document.addEventListener("touchmove", onTouchMove);
	  }

	  function moveAt(pageX, pageY) {
		adTargetHolder.style.left = pageX - shiftX + "px";
		adTargetHolder.style.top = pageY - shiftY + "px";
	  }

	  function onMouseMove(event) {
		if (isDragging) {
		  moveAt(event.pageX, event.pageY);
		  positionX = event.pageX - shiftX;
		  positionY = event.pageY - shiftY;
		}
	  }

	  function onTouchMove(event) {
		if (isDragging) {
		  moveAt(event.touches[0].pageX, event.touches[0].pageY);
		  positionX = event.touches[0].pageX - shiftX;
		  positionY = event.touches[0].pageY - shiftY;
		}
	  }
	}

	// Mouse and touch start events
	adTargetHolder.addEventListener("mousedown", startDragging);
	adTargetHolder.addEventListener("touchstart", startDragging);

	// Escape key event to stop dragging
	document.addEventListener("keyup", function(event) {
	  if (event.key === "Escape") {
		isDragging = false; // Set dragging to inactive
		document.getElementById('DragDiv').style.visibility="hidden";
		console.log(document.getElementById("DragDiv"));
		console.log('Escape key pressed! Stopping drag.');		
		//document.removeEventListener("mousemove", onMouseMove);
		//document.removeEventListener("touchmove", onTouchMove);
	  }
	  
	});

	// Arrow key handling with Shift key to move element in steps
	document.addEventListener("keydown", (event) => {
	  // Only move if Shift key is pressed
	  if (!event.shiftKey) return;

	  switch (event.key) {
		case "ArrowRight":
		  positionX += step;
		  break;
		case "ArrowLeft":
		  positionX -= step;
		  break;
		case "ArrowDown":
		  positionY += step;
		  break;
		case "ArrowUp":
		  positionY -= step;
		  break;
		default:
		  return; // Exit if any other key is pressed
	  }

	  // Update div position
	  adTargetHolder.style.left = positionX + "px";
	  adTargetHolder.style.top = positionY + "px";
	});

	// Prevent default drag behavior on element
	adTargetHolder.ondragstart = function() {
	  return false;
	};
	
  //*********************Hide web site scroll bar PRS *****************//
    const Mystyle = document.createElement('style');
	Mystyle.innerHTML = `
		/* Hide scrollbar for WebKit browsers (Chrome, Safari) */
		::-webkit-scrollbar {
			width: 0px;
			height: 0px;
		}

		/* Hide scrollbar for Firefox */
		body {
			scrollbar-width: none; /* Firefox */
		}

		/* Hide scrollbar for Internet Explorer and Edge */
		body {
			-ms-overflow-style: none;
		}
	`;
	document.head.appendChild(Mystyle);
  
}












