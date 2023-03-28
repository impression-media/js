/* kinobox-spa.js v 6b_1
Updated : 2020-11-26 */

console.log('IM DEV - start kinobox-spa.js');

window.localStorage.setItem('impression_HbSpaView', 0);
//document.body.setAttribute('data-hbmasterscript', 'hb-0');


//    var selectionAtribute = document.body.getAttribute('data-hbmasterscript') !== null;
//    if (selectionAtribute) {
//        document.body.removeAttribute('data-hbmasterscript');
//    }

//var imHbMasterScript = document.createElement('script');
//imHbMasterScript.type = 'text/javascript';
//imHbMasterScript.id = 'imHbMaster';
//imHbMasterScript.src = 'https://hb.impressionmedia.cz/tmp/1529.js';
//document.getElementsByTagName('body')[0].appendChild(imHbMasterScript);

function launchSpaKinoboxImHb() { 
    document.querySelector('body').classList.remove('imHbBranding');
    var imHbConfigToBodyClass = parseInt(window.localStorage.getItem('impression_HbSpaView'), 10);
    document.body.classList.add('imHbC'+imHbConfigToBodyClass);
    console.log('s fc launchSpaKinoboxImHb');
    // 1556372741, _seconds_ since Jan 1, 1970. This is the Unix timestamp
    var imHbSpaViewTime = Math.floor(Date.now() / 1000);
    window.localStorage.setItem('impression_HbSpaViewTime', imHbSpaViewTime);
    console.log(window.localStorage);
    var imHbReloadingRandomParam = Math.floor(Math.random() * 10000) + 1;
    var srcImHbConfig = '';
    var selection = document.getElementById('imHbConfig') !== null; 
    if (selection) {
        var imHbConfig = document.getElementById('imHbConfig');
        srcImHbConfig = imHbConfig.src;
        imHbConfig.remove();  
    }
    var srcImHbMaster = '';
    var selection = document.getElementById('imHbMaster') !== null; 
    if (selection) {
        var imHbMaster = document.getElementById('imHbMaster');
        srcImHbMaster = imHbMaster.src;
        imHbMaster.remove();   
    }

    var selection = document.body.getAttribute('data-hbmasterscript') !== null; 
    if (selection) {
        var hbmasterscript = document.body.getAttribute('data-hbmasterscript'); 
        var hbMasterDigit = parseInt(hbmasterscript.replace('hb-', ''),10); 
        hbMasterDigit = (hbMasterDigit+1); 
        document.body.setAttribute('data-hbmasterscript', 'hb-'+hbMasterDigit); 
    }else{ 
        console.log('imHbReloading() >> first cycle >> fetch_reloadingAds');
        //document.body.setAttribute('data-hbmasterscript', 'hb-1');
        //setTimeout(function(){
        //    document.body.setAttribute('data-hbmasterscript', 'hb-0');  
        //}, 10000);
    }
    
    document.body.setAttribute("data-mobilniBranding-reloadingAds", "ready");

    console.log('append imHbMaster');
    var imHbMasterScript = document.createElement('script');
    imHbMasterScript.type = 'text/javascript';
    imHbMasterScript.id = 'imHbMaster';
    imHbMasterScript.src = 'https://hb.impressionmedia.cz/tmp/1529.js';
    //document.getElementsByTagName('head')[0].appendChild(imHbMasterScript);
    document.querySelector("body").appendChild(imHbMasterScript);
    
//    setTimeout(function(){
//        console.log('fire 1000 append imHbMaster');
//        var hb = document.body.getAttribute('data-hbmasterscript');
//        var imHbMasterScript = document.createElement('script');
//        imHbMasterScript.type = 'text/javascript';
//        imHbMasterScript.id = 'imHbMaster';
//        imHbMasterScript.src = 'https://hb.impressionmedia.cz/tmp/1529.js';
////        if(srcImHbMaster.includes('?')){
////            imHbMasterScript.src = srcImHbMaster+'&imHbReloading-'+hb+'='+imHbReloadingRandomParam;
////        }else{
////            imHbMasterScript.src = srcImHbMaster+'?imHbReloading-'+hb+'='+imHbReloadingRandomParam;          
////        }
//        //document.getElementsByTagName('head')[0].appendChild(imHbMasterScript);
//        document.querySelector("body").appendChild(imHbMasterScript);
//    }, 1000);

//    setTimeout(function(){
//        var hb = document.body.getAttribute('data-hbmasterscript');
//        var imHbScript = document.createElement('script');
//        imHbScript.type = 'text/javascript';
//        imHbScript.id = 'imHbConfig';
//        imHbScript.src = srcImHbConfig+'&imHbReloading-'+hb+'='+imHbReloadingRandomParam;
//        //document.getElementsByTagName('head')[0].appendChild(imHbScript);
//        //document.querySelector("body").appendChild(imHbScript);
//    }, 4000);

}


