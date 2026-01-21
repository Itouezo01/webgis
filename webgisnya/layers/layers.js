var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_polygon_kelurahan_1 = new ol.format.GeoJSON();
var features_polygon_kelurahan_1 = format_polygon_kelurahan_1.readFeatures(json_polygon_kelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polygon_kelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygon_kelurahan_1.addFeatures(features_polygon_kelurahan_1);
var lyr_polygon_kelurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polygon_kelurahan_1, 
                style: style_polygon_kelurahan_1,
                popuplayertitle: 'polygon_kelurahan',
                interactive: true,
                title: '<img src="styles/legend/polygon_kelurahan_1.png" /> polygon_kelurahan'
            });
var format_warnetWarnet_2 = new ol.format.GeoJSON();
var features_warnetWarnet_2 = format_warnetWarnet_2.readFeatures(json_warnetWarnet_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_warnetWarnet_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_warnetWarnet_2.addFeatures(features_warnetWarnet_2);
var lyr_warnetWarnet_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_warnetWarnet_2, 
                style: style_warnetWarnet_2,
                popuplayertitle: 'warnet — Warnet',
                interactive: true,
                title: 'warnet — Warnet'
            });
var format_Jalan_raya_3 = new ol.format.GeoJSON();
var features_Jalan_raya_3 = format_Jalan_raya_3.readFeatures(json_Jalan_raya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_raya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_raya_3.addFeatures(features_Jalan_raya_3);
var lyr_Jalan_raya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_raya_3, 
                style: style_Jalan_raya_3,
                popuplayertitle: 'Jalan_raya',
                interactive: true,
                title: '<img src="styles/legend/Jalan_raya_3.png" /> Jalan_raya'
            });
var format_JalanDesa_4 = new ol.format.GeoJSON();
var features_JalanDesa_4 = format_JalanDesa_4.readFeatures(json_JalanDesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_4.addFeatures(features_JalanDesa_4);
var lyr_JalanDesa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_4, 
                style: style_JalanDesa_4,
                popuplayertitle: 'Jalan Desa',
                interactive: true,
                title: '<img src="styles/legend/JalanDesa_4.png" /> Jalan Desa'
            });
var format_JalanGang_5 = new ol.format.GeoJSON();
var features_JalanGang_5 = format_JalanGang_5.readFeatures(json_JalanGang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGang_5.addFeatures(features_JalanGang_5);
var lyr_JalanGang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGang_5, 
                style: style_JalanGang_5,
                popuplayertitle: 'Jalan Gang',
                interactive: true,
                title: '<img src="styles/legend/JalanGang_5.png" /> Jalan Gang'
            });
var format_batas_pemukiman_6 = new ol.format.GeoJSON();
var features_batas_pemukiman_6 = format_batas_pemukiman_6.readFeatures(json_batas_pemukiman_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_pemukiman_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_pemukiman_6.addFeatures(features_batas_pemukiman_6);
var lyr_batas_pemukiman_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_pemukiman_6, 
                style: style_batas_pemukiman_6,
                popuplayertitle: 'batas_pemukiman',
                interactive: true,
                title: '<img src="styles/legend/batas_pemukiman_6.png" /> batas_pemukiman'
            });
var format_lahan_hijau_7 = new ol.format.GeoJSON();
var features_lahan_hijau_7 = format_lahan_hijau_7.readFeatures(json_lahan_hijau_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lahan_hijau_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lahan_hijau_7.addFeatures(features_lahan_hijau_7);
var lyr_lahan_hijau_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lahan_hijau_7, 
                style: style_lahan_hijau_7,
                popuplayertitle: 'lahan_hijau',
                interactive: true,
                title: '<img src="styles/legend/lahan_hijau_7.png" /> lahan_hijau'
            });
var format_Masjid_8 = new ol.format.GeoJSON();
var features_Masjid_8 = format_Masjid_8.readFeatures(json_Masjid_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masjid_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_8.addFeatures(features_Masjid_8);
var lyr_Masjid_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_8, 
                style: style_Masjid_8,
                popuplayertitle: 'Masjid',
                interactive: true,
                title: '<img src="styles/legend/Masjid_8.png" /> Masjid'
            });
