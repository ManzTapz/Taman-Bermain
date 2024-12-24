var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Administrasi_AR_1 = new ol.format.GeoJSON();
var features_Administrasi_AR_1 = format_Administrasi_AR_1.readFeatures(json_Administrasi_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasi_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasi_AR_1.addFeatures(features_Administrasi_AR_1);
var lyr_Administrasi_AR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrasi_AR_1, 
                style: style_Administrasi_AR_1,
                popuplayertitle: "Administrasi_AR",
                interactive: true,
                    title: '<img src="styles/legend/Administrasi_AR_1.png" /> Administrasi_AR'
                });
var format_Administarsi_AR_25K_2 = new ol.format.GeoJSON();
var features_Administarsi_AR_25K_2 = format_Administarsi_AR_25K_2.readFeatures(json_Administarsi_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administarsi_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administarsi_AR_25K_2.addFeatures(features_Administarsi_AR_25K_2);
var lyr_Administarsi_AR_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administarsi_AR_25K_2, 
                style: style_Administarsi_AR_25K_2,
                popuplayertitle: "Administarsi_AR_25K",
                interactive: true,
                    title: '<img src="styles/legend/Administarsi_AR_25K_2.png" /> Administarsi_AR_25K'
                });
var format_lucupokoknya_3 = new ol.format.GeoJSON();
var features_lucupokoknya_3 = format_lucupokoknya_3.readFeatures(json_lucupokoknya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lucupokoknya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lucupokoknya_3.addFeatures(features_lucupokoknya_3);
var lyr_lucupokoknya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lucupokoknya_3, 
                style: style_lucupokoknya_3,
                popuplayertitle: "lucupokoknya",
                interactive: true,
                    title: '<img src="styles/legend/lucupokoknya_3.png" /> lucupokoknya'
                });

lyr_OSMStandard_0.setVisible(true);lyr_Administrasi_AR_1.setVisible(true);lyr_Administarsi_AR_25K_2.setVisible(true);lyr_lucupokoknya_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Administrasi_AR_1,lyr_Administarsi_AR_25K_2,lyr_lucupokoknya_3];
lyr_Administrasi_AR_1.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'provinsi': 'provinsi', 'kecamatan': 'kecamatan', 'kode_desa': 'kode_desa', 'kode_kec': 'kode_kec', 'kode_kab': 'kode_kab', 'shape_leng': 'shape_leng', 'desa': 'desa', 'kode_prop': 'kode_prop', 'kabupaten': 'kabupaten', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', });
lyr_Administarsi_AR_25K_2.set('fieldAliases', {'FID_Admini': 'FID_Admini', 'qc_id': 'qc_id', 'objectid': 'objectid', 'provinsi': 'provinsi', 'kecamatan': 'kecamatan', 'kode_desa': 'kode_desa', 'kode_kec': 'kode_kec', 'kode_kab': 'kode_kab', 'shape_leng': 'shape_leng', 'desa': 'desa', 'kode_prop': 'kode_prop', 'kabupaten': 'kabupaten', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', 'FID_Jalan_': 'FID_Jalan_', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Le_2': 'SHAPE_Le_2', 'layer': 'layer', 'path': 'path', });
lyr_lucupokoknya_3.set('fieldAliases', {'No': 'No', 'Nama': 'Nama', 'Lintang': 'Lintang', 'Bujur': 'Bujur', 'X': 'X', 'Y': 'Y', 'DESKRIPSI': 'DESKRIPSI', 'PATH_FOTO': 'PATH_FOTO', 'Link Foto': 'Link Foto', });
lyr_Administrasi_AR_1.set('fieldImages', {'qc_id': 'TextEdit', 'objectid': 'TextEdit', 'provinsi': 'TextEdit', 'kecamatan': 'TextEdit', 'kode_desa': 'TextEdit', 'kode_kec': 'TextEdit', 'kode_kab': 'TextEdit', 'shape_leng': 'TextEdit', 'desa': 'TextEdit', 'kode_prop': 'TextEdit', 'kabupaten': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Administarsi_AR_25K_2.set('fieldImages', {'FID_Admini': 'TextEdit', 'qc_id': 'TextEdit', 'objectid': 'TextEdit', 'provinsi': 'TextEdit', 'kecamatan': 'TextEdit', 'kode_desa': 'TextEdit', 'kode_kec': 'TextEdit', 'kode_kab': 'TextEdit', 'shape_leng': 'TextEdit', 'desa': 'TextEdit', 'kode_prop': 'TextEdit', 'kabupaten': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', 'FID_Jalan_': 'TextEdit', 'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_lucupokoknya_3.set('fieldImages', {'No': 'Range', 'Nama': 'TextEdit', 'Lintang': 'TextEdit', 'Bujur': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'DESKRIPSI': 'TextEdit', 'PATH_FOTO': 'TextEdit', 'Link Foto': 'TextEdit', });
lyr_Administrasi_AR_1.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'provinsi': 'no label', 'kecamatan': 'no label', 'kode_desa': 'no label', 'kode_kec': 'no label', 'kode_kab': 'no label', 'shape_leng': 'no label', 'desa': 'no label', 'kode_prop': 'no label', 'kabupaten': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', });
lyr_Administarsi_AR_25K_2.set('fieldLabels', {'FID_Admini': 'no label', 'qc_id': 'no label', 'objectid': 'no label', 'provinsi': 'no label', 'kecamatan': 'no label', 'kode_desa': 'no label', 'kode_kec': 'no label', 'kode_kab': 'no label', 'shape_leng': 'no label', 'desa': 'no label', 'kode_prop': 'no label', 'kabupaten': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', 'FID_Jalan_': 'no label', 'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Le_2': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_lucupokoknya_3.set('fieldLabels', {'No': 'inline label - always visible', 'Nama': 'no label', 'Lintang': 'no label', 'Bujur': 'no label', 'X': 'no label', 'Y': 'no label', 'DESKRIPSI': 'no label', 'PATH_FOTO': 'no label', 'Link Foto': 'no label', });
lyr_lucupokoknya_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});