function launchSpaKinoboxMbReloadingImHb() { 
    console.log('s fc launchSpaKinoboxImHb');
    
//    var srcImHbR2B2 = '';
//    var selection = document.getElementById('imHbR2b2script') !== null; 
//    if (selection) {
//        var imHbR2b2scriptRemove = document.getElementById('imHbR2b2script');
//        srcImHbR2B2 = imHbR2b2scriptRemove.src;
//        imHbR2b2scriptRemove.remove();   
//    }
//    console.log('append imHbR2b2script');
//    var imHbR2b2script = document.createElement('script');
//    imHbR2b2script.type = 'text/javascript';
//    imHbR2b2script.id = 'imHbR2b2script';
//    imHbR2b2script.src = 'https://delivery.r2b2.cz/hb/im/kinobox.cz';
//    document.getElementsByTagName('head')[0].appendChild(imHbR2b2script);
    
    var selectionHbmasterscript = document.body.getAttribute("data-r2b2mbstop") !== null;
    if (selectionHbmasterscript) {
        var spaR2B2mbstop = document.body.getAttribute("data-r2b2mbstop");
        if(spaR2B2mbstop == 'stop-MbReloadingAds'){
           //document.querySelector("#bottomBoxWraperADF100p").remove(); 
           
           document.querySelector("#bottomBoxWraperADF100p").style.display = 'none';
        }
    }
        
    // 1556372741, _seconds_ since Jan 1, 1970. This is the Unix timestamp
    var imHbSpaViewTime = Math.floor(Date.now() / 1000);
    window.localStorage.setItem('impression_HbSpaViewTime', imHbSpaViewTime);
    console.log(window.localStorage);
    var imHbReloadingRandomParam = Math.floor(Math.random() * 10000) + 1;
    var srcImHbConfig = '';
    var selection = document.getElementById('imHbConfig') !== null; 
    if (selection) {
        var imHbConfig = document.getElementById('imHbConfig');
        srcImHbConfig = imHbConfig.src;
        imHbConfig.remove();  
    }
    var srcImHbMaster = '';
    var selection = document.getElementById('imHbMaster') !== null; 
    if (selection) {
        var imHbMaster = document.getElementById('imHbMaster');
        srcImHbMaster = imHbMaster.src;
        imHbMaster.remove();   
    }


    var selection = document.getElementById('imHbReloadingFunction') !== null; 
    if (selection) {
        var imHbReloadingFunction = document.getElementById('imHbReloadingFunction');
        imHbReloadingFunction.remove();   
    }

    var selection = document.body.getAttribute('data-hbmasterscript') !== null; 
    if (selection) {
        //document.body.removeAttribute("data-hbmasterscript");
        var hbmasterscript = document.body.getAttribute('data-hbmasterscript'); 
        var hbMasterDigit = parseInt(hbmasterscript.replace('hb-', ''),10); 
        hbMasterDigit = (hbMasterDigit+1); 
        document.body.setAttribute('data-hbmasterscript', 'hb-'+hbMasterDigit);
    }else{ 
        var hbMasterDigit = 'hb-0';
        console.log('imHbReloading() >> first cycle >> fetch_reloadingAds');
        //document.body.setAttribute('data-hbmasterscript', 'hb-1');
    }
    
    document.body.setAttribute("data-mobilniBranding-reloadingAds", "ready");

    console.log('append imHbMaster');
    var imHbMasterScript = document.createElement('script');
    imHbMasterScript.type = 'text/javascript';
    imHbMasterScript.id = 'imHbMaster';
    imHbMasterScript.src = 'https://hb.impressionmedia.cz/tmp/1530.js?'+'imHbReloading-'+hbMasterDigit+'='+imHbReloadingRandomParam;
    //imHbMasterScript.src = 'https://hb.impressionmedia.cz/tmp/1530.js';
    //document.getElementsByTagName('head')[0].appendChild(imHbMasterScript);
    document.querySelector("body").appendChild(imHbMasterScript);


//    setTimeout(function(){ 
//        console.log('append imHbMaster');
//        var imHbMasterScript = document.createElement('script');
//        imHbMasterScript.type = 'text/javascript';
//        imHbMasterScript.id = 'imHbMaster';
//        imHbMasterScript.src = 'https://hb.impressionmedia.cz/tmp/1530.js?'+'imHbReloading-'+hbMasterDigit+'='+imHbReloadingRandomParam;
//        //imHbMasterScript.src = 'https://hb.impressionmedia.cz/tmp/1530.js';
//        //document.getElementsByTagName('head')[0].appendChild(imHbMasterScript);
//        document.querySelector("body").appendChild(imHbMasterScript);
//    }, 1500)
}


