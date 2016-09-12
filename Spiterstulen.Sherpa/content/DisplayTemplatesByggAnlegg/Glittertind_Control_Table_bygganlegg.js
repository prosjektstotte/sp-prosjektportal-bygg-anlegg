/* Denne filen er knyttet til en HTML-fil med samme navn, og henter innhold fra den. Du kan ikke flytte, slette, gi nytt navn til eller gjør andre endringer i denne filen før tilknytningen mellom filene er fjernet. */

function DisplayTemplate_48766739222f4da5baf2e0ce74f0cc92(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_48766739222f4da5baf2e0ce74f0cc92.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fGlittertind_Control_Table_bygganlegg.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults', 'Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
,''
);
            if (!$isNull(ctx.ClientControl) &&
            !$isNull(ctx.ClientControl.shouldRenderControl) &&
            !ctx.ClientControl.shouldRenderControl())
            {
            return "";
            }
            ctx.ListDataJSONGroupsKey = "ResultTables";

            var noResultsClassName = "ms-srch-result-noResults";

            window.GT = window.GT || {};
            window.GT.GetStatusCssClass = function(status) {
	            if (status === undefined || status === null) return 'status-unknown';

	            var statusToCheck = status.toLowerCase();

	            if (statusToCheck === 'etter plan') return 'status-red';
	            else if (statusToCheck === 'forsinket') return 'status-red';
	            else if (statusToCheck === 'foran plan') return 'status-green';
	            else if (statusToCheck.indexOf('mindre forsinkelse') > -1) return 'status-yellow';
	            else if (statusToCheck === 'på plan') return 'status-green';
	            else if (statusToCheck === 'høy') return 'status-red';
	            else if (statusToCheck === 'medium') return 'status-yellow';
	            else if (statusToCheck === 'lav') return 'status-green';
	            else if (statusToCheck === 'over budsjett') return 'status-red';
	            else if (statusToCheck === 'på budsjett') return 'status-green';
	            else if (statusToCheck === 'under budsjett') return 'status-green';
	            else if (statusToCheck === 'vet ikke') return 'status-yellow';

	            return 'status-unknown';
            };
            var ListRenderRenderWrapper = function(itemRenderResult, inCtx, tpl)
            {
                var iStr = [];
                if (inCtx.CurrentItemIdx % 2 === 0) {
                    iStr.push('<tr class="ms-HoverBackground-bgColor">');
                } else {
                    iStr.push('<tr>');
                }
                iStr.push(itemRenderResult);
                iStr.push('</tr>');
                return iStr.join('');
            }
ctx['ItemRenderWrapper'] = ListRenderRenderWrapper;
ms_outHtml.push(''
,'    <table class="gt-result-table">'
,'		<thead>'
,'			<tr>'
,'				<th>Tittel</th>'
,'				<th>Status risiko</th>'
,'				<th>Investeringsfase</th>'
,'				<th>Budsjett</th>'
,'				<th>Totalprognose</th>'
,'				<th>Prognose/ramme</th>'
,'				<th>Overtakelsesdato</th>'
,'				<th>Status tid</th>'
,'				<th>Tilskudd</th>'
,'				<th>Status plan- og byggesak</th>'
,'				<th>Siste politiske vedtak</th>'
,'				<th>Sist endret</th>'
,'			</tr>'
,'		</thead>'
,'		<tbody>'
,'           ', ctx.RenderGroups(ctx) ,''
,'		 </tbody>'
,'	</table>'
);
                if(ctx.ClientControl.get_showPaging()){
                    var pagingInfo = ctx.ClientControl.get_pagingInfo();
                    if(!$isEmptyArray(pagingInfo)){
ms_outHtml.push(''
,'                         <div class="ms-srch-result" id="Result" name="Control"><ul id="Paging" class="ms-srch-Paging">'
);
                        for (var i = 0; i < pagingInfo.length; i++) {
                            var pl = pagingInfo[i];
                            if(!$isNull(pl)) {
                                var imagesUrl = GetThemedImageUrl('searchresultui.png');
                                if(pl.startItem == -1) {
                                    var selfLinkId = "SelfLink_" + pl.pageNumber;
ms_outHtml.push(''
,'                                    <li id="PagingSelf"><a id="', $htmlEncode(selfLinkId) ,'">', $htmlEncode(pl.pageNumber) ,'</a></li>'
);
                                } else if(pl.pageNumber == -1) {
                                    var iconClass = Srch.U.isRTL() ? "ms-srch-pagingNext" : "ms-srch-pagingPrev";
ms_outHtml.push(''
,'                                    <li id="PagingImageLink"><a id="PageLinkPrev" href="#" class="ms-commandLink ms-promlink-button ms-promlink-button-enabled ms-verticalAlignMiddle" title="', $htmlEncode(pl.title) ,'" onclick="$getClientControl(this).page(', $htmlEncode(pl.startItem) ,');return Srch.U.cancelEvent(event);">'
,'                                        <span class="ms-promlink-button-image">'
,'                                            <img src="', $urlHtmlEncode(imagesUrl) ,'" class="', $htmlEncode(iconClass) ,'" alt="', $htmlEncode(pl.title) ,'" />'
,'                                        </span>'
,'                                    </a></li>'
);
                                } else if(pl.pageNumber == -2) {
                                    var iconClass = Srch.U.isRTL() ? "ms-srch-pagingPrev" : "ms-srch-pagingNext";
ms_outHtml.push(''
,'                                    <li id="PagingImageLink"><a id="PageLinkNext" href="#" class="ms-commandLink ms-promlink-button ms-promlink-button-enabled ms-verticalAlignMiddle" title="', $htmlEncode(pl.title) ,'" onclick="$getClientControl(this).page(', $htmlEncode(pl.startItem) ,');return Srch.U.cancelEvent(event);">'
,'                                        <span class="ms-promlink-button-image">'
,'                                            <img src="', $urlHtmlEncode(imagesUrl) ,'" class="', $htmlEncode(iconClass) ,'" alt="', $htmlEncode(pl.title) ,'" />'
,'                                        </span>'
,'                                    </a></li>'
);
                                } else {
                                    var pageLinkId = "PageLink_" + pl.pageNumber;
ms_outHtml.push(''
,'                                    <li id="PagingLink"><a id="', $htmlEncode(pageLinkId) ,'" href="#" title="', $htmlEncode(pl.title) ,'" onclick="$getClientControl(this).page(', $htmlEncode(pl.startItem) ,');return Srch.U.cancelEvent(event);">', $htmlEncode(pl.pageNumber) ,'</a></li>'
);
                                }
                            }
                        }
ms_outHtml.push(''
,'                        </ul></div>'
);
                    }
                }


if (ctx.ClientControl.get_shouldShowNoResultMessage())
{
ms_outHtml.push(''
,'        <div class="', noResultsClassName ,'">Ingen elementer &#229; vise</div>'
);
}
ms_outHtml.push(''
,''
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_48766739222f4da5baf2e0ce74f0cc92() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_List", DisplayTemplate_48766739222f4da5baf2e0ce74f0cc92);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fGlittertind_Control_Table_bygganlegg.js", DisplayTemplate_48766739222f4da5baf2e0ce74f0cc92);
}
//
    //
}
RegisterTemplate_48766739222f4da5baf2e0ce74f0cc92();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fGlittertind_Control_Table_bygganlegg.js"), RegisterTemplate_48766739222f4da5baf2e0ce74f0cc92);
}