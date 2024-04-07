var provinceCoordinates = [];
var lineCoordinates = []
var graphicAttBB = {
    "Huyện": "Bàu Bàng",
    "Diện Tích": "340,02 km²",
    "Dân Số": "105.371 người"
}
var url_img = 'http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png'
fetch("/BauBang/ProvinceCoordinates.txt")
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            provinceCoordinates.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));
fetch("LineCoordinates.txt")
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            lineCoordinates.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));
var point_template_commune = {
    title: "{Name}",
    content: `<p>{Location}</p>.`
};
console.log(provinceCoordinates)
// var point_template_province = {
//     title: "{Name}",
//     content: `  <b>{Location}</b>
//     <ul>
//         <li>Dân số: 105.371 người</li>
//         <li>Diện tích: 340,02 km²</li> 
//     </ul>`
// };
var point_template_province = {
    title: "{Huyện}",
    content: [
        {
            type: "fields",
            fieldInfos: [
                { fieldName: "Huyện" },
                { fieldName: "Diện Tích" },
                { fieldName: "Dân Số" },
            ],
        },
    ],
};
var point_template_school = {
    title: "{Name}",
    content: `  <p>Địa chỉ: {Location}</p>`
};
var point_template_area = {
    title: "{Name}",
    content: `<p>{Location}</p>.
    <ul>
        <li>Dân số: 2,6 triệu người</li>
        <li>Diện tích: 2694,64 km²</li> 
    </ul>
    `
};
var jsondataBB = {
    "points": [
        // {
        //     type: "point",
        //     longitude: 106.634722,
        //     latitude: 11.2725,
        //     Name: "TT.Lai Uyên",
        //     Location: "Bàu Bàng, Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-marker",
        //         color: [0, 153, 51],
        //         outline: {
        //             color: [255, 255, 255],
        //             width: 1
        //         }
        //     },
        //     popupTemplate: point_template_commune
        // },
        // {
        //     type: "point",
        //     longitude: 106.550556,
        //     latitude: 11.212222,
        //     Name: "Long Nguyên",
        //     Location: "Bàu Bàng, Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-marker",
        //         color: [0, 153, 51],
        //         outline: {
        //             color: [255, 255, 255],
        //             width: 1
        //         }
        //     },
        //     popupTemplate: point_template_commune
        // },
        // {
        //     type: "point",
        //     longitude: 106.608889,
        //     latitude: 11.202222,
        //     Name: "Lai Hưng",
        //     Location: "Bàu Bàng, Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-marker",
        //         color: [0, 153, 51],
        //         outline: {
        //             color: [255, 255, 255],
        //             width: 1
        //         }
        //     },
        //     popupTemplate: point_template_commune
        // },
        // {
        //     type: "point",
        //     longitude: 106.638734,
        //     latitude: 11.347171,
        //     Name: "Trừ Văn Thố",
        //     Location: "Bàu Bàng, Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-marker",
        //         color: [0, 153, 51],
        //         outline: {
        //             color: [255, 255, 255],
        //             width: 1
        //         }
        //     },
        //     popupTemplate: point_template_commune
        // },
        // {
        //     type: "point",
        //     longitude: 106.566944,
        //     latitude: 11.336389,
        //     Name: "Cây Trường II",
        //     Location: "Bàu Bàng, Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-marker",
        //         color: [0, 153, 51],
        //         outline: {
        //             color: [255, 255, 255],
        //             width: 1
        //         }
        //     },
        //     popupTemplate: point_template_commune
        // },
        // {
        //     type: "point",
        //     longitude: 106.660278,
        //     latitude: 11.243333,
        //     Name: "Tân Hưng",
        //     Location: "Bàu Bàng, Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-marker",
        //         color: [0, 153, 51],
        //         outline: {
        //             color: [255, 255, 255],
        //             width: 1
        //         }
        //     },
        //     popupTemplate: point_template_commune
        // },
        // {
        //     type: "point",
        //     longitude: 106.696667,
        //     latitude: 11.221944,
        //     Name: "Hưng Hòa",
        //     Location: "Bàu Bàng, Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-marker",
        //         color: [0, 153, 51],
        //         outline: {
        //             color: [255, 255, 255],
        //             width: 1
        //         }
        //     },
        //     popupTemplate: point_template_commune
        // },
        {
            type: "point",
            longitude: 106.6350296659463,
            latitude: 11.249030232581973,
            Name: "Trường THPT Bàu Bàng",
            Location: "6JXP+J26, TT. Lai Uyên, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.64250648089735,
            latitude: 11.354000351441531,
            Name: "Trường THCS Trừ Văn Thố",
            Location: "9J3V+J22, Trừ Văn Thố, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.57896895624805,
            latitude: 11.342047096618824,
            Name: "Trường THCS Cây Trường II",
            Location: "Cây Trường 2, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.57896895624805,
            latitude: 11.342047096618824,
            Name: "Trường THCS Cây Trường II",
            Location: "Cây Trường 2, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.63447706916406,
            latitude: 11.317418392625495,
            Name: "Trường Tiểu học Lai Uyên",
            Location: "8J8M+XR6, Ấp Bàu Hốt, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.63550830196404,
            latitude: 11.274471153087596,
            Name: "Trường THCS Lai Uyên",
            Location: "7JFP+Q6J, Ap Bàu Bàng, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.63532185625554,
            latitude: 11.246380550649418,
            Name: "Trường Tiểu Học Bàu Bàng",
            Location: "6JWP+H44, TT. Lai Uyên, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.62935902567882,
            latitude: 11.22338464443049,
            Name: "Trường tiểu học Kim Đồng, Bàu Bàng",
            Location: "6JFH+9P5, Unnamed, Road, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.61818523014792,
            latitude: 11.196126511608227,
            Name: "Trường tiểu học Lai Hưng",
            Location: "Quốc lộ 13, Ấp Lai Khê, X, Lai Hưng, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.68247146836654,
            latitude: 11.233065380185284,
            Name: "Trường Trung Học Cơ Sở Quang Trung",
            Location: "6MMJ+6XG, Hưng Hoà, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.6917105263474,
            latitude: 11.228473524709852,
            Name: "Trường Mầm Non Hồng Nhung",
            Location: "6MHR+CM5, ĐH612, Hưng Hoà, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.69414476675988,
            latitude: 11.224029539827802,
            Name: "Trường mầm non Hưng Hòa",
            Location: "6MFV+HJX, Ấp 5, Thành phố Bến Cát, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.69812321257254,
            latitude: 11.222064231221664,
            Name: "Trường Tiểu Học Hưng Hòa - H.Bàu Bàng",
            Location: "ĐH612, Hưng Hoà, Bàu Bàng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: url_img,
                width: "20px",
                height: "20px",
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_school
        },
    ],
    "lines": [
        {
            type: "polyline",
            paths: lineCoordinates,
            symbol: {
                type: "simple-line",
                color: [214, 48, 49],
                width: 4,
            },
            Name: "Tỉnh Bình Dương",
            Location: "Bình Dương, Việt Nam",
            popupTemplate: point_template_area
        }
    ],
    "polygons": [
        {
            type: "polygon",
            rings: provinceCoordinates,
            Name: "Bàu Bàng",
            // Location: "Bình Dương, Việt Nam",
            attributes: graphicAttBB,
            symbol: {
                type: "simple-fill",
                color: [186, 220, 88, 0.4],
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: point_template_province
        },

    ]
};

// require([
//     "esri/Map",
//     "esri/views/MapView",
//     "esri/Graphic",
//     "esri/layers/GraphicsLayer"
// ], function (Map, MapView, Graphic, GraphicsLayer) {

//     var map = new Map({
//         basemap: "topo-vector"
//     });
//     map.on("load", function () {
//         map.graphics.enableMouseEvents();
//     });

//     var view = new MapView({
//         container: "viewDiv",
//         map: map,
//         center: [106.63466897227721, 11.271098372588598],
//         zoom: 11,
//         highlightOptions: {
//             color: "blue"
//         }
//     });
//     var createGraphic = function (data) {
//         return new Graphic({
//             geometry: data,
//             symbol: data.symbol,
//             attributes: data,
//             popupTemplate: data.popupTemplate
//         });
//     };
//     const createPolygonsGraphic = (data) => {
//         return new Graphic({
//             geometry: data,
//             symbol: data.symbol,
//             attributes: data.attributes,
//             popupTemplate: data.popupTemplate
//         });
//     };
//     var graphicsLayer = new GraphicsLayer();
//     jsondata.points.forEach(function (data) {
//         graphicsLayer.add(createGraphic(data));
//     });
//     jsondata.lines.forEach(function (data) {
//         graphicsLayer.add(createGraphic(data));
//     });
//     jsondata.polygons.forEach(function (data) {
//         graphicsLayer.add(createPolygonsGraphic(data));
//     });
//     map.add(graphicsLayer);


// });