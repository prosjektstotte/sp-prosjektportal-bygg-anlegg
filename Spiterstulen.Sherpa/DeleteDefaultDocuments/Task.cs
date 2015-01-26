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
            context.ExecuteQuery();
        }
    }
}