// 1556372741, _seconds_ since Jan 1, 1970. This is the Unix timestamp
var imHbSpaViewTime = Math.floor(Date.now() / 1000);
window.localStorage.setItem('impression_HbSpaViewTime', imHbSpaViewTime);

var spaGamWaiting = 300;
var previousUrl = '';
var imHbSpaObserver = new MutationObserver(function(mutations) {
  if (location.href !== previousUrl) {
      previousUrl = location.href;
      console.log('URL changed to'+ location.href);
      var selectionHbmasterscript = document.body.getAttribute("data-hbmasterscript") !== null;
      if (selectionHbmasterscript) {
          document.body.removeAttribute("data-hbmasterscript");
      }
      setTimeout(function(){ 
      console.log('s fc stImHb: '+window.localStorage.getItem('impression_HbSpaView'));
          var numHbSpaView = parseInt(window.localStorage.getItem('impression_HbSpaView'), 10);
          document.body.setAttribute('ls-imHbSpaView',(numHbSpaView+1));
          window.localStorage.setItem('impression_HbSpaView', (numHbSpaView+1));
          if(numHbSpaView != 0){
              console.log('numHbSpaView != 0 imHbSpaObserver >> numHbSpaView: '+numHbSpaView);
              console.log('repete imHbSpaObserver');
              //uklid po r2b2 u spa
                var selectionSpaR2B2Kino = document.querySelector('[data-adtrack-id^=\"mobile_\"]') !== null;
                if (selectionSpaR2B2Kino) {
                    console.log('new cycle - removed DIV with attr data-adtrack-id \"mobile_\"');
                    document.querySelector('[data-adtrack-id^=\"mobile_\"]').remove();
                }
                //uklid r2b2 u spa  
                var selectionSpar2b2mbstop = document.body.getAttribute("data-r2b2mbstop") !== null;
                if (selectionSpar2b2mbstop) {
                    document.body.removeAttribute("data-r2b2mbstop");  
                }
                //uklid capping u spa  
                var selectionSpacloseMbCappingPageBrowsing = document.body.getAttribute("data-mobilniBranding-closeMbCappingPageBrowsing") !== null;
                if (selectionSpacloseMbCappingPageBrowsing) {
                    document.body.removeAttribute("data-mobilniBranding-closeMbCappingPageBrowsing");
                }
                //uklid zavrit strip u SPA
                var selectionSpacloseStripCappingPageBrowsing = document.body.getAttribute("data-desktopstrip-reloadingads") !== null;
                if (selectionSpacloseStripCappingPageBrowsing) {
                    document.body.removeAttribute("data-desktopstrip-reloadingads");
                }
                eraseCookie("imCappingMB");
                eraseCookie("imAllowReloadingAdsInMbCapping");
                //imGalerieCount = 0;
                launchSpaKinoboxImHb();
          }else{
            console.log('first imHbSpaObserver >> numHbSpaView: '+numHbSpaView);
                launchSpaKinoboxImHb();
//            window.localStorage.setItem('impression_HbSpaView', 0);
//            document.body.setAttribute('data-hbmasterscript', 'hb-1');
//
//            var imHbMasterScript = document.createElement('script');
//            imHbMasterScript.type = 'text/javascript';
//            imHbMasterScript.id = 'imHbMaster';
//            imHbMasterScript.src = 'https://hb.impressionmedia.cz/tmp/1529.js';
//            document.getElementsByTagName('body')[0].appendChild(imHbMasterScript);
          }
      }, spaGamWaiting); //ceka na DIV ID z GAMu
    }
});
var imspaKinoboxConfig = {subtree: true, childList: true};
imHbSpaObserver.observe(document, imspaKinoboxConfig);


