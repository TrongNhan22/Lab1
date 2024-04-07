var provinceCoordinates = [];
var lineCoordinates = [];
var thuanAn = [];
var thuanAnLine = [];
var dauTieng = [];
var bacTanUyen = [];

fetch('./data/DiAn/di-an.txt')
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            provinceCoordinates.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));
// fetch('./data/DiAn/di-an.txt')
//     .then((res) => res.text())
//     .then((text) => {
//         var lines = text.split('\n');

//         lines.forEach(function (line) {
//             var values = line.split(',');

//             lineCoordinates.push([parseFloat(values[1]), parseFloat(values[0])]);
//         });
//     })
//     .catch((e) => console.error(e));
fetch("./data/ThuanAn/thuan-an.txt")
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            thuanAn.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));
// fetch("./data/ThuanAn/thuan-an.txt")
//     .then((res) => res.text())
//     .then((text) => {
//         var lines = text.split('\n');

//         lines.forEach(function (line) {
//             var values = line.split(',');

//             thuanAnLine.push([parseFloat(values[1]), parseFloat(values[0])]);
//         });
//     })
//     .catch((e) => console.error(e));


//dầu tiếng
fetch('./data/DauTieng/data.txt')
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            dauTieng.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));

//Bắc Tân Uyên
fetch('./data/BacTanUyen/BacTanUyen.txt')
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            bacTanUyen.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));

var point_template_commune = {
    title: "{Name}",
    content: `<p>{Location}</p>.`
};

var point_template_school = {
    title: "{Name}",
    content: `  <p>Địa chỉ: {Location}</p>`
};
var point_template_area = {
    title: "{Name}",
    content: `<p>{Location}</p>.
    <ul>
        <li>Diện tích: 60,05 km</li> 
        <li>Dân số: 463.023 người</li>
    </ul>
    `
};
var point_template_province = {
    title: "{Name}",
    content: `  <b>{Location}</b>
    <ul>
        <li>Dân số: 463.023 người</li>
        <li>Diện tích: 60,05 km²</li> 
    </ul>`
};
var list_points = [];
var string_points = "";
var myCoordinates = [];

var jsondata = {
    //pass data trường vào
    "points": [
        {
            type: "point",
					longitude: 106.80147214508797,
					latitude:  10.877582411470348,
					Name: "Trường Đại học Quốc Tế - Đại học Quốc gia Thành phố Hồ Chí Minh",
					Location: "Dĩ An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.80557925128646,
					latitude:  10.88047426752339, 
					Name: "Trường Đại học Bách Khoa (Cơ sở 2) - Đại học Quốc gia Thành phố Hồ Chí Minh",
					Location: "Dĩ An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.78574198005812, 
					latitude:  10.889869444299839, 
					Name: "Trường Trung học Cơ Sở Đông Hòa",
					Location: "Đông Hòa, Dĩ An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.8131358250663, 
					latitude:  10.892331363036389, 
					Name: "Trường Cao đẳng Nghề Đồng An",
					Location: "Dĩ An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.76659181020409, 
					latitude:  10.893721596055249, 
					Name: "Trường Trung học Cở sở Võ Trường Toản",
					Location: "Dĩ An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.76859414940927, 
					latitude:  10.911393891797923, 
					Name: "Trường Trung học Phổ thông Dĩ An",
					Location: "Dĩ An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.76059509762919,
					latitude:  10.926115741574531, 
					Name: "Trường Trung học Cơ sở Tân Đông Hiệp",
					Location: "Dĩ An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.80886729629617, 
					latitude:  10.892605355695226, 
					Name: "Trường Trung học Cơ sở Bình Thắng",
					Location: "Dĩ An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.70522411995498, 
					latitude:  10.90096816000094,
					Name: "Trường Tiểu học Bán trú Phan Chu Trinh",
					Location: "Thuận An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.69739206963114,  
					latitude:  10.90889055479149,
					Name: "Trường Tiểu học Lái Thiêu",
					Location: "Thuận An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.70026739769519,   
					latitude:  10.91243027997835,
					Name: "Trường Trung học Cơ sở Tân Thới",
					Location: "Thuận An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.68321706243819,   
					latitude:  10.949907219825494,
					Name: "Trường Tiểu học Lý Tự Trọng",
					Location: "Thuận An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.69124223181096,   
					latitude:  10.949317343075876,
					Name: "Trường Tiểu học Lương Thế Vinh",
					Location: "Thuận An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.69802285620099,    
					latitude:  10.958923761002842,
					Name: "Trường Cao đẳng Y Tế Bình Dương",
					Location: "Thuận An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.69810868688947,    
					latitude:  10.955974455329928,
					Name: "Trường Cao đẳng Nghề Việt Nam",
					Location: "Thuận An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.70840836950718,     
					latitude:  10.948011183235016,
					Name: "Trường Cao đẳng Nghề Việt Nam - Singapore",
					Location: "Thuận An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
					},
					popupTemplate: point_template_school
        },
        {
            type: "point",
					longitude: 106.71171285101362, 
                    latitude: 10.956774984061632,
					Name: "Trường Đại học Kinh tế - Kỹ thuật Bình Dương",
					Location: "Thuận An, Bình Dương, Vietnam",
					symbol: {
						type: "picture-marker",
						url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
						width: "40px",
						height: "40px"
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
        },
        {
            type: "polyline",
            paths: thuanAnLine,
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
            Name: "Dĩ An",
            Location: "Bình Dương, Việt Nam",
            symbol: {
                type: "simple-fill",
                color: [186, 220, 88, 0.4],
                outline: {
                    color: [254, 145, 246, 0.27],
                    width: 2
                }
            },
            popupTemplate: point_template_province
        },
        {
            type: "polygon",
            rings: thuanAn,
            Name: "Thuận An",
            Location: "Bình Dương, Việt Nam",
            symbol: {
                type: "simple-fill",
                color: [39, 255, 174, 0.27],
                outline: {
                    color: [254, 145, 246, 0.27],
                    width: 2
                }
            },
            popupTemplate: point_template_province
        },
        {
            type: "polygon",
            rings: dauTieng,
            Name: "Dầu Tiếng",
            Location: "Bình Dương, Việt Nam",
            symbol: {
                type: "simple-fill",
                color: [186, 220, 88, 0.4],
                outline: {
                    color: [254, 145, 246, 0.27],
                    width: 2
                }
            },
            popupTemplate: point_template_province
        },
        {
            type: "polygon",
            rings: bacTanUyen,
            Name: "Bắc Tân Uyên",
            Location: "Bình Dương, Việt Nam",
            symbol: {
                type: "simple-fill",
                color: [186, 220, 88, 0.4],
                outline: {
                    color: [254, 145, 246, 0.27],
                    width: 2
                }
            },
            popupTemplate: point_template_province
        },
    ]
};

require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"
], function (Map, MapView, Graphic, GraphicsLayer) {

    var map = new Map({
        basemap: "topo-vector"
    });
    map.on("load", function () {
        map.graphics.enableMouseEvents();
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [106.768658, 10.918769],
        zoom: 11,
        highlightOptions: {
            color: "blue"
        }
    });

    var createGraphic = function (data) {
        return new Graphic({
            geometry: data,
            symbol: data.symbol,
            attributes: data,
            popupTemplate: data.popupTemplate
        });
    };

    var graphicsLayer = new GraphicsLayer();
    jsondata.points.forEach(function (data) {
        graphicsLayer.add(createGraphic(data));
    });
    jsondata.lines.forEach(function (data) {
        graphicsLayer.add(createGraphic(data));
    });
    jsondata.polygons.forEach(function (data) {
        graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
});