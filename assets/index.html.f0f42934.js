import{_ as e,o,c as t,e as r}from"./app.76739b9c.js";const n={},a=r('<h1 id="main-module" tabindex="-1"><a class="header-anchor" href="#main-module" aria-hidden="true">#</a> Main Module</h1><h2 id="onopen" tabindex="-1"><a class="header-anchor" href="#onopen" aria-hidden="true">#</a> <code>onOpen()</code></h2><p><strong>Triggers automatically</strong> after the host containers (sheet that this script hosted in) open. It will opens the menu in the Google Sheets UI for manual operations.</p><p>In <code>functionName</code> key, there will be a function name labeled with <code>name</code> key. <code>name</code> will be shown in the menu UI, and it will triggers <code>functionName</code>.</p><h2 id="approveprocess" tabindex="-1"><a class="header-anchor" href="#approveprocess" aria-hidden="true">#</a> <code>approveProcess()</code></h2><p>Starts the <code>approveResponse()</code> multiple times (as the first row of response to the last row of sheet). That makes sure that every line has been run once.</p><p>Editing this function to run multiple times (currently running once) makes the script to updates the approval status and then proceeds the process by sending emails or mark to skip.</p><h2 id="approveresponse-rownumber-number" tabindex="-1"><a class="header-anchor" href="#approveresponse-rownumber-number" aria-hidden="true">#</a> <code>approveResponse(rowNumber: Number)</code></h2><p>A core process of the script. As it reads the information from the sheet and redistribute it throughout the script&#39;s function.</p><p>This function runs only a single row.</p><h2 id="sheetpreparation" tabindex="-1"><a class="header-anchor" href="#sheetpreparation" aria-hidden="true">#</a> <code>sheetPreparation()</code></h2><p>Script built for checking whether the system-required column is there or not. Not to be confused with fixing the missing column. If they are not available, alert UI will be triggered, and show the value of the missing column.</p><p>This function should be executed in a <code>standalone</code> trigger mode (as it requires UI to show the response). To trigger a standalone execution, please read the other documentation page for more information.</p>',13),s=[a];function i(h,c){return o(),t("div",null,s)}var p=e(n,[["render",i],["__file","index.html.vue"]]);export{p as default};