setInterval(imHbSpaKinoboxReloading, 5000);

function imHbSpaKinoboxReloading() {
    var imHbSpaViewTime = window.localStorage.getItem('impression_HbSpaViewTime')
    console.log('imHbSpaViewTime'+imHbSpaViewTime);
    var imHbTime = Math.floor(Date.now() / 1000);
    console.log('imHbTime'+imHbTime);
    var imHbNextFire = (parseInt(imHbSpaViewTime, 10) + 40);
    console.log('imHbNextFire'+imHbNextFire);    
    if(imHbNextFire < imHbTime){
        console.log('fire spaImHb()');
        //imGalerieCount = 0;
//        document.body.setAttribute('data-hbmasterscript', 'hb-0');
//        var imHbSpaKinoRelhbmasterscript = 'hb-1';
//        var reloadingDivIds = ['adformDesktopStrip','adformMobilniBranding'];
//        for (imrdi = 0; imrdi < reloadingDivIds.length; imrdi++) {
//            var selectionSpaButtonGalerieKino = document.querySelector('#'+reloadingDivIds[imrdi]) !== null;
//            if (selectionSpaButtonGalerieKino) {
//                document.querySelector('#'+reloadingDivIds[imrdi]).classList.add(imHbSpaKinoRelhbmasterscript)
//            }
//        }
        
        launchSpaKinoboxMbReloadingImHb();
        setTimeout(function(){
            console.log('reloading imHbSpaObserver');
        }, 100);  
    }
}

//var imGalerieCount = 0;
//var selectionSpaImgGalerieKino = document.querySelector('img') !== null;
//if (selectionSpaImgGalerieKino) {
//    console.log('imges is enable');
//    setTimeout(function(){
//        console.log('time 500 check how much images is checking');
//        var imPotencialGaleryImages = document.querySelectorAll('img');
//        for (imim1 = 0; imim1 < imPotencialGaleryImages.length; imim1++) {
//            imPotencialGaleryImages[imim1].addEventListener("click", function() {
//                console.log('fire imPotencialGaleryImages');
//                setTimeout(function(){
//                    console.log('time 500 check gallery is enable');
//                    var selectionSpaButtonGalerieKino = document.querySelector('.Button_container__36BKU') !== null;
//                    if (selectionSpaButtonGalerieKino) {
//                        console.log('OK gallery is enable');
//                        kinoboxReloading('adform_halfpage4');
////                        var imGaleryButtons = document.querySelectorAll('.Button_container__36BKU');
////                        for (imbutt = 0; imbutt < imPotencialGaleryImages.length; imbutt++) {
////                            imGaleryButtons[imbutt].addEventListener("click", function() {
////                                console.log('fire plus galeryButtons');
////                                imGalerieCount++;
////                                console.log('imGalerieCount: '+imGalerieCount);
////                                var imModGalery = imGalerieCount % 3;
////                                console.log('imModGalery: '+imModGalery);
////                                if(imModGalery === 0){
////                                    console.log('reloading adform_halfpage4');
////                                    kinoboxReloading('1581952');
////                                }
////                            });
////                        }
//                        
//                    }
//                }, 500)
//            });
//        }
//    }, 500)
//}


