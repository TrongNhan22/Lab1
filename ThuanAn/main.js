var provinceCoordinates = [];
var lineCoordinates = []

fetch("thuan-an.txt")
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            provinceCoordinates.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));
fetch("thuan-an.txt")
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
var point_template_province = {
    title: "{Name}",
    content: `  <b>{Location}</b>
    <ul>
        <li>Dân số: 105.371 người</li>
        <li>Diện tích: 340,02 km²</li> 
    </ul>`
};
var point_template_school = {
    title: "{Name}",
    content: `  <p>Địa chỉ: {Location}</p>`
};
var point_template_area = {
    title: "{Name}",
    content: `<p>{Location}</p>.
    <ul>
        <li>Dân số: 618.984 người</li>
        <li>Diện tích: 83,71 km²</li> 
    </ul>
    `
};
var jsondata = {
    "points": [
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
        }
    ],
    "polygons": [
        {
            type: "polygon",
            rings: provinceCoordinates,
            Name: "Thuận An",
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
        center: [106.71853, 10.932590],
        zoom: 11,
        highlightOptions: {
            color: "orange"
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