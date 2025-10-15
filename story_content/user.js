window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script2 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script3 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script4 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script5 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script6 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script7 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script8 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script9 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script10 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script11 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script12 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script13 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script14 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script15 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script16 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script17 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script18 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script19 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script20 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script21 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script22 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script23 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script24 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script25 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script26 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script27 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script28 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script29 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script30 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script31 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script32 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script33 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script34 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script35 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script36 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script37 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script38 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script39 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script40 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script41 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script42 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script43 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script44 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script45 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script46 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script47 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script48 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script49 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script50 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script51 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script52 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script53 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script54 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script55 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script56 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script57 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script58 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script59 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script60 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script61 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script62 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script63 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script64 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script65 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script66 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script67 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script68 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script69 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script70 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script71 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script72 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script73 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script74 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script75 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script76 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script77 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script78 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script79 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script80 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script81 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script82 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script83 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script84 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script85 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script86 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script87 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script88 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script89 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script90 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script91 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script92 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script93 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script94 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script95 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script96 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script97 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script98 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script99 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script100 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script101 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script102 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script103 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script104 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script105 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script106 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script107 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script108 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script109 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script110 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script111 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script112 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script113 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script114 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script115 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script116 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script117 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script118 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script119 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script120 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script121 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script122 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script123 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script124 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script125 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script126 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script127 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script128 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script129 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script130 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script131 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script132 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script133 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script134 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script135 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script136 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script137 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script138 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script139 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script140 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script141 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script142 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script143 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script144 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script145 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script146 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script147 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script148 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script149 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script150 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script151 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script152 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script153 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script154 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script155 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script156 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script157 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script158 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script159 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script160 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script161 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script162 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script163 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script164 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script165 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script166 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script167 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script168 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script169 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script170 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script171 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script172 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script173 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script174 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script175 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script176 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script177 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script178 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script179 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script180 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script181 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script182 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script183 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script184 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script185 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script186 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script187 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script188 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script189 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script190 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script191 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script192 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script193 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script194 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script195 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script196 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script197 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script198 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script199 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script200 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script201 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script202 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script203 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script204 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script205 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script206 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script207 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script208 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script209 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script210 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script211 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script212 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script213 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script214 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script215 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script216 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script217 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script218 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script219 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script220 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script221 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script222 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script223 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script224 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script225 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script226 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script227 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script228 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script229 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script230 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script231 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script232 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script233 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script234 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script235 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script236 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script237 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script238 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script239 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script240 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script241 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script242 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script243 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script244 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script245 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script246 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script247 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script248 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script249 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script250 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script251 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script252 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script253 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script254 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script255 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script256 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script257 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script258 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script259 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script260 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script261 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script262 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script263 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script264 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script265 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script266 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script267 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script268 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script269 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script270 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script271 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script272 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script273 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script274 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script275 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script276 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script277 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script278 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script279 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script280 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script281 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script282 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script283 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script284 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script285 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script286 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script287 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script288 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script289 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script290 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script291 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script292 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script293 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script294 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script295 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script296 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script297 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script298 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script299 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script300 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script301 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script302 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script303 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script304 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script305 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script306 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script307 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script308 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script309 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script310 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script311 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script312 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script313 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script314 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script315 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script316 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script317 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script318 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script319 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script320 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script321 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script322 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script323 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script324 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script325 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script326 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script327 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script328 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script329 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script330 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script331 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script332 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script333 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script334 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script335 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script336 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script337 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script338 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script339 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script340 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script341 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script342 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script343 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script344 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script345 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script346 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script347 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script348 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script349 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script350 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script351 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script352 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script353 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script354 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script355 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script356 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script357 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script358 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script359 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script360 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script361 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script362 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script363 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script364 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script365 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script366 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script367 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script368 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script369 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script370 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script371 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script372 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script373 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script374 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script375 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script376 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script377 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script378 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script379 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script380 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script381 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script382 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script383 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script384 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script385 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script386 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script387 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script388 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script389 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script390 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script391 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script392 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script393 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script394 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script395 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script396 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script397 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script398 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script399 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script400 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script401 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script402 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script403 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script404 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script405 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script406 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script407 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script408 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script409 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script410 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script411 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script412 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script413 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script414 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script415 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script416 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script417 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script418 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script419 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script420 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script421 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script422 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script423 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script424 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script425 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script426 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script427 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script428 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script429 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script430 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script431 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script432 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script433 = function()
{
  // تحميل Popper.js (مطلوبة لـ Tippy.js)
var popper = document.createElement('script');
popper.src = 'https://unpkg.com/@popperjs/core@2';
document.head.appendChild(popper);

// تحميل Tippy.js
var tippyLib = document.createElement('script');
tippyLib.src = 'https://unpkg.com/tippy.js@6';
document.head.appendChild(tippyLib);

// تحميل ملف CSS الخاص بالمكتبة
var tippyCss = document.createElement('link');
tippyCss.rel = 'stylesheet';
tippyCss.href = 'https://unpkg.com/tippy.js@6/dist/tippy.css';
document.head.appendChild(tippyCss);

// تحميل خط Tajawal من Google Fonts
// var tajwalFont = document.createElement('link');
// tajwalFont.rel = 'stylesheet';
// tajwalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap';
// document.head.appendChild(tajwalFont);

// CSS مخصص لحركة scale+fade + padding + حواف مستديرة + خط DIN Next LT Arabic
(function () {
  var animId = 'tippy-scale-fade-style';
  if (!document.getElementById(animId)) {
    var s = document.createElement('style');
    s.id = animId;
    s.textContent = `
      .tippy-box[data-animation='scale-fade']{
        transition-property: transform, opacity;
        padding: 10px;                 /* مسافة حول النص */
        border-radius: 6px;            /* زوايا */
        font-family: 'DIN Next LT Arabic', sans-serif;
        font-size: 14px;
      }
      .tippy-box[data-animation='scale-fade'][data-state='hidden']{
        opacity: 0;
        transform: scale(0.6);
      }
      .tippy-box[data-animation='scale-fade'][data-state='visible']{
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(s);
  }
})();

// بعد تحميل Tippy.js: اربط التولتيبات
tippyLib.onload = function () {
  // دالة عامة: تربط تولتيب بعنصر باستخدام xlink:href
  function makeTooltip(el, text, placement) {
    try {
      tippy(el, {
        content: text,
        placement: placement || 'left',
        arrow: true,
        theme: 'light-border',
        animation: 'scale-fade',
        duration: [200, 150],  // دخول/خروج
        inertia: true
      });
    } catch (e) {
      console.warn('Tooltip bind failed for:', el, e);
    }
  }

  // البحث عن العنصر باستخدام اسم الصورة داخل xlink:href
  function findElementByImageName(imageName) {
    var targetImage = null;
    document.querySelectorAll('svg image').forEach(function (img) {
      var href = img.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || img.getAttribute('xlink:href');
      if (href && href.indexOf(imageName) !== -1) {
        targetImage = img;
      }
    });
    if (!targetImage) return null;
    return targetImage.closest('.slideobject-maskable') || targetImage.closest('.slide-object') || targetImage.closest('svg') || targetImage;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1_X.png - "السابق")
  var previousWrap = findElementByImageName('6SX1Z4mXQC1_X.png');
  if (previousWrap && !previousWrap.__tippyBoundPrevious) {
    makeTooltip(previousWrap, 'السابق', 'right');
    previousWrap.__tippyBoundPrevious = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 6SX1Z4mXQC1.png - "التالي")
  var nextWrap = findElementByImageName('6SX1Z4mXQC1.png');
  if (nextWrap && !nextWrap.__tippyBoundNext) {
    makeTooltip(nextWrap, 'التالي', 'left');
    nextWrap.__tippyBoundNext = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5ynpEc4yDXQ.png)
  var closeWrap = findElementByImageName('5ynpEc4yDXQ.png');
  if (closeWrap && !closeWrap.__tippyBoundClose) {
    makeTooltip(closeWrap, 'حفظ وإغلاق ', 'left');
    closeWrap.__tippyBoundClose = true;
  }

  // ربط التولتيب للصورة (باستخدام ID uniqueDomId-214)
  var closeIcon = document.querySelector('#uniqueDomId-214');
  if (closeIcon && !closeIcon.__tippyBoundCloseIcon) {
    makeTooltip(closeIcon, 'حفظ وإغلاق  ', 'left');
    closeIcon.__tippyBoundCloseIcon = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 6rIkGKZPcCh.png)
  var fullScreenWrap = findElementByImageName('6rIkGKZPcCh.png');
  if (fullScreenWrap && !fullScreenWrap.__tippyBoundFullScreen) {
    makeTooltip(fullScreenWrap, 'وضع الشاشة الكاملة', 'right');
    fullScreenWrap.__tippyBoundFullScreen = true;
  }

  // ربط التولتيب للصورة (باستخدام اسم الصورة 5YWES39YH85.png)
  var homeWrap = findElementByImageName('5YWES39YH85.png');
  if (homeWrap && !homeWrap.__tippyBoundHome) {
    makeTooltip(homeWrap, 'الرئيسية', 'left');
    homeWrap.__tippyBoundHome = true;
  }

  // ربط التولتيب للصورة الجديدة (باستخدام اسم الصورة 5a1dnovhriM.png)
  var pageWrap = findElementByImageName('5a1dnovhriM.png');
  if (pageWrap && !pageWrap.__tippyBoundPage) {
    makeTooltip(pageWrap, 'قم بإدخال رقم الصفحة المراد الانتقال إليها', 'top');  // تلميح يظهر فوق العنصر
    pageWrap.__tippyBoundPage = true;
  }

};

}

window.Script434 = function()
{
  (function () {
  if (window.top.extMenuInitialized) {
    console.log("extMenu already initialized, skipping...");
    return;
  }
  window.top.extMenuInitialized = true;

  var topWin = window.top,
    topDoc = topWin.document;

  function initializeElements() {
    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let backdrop = topDoc.getElementById("extMenuBackdrop");
    if (!backdrop || !topDoc.body.contains(backdrop)) {
      backdrop = topDoc.createElement("div");
      backdrop.id = "extMenuBackdrop";
      topDoc.body.appendChild(backdrop);
    }

    let panel = topDoc.getElementById("extMenuPanel");
    if (!panel || !topDoc.body.contains(panel)) {
      panel = topDoc.createElement("div");
      panel.id = "extMenuPanel";
      topDoc.body.appendChild(panel);
    }
    return { backdrop, panel };
  }

  var style = topDoc.getElementById("extMenuPanelStyles");
  if (!style) {
    style = topDoc.createElement("style");
    style.id = "extMenuPanelStyles";
    style.textContent = `
      #extMenuBackdrop{
        position: fixed; inset: 0; background: rgba(0,0,0,.28);
        opacity: 0; pointer-events: none; transition: opacity .22s ease;
        z-index: 2147483646;
      }
      #extMenuPanel{
        position: fixed; top: 0; right: 0; width: 360px; height: 100vh;
        z-index: 2147483647; display: flex; flex-direction: column; direction: rtl;
        transform: translateX(100%); transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle {
        width: 900px; height: 65vh;
        left: 50%; top: 47%; right: auto;
        transform: translate(-50%, 100vh); overflow: hidden;
        transition: transform .26s ease;
      }
      #extMenuPanel.terminologyStyle.active {
        transform: translate(-50%, -50%);
      }
      #extMenuIframe{ border: 0; width: 100%; height: 100%; }
      @media (max-width: 480px){ 
        #extMenuPanel{ width: 88vw; }
        #extMenuPanel.terminologyStyle{ 
          width: 90vw; height: 85vh;
        }
      }
    `;
    topDoc.head.appendChild(style);
  }

  var { backdrop, panel } = initializeElements();
  var iframe;
  var isOpen = false;

  function createIframe(src) {
    while (panel.firstChild) {
      panel.firstChild.remove();
    }
    iframe = topDoc.createElement("iframe");
    iframe.id = "extMenuIframe";
    iframe.src = src || "links.html";
    if (src === "Terminology.html") {
      iframe.setAttribute("scrolling", "no");
    }
    panel.appendChild(iframe);

    panel.classList.remove("terminologyStyle", "active");
    if (src === "Terminology.html") {
      panel.classList.add("terminologyStyle");
    }
  }

  function openPanel() {
    if (isOpen) {
      closePanel();
    }
    isOpen = true;

    let existingBackdrops = topDoc.querySelectorAll("#extMenuBackdrop");
    existingBackdrops.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    let existingPanels = topDoc.querySelectorAll("#extMenuPanel");
    existingPanels.forEach((el, index) => {
      if (index > 0) el.remove();
    });

    var elements = initializeElements();
    backdrop = elements.backdrop;
    panel = elements.panel;

    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.add("active");
      panel.style.transform = "translate(-50%, -50%)";
    } else {
      panel.style.transform = "translateX(0)";
    }
    backdrop.style.pointerEvents = "auto";
    backdrop.style.opacity = "1";

    addEventListeners();
  }

  function closePanel() {
    isOpen = false;
    if (panel.classList.contains("terminologyStyle")) {
      panel.classList.remove("active");
      panel.style.transform = "translate(-50%, 100vh)";
    } else {
      panel.style.transform = "translateX(100%)";
    }
    backdrop.style.opacity = "0";
    backdrop.style.pointerEvents = "none";
  }

  function addEventListeners() {
    backdrop.removeEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);

    topWin.removeEventListener("keydown", escapeKeyHandler);
    topWin.addEventListener("keydown", escapeKeyHandler, true);
  }

  function escapeKeyHandler(e) {
    if (e.key === "Escape") closePanel();
  }

  topWin.extMenu = {
    open: function (src) {
      var elements = initializeElements();
      backdrop = elements.backdrop;
      panel = elements.panel;
      if (src) createIframe(src);
      openPanel();
    },
    close: closePanel,
    isOpen: function () {
      return isOpen;
    },
  };

  topWin.addEventListener(
    "message",
    function (e) {
      var msg = e && e.data;
      if (!msg) return;

      if (msg === "extMenu:open" || (typeof msg === "object" && msg.type === "extMenu:open")) {
        try {
          var desiredSrc = typeof msg === "object" && msg.src ? msg.src : "links.html";
          var elements = initializeElements();
          backdrop = elements.backdrop;
          panel = elements.panel;
          createIframe(desiredSrc);
          openPanel();
        } catch (_) {}
        return;
      }

      if (msg === "extMenu:close") {
        closePanel();
        return;
      }
      if (msg === "extMenu:toggle") {
        isOpen ? closePanel() : openPanel();
        return;
      }

      if (typeof msg === "object" && msg.type === "extMenu:navigate") {
        try {
          GetPlayer().SetVar("MenuTarget", msg.key || "");
        } catch (_) {}
        return;
      }
    },
    false
  );

  console.log("extMenu initialized and ready");
})();
}

window.Script435 = function()
{
  DS.appState.onToggleVolume(0);
}

window.Script436 = function()
{
  DS.appState.onToggleVolume(1);
}

window.Script437 = function()
{
  var player = GetPlayer();
var sc = Number(player.GetVar('screen') || 0);
var ifr = document.querySelector('iframe');
if(ifr && ifr.contentWindow){
  ifr.contentWindow.postMessage({ type: 'extMenu:updateActive', screen: sc }, '*');
}

}

window.Script438 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script439 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script440 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script441 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script442 = function()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

window.Script443 = function()
{
  var fullStorylinePlayer = document.querySelectorAll("html");
if (fullStorylinePlayer[0].requestFullscreen) {
fullStorylinePlayer[0].requestFullscreen();
}else if (fullStorylinePlayer[0].mozRequestFullScreen) {
fullStorylinePlayer[0].mozRequestFullScreen(); // Firefox
}else if (fullStorylinePlayer[0].webkitRequestFullscreen) {
fullStorylinePlayer[0].webkitRequestFullscreen(); // Chrome and Safari
}else if (fullStorylinePlayer[0].msRequestFullscreen) {
fullStorylinePlayer[0].msRequestFullscreen(); // IE
}
}

window.Script444 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'links.html' }, '*');

}

window.Script445 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'Terminology.html' }, '*');
}

window.Script446 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script447 = function()
{
  window.top.postMessage({ type: 'extMenu:open', src: 'search.html' }, '*');

}

window.Script448 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

};