//problem s bliknutim u dark verze :: zadani: Branding – probliknutí bileho pozadi u tmave verze
var spaPcDarkBlickBrandigTarget = 'adform_leaderboard';
var defaultDataAdTheme = document.documentElement.getAttribute("data-ad-theme") !== null;
if (defaultDataAdTheme) {
    defaultDataAdTheme = document.documentElement.getAttribute("data-ad-theme");
    console.log('default documentElement : defaultDataAdTheme:: '+defaultDataAdTheme);
    if(defaultDataAdTheme === 'dark'){
        console.log('Fire dark data-ad-theme');
        var selection = document.querySelector('#'+spaPcDarkBlickBrandigTarget) !== null;
        if(selection){
            document.querySelector('#'+spaPcDarkBlickBrandigTarget).style.opacity=0;
            var targetNodeCheckDarkTheme = document.querySelector('#'+spaPcDarkBlickBrandigTarget);
            var configCheckDarkTheme = { attributes: false, childList: true, subtree: false };
            var callbackCheckDarkTheme = (mutationList, observerCheckDarkTheme) => {
              for (const mutation of mutationList) {
                  console.log('spa callbackCheckDarkTheme :: mutation.type: '+mutation.type);
                if (mutation.type === "childList") {
                    var selection = document.querySelector('#'+spaPcDarkBlickBrandigTarget+' iframe[id^=\"adf_\"]') !== null;
                    if(selection){
                        console.log('spa OK adf_: '+mutation.type);
                        var x = document.querySelector('#'+spaPcDarkBlickBrandigTarget+' iframe[id^=\"adf_\"]');
                        x.style.backgroundColor = "#131314";
                        x.setAttribute('allowtransparency', "true");
                        x.contentDocument.body.setAttribute('style','background-color: rgba(0,0,0,0.5);');
                        setTimeout(function(){
                            document.querySelector('#'+spaPcDarkBlickBrandigTarget).style.transition='opacity 3s';
                            document.querySelector('#'+spaPcDarkBlickBrandigTarget).style.opacity=1; 
                        }, 500);
                        observerCheckDarkTheme.disconnect();
                    }else{
                        console.log('spa no adf_: '+mutation.type);
                    }
                }
              }
            };
            var observerCheckDarkTheme = new MutationObserver(callbackCheckDarkTheme);
            observerCheckDarkTheme.observe(targetNodeCheckDarkTheme, configCheckDarkTheme);
        }
    } 
}



//kontrola zmeny dark/light verze:: nepouzito
var observerTheme = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === "attributes") {
      console.log("attributes changed");

      // Example of accessing the element for which 
      // event was triggered
      //mutation.target.textContent = "Attribute of the element changed";
      var dataAdTheme = document.documentElement.getAttribute("data-ad-theme");
      console.log('observerTheme documentElement: '+dataAdTheme);
      
      if(dataAdTheme === 'dark'){
          console.log('Fire dark data-ad-theme');
      } 
    }
    //console.log(mutation.target);
  });
});
observerTheme.observe(document.documentElement, {
  attributes: true //configure it to listen to attribute changes
});
