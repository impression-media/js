/* kinobox-spa.js v 6d_2
Updated : 2023-10-18 */

console.log('IM DEV - start radia-spa.js');

window.localStorage.setItem('impression_HbSpaView', 0);
//var firstHbSpaView = window.localStorage.getItem('impression_HbSpaView') !== null;
//if (firstHbSpaView) {
////OK
//}else{
//    window.localStorage.setItem('impression_HbSpaView', 0);
//}

//document.body.setAttribute('data-hbmasterscript', 'hb-1000');

function imHbSpecialSettingOfRoleadingByDivIds(co){
    //console.log('Fire imHbSpecialSettingOfRoleadingByDivIds');
    //console.log('per imHbSpecialSettingOfRoleadingByDivIds:: Start::: AdTrack.PrebidAdapter.refresh(true, 0)');
   //AdTrack.PrebidAdapter.refresh(true, 0);
    //console.log('per imHbSpecialSettingOfRoleadingByDivIds:: End::: AdTrack.PrebidAdapter.refresh(true, 0)');
//    var selection = document.body.getAttribute('data-posRel') !== null;
//    if (selection) {
//        document.body.setAttribute('data-posRel', 'display only by fc kinoboxReloading: '+co)
//    }
    console.log('Fire imHbSpecialSettingOfRoleadingByDivIds: co::'+co);
    if(co.includes('adform_leaderboard')){    
        document.querySelector('#adform_leaderboard').classList.remove("nor2b2branding");
        if (document.querySelector('body').classList.contains('imHbBranding')) {
           document.querySelector('body').classList.remove("imHbBranding");
        }
        document.querySelector('#adform_leaderboard').style.opacity = "0";
        setTimeout(function(){
            document.querySelector('#adform_leaderboard').style.opacity = "1";
        }, 1500); 
    }  
}

function roleadingByDivIds(z){
    if (typeof kinoboxReloading !== 'undefined' && typeof kinoboxReloading === 'function') {
        //console.log('OK HB master script is ready');
        kinoboxReloading(z);
    }else{
        setTimeout(function(){
            //console.log('fc roleadingByDivIds waiting to master script');
            roleadingByDivIds(z);
        }, 50); 
    } 
}

function displayInput(){
   var z = document.querySelector('#kinoboxRelodingDivIds').value;
   //console.log('displayInput:'+z);
   kinoboxReloading(z);
}

var previousUrl = '';
var imHbSpaObserver = new MutationObserver(function(mutations) {
    //console.log('location.href vs previousUrl'+ location.href + ' vs ' + previousUrl);
  if (location.href !== previousUrl) {
      previousUrl = location.href;
      //console.log('URL changed to'+ location.href);

      var selection = document.body.getAttribute('interScrollerSource') !== null;
      if(selection){
          //document.body.setAttribute('interScrollerSource').remove();
          document.body.removeAttribute('interScrollerSource');
      }
      
      var numHbSpaView = parseInt(window.localStorage.getItem('impression_HbSpaView'), 10);
      document.body.setAttribute('ls-imHbSpaView',(numHbSpaView+1));
      window.localStorage.setItem('impression_HbSpaView', (numHbSpaView+1));
      
      if(numHbSpaView != 0){
        //console.log('Fire numHbSpaView:'+numHbSpaView);
        //var stopForFirst = document.body.setAttribute('data-hbStopFirstCycle') !== null;
        //if (stopForFirst) {
        //    document.body.setAttribute('data-hbStopFirstCycle').remove();
        //}
        

//        var urlTest = new URL(document.location);
//
//        urlTest.searchParams.append('pbjs_debug', true);
//        document.location = urlTest;
        
      }else{
        //document.body.setAttribute('data-hbStopFirstCycle', 'STOP');
        //document.body.setAttribute('data-r2b2mbstop', 'stop-MbReloadingAds'); //stop MB in first cycle
        //console.log('Fire numHbSpaView:'+numHbSpaView);
        //console.log('SPA new adx.js - spaImHbAdxScript');
        var spaElScriptAdformtag = document.createElement('script');
        spaElScriptAdformtag.async = !0, spaElScriptAdformtag.type = 'text/javascript', spaElScriptAdformtag.dataset.source = 'spacpxcp';
        var protocolSpaElScriptAdformtag = 'https:' === document.location.protocol;
        spaElScriptAdformtag.id = 'spaImHbAdxScript';
        spaElScriptAdformtag.src = (protocolSpaElScriptAdformtag ? 'https:' : 'http:') + '//s1.adform.net/banners/scripts/adx.js';
        document.getElementsByTagName('head')[0].appendChild(spaElScriptAdformtag);
        spaElScriptAdformtag.onload = function() {
          //console.log('adformtag^^');
          //console.log(adformtag);
//        setTimeout(function(){
//            console.log('Fire CID:'+numHbSpaView);
//            document.body.setAttribute('data-hbmasterscript', 'hb-100000');
//            var imHbSpaKinoRelhbmasterscript = 'hb-0';
//            var reloadingDivIds = ['adform_leaderboard','adformDesktopStrip','adformMobilniBranding'];
//            for (imrdi = 0; imrdi < reloadingDivIds.length; imrdi++) {
//                var selectionSpaButtonGalerieKino = document.querySelector('#'+reloadingDivIds[imrdi]) !== null;
//                if (selectionSpaButtonGalerieKino) {
//                    document.querySelector('#'+reloadingDivIds[imrdi]).classList.add(imHbSpaKinoRelhbmasterscript)
//                }
//            }


            var imHbMasterScript = document.createElement('script');
            imHbMasterScript.type = 'text/javascript';
            imHbMasterScript.id = 'imHbMaster';
            imHbMasterScript.src = 'https://cdn.jsdelivr.net/gh/HB-5-CDN/js/1806.js';
            document.getElementsByTagName('head')[0].appendChild(imHbMasterScript);   
//        }, 3000); 
        } 
        
      }
      
        if(window.location.search.toString().includes('imHbKinoboxInputBox')){
            console.log('fire devInputBox');
            var hbDevDiv = document.querySelector('#hbDevDiv') !== null;
            if (hbDevDiv) {
                document.querySelector('#hbDevDiv').remove();
            }
            var imKinoFixedDiv = document.createElement('div');
            imKinoFixedDiv.setAttribute('id','hbDevDiv');
            imKinoFixedDiv.setAttribute('style','position:fixed; padding:10px 20px; bottom:1px; right: 1px; background:#0000004f; z-index: 100000000; border: 2px solid grey');

            var x = document.createElement('BUTTON');
            x.setAttribute('style','cursor:pointer;');
            var t = document.createTextNode('zobrazit');
            x.appendChild(t);
            x.setAttribute('onclick','displayInput();');

            var y = document.createElement('input');
            y.setAttribute('placeholder','vlozte DIV IDs oddelene carkou bez mezer');
            y.setAttribute('style','min-width:300px; font-size:12px');
            y.setAttribute('id','kinoboxRelodingDivIds');
            y.setAttribute('value','adform_leaderboard');

            imKinoFixedDiv.appendChild(y);
            imKinoFixedDiv.appendChild(x);

            document.body.appendChild(imKinoFixedDiv);
        }
    }
});
var imspaKinoboxConfig = {subtree: true, childList: true};
imHbSpaObserver.observe(document, imspaKinoboxConfig);

