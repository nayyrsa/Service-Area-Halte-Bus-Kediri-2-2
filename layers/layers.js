var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_BatasAdministrasiFIX_1 = new ol.format.GeoJSON();
var features_BatasAdministrasiFIX_1 = format_BatasAdministrasiFIX_1.readFeatures(json_BatasAdministrasiFIX_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiFIX_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiFIX_1.addFeatures(features_BatasAdministrasiFIX_1);
var lyr_BatasAdministrasiFIX_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiFIX_1, 
                style: style_BatasAdministrasiFIX_1,
                popuplayertitle: 'Batas Administrasi FIX',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiFIX_1.png" /> Batas Administrasi FIX'
            });
var format_Jaringan_Transportasi_2 = new ol.format.GeoJSON();
var features_Jaringan_Transportasi_2 = format_Jaringan_Transportasi_2.readFeatures(json_Jaringan_Transportasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Transportasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Transportasi_2.addFeatures(features_Jaringan_Transportasi_2);
var lyr_Jaringan_Transportasi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Transportasi_2, 
                style: style_Jaringan_Transportasi_2,
                popuplayertitle: 'Jaringan_Transportasi',
                interactive: true,
                title: '<img src="styles/legend/Jaringan_Transportasi_2.png" /> Jaringan_Transportasi'
            });
var format_Buffered800m_3 = new ol.format.GeoJSON();
var features_Buffered800m_3 = format_Buffered800m_3.readFeatures(json_Buffered800m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered800m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered800m_3.addFeatures(features_Buffered800m_3);
var lyr_Buffered800m_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered800m_3, 
                style: style_Buffered800m_3,
                popuplayertitle: 'Buffered 800m',
                interactive: true,
                title: '<img src="styles/legend/Buffered800m_3.png" /> Buffered 800m'
            });
var format_AreaPerumahan3_4 = new ol.format.GeoJSON();
var features_AreaPerumahan3_4 = format_AreaPerumahan3_4.readFeatures(json_AreaPerumahan3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPerumahan3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPerumahan3_4.addFeatures(features_AreaPerumahan3_4);
var lyr_AreaPerumahan3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPerumahan3_4, 
                style: style_AreaPerumahan3_4,
                popuplayertitle: 'Area Perumahan 3',
                interactive: true,
                title: '<img src="styles/legend/AreaPerumahan3_4.png" /> Area Perumahan 3'
            });
var format_Buffered400m_5 = new ol.format.GeoJSON();
var features_Buffered400m_5 = format_Buffered400m_5.readFeatures(json_Buffered400m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered400m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered400m_5.addFeatures(features_Buffered400m_5);
var lyr_Buffered400m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered400m_5, 
                style: style_Buffered400m_5,
                popuplayertitle: 'Buffered 400m',
                interactive: true,
                title: '<img src="styles/legend/Buffered400m_5.png" /> Buffered 400m'
            });
var format_AreaPublik3Clip_6 = new ol.format.GeoJSON();
var features_AreaPublik3Clip_6 = format_AreaPublik3Clip_6.readFeatures(json_AreaPublik3Clip_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPublik3Clip_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPublik3Clip_6.addFeatures(features_AreaPublik3Clip_6);
var lyr_AreaPublik3Clip_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPublik3Clip_6, 
                style: style_AreaPublik3Clip_6,
                popuplayertitle: 'Area Publik 3 (Clip)',
                interactive: true,
                title: '<img src="styles/legend/AreaPublik3Clip_6.png" /> Area Publik 3 (Clip)'
            });
var format_AreaKomersial3_7 = new ol.format.GeoJSON();
var features_AreaKomersial3_7 = format_AreaKomersial3_7.readFeatures(json_AreaKomersial3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaKomersial3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaKomersial3_7.addFeatures(features_AreaKomersial3_7);
var lyr_AreaKomersial3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaKomersial3_7, 
                style: style_AreaKomersial3_7,
                popuplayertitle: 'Area Komersial 3',
                interactive: true,
                title: '<img src="styles/legend/AreaKomersial3_7.png" /> Area Komersial 3'
            });
var format_Servicearea800m_8 = new ol.format.GeoJSON();
var features_Servicearea800m_8 = format_Servicearea800m_8.readFeatures(json_Servicearea800m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearea800m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea800m_8.addFeatures(features_Servicearea800m_8);
var lyr_Servicearea800m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearea800m_8, 
                style: style_Servicearea800m_8,
                popuplayertitle: 'Service area 800m',
                interactive: true,
                title: '<img src="styles/legend/Servicearea800m_8.png" /> Service area 800m'
            });
