var mobileDevice=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);var popupXPosition="right";var popupYPosition="top";var MobilePopupXPosition="center";var MobilePopupYPosition="top";var link='https://jaxofuna.com/?s='+affiliateId;if(mobileDevice)
{if(MobilePopupXPosition=='center'){popupX=`${MobilePopupYPosition}:5px;opacity:1;`;popupProperties='position: fixed;left:50%;margin-left: -150px;';}else if(MobilePopupXPosition=='right'){popupX=`${MobilePopupYPosition}:5px;opacity:1;`;popupProperties='position: fixed;right: 1%;margin-left:-150px;';}else if(MobilePopupXPosition=='left'){popupX=`${MobilePopupYPosition}:5px;opacity:1;`;popupProperties='position: fixed;'}
popupYPosition=MobilePopupYPosition;}else
{if(popupXPosition=='center'){popupX=`${popupYPosition}:5px;opacity:1;`;popupProperties='position: fixed;left:50%;margin-left: -150px;';}else if(popupXPosition=='right'){popupX=`${popupYPosition}:5px;opacity:1;`;popupProperties='position: fixed;right: 1%;margin-left:-150px;';}else if(popupXPosition=='left'){popupX=`${popupYPosition}:5px;opacity:1;`;popupProperties='position: fixed;';}};var interDiv=document.createElement('div');interDiv.id='innerdiv';var popup="  <div class='popup' <img src='../img/test-3.png' height='40px' style='margin-top:1.3%;margin-left: 5%;'>  </div> ";var popupDiv=document.createElement('div');popupDiv.id='popup';var popupText=document.createElement('p');popupText.id='popuptext';var popupTextArray=['Come play with me &#128166;',' Make me yours &#127825','Come play with me &#127814;','Make me yours &#128166;'];var randomText=popupTextArray[Math.floor(Math.random()*popupTextArray.length)];popupText.innerHTML=randomText;function closePopup()
{popupDiv.remove();}
function redirUser()
{url=link;window.open(url);}
var styleWithDelay=document.createElement('style');var popupCloseTag=document.createElement('p');popupCloseTag.id='popupCloseTag';popupCloseTag.innerHTML='x';var style=document.createElement('style');var styleWithDelay=document.createElement('style');styleWithDelay.innerHTML=`#popup{${popupX};}`;if(mobileDevice)
{style.innerHTML=`#popup{background-color:white;width:300px;height:50px;${popupProperties};oppacity:0;${MobilePopupXPosition}:-100px;border-radius:3px;box-shadow:0px 10px 50px rgba(0,0,0,.6);transition:all 1s;z-index:10;}`;document.head.appendChild(style);}
style.innerHTML=`#popup{cursor:pointer;background-color:white;width:300px;height:50px;${popupProperties};oppacity:0;${popupYPosition}:-100px;border-radius:3px;box-shadow:0px 10px 50px rgba(0,0,0,.6);transition:all 1s;z-index:7;}.popimg{margin-top:1.3%;margin-left:5%;height:40px;}#popuptext{color:black;margin-left:5%;margin-top:-11%;font-weight:bold;font-size:17px;font-family:roboto;display:block;margin-left:25%;}#popupCloseTag{margin-top:-19%;font-family:cursive;font-weight:bold;font-size:14px;margin-left:94%;}`;document.body.appendChild(popupDiv);document.head.appendChild(style);popdiv=document.getElementById('popup');elem=document.createElement('img');elem.classList.add('popimg');var imgArray=['/img/1_eva.png','/img/2_melena.png','/img/3_agatha.png','/img/4_ellie.png','/img/5_eva.png','/img/6_estonika.png','/img/7_jia.png','/img/8_liya.png','/img/9_stacy.png','/img/10_viola.png','/img/11_kate.png','/img/12_jia_liya.png',];var randomImg=imgArray[Math.floor(Math.random()*imgArray.length)];if(randomImg.indexOf('1_eva')!==-1)
{link+='&g=f0615';}else if(randomImg.indexOf('2_melena')!==-1)
{link+='&g=f0565';}else if(randomImg.indexOf('3_agatha')!==-1)
{link+='&g=f0640';}else if(randomImg.indexOf('4_ellie.png')!==-1)
{link+='&g=f0591';}else if(randomImg.indexOf('5_eva.png')!==-1)
{link+='&g=f0613';}else if(randomImg.indexOf('7_jia.png')!==-1)
{link+='&g=f0608';}else if(randomImg.indexOf('6_estonika.png')!==-1)
{link+='&g=e0524';}else if(randomImg.indexOf('8_liya.png')!==-1)
{link+='&g=f0602';}else if(randomImg.indexOf('9_stacy.png')!==-1)
{link+='&g=e1370';}else if(randomImg.indexOf('10_viola.png')!==-1)
{link+='&g=f0043';}else if(randomImg.indexOf('11_kate.png')!==-1)
{link+='&g=f0437';}else if(randomImg.indexOf('12_jia_liya.png')!==-1)
{link+='&g=f0605';}
elem.src=randomImg;popupDiv.appendChild(interDiv);interDiv.appendChild(elem);interDiv.appendChild(popupText);popupCloseTag.onclick=closePopup;popupDiv.appendChild(popupCloseTag);setTimeout(function(){document.head.appendChild(styleWithDelay);},500);interDiv.onclick=redirUser;