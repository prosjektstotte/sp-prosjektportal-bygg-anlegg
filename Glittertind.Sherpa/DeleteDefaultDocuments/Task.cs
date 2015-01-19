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
            list.DeleteObject();
            context.ExecuteQuery();
            
            //var featureId = new Guid("94c94ca6-b32f-4da9-a9e3-1f3d343d7ecb");
            //var features = context.Web.Features;
            //features.Add(featureId, true, FeatureDefinitionScope.None);

        
        }
        
    }
}
