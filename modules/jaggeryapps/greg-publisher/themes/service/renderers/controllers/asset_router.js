/*
	Description: Renders the asset.jag view
	Filename:asset.js
	Created Date: 29/7/2013
*/
var render=function(theme,data,meta,require){
    //var _url = "/publisher/asset/"  + data.meta.shortName + "/" + data.info.id + "/edit"
	var listPartial='view-asset';
	//Determine what view to show
	switch(data.op){
	case 'create':
		if(data.shortName == 'service'){
            		listPartial='add-asset-service';
        	} else {
            		listPartial='add-asset';
        	}
		break;
	case 'view':
		if(data.shortName == 'service'){
            		listPartial='view-asset-service';
        	} else {
            		listPartial='view-asset';
        	}
		break;
    case 'edit':
	if(data.shortName == 'service'){
            	listPartial='edit-asset-service';
        } else {
            	listPartial='edit-asset';
        }
        data = require('/helpers/edit-asset.js').selectCategory(data);
        break;
    case 'lifecycle':
        listPartial='lifecycle-asset';
        break;
    case 'versions':
        listPartial='versions-asset';
        break;
	default:
		break;
	}
	theme('single-col-fluid', {
        title: data.title,
     	header: [
            {
                partial: 'header',
                context: data
            }
        ],
        ribbon: [
            {
                partial: 'ribbon',
		        context:require('/helpers/breadcrumb.js').generateBreadcrumbJson(data)
            }
        ],
        leftnav: [
            {
                partial: 'left-nav',
                context: require('/helpers/left-nav.js').generateLeftNavJson(data, listPartial)
            }
        ],
        listassets: [
            {
                partial:listPartial,
		        context: data
            }
        ]
    });
};
