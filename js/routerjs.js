/*!
 * Fake RouterJS
 *
 * Copyright 2020 Laksamadi Guko
 */

var f_url = window.location.href;
var t = '?t=' + new Date().getTime();

	
function hpage(){
	if(f_url.indexOf("?") > -1){
	  	var path_ = f_url.split("?")[1].replace(/\//gi,"-");
	  	return path_;
	}
}



function route(id,page = hpage()){
	// get json page
	fetch('./json/page.json'+t)
	  .then((response) => {
	    return response.json();
	  })
	  .then((data) => {
		if(!data[page] && !page){
			// set root path
			loaddata(id,data["home"]);
		}else if(data[page]){
			// load current page
			loaddata(id,data[page]);
		}else{
			// load 404 page
			loaddata(id,data["404"]);
		}
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	  });
	
}


function loaddata(id,htmlfile){
	html_file = htmlfile+".html";
	fetch(html_file+t)
	  .then((response) => {
	    return response.text();
	  })
	  .then((data) => {
	  	// render to index
	  	document.getElementById(id).innerHTML = data;
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	  });
	
}

