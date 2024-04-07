var provinceCoordinates = [];
var lineCoordinates = []

fetch("di-an.txt")
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            provinceCoordinates.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));
fetch("di-an.txt")
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            lineCoordinates.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));
// fetch("thuan-an.txt")
//     .then((res) => res.text())
//     .then((text) => {
//         var lines = text.split('\n');

//         lines.forEach(function (line) {
//             var values = line.split(',');

//             provinceCoordinates.push([parseFloat(values[1]), parseFloat(values[0])]);
//         });
//     })
//     .catch((e) => console.error(e));
// fetch("thuan-an.txt")
//     .then((res) => res.text())
//     .then((text) => {
//         var lines = text.split('\n');

//         lines.forEach(function (line) {
//             var values = line.split(',');

//             lineCoordinates.push([parseFloat(values[1]), parseFloat(values[0])]);
//         });
//     })
//     .catch((e) => console.error(e));
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
var jsondata = {
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
            Name: "Dĩ An",
            Location: "Bình Dương, Việt Nam",
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