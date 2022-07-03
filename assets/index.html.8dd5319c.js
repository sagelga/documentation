import{_ as p,r as i,o as m,c as g,a as e,b as o,w as f,e as s,d as t}from"./app.76739b9c.js";var _="/assets/image_required_column.5334cbce.png",r="/assets/forms1.e57d2986.png",y="/assets/forms2.3d4562ff.png",b="/assets/forms3.eef7f4ab.png",l="/assets/forms4.c7253d3d.png",n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAKUlEQVQ4y2NgGK7Ag+ExEHoQr+ERw38gfERDDSQ7aTSURkNp6IQSNQEA8e0kkTrWXUQAAAAASUVORK5CYII=",h="/assets/sheetsIcon.3f719356.png",d="/assets/forms5.d602f8ad.png",c="/assets/forms6.a380cf67.png",w="/assets/sheets1.577376ac.png";const v={},k=s('<h1 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h1><p>Before continuing this setup process, please make sure you can access every required service (as listed in <a href="../requirement">requirement</a>)</p><h2 id="agenda" tabindex="-1"><a class="header-anchor" href="#agenda" aria-hidden="true">#</a> Agenda</h2><p>You will have to set this following service up manually on manager&#39;s account:</p><ul><li>Google Sheets <ul><li>Worksheet &amp; Sheets</li><li>Form format (for data input)</li><li>Sheet (for data processing)</li></ul></li><li>Google Forms <ul><li>Request Form</li><li>Approval Form</li></ul></li></ul><h2 id="create-google-sheets-script-target" tabindex="-1"><a class="header-anchor" href="#create-google-sheets-script-target" aria-hidden="true">#</a> Create Google Sheets&#39; Script Target</h2><p>This is everything for the script (via Google Sheets). In order to let the script to ingest the current situation and decide on what it should do, these sheet is required in order to work.</p>',7),A=t("If you do not have any Google Sheets Worksheet, create a new one by visiting "),S={href:"https://docs.google.com/spreadsheets/u/0/create?usp=dot_new",target:"_blank",rel:"noopener noreferrer"},x=t("sheets.new"),R=t("."),q=e("li",null,[t("Create 2 Sheets (located on the bottom left of the screen) and name it as following: "),e("ol",null,[e("li",null,[e("code",null,"Sheet"),e("br"),t(" a.k.a Approval Request sheet. Works as the brain of the script and task board.")]),e("li",null,[e("code",null,"InboundSheet"),e("br"),t(" a.k.a Approval Response sheet. Works as the Approval Response data ingestion for the script.")])])],-1),I=s('<h3 id="setup-a-worksheet-column-system-required-columns" tabindex="-1"><a class="header-anchor" href="#setup-a-worksheet-column-system-required-columns" aria-hidden="true">#</a> Setup a Worksheet Column (System-required columns)</h3><p>This allows the script to understand and pull up the correct data column. In each sheet, there will be required column that will be either from generate or manually create. Here are the list of all required column that will be used by the script.</p><table><thead><tr><th style="text-align:center;">Sheet Name</th><th>Required Column</th></tr></thead><tbody><tr><td style="text-align:center;">Sheet</td><td><ul><li> Response ID</li><li> Step xx Status [replace xx with step number]</li><li> Step xx Comments [replace xx with step number]</li><li> Step xx Response Form URL [replace xx with step number]</li><li> Step xx Timestamp [replace xx with step number]</li><li> Skips Override</li><li> Timestamp (created automatically)</li></ul></td></tr><tr><td style="text-align:center;">Inbound Sheet</td><td><ul><li>Bound to Response ID</li><li>Response Result</li><li>Comments</li><li>Timestamp (created automatically)</li><li>Email Address (created automatically)</li></ul></td></tr></tbody></table><p>You may choose one of these methods to complete this task:</p><h4 id="option-1-automatically-via-sheet-ui" tabindex="-1"><a class="header-anchor" href="#option-1-automatically-via-sheet-ui" aria-hidden="true">#</a> Option 1 Automatically via Sheet UI</h4><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This method might not work if the sheet name is different to a default sheet name.</p><p>Adding a new column in InboundSheet might not work via this method. You might have to create it manually.</p></div><ol><li>In the sheet that the script is contained, wait a while and see &#39;Approval Addons&#39; tab. Click on the tab to show more options.</li><li>On &#39;Approval Addons&#39; tab, select &#39;Create required column&#39; <img src="'+_+'" alt=""></li></ol><p>The script will run and automatically add a column for you. Script will not generate a new column name when the script can detect existed system-related column. All column will be inserted at the end of the sheet.</p><h4 id="option-2-manual" tabindex="-1"><a class="header-anchor" href="#option-2-manual" aria-hidden="true">#</a> Option 2 Manual</h4><ol><li>Selecting a blank column that hasn&#39;t been used (either by the script or the form), by clicking or selecting the cell at the first row (row 1) and the column that you like to add the attribute on (i.e. on cell D1)</li><li>Type in the column name, as in the format defined previously</li><li>Repeat step 1 and 2 until you completely typed in all of the system-required columns.</li></ol><p>If you think that you have completed the instruction, try running the script with a sample request. If the script worked perfectly, as it does not crash during run, the setup for this step is complete.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Noted that, you don&#39;t have to list it in order. You can place wherever you feel like to. But for Best Practice, you should be adding it at the very last to lower the impact from Google Form data ingestion.</p></div><h2 id="setup-the-google-form" tabindex="-1"><a class="header-anchor" href="#setup-the-google-form" aria-hidden="true">#</a> Setup the Google Form</h2><p>Form works as the data ingestion and will put its result to the sheet (noted above), using Google Forms. Approval requests and response is recorded by one of the following forms, as described in The Worksheet, the form will be connected to the corresponding sheet.</p>',14),C=t("With its ability to add attributes to the Sheets by adding/modifying the form, you are advised to deal with the issue created by this action. For more information about adding/modifying a form, please checkout "),F=t("Dealing with Issues"),G=t(" on what you can or cannot do with the form or/and the worksheet."),T=e("h2",{id:"create-a-request-form",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-a-request-form","aria-hidden":"true"},"#"),t(" Create a Request Form")],-1),E=e("p",null,[t("To create a target form (form that will "),e("strong",null,"digest in"),t(" an approval request) and link it to Google Sheets, please carefully follow the instruction.")],-1),N=t("Create a new Google Form by vising "),B={href:"https://forms.new",target:"_blank",rel:"noopener noreferrer"},U=t("https://forms.new"),W=e("br",null,null,-1),D=t(" (Short URL for creating new Google Forms) "),O=e("img",{src:r,alt:""},null,-1),Q=s('<li>Add questions you liked to ask. Make sure that you request an &#39;Approver E-mail Address&#39; with &#39;E-mail only&#39; constraint <img src="'+y+'" alt=""></li><li>In settings, make sure &#39;Collect Email Address&#39; is ticked and &#39;Edit after Submit&#39; is not ticked. These settings option are already ticked and not ticked by default. If you managed to make change to these two options, please make sure you revert it back. <img src="'+b+'" alt=""></li><li>After you complete adding questions to the script, go to &#39;Response&#39; <img src="'+l+'" alt=""></li><li>Click &#39;More&#39; button (<img src="'+n+'" style="height:1em;">), next to a Sheet button (<img src="'+h+'" style="height:1em;">) <img src="'+d+'" alt=""></li><li>Click &#39;Select response destination&#39;. There will be two options for you to choose from. <ul><li>Select &#39;Create a new spreadsheet&#39; if you start using this script for the first time.</li><li>Select &#39;Select existing spreadsheet&#39; if you already have the Target worksheet. <img src="'+c+'" alt=""></li></ul></li><li>You will be directed to/back to a spreadsheet. This will be your Target spreadsheet. <img src="'+w+'" alt=""></li><li>Rename this sheet to &#39;Response&#39; (default) (Edit the <code>Response</code> sheet to something else in <code>CONFIG</code>).</li>',7),V=e("h2",{id:"create-an-approval-form",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-an-approval-form","aria-hidden":"true"},"#"),t(" Create an Approval Form")],-1),L=t("Create a new Google Form by vising "),Y={href:"https://forms.new",target:"_blank",rel:"noopener noreferrer"},K=t("https://forms.new"),M=e("br",null,null,-1),H=t("(Short URL for creating new Google Forms) "),P=e("img",{src:r,alt:""},null,-1),z=s('<li>Add any approval questions you like.</li><li>Add a question and named it &#39;Approval Response&#39; (default) <ul><li>In answer field, have an option of &#39;Approve&#39; or &#39;Decline&#39;.</li><li>(Recommend) use Dropdown to let user respond to avoid unintentional approval/decline of the request.</li></ul></li><li>After you complete adding questions to the script, go to &#39;Response&#39; <img src="'+l+'" alt=""></li><li>Click &#39;More&#39; button (<img src="'+n+'" style="height:1em;">), next to a Sheet button (<img src="'+h+'" style="height:1em;">) <img src="'+d+'" alt=""></li><li>Click &#39;Select response destination&#39; \u2192 &#39;Select existing spreadsheet&#39;. <img src="'+c+'" alt=""></li><li>Select the same worksheet as &#39;Request collection sheet&#39;.</li><li>Rename the sheet to &#39;Inbound&#39; (Edit the <code>Response</code> sheet to something else in <code>CONFIG</code>).</li>',7),X=e("h2",{id:"rename-google-form-collection-sheet",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rename-google-form-collection-sheet","aria-hidden":"true"},"#"),t(" Rename Google Form collection sheet")],-1),j=e("p",null,"When you have completed creating the Google Forms and connected it to a single Google Sheet worksheet, there will be an additional sheet that has been created. This will works as a collection sheet.",-1),J=e("ol",null,[e("li",null,"Renames one that are from 'Request Form' as 'Response'"),e("li",null,"Renames one that are from 'Approval Form' as 'Inbound'")],-1);function Z($,ee){const a=i("ExternalLinkIcon"),u=i("RouterLink");return m(),g("div",null,[k,e("ol",null,[e("li",null,[A,e("a",S,[x,o(a)]),R]),q]),I,e("p",null,[C,o(u,{to:"/approval-workflow/docs/maintain/"},{default:f(()=>[F]),_:1}),G]),T,E,e("ol",null,[e("li",null,[N,e("a",B,[U,o(a)]),W,D,O]),Q]),V,e("ol",null,[e("li",null,[L,e("a",Y,[K,o(a)]),M,H,P]),z]),X,j,J])}var oe=p(v,[["render",Z],["__file","index.html.vue"]]);export{oe as default};
