# routerjs
Simple routing html page using javascript

[Demo](https://laksa19.github.io/routerjs)

```html
<div id="container"></div>
```

```javascript
var f_url = window.location.href;
var t = '?t=' + new Date().getTime();

var page = {
      "home":"./page/home",
      "about":"./page/about",
      "user-user1":"./page/user1",
      "404":"./page/404",

      "laksa19":"https://laksa19.github.io"
      };

function gpath(){
  if(f_url.indexOf("?") > -1){
      var path_ = f_url.split("?")[1].replace(/\//gi,"-");
      return path_;
  }
}



function route(id,lpage = gpath()){

    if(!page[lpage] && !lpage){
      // set root path
      loaddata(id,page["home"]);
    }else if(page[lpage]){
      // load current page
      loaddata(id,page[lpage]);
    }else{
      // load 404 page
      loaddata(id,page["404"]);
    }

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

// routing
route("container");
```
