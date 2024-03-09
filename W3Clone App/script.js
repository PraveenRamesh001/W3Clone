var a =[0];
            var d =[0];
            var b = 0;
            var index = 0;
            var c = 0;
            var totalvalue = "";
            var e = [0];
            var x = 0;
            setInterval(()=>{
                if(a.length>1){
                    if(window.innerWidth < 660){
                        document.getElementById("cart").style.display='none';
                        document.getElementById("body").style.width = "100%" ;
                        document.getElementById("searchbar").classList.remove("search");
                        x=1;
                }
                else{
                    document.getElementById("cart").style.display='block';
                    document.getElementById("body").style.width = "calc(100% - 200px)" ;
                    document.getElementById("searchbar").classList.add("search");
                    x=0;
                }
                }
                else{
                    document.getElementById("cart").style.display='none';
                }
            },0)
            function divdisplay(){
                total();
                for (let i=0;i<e.length;i++){
                        if( i == 1){
                            document.getElementById("d1").innerHTML = e[i];
                            document.getElementById("d1").style.visibility="visible";
                            document.getElementById("d2").style.visibility="hidden";
                            document.getElementById("d3").style.visibility="hidden";
                            document.getElementById("d4").style.visibility="hidden";
                            document.getElementById("d5").style.visibility="hidden";
                        }
                        if( i == 2){
                            document.getElementById("d2").innerHTML = e[i];
                            document.getElementById("d1").style.visibility="visible";
                            document.getElementById("d2").style.visibility="visible";
                            document.getElementById("d3").style.visibility="hidden";
                            document.getElementById("d4").style.visibility="hidden";
                            document.getElementById("d5").style.visibility="hidden";
                        }
                        if( i == 3){
                            document.getElementById("d3").innerHTML = e[i];
                            document.getElementById("d1").style.visibility="visible";
                            document.getElementById("d2").style.visibility="visible";
                            document.getElementById("d3").style.visibility="visible";
                            document.getElementById("d4").style.visibility="hidden";
                            document.getElementById("d5").style.visibility="hidden";
                        }
                        if( i == 4){
                            document.getElementById("d4").innerHTML = e[i];
                            document.getElementById("d1").style.visibility="visible";
                            document.getElementById("d2").style.visibility="visible";
                            document.getElementById("d3").style.visibility="visible";
                            document.getElementById("d4").style.visibility="visible";
                            document.getElementById("d5").style.visibility="hidden";
                        }
                        if( i == 5){
                            document.getElementById("d5").innerHTML = e[i];
                            document.getElementById("d1").style.visibility="visible";
                            document.getElementById("d2").style.visibility="visible";
                            document.getElementById("d3").style.visibility="visible";
                            document.getElementById("d4").style.visibility="visible";
                            document.getElementById("d5").style.visibility="visible";
                        }
                }
            }
            function total(){
                totalvalue="";
                for (let i=0;i<d.length;i++) {
                    totalvalue = totalvalue + "+" + d[i];
                }
                document.getElementById("total").innerHTML = "Total: "+ eval(totalvalue);
            }
            function add() {
                if(a.length==1){
                    x=1;
                }
                else{ x=0; }
                if(x!=1){
                    document.getElementById("body").style.width = "calc(100% - 200px)" ;
                    document.getElementById("searchbar").classList.add("search");
                    document.getElementById("cart").style.display="block";
                }
                }
            function addhtml(){
                for (let i=0;i<a.length;i++){
                    if(a[i] == 1){b = 0;break;}
                    else{ b = 1; }
                }
                if(b == 1){
                    a.push(1);
                    d.push(500);
                    e.push("HTML: 500");
                }
                divdisplay()
            }
            function addcss(){
                for (let i=0;i<a.length;i++){
                    if(a[i] == 2){b = 0;break}
                    else{ b = 1; }
                }
                if(b == 1){
                    a.push(2);
                    d.push(500);e.push("CSS: 500");
                }
                divdisplay()
                
            }
            function addjavascript(){
                for (let i=0;i<a.length;i++){
                    if(a[i] == 3){b = 0;break}
                    else{ b = 1; }
                }
                if(b == 1){
                    a.push(3);
                    d.push(500);e.push("JavaScript: 500");
                }
                divdisplay()
            }
            function addpython(){
                for (let i=0;i<a.length;i++){
                    if(a[i] == 4){b = 0;break}
                    else{ b = 1; }
                }
                if(b == 1){
                    a.push(4);
                    d.push(500);e.push("Python: 500");
                }
                divdisplay()
            }
            function addsql(){
                for (let i=0;i<a.length;i++){
                    if(a[i] == 5){b = 0;break}
                    else{ b = 1; }
                }
                if(b == 1){
                    a.push(5);
                    d.push(500);e.push("SQL: 500");
                }
                divdisplay()
            }
            function removehtml(){
                for (let i=0;i<a.length;i++){
                    if(a[i] == 1){ 
                        index = i;
                        c = 1;
                        break;
                    }
                    else{
                        c = 0;
                    }
                }
                if(c == 1){
                    a.splice(index,1);
                    d.splice(index,1);
                    e.splice(index,1);
                }
                if(a.length == 1){
                    document.getElementById("body").style.width = "100%" ;
                    document.getElementById("cart").style.display="none";
                    document.getElementById("searchbar").classList.remove("search");
                }
                divdisplay()
            }
            function removecss(){
                for (let i=0;i<a.length;i++){
                    if(a[i] == 2){
                        index = i;
                        c = 1; 
                        break;
                    }
                    else{
                        c = 0;
                    }
                }
                if(c == 1){
                    a.splice(index,1);
                    d.splice(index,1);
                    e.splice(index,1);
                }
                if(a.length == 1){
                    document.getElementById("body").style.width = "100%" ;
                    document.getElementById("cart").style.display="none";
                    document.getElementById("searchbar").classList.remove("search");
                }
                divdisplay()
            }
            function removejavascript(){
                for (let i=0;i<a.length;i++){
                    if(a[i] == 3){ 
                        index = i;
                        c = 1;
                        break;
                    }
                    else{
                        c = 0;
                    }
                }
                if(c == 1){
                    a.splice(index,1);
                    d.splice(index,1);
                    e.splice(index,1);
                }
                if(a.length == 1){
                    document.getElementById("body").style.width = "100%" ;
                    document.getElementById("cart").style.display="none";
                    document.getElementById("searchbar").classList.remove("search");
                }
                divdisplay()
            }
            function removepython(){
                for (let i=0;i<a.length;i++){
                    if(a[i] == 4){
                        index = i;
                        c = 1; 
                        break;
                    }
                    else{
                        c = 0;
                    }
                }
                if(c == 1){
                    a.splice(index,1);
                    d.splice(index,1);
                    e.splice(index,1);
                }
                if(a.length == 1){
                    document.getElementById("body").style.width = "100%" ;
                    document.getElementById("cart").style.display="none";
                    document.getElementById("searchbar").classList.remove("search");
                }
                divdisplay()
            }
            function removesql(){
                for (let i=0;i<a.length;i++){
                    if(a[i] == 5){ 
                        index = i;
                        c = 1;
                        break;
                    }
                    else{
                        c = 0;
                    }
                }
                if(c == 1){
                    a.splice(index,1);
                    d.splice(index,1);
                    e.splice(index,1);
                }
                if(a.length == 1){
                    document.getElementById("body").style.width = "100%" ;
                    document.getElementById("cart").style.display="none";
                    document.getElementById("searchbar").classList.remove("search");
                }
                divdisplay()
            }
            function myfunction1(){
                document.getElementById("tutorials").style.display="block";
                document.getElementById("exercises").style.display="none";
                document.getElementById("getcertified").style.display="none";
                document.getElementById("services").style.display="none";

                document.getElementById("closetutorials").style.display="block";
                document.getElementById("closeexercises").style.display="none";
                document.getElementById("closegetcertified").style.display="none";
                document.getElementById("closeservices").style.display="none";
                document.getElementById("servicesp").style.marginRight="auto";
                document.getElementById("closeservices").style.width="auto";
                document.getElementById("outbox").style.height="100%";
            }
            function myfunction2(){
                document.getElementById("tutorials").style.display="none";
                document.getElementById("exercises").style.display="block";
                document.getElementById("getcertified").style.display="none";
                document.getElementById("services").style.display="none";
                
                document.getElementById("closetutorials").style.display="none";
                document.getElementById("closeexercises").style.display="block";
                document.getElementById("closegetcertified").style.display="none";
                document.getElementById("closeservices").style.display="none";
                document.getElementById("servicesp").style.marginRight="auto";
                document.getElementById("closeservices").style.width="auto";
                document.getElementById("outbox").style.height="100%";
            }
            function myfunction3(){
                document.getElementById("tutorials").style.display="none";
                document.getElementById("exercises").style.display="none";
                document.getElementById("getcertified").style.display="block";
                document.getElementById("services").style.display="none";
                
                document.getElementById("closetutorials").style.display="none";
                document.getElementById("closeexercises").style.display="none";
                document.getElementById("closegetcertified").style.display="block";
                document.getElementById("closeservices").style.display="none";
                document.getElementById("servicesp").style.marginRight="auto";
                document.getElementById("closeservices").style.width="auto";
                document.getElementById("outbox").style.height="100%";
            }
            function myfunction4(){
                document.getElementById("tutorials").style.display="none";
                document.getElementById("exercises").style.display="none";
                document.getElementById("getcertified").style.display="none";
                document.getElementById("services").style.display="block";
                document.getElementById("servicesp").style.marginRight="-80px";
                document.getElementById("closeservices").style.width="80px";
               
                document.getElementById("closetutorials").style.display="none";
                document.getElementById("closeexercises").style.display="none";
                document.getElementById("closegetcertified").style.display="none";
                document.getElementById("closeservices").style.display="block";
                document.getElementById("outbox").style.height="100%";
            }
            function closefunction(){
                document.getElementById("tutorials").style.display="none";
                document.getElementById("exercises").style.display="none";
                document.getElementById("getcertified").style.display="none";
                document.getElementById("services").style.display="none";
                document.getElementById("servicesp").style.marginRight="auto";
                document.getElementById("closeservices").style.width="auto";

                document.getElementById("closetutorials").style.display="none";
                document.getElementById("closeexercises").style.display="none";
                document.getElementById("closegetcertified").style.display="none";
                document.getElementById("closeservices").style.display="none";
                document.getElementById("outbox").style.height="80px";
            }