var format_Servicearea400m_9 = new ol.format.GeoJSON();
var features_Servicearea400m_9 = format_Servicearea400m_9.readFeatures(json_Servicearea400m_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearea400m_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea400m_9.addFeatures(features_Servicearea400m_9);
var lyr_Servicearea400m_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearea400m_9, 
                style: style_Servicearea400m_9,
                popuplayertitle: 'Service area 400m',
                interactive: true,
                title: '<img src="styles/legend/Servicearea400m_9.png" /> Service area 400m'
            });
var format_Halte_10 = new ol.format.GeoJSON();
var features_Halte_10 = format_Halte_10.readFeatures(json_Halte_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_10.addFeatures(features_Halte_10);
var lyr_Halte_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_10, 
                style: style_Halte_10,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_10.png" /> Halte'
            });

lyr_Positron_0.setVisible(true);lyr_BatasAdministrasiFIX_1.setVisible(true);lyr_Jaringan_Transportasi_2.setVisible(true);lyr_Buffered800m_3.setVisible(true);lyr_AreaPerumahan3_4.setVisible(true);lyr_Buffered400m_5.setVisible(true);lyr_AreaPublik3Clip_6.setVisible(true);lyr_AreaKomersial3_7.setVisible(true);lyr_Servicearea800m_8.setVisible(true);lyr_Servicearea400m_9.setVisible(true);lyr_Halte_10.setVisible(true);
var layersList = [lyr_Positron_0,lyr_BatasAdministrasiFIX_1,lyr_Jaringan_Transportasi_2,lyr_Buffered800m_3,lyr_AreaPerumahan3_4,lyr_Buffered400m_5,lyr_AreaPublik3Clip_6,lyr_AreaKomersial3_7,lyr_Servicearea800m_8,lyr_Servicearea400m_9,lyr_Halte_10];
lyr_BatasAdministrasiFIX_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jaringan_Transportasi_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Buffered800m_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Luas': 'Luas', });
lyr_AreaPerumahan3_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Luas': 'Luas', 'Luas Layan': 'Luas Layan', 'Persentase': 'Persentase', });
lyr_Buffered400m_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Luas': 'Luas', });
lyr_AreaPublik3Clip_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Luas': 'Luas', 'Luas Layan': 'Luas Layan', 'Persentase': 'Persentase', });
lyr_AreaKomersial3_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Luas': 'Luas', 'Luas Layan': 'Luas Layan', 'Persentase': 'Persentase', });
lyr_Servicearea800m_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', });
lyr_Servicearea400m_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', });
lyr_Halte_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Foto': 'Foto', });
lyr_BatasAdministrasiFIX_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jaringan_Transportasi_2.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'ORDE01': '', 'ORDE02': '', 'ORDE03': '', 'ORDE04': '', 'JNSRSR': '', 'STSJRN': '', 'WADMPR': '', 'WADMKK': '', 'REMARK': '', 'SBDATA': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', });
lyr_Buffered800m_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas': '', });
lyr_AreaPerumahan3_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas': 'Range', 'Luas Layan': 'Range', 'Persentase': 'Range', });
lyr_Buffered400m_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas': '', });
lyr_AreaPublik3Clip_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas': 'Range', 'Luas Layan': '', 'Persentase': '', });
lyr_AreaKomersial3_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas': 'Range', 'Luas Layan': '', 'Persentase': '', });
lyr_Servicearea800m_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Servicearea400m_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Halte_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_BatasAdministrasiFIX_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Jaringan_Transportasi_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'REMARK': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Buffered800m_3.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Luas': 'inline label - always visible', });
lyr_AreaPerumahan3_4.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Luas': 'inline label - always visible', 'Luas Layan': 'inline label - always visible', 'Persentase': 'inline label - always visible', });
lyr_Buffered400m_5.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Luas': 'inline label - always visible', });
lyr_AreaPublik3Clip_6.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Luas': 'inline label - always visible', 'Luas Layan': 'inline label - always visible', 'Persentase': 'inline label - always visible', });
lyr_AreaKomersial3_7.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', 'Luas': 'inline label - always visible', 'Luas Layan': 'inline label - always visible', 'Persentase': 'inline label - always visible', });
lyr_Servicearea800m_8.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Servicearea400m_9.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Halte_10.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'Foto': 'no label', });
lyr_Halte_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});