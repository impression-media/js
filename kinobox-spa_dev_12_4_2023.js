/* kinobox-spa.js v 6d_2
Updated : 2023-04-12 */

console.log('IM DEV - start kinobox-spa.js');

window.localStorage.setItem('impression_HbSpaView', 0);

//document.body.setAttribute('data-hbmasterscript', 'hb-1000');


function displayInput(){
   var z = document.querySelector('#kinoboxRelodingDivIds').value;
   console.log('displayInput:'+z);
   kinoboxReloading(z);
}

var previousUrl = '';
var imHbSpaObserver = new MutationObserver(function(mutations) {
  if (location.href !== previousUrl) {
      previousUrl = location.href;
      console.log('URL changed to'+ location.href);

      
      var numHbSpaView = parseInt(window.localStorage.getItem('impression_HbSpaView'), 10);
      document.body.setAttribute('ls-imHbSpaView',(numHbSpaView+1));
      window.localStorage.setItem('impression_HbSpaView', (numHbSpaView+1));
      
      if(numHbSpaView != 0){
        
      }else{
        document.body.setAttribute('data-hbStopFirstCycle', 'STOP');
        document.body.setAttribute('data-r2b2mbstop', 'stop-MbReloadingAds');
//        setTimeout(function(){
            console.log('Fire numHbSpaView:'+numHbSpaView);
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
            imHbMasterScript.src = 'https://hb.impressionmedia.cz/tmp/1580.js';
            document.getElementsByTagName('head')[0].appendChild(imHbMasterScript);
//        }, 300); 
      }
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

        imKinoFixedDiv.appendChild(y);
        imKinoFixedDiv.appendChild(x);

        document.body.appendChild(imKinoFixedDiv);  
    }
});
var imspaKinoboxConfig = {subtree: true, childList: true};
imHbSpaObserver.observe(document, imspaKinoboxConfig);