var format_titik_warnet_9 = new ol.format.GeoJSON();
var features_titik_warnet_9 = format_titik_warnet_9.readFeatures(json_titik_warnet_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_warnet_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_warnet_9.addFeatures(features_titik_warnet_9);
var lyr_titik_warnet_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titik_warnet_9, 
                style: style_titik_warnet_9,
                popuplayertitle: 'titik_warnet',
                interactive: true,
                title: '<img src="styles/legend/titik_warnet_9.png" /> titik_warnet'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_polygon_kelurahan_1.setVisible(true);lyr_warnetWarnet_2.setVisible(true);lyr_Jalan_raya_3.setVisible(true);lyr_JalanDesa_4.setVisible(true);lyr_JalanGang_5.setVisible(true);lyr_batas_pemukiman_6.setVisible(true);lyr_lahan_hijau_7.setVisible(true);lyr_Masjid_8.setVisible(true);lyr_titik_warnet_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_polygon_kelurahan_1,lyr_warnetWarnet_2,lyr_Jalan_raya_3,lyr_JalanDesa_4,lyr_JalanGang_5,lyr_batas_pemukiman_6,lyr_lahan_hijau_7,lyr_Masjid_8,lyr_titik_warnet_9];
lyr_polygon_kelurahan_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'LuasHectar': 'LuasHectar', });
lyr_warnetWarnet_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Jalan_raya_3.set('fieldAliases', {'id': 'id', 'Jalan raya': 'Jalan raya', 'panjang': 'panjang', 'panjangKM': 'panjangKM', });
lyr_JalanDesa_4.set('fieldAliases', {'id': 'id', 'Jalan Desa': 'Jalan Desa', 'Panjang': 'Panjang', 'panjangKM': 'panjangKM', });
lyr_JalanGang_5.set('fieldAliases', {'id': 'id', 'Jalan Gang': 'Jalan Gang', 'panjang': 'panjang', 'panjangKM': 'panjangKM', });
lyr_batas_pemukiman_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'luasHectar': 'luasHectar', });
lyr_lahan_hijau_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'luashectar': 'luashectar', });
lyr_Masjid_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_titik_warnet_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'telp': 'telp', 'alamat': 'alamat', });
lyr_polygon_kelurahan_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas': 'TextEdit', 'LuasHectar': 'TextEdit', });
lyr_warnetWarnet_2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Jalan_raya_3.set('fieldImages', {'id': 'TextEdit', 'Jalan raya': 'TextEdit', 'panjang': 'TextEdit', 'panjangKM': '', });
lyr_JalanDesa_4.set('fieldImages', {'id': 'TextEdit', 'Jalan Desa': 'TextEdit', 'Panjang': 'TextEdit', 'panjangKM': '', });
lyr_JalanGang_5.set('fieldImages', {'id': 'TextEdit', 'Jalan Gang': 'TextEdit', 'panjang': 'TextEdit', 'panjangKM': '', });
lyr_batas_pemukiman_6.set('fieldImages', {'id': '', 'nama': '', 'luas': '', 'luasHectar': '', });
lyr_lahan_hijau_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas': 'TextEdit', 'luashectar': 'TextEdit', });
lyr_Masjid_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas': 'CheckBox', });
lyr_titik_warnet_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'telp': 'TextEdit', 'alamat': 'TextEdit', });
lyr_polygon_kelurahan_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'LuasHectar': 'no label', });
lyr_warnetWarnet_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Jalan_raya_3.set('fieldLabels', {'id': 'no label', 'Jalan raya': 'no label', 'panjang': 'no label', 'panjangKM': 'no label', });
lyr_JalanDesa_4.set('fieldLabels', {'id': 'no label', 'Jalan Desa': 'no label', 'Panjang': 'no label', 'panjangKM': 'no label', });
lyr_JalanGang_5.set('fieldLabels', {'id': 'no label', 'Jalan Gang': 'no label', 'panjang': 'no label', 'panjangKM': 'no label', });
lyr_batas_pemukiman_6.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'luasHectar': 'no label', });
lyr_lahan_hijau_7.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'luashectar': 'no label', });
lyr_Masjid_8.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', });
lyr_titik_warnet_9.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'telp': 'no label', 'alamat': 'no label', });
lyr_titik_warnet_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});