var wms_layers = [];

        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'GoogleHybrid_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
        var lyr_Google_1 = new ol.layer.Tile({
            'title': 'Google_1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_GENZ_2 = new ol.format.GeoJSON();
var features_GENZ_2 = format_GENZ_2.readFeatures(json_GENZ_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GENZ_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GENZ_2.addFeatures(features_GENZ_2);cluster_GENZ_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GENZ_2
});var lyr_GENZ_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_GENZ_2, 
                style: style_GENZ_2,
                title: '<img src="styles/legend/GENZ_2.png" /> GENZ'
            });var format_ENNZ_3 = new ol.format.GeoJSON();
var features_ENNZ_3 = format_ENNZ_3.readFeatures(json_ENNZ_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENNZ_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ENNZ_3.addFeatures(features_ENNZ_3);cluster_ENNZ_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ENNZ_3
});var lyr_ENNZ_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ENNZ_3, 
                style: style_ENNZ_3,
                title: '<img src="styles/legend/ENNZ_3.png" /> ENNZ'
            });var format_SampleLocation_4 = new ol.format.GeoJSON();
var features_SampleLocation_4 = format_SampleLocation_4.readFeatures(json_SampleLocation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SampleLocation_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SampleLocation_4.addFeatures(features_SampleLocation_4);cluster_SampleLocation_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SampleLocation_4
});var lyr_SampleLocation_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_SampleLocation_4, 
                style: style_SampleLocation_4,
                title: '<img src="styles/legend/SampleLocation_4.png" /> SampleLocation'
            });

lyr_Google_1.setVisible(true);lyr_GENZ_2.setVisible(true);lyr_ENNZ_3.setVisible(true);lyr_SampleLocation_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Google_1,lyr_GENZ_2,lyr_ENNZ_3,lyr_SampleLocation_4];
lyr_GENZ_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Project_ID': 'Project_ID', 'PM': 'PM', 'Client': 'Client', 'GPS_Coordi': 'GPS_Coordi', 'Path': 'Path', });
lyr_ENNZ_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Project_ID': 'Project_ID', 'PM': 'PM', 'Client': 'Client', 'GPS_Coordi': 'GPS_Coordi', 'Path': 'Path', });
lyr_SampleLocation_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Site_ID': 'Site_ID', 'X': 'X', 'Y': 'Y', 'Type': 'Type', 'Status': 'Status', 'Source': 'Source', });
lyr_GENZ_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Project_ID': 'TextEdit', 'PM': 'TextEdit', 'Client': 'TextEdit', 'GPS_Coordi': 'TextEdit', 'Path': 'TextEdit', });
lyr_ENNZ_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Project_ID': 'TextEdit', 'PM': 'TextEdit', 'Client': 'TextEdit', 'GPS_Coordi': 'TextEdit', 'Path': 'TextEdit', });
lyr_SampleLocation_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Site_ID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Type': 'TextEdit', 'Status': 'TextEdit', 'Source': 'TextEdit', });
lyr_GENZ_2.set('fieldLabels', {'OBJECTID': 'no label', 'Project_ID': 'header label', 'PM': 'inline label', 'Client': 'inline label', 'GPS_Coordi': 'inline label', 'Path': 'inline label', });
lyr_ENNZ_3.set('fieldLabels', {'OBJECTID': 'no label', 'Project_ID': 'header label', 'PM': 'inline label', 'Client': 'inline label', 'GPS_Coordi': 'inline label', 'Path': 'inline label', });
lyr_SampleLocation_4.set('fieldLabels', {'OBJECTID': 'no label', 'Site_ID': 'header label', 'X': 'inline label', 'Y': 'inline label', 'Type': 'inline label', 'Status': 'inline label', 'Source': 'inline label', });
lyr_SampleLocation_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});