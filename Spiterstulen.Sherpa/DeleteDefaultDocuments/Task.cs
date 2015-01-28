using System;
using Microsoft.SharePoint.Client;
using Sherpa.Library.API;
using Sherpa.Library.SiteHierarchy.Model;

namespace DeleteDefaultDocuments
{
    public class Task : ITask
    {
        public void ExecuteOn(ShWeb shweb, ClientContext context)
        {
            if (context == null) throw new ArgumentNullException("context");

            var web = context.Site.RootWeb;
            var list = web.Lists.GetByTitle("Standarddokumenter");
            var items = list.GetItems(CamlQuery.CreateAllItemsQuery());
            context.Load(items);
            context.ExecuteQuery();
            
            for(int i=items.Count-1;i>=0;i--)
            {
                items[i].DeleteObject();
            }
            context.Load(web.Fields);
            context.ExecuteQuery();

            var budget = web.Fields.GetByInternalNameOrTitle("GtStatusBudget");
            var time = web.Fields.GetByInternalNameOrTitle("GtStatusTime");
            var risk = web.Fields.GetByInternalNameOrTitle("GtStatusRisk");
            context.Load(budget);
            context.Load(time);
            context.Load(risk);
            context.ExecuteQuery();
            var statusBudget = context.CastTo<FieldChoice>(budget);
            var statusRisk = context.CastTo<FieldChoice>(risk);
            var statusTime = context.CastTo<FieldChoice>(time);
            
            statusBudget.EditFormat = ChoiceFormatType.Dropdown;
            statusBudget.UpdateAndPushChanges(true);
            
            statusRisk.EditFormat = ChoiceFormatType.Dropdown;
            statusRisk.UpdateAndPushChanges(true);
            
            statusTime.EditFormat = ChoiceFormatType.Dropdown;
            statusTime.Choices = new[]
            {"Foran plan", "På plan", "Mindre forsinkelse / Forsinkelse som kan taes igjen", "Etter plan"};
            statusTime.DefaultValue = "";
            statusTime.UpdateAndPushChanges(true);
            context.ExecuteQuery();

        }
    }
}
