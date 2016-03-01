/* Denne filen er knyttet til en HTML-fil med samme navn, og henter innhold fra den. Du kan ikke flytte, slette, gi nytt navn til eller gjør andre endringer i denne filen før tilknytningen mellom filene er fjernet. */

function DisplayTemplate_16f5b3d974c44a6bb5e15a3f311e5a21(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_16f5b3d974c44a6bb5e15a3f311e5a21.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fGlittertind_Item_Project_details_bygganlegg.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults', 'Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'PrognoseDividedByRamme':['RefinableDecimal00'], 'ByggSistePolitiskeVedtakOWSDATE':null, 'ByggHPFase':['ByggHPFaseOWSCHCS'], 'ByggRammeBudsjett':['ByggRammeBudsjettOWSNMBR'], 'ByggTotalprognose':['ByggTotalprognoseOWSNMBR'], 'ByggTilskudd':['ByggTilskuddOWSCHCS'], 'Path':null, 'Title':null, 'ProjectManager':['GtProjectManagerOWSUSER'], 'ProjectOwner':['GtProjectOwnerOWSUSER'], 'ProjectPhase':['owstaxIdGtProjectPhase'], 'Created':null, 'GtProjectGoalsOWSMTXT':null, 'GtStatusTimeOWSCHCS':null, 'GtStatusRiskOWSCHCS':null, 'GtStatusBudgetOWSCHCS':null, 'LastModifiedTime':null, 'GtEndDateOWSDATE':null};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
		
		function GetStatusCssClass(status) {
			if (status === undefined || status === null) return 'status-unknown';

			var statusToCheck = status.toLowerCase();

			if (statusToCheck === 'etter plan') return 'status-red';
			else if (statusToCheck === 'foran plan') return 'status-green';
			else if (statusToCheck === 'på plan') return 'status-green';
			else if (statusToCheck === 'høy') return 'status-red';
			else if (statusToCheck === 'medium') return 'status-yellow';
			else if (statusToCheck === 'lav') return 'status-green';
			else if (statusToCheck === 'over budsjett') return 'status-red';
			else if (statusToCheck === 'på budsjett') return 'status-green';
			else if (statusToCheck === 'under budsjett') return 'status-green';
			else if (statusToCheck === 'vet ikke') return 'status-yellow';
			else if (statusToCheck === 'mindre forsinkelse / forsinkelse som kan taes igjen') return 'status-yellow';			

			return 'status-unknown';
		};
        var url = $getItemValue(ctx, "Path");
        var title = $getItemValue(ctx, "Title");
        var projectManager = $getItemValue(ctx, "ProjectManager");
        var projectOwner = $getItemValue(ctx, "ProjectOwner");
        var projectPhase = $getItemValue(ctx, "ProjectPhase").toString();
        var created = new Date($getItemValue(ctx, "Created").inputValue).format("dd.MM.yyyy");
        var createdTime = new Date($getItemValue(ctx, "Created").inputValue).format("dd.MM.yyyy kl HH:mm:ss");
        var projectGoals = $getItemValue(ctx, "GtProjectGoalsOWSMTXT").inputValue;
        var projectGoalsTrimmed = Srch.U.getTrimmedString( projectGoals , 20);
        var statusTime = $getItemValue(ctx, "GtStatusTimeOWSCHCS");
        var statusRisk = $getItemValue(ctx, "GtStatusRiskOWSCHCS");
        var statusBudget = $getItemValue(ctx, "GtStatusBudgetOWSCHCS");
        var lastModified = $getItemValue(ctx, "LastModifiedTime");
        var statusTimeCss = GetStatusCssClass(statusTime.value);
        var statusRiskCss = GetStatusCssClass(statusRisk.value);
        var statusBudgetCss = GetStatusCssClass(statusBudget.value);

        var byggHPFase = $getItemValue(ctx, "ByggHPFase");
        var byggRammeBudsjett = parseFloat($getItemValue(ctx, "ByggRammeBudsjett").value) || 0;
        var byggTotalprognose = parseFloat($getItemValue(ctx, "ByggTotalprognose").value) || 0;
        var byggTilskudd = $getItemValue(ctx, "ByggTilskudd");
		var byggSisteVedtak = $getItemValue(ctx, "ByggSistePolitiskeVedtakOWSDATE");
		var sluttDato = new Date($getItemValue(ctx, "GtEndDateOWSDATE").inputValue).format("dd.MM.yyyy");
		
		var prognoseDividedByRamme = $getItemValue(ctx, "PrognoseDividedByRamme");
		console.log(prognoseDividedByRamme);
		
        var totalPrognoseCss = "";
        
        if(byggTotalprognose/byggRammeBudsjett > 1){
            totalPrognoseCss = 'status-red';
		} else if (byggTotalprognose/byggRammeBudsjett >= 0.95 ){
           totalPrognoseCss = 'status-yellow';
		} else {
		   totalPrognoseCss = 'status-green';
		}

        ms_outHtml.push(''
,'        <td>'
,'            <a href="', url ,'">'
,'                ', title ,''
,'            </a>'
,'        </td>'
,'		<td class="', statusRiskCss ,'">', statusRisk ,'</td>'
,'		<td>', byggHPFase ,'</td>'
,'		<td>', byggRammeBudsjett ,'</td>'
,'		<td>', byggTotalprognose ,'</td>       '
,'		<td class="', totalPrognoseCss ,'">',  byggRammeBudsjett!=0 ?(byggTotalprognose/byggRammeBudsjett * 100).toFixed(1).replace(/\./,',') : 0 ,' %</td>'
,'		<td>', sluttDato ,'</td>'
,'        <td class="', statusTimeCss ,'">', statusTime ,'</td>'
,'        <td>', byggTilskudd ,'</td>'
,'		<td>', byggSisteVedtak ,'</td>'
,'        <td>', lastModified ,'</td>'
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_16f5b3d974c44a6bb5e15a3f311e5a21() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("TwoLines", DisplayTemplate_16f5b3d974c44a6bb5e15a3f311e5a21);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fGlittertind_Item_Project_details_bygganlegg.js", DisplayTemplate_16f5b3d974c44a6bb5e15a3f311e5a21);
}
//
	$includeCSS("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fGlittertind_Item_Project_details_bygganlegg.js", "~sitecollection/SiteAssets/gt/css/gt.style.css");	
    //
}
RegisterTemplate_16f5b3d974c44a6bb5e15a3f311e5a21();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fGlittertind_Item_Project_details_bygganlegg.js"), RegisterTemplate_16f5b3d974c44a6bb5e15a3f311e5a21);
}