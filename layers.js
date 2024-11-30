ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([107.110526, -7.765033, 108.661832, -6.928471]);
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
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> Babakanloa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> Bagendit<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> Balewangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> Banjarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> Banjarwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> Banyuasih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> Banyuresmi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> Barusari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> Barusuda<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> Bayongbong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> Binakarya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> Bojong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> Buanamekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> Bugel<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> Bungbulang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> Buniasih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> Campaka<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> Campakasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> Cangkuang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> Caringin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> Ciaro<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> Cibahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> Cibatu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> Cibiuk Kaler<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> Cibiuk Kidul<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> Cibodas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> Cibugel<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> Cibuluh<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> Cibunar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> Ciburial<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> Ciburuy<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> Cidatar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> Cidugaleun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> Ciela<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> Cigadog<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> Cigagade<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_36.png" /> Cigawir<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_37.png" /> Cigedug<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_38.png" /> Cigintung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_39.png" /> Cihaurkuning<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_40.png" /> Cihawuk<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_41.png" /> Ciherang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_42.png" /> Ciheras<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_43.png" /> Cihikeu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_44.png" /> Cihuni<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_45.png" /> Cihurip<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_46.png" /> Cijambe<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_47.png" /> Cijayana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_48.png" /> Cijolang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_49.png" /> Cikajang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_50.png" /> Cikandang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_51.png" /> Cikarang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_52.png" /> Cikedokan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_53.png" /> Cikelet<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_54.png" /> Cikembang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_55.png" /> Cikembulan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_56.png" /> Cikondang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_57.png" /> Cilampuyang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_58.png" /> Cilawu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_59.png" /> Cilengkrang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_60.png" /> Cimahi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_61.png" /> Cimangaten<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_62.png" /> Cimaragang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_63.png" /> Cimaragas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_64.png" /> Cimareme<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_65.png" /> Cimuncang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_66.png" /> Cimungkal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_67.png" /> Cimurah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_68.png" /> Cinagara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_69.png" /> Cinisti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_70.png" /> Cinta<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_71.png" /> Cintaasih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_72.png" /> Cintadamai<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_73.png" /> Cintakaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_74.png" /> Cintamanik<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_75.png" /> Cintanagara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_76.png" /> Cintarakyat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_77.png" /> Cintarasa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_78.png" /> Cinunuk<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_79.png" /> Cipaganti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_80.png" /> Cipanas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_81.png" /> Cipancar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_82.png" /> Cipangramatan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_83.png" /> Cipareuan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_84.png" /> Cipasang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_85.png" /> Cipicung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_86.png" /> Cirapuhan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_87.png" /> Ciroyom<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_88.png" /> Cisaat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_89.png" /> Cisangkal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_90.png" /> Cisarua<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_91.png" /> Cisero<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_92.png" /> Cisewu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_93.png" /> Cisitu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_94.png" /> Cisompet<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_95.png" /> Cisurupan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_96.png" /> Citamba<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_97.png" /> Citangtu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_98.png" /> Citengah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_99.png" /> Citeras<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_100.png" /> Ciudian<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_101.png" /> Ciwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_102.png" /> Dangdeur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_103.png" /> Dangiang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_104.png" /> Dano<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_105.png" /> Dawungsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_106.png" /> Dayeuhmanggung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_107.png" /> Depok<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_108.png" /> Dirgahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_109.png" /> Drawati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_110.png" /> Dukuh<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_111.png" /> Dungusiku<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_112.png" /> Dunguswiru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_113.png" /> Galihpakuwon<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_114.png" /> Gandamekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_115.png" /> Garumukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_116.png" /> Giriawas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_117.png" /> Girijaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_118.png" /> Girimukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_119.png" /> Godog<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_120.png" /> Gombong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_121.png" /> Gunamekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_122.png" /> Hanjuang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_123.png" /> Haruman<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_124.png" /> Harumansari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_125.png" /> Haurpanggung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_126.png" /> Hegarmanah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_127.png" /> Hegarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_128.png" /> Ibun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_129.png" /> Indralayang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_130.png" /> Jangkurang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_131.png" /> Jati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_132.png" /> Jatimulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_133.png" /> Jatisari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_134.png" /> Jatiwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_135.png" /> Jayabakti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_136.png" /> Jayamukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_137.png" /> Jayaraga<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_138.png" /> Jayawaras<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_139.png" /> Kadipaten<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_140.png" /> Kadongdong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_141.png" /> Kadungora<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_142.png" /> Kandangmukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_143.png" /> Karamatwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_144.png" /> Karangagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_145.png" /> Karanganyar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_146.png" /> Karangmulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_147.png" /> Karangpawitan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_148.png" /> Karangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_149.png" /> Karangtengah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_150.png" /> Karangwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_151.png" /> Karyajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_152.png" /> Karyamekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_153.png" /> Karyamukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_154.png" /> Karyasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_155.png" /> Kawungsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_156.png" /> Keresek<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_157.png" /> Kersamaju<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_158.png" /> Kersamanah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_159.png" /> Kersamenak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_160.png" /> Kertajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_161.png" /> Kertamukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_162.png" /> Kertanegla<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_163.png" /> Kiarajangkung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_164.png" /> Kolot<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_165.png" /> Kota Kulon<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_166.png" /> Kota Wetan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_167.png" /> Kutanagara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_168.png" /> Kutawaringin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_169.png" /> Laksana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_170.png" /> Langensari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_171.png" /> Lebakagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_172.png" /> Lebakjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_173.png" /> Leles<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_174.png" /> Lemahputih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_175.png" /> Lembang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_176.png" /> Lengkongjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_177.png" /> Leuwigoong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_178.png" /> Lewobaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_179.png" /> Limbangan Barat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_180.png" /> Limbangan Tengah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_181.png" /> Limbangan Timur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_182.png" /> Linggamanik<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_183.png" /> Linggamukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_184.png" /> Linggarjati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_185.png" /> Lingkungpasir<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_186.png" /> Loa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_187.png" /> Majasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_188.png" /> Malangbong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_189.png" /> Mancagahar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_190.png" /> Mandalakasih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_191.png" /> Mandalasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_192.png" /> Mandalawangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_193.png" /> Mangkurayat<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_194.png" /> Margacinta<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_195.png" /> Margahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_196.png" /> Margalaksana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_197.png" /> Margaluyu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_198.png" /> Margamulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_199.png" /> Margawati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_200.png" /> Maripari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_201.png" /> Maroko<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_202.png" /> Mekarasih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_203.png" /> Mekarbakti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_204.png" /> Mekargalih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_205.png" /> Mekarjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_206.png" /> Mekarlaksana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_207.png" /> Mekarluyu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_208.png" /> Mekarmukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_209.png" /> Mekarmulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_210.png" /> Mekarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_211.png" /> Mekartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_212.png" /> Mekarwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_213.png" /> Muarasanding<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_214.png" /> Mulyajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_215.png" /> Mulyasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_216.png" /> Nagreg<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_217.png" /> Nagrog<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_218.png" /> Nanggewer<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_219.png" /> Nanjungjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_220.png" /> Neglasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_221.png" /> Neglawangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_222.png" /> Ngampangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_223.png" /> Ngamplang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_224.png" /> Nyalindung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_225.png" /> Paas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_226.png" /> Padaasih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_227.png" /> Padaawas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_228.png" /> Padahurip<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_229.png" /> Padamukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_230.png" /> Padamulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_231.png" /> Padasuka<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_232.png" /> Pakenjeng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_233.png" /> Pakuwon<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_234.png" /> Pamalayan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_235.png" /> Pamekarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_236.png" /> Pameungpeuk<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_237.png" /> Paminggir<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_238.png" /> Pamulihan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_239.png" /> Pananjung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_240.png" /> Panawa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_241.png" /> Pancasura<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_242.png" /> Panembong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_243.png" /> Pangauban<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_244.png" /> Pangeureunan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_245.png" /> Pangrumasan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_246.png" /> Panyindangan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_247.png" /> Parakan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_248.png" /> Parentas<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_249.png" /> Pasanggrahan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_250.png" /> Pasanggrahhan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_251.png" /> Pasawahan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_252.png" /> Pasirkiamis<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_253.png" /> Pasirlangu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_254.png" /> Pasirwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_255.png" /> Pasirwaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_256.png" /> Pataruman<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_257.png" /> Pelitaasih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_258.png" /> Peundeuy<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_259.png" /> Puncakbaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_260.png" /> Purbayani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_261.png" /> Purwarahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_262.png" /> Puspamukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_263.png" /> Putrajawa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_264.png" /> Rancabango<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_265.png" /> Rancasalak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_266.png" /> Regol<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_267.png" /> Sadang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_268.png" /> Sagara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_269.png" /> Sakawayana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_270.png" /> Salakurai<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_271.png" /> Salamnunggal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_272.png" /> Samarang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_273.png" /> Samida<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_274.png" /> Sancang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_275.png" /> Sanding<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_276.png" /> Santosa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_277.png" /> Saribakti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_278.png" /> Sarimukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_279.png" /> Sekarwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_280.png" /> Selaawi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_281.png" /> Sikahurip<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_282.png" /> Simpang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_283.png" /> Simpangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_284.png" /> Simpen<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_285.png" /> Sinarjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_286.png" /> Sindanggalih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_287.png" /> Sindanglaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_288.png" /> Sindangmekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_289.png" /> Sindangpalay<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_290.png" /> Sindangratu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_291.png" /> Sindangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_292.png" /> Sindangsuka<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_293.png" /> Sindulang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_294.png" /> Singajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_295.png" /> Sirnabakti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_296.png" /> Sirnagalih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_297.png" /> Sirnajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_298.png" /> Sirnasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_299.png" /> Situgede<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_300.png" /> Situjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_301.png" /> Situsaeur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_302.png" /> Situsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_303.png" /> Srirahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_304.png" /> Suci<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_305.png" /> Sucikaler<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_306.png" /> Sudalarang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_307.png" /> Sukabakti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_308.png" /> Sukagalih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_309.png" /> Sukahaji<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_310.png" /> Sukahati<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_311.png" /> Sukahurip<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_312.png" /> Sukajadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_313.png" /> Sukajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_314.png" /> Sukakarya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_315.png" /> Sukalaksana<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_316.png" /> Sukalilah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_317.png" /> Sukaluyu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_318.png" /> Sukamaju<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_319.png" /> Sukamanah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_320.png" /> Sukamantri<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_321.png" /> Sukamenak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_322.png" /> Sukamerang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_323.png" /> Sukamukti<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_324.png" /> Sukamulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_325.png" /> Sukamurni<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_326.png" /> Sukanagara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_327.png" /> Sukanegla<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_328.png" /> Sukapada<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_329.png" /> Sukaraja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_330.png" /> Sukarame<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_331.png" /> Sukarasa<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_332.png" /> Sukaratu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_333.png" /> Sukaresmi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_334.png" /> Sukasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_335.png" /> Sukasenang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_336.png" /> Sukasono<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_337.png" /> Sukatani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_338.png" /> Sukawangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_339.png" /> Sukawargi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_340.png" /> Sukawening<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_341.png" /> Sundakerta<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_342.png" /> Surabaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_343.png" /> Talaga<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_344.png" /> Talagajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_345.png" /> Talagasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_346.png" /> Talagawangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_347.png" /> Tambakbaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_348.png" /> Tambaksari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_349.png" /> Tangulun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_350.png" /> Tanjungjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_351.png" /> Tanjungkamuning<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_352.png" /> Tanjungkarang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_353.png" /> Tanjungkarya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_354.png" /> Tanjungmulya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_355.png" /> Tanjungsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_356.png" /> Tanjungwangi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_357.png" /> Taraju<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_358.png" /> Tarogong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_359.png" /> Tarumajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_360.png" /> Tegalgede<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_361.png" /> Tegallega<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_362.png" /> Tegalpanjang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_363.png" /> Tenjonagara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_364.png" /> Tenjowaringin<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_365.png" /> Toblong<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_366.png" /> Wanajaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_367.png" /> Wanakerta<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_368.png" /> Wanamekar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_369.png" /> Wanaraja<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_370.png" /> Wanasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_371.png" /> Wanasuka<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_372.png" /> Wandasari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_373.png" /> Wangonjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_374.png" /> Wangunjaya<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_375.png" /> <br />'
        });
var format_JALAN_LN_25K_2 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_2 = format_JALAN_LN_25K_2.readFeatures(json_JALAN_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_2.addFeatures(features_JALAN_LN_25K_2);
var lyr_JALAN_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_2, 
                style: style_JALAN_LN_25K_2,
                popuplayertitle: "JALAN_LN_25K",
                interactive: true,
                    title: '<img src="styles/legend/JALAN_LN_25K_2.png" /> JALAN_LN_25K'
                });

lyr_OSMStandard_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_JALAN_LN_25K_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_JALAN_LN_25K_2];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_LN_25K_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JALAN_LN_25K_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_LN_25K_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_25K_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});