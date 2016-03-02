
var documentLibraryName = "Dokumenter";
var documentItems;
var web = null;
var context = null;
var currentWellID = "";

$(document).ready(function () {
	

    ExecuteOrDelayUntilScriptLoaded(restAjax, "sp.js");
});

function restAjax(excelDoc) {
	var restUrlPrefix = _spPageContextInfo.webServerRelativeUrl + "/_vti_bin/ExcelRest.aspx/Delte%20dokumenter/";
	var restRangedUrlPostfix = "/Model/Ranges('Portef%C3%B8lgeoversikt!A1%7CK10')";
	
	var restRangedUrl = restUrlPrefix + "Kopi%20av%20Kopi%20av%20kravspek%20rapport_0701.xlsx" + restRangedUrlPostfix ;
	$.get(restRangedUrl, function(data) {
		$("#excel-rest-placeholder").html(data);
	} );
	
}


