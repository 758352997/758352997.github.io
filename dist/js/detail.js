"use strict";var data,id1=location.search,ids=id1.split("=")[1],glass=document.querySelector(".glass"),signif=document.querySelector(".signif"),content=document.querySelector(".content");ids?ajax({url:"./php/detail.php",data:"id=".concat(ids),success:function(t){t=JSON.parse(t);var n='\n\n            <div class="glass">\n            <div class="glass-top">\n                <div class="bootn">\n                    <div class="toimg">\n                        <img src="'.concat(t.tp,'" alt="">\n                        <div class="mask"></div>\n                    </div>\n                </div>\n                <div class="glass-bottom">\n                    <ul>\n                        <li><img src="./img/1.png" alt=""></li>\n                        <li><img src="./img/2.png" alt=""></li>\n                        <li><img src="./img/3.png" alt=""></li>\n                        <li><img src="./img/4.png" alt=""></li>\n                        <li><img src="./img/5.png" alt=""></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class="signif">\n            <h2> ').concat(t.bt,'</h2>\n\n\n            <div class="fcs">\n                <span>价格</span>\n                <i>').concat(t.price,"</i>\n                <h3>促销价</h3>\n                <h4>￥").concat(t.origin,'</h4>\n            </div>\n            <div class="freight">\n                <span>运费</span>\n                <p>福建泉州至深圳 快递:0.00</p>\n            </div>\n            <div class="seles">\n                <ul>\n                    <li>月销量 <span>').concat(t.sold,'</span></li>\n                    <li>累计评价 <span>227</span></li>\n                    <li class="lilast">送天猫积分<span>74</span>起</li>\n                </ul>\n            </div>\n            <div class="size">\n                <div class="size-left">\n                    <span>尺码</span>\n                </div>\n                <div class="size-right">\n                    <a href="#">39</a>\n                    <a href="#">40</a>\n                    <a href="#">41</a>\n                    <a href="#">42</a>\n                    <a href="#">43</a>\n                    <a href="#">44</a>\n                </div>\n            </div>\n            <div class="sort">\n                <h3>颜色分类</h3>\n                <span>\n                <img src="http://img.alicdn.com/imgextra/i3/2159486323/O1CN01u2uqWo1wZywsOsDy1_!!2159486323.jpg_40x40q90.jpg" alt="">\n            <img src="http://img.alicdn.com/imgextra/i3/2159486323/O1CN01iPfZEn1wZyws2Aww7_!!2159486323.jpg_40x40q90.jpg" alt="">\n            </span>\n            </div>\n            <div class="nums">\n                <h3>数量</h3>\n                <div class="add">\n                    <input type="text" value="1">\n                    <div class="add-mi">\n                        <span>+</span>\n                        <span>-</span>\n\n                    </div>\n\n                </div>\n                <div class="sotck">\n                    <i>库存 <u>11716</u>件</i>\n                </div>\n            </div>\n\n            <div class="pabayle">\n                <div class="p-top">\n                    <span>花呗分期</span>\n                    <p>登录后确定是否享有该服务 <i>什么是花呗分期</i></p>\n                </div>\n                <div class="p-bottom">\n                    <ul>\n                        <li>\n                            <span>￥50.46起x3期</span></br>\n                            <span>(含手续费)</span>\n                        </li>\n                        <li>\n                            <span>￥25.57起x6期</span></br>\n                            <span>(含手续费)</span>\n                        </li>\n                        <li>\n                            <span>￥13.25起x12期</span></br>\n                            <span>(含手续费)</span>\n                        </li>\n                    </ul>\n                </div>\n\n            </div>\n            <div class="join">\n                <span  class="purch">立即购买</span>\n                <span  class="cat">加入购物车</span>\n            </div>\n        </div>\n        <div class="showimg">\n            <img src="').concat(t.tp,'" alt="">\n        </div>\n');content.innerHTML=n;var e=document.querySelector(".imgs"),i=document.querySelector(".hover1");i.onmouseover=function(){e.style.display="block"},i.onmouseout=function(){e.style.display="none"};var l=document.querySelector(".toimg"),a=document.querySelector(".mask"),c=document.querySelector(".showimg"),o=document.querySelector(".showimg img");l.onmousemove=function(n){var i=(n=n||event).clientX-offset(l).left-a.clientWidth/2,s=n.pageY-offset(l).top-a.clientHeight/2;i<0&&(i=0),i>=l.clientWidth-a.clientWidth&&(i=l.clientWidth-a.clientWidth),s<0&&(s=0),s>=l.clientHeight-a.clientHeight&&(s=l.clientHeight-a.clientHeight),a.style.left=i+"px",a.style.top=s+"px";var t=i/(l.clientWidth-a.clientWidth),e=s/(l.clientHeight-a.clientHeight);o.style.left=-t*(o.clientWidth-c.clientWidth)+"px",o.style.top=-e*(o.clientHeight-c.clientHeight)+"px"},l.onmouseenter=function(){a.style.display="block",c.style.display="block"},l.onmouseleave=function(){a.style.display="none",c.style.display="none"};e=document.querySelectorAll(".glass-bottom img");for(var s=function(t){e[t].onclick=function(){for(var n=0;n<e.length;n++)e[n].className="";e[t].className="img1";var i=document.querySelector(".toimg img"),s=document.querySelector(".showimg img");i.setAttribute("src","./img/"+(t+1)+".png"),s.setAttribute("src","../img/"+(t+1)+".png")}},r=0;r<e.length;r++)s(r);document.querySelector(".join").onclick=function(n){if("cat"===((n=n||window.event).target||n.srcElement).className){var i=localStorage.getItem("shopping");if(i){i=JSON.parse(i);var s=0;i.forEach(function(n){n.id===t.id&&(n.number++,localStorage.setItem("shopping",JSON.stringify(i)),s=1)}),s||(t.number=1,i.push(t),localStorage.setItem("shopping",JSON.stringify(i)))}else t.number=1,localStorage.setItem("shopping",JSON.stringify([t]));alert("添加购物车成功")}};var d=getCookie("login"),p=document.querySelector(".logg");p.innerHTML=d||"亲,请登录"}}):alert("非法进入");