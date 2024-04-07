var baubang = [];
var bencat = [];
var baubangline = []
var ThuDau1 = [];
var TanUyen = [];

var graphicAttBB = {
    "Huyện": "Bàu Bàng",
    "Diện Tích": "340,02 km²",
    "Dân Số": "105.371 người"
}
var url_img = 'http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png'
fetch("./data/TanUyen/TanUyen-Polygon.txt")
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            TanUyen.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));
fetch("./data/BauBang/ProvinceCoordinates.txt")
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            baubang.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));
fetch("./data/BauBang/LineCoordinates.txt")
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            baubangline.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));

var point_template_school = {
    title: "{Name}",
    content: `  <p>Địa chỉ: {Location}</p>`
};
var provinceCoordinates = [];
var lineCoordinates = [];
var thuanAn = [];
var thuanAnLine = [];
var dauTieng = [];
var bacTanUyen = [];
const imgLT = "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png"

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

// bencat
fetch("./data/BenCat/bencat.txt")
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            bencat.push([parseFloat(values[1]), parseFloat(values[0])]);
        });
    })
    .catch((e) => console.error(e));

console.log(bencat);
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
// Thủ Dầu Một
fetch("./data/ThuDau1/ThuDau1.txt")
    .then((res) => res.text())
    .then((text) => {
        var lines = text.split('\n');

        lines.forEach(function (line) {
            var values = line.split(',');

            ThuDau1.push([parseFloat(values[1]), parseFloat(values[0])]);
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

graphicAttDA = {
    "Huyện": "Dĩ An",
    "Diện Tích": "60,05 km²",
    "Dân Số": "463.023 người"
}

graphicAttBTU = {
    "Huyện": "Bắc Tân Uyên",
    "Diện Tích": "400 km²",
    "Dân Số": "67.917 người"
}

graphicAttTA = {
    "Huyện": "Thuận An",
    "Diện Tích": "83,71 km²",
    "Dân Số": "618.984 người"
}

graphicAttDT = {
    "Huyện": "Dầu Tiếng",
    "Diện Tích": "721,95 km²",
    "Dân Số": "22.403 người"
}

graphicAttPG = {
    "Huyện": "Phú Giáo",
    "Diện Tích": "544.4 km²",
    "Dân Số": "95433 người"
}

graphicAttPG = {
    "Huyện": "Phú Giáo",
    "Diện Tích": "544.4 km²",
    "Dân Số": "95433 người"
}

graphicAttBC = {
    "Huyện": "Bến Cát",
    "Diện Tích": "234,35 km²",
    "Dân Số": "364.578 người",
};

graphicAttTD1 = {
    "Huyện": "Thủ Dầu Một",
    "Diện Tích": "118,91 km²",
    "Dân Số": "336.705 người",
};
graphicAttTU = {
    "Huyện": "Tân Uyên",
    "Diện Tích": " 100 km²",
    "Dân Số": " 100 người",
};
var popupTemplate_polygon = {
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

var jsondata = {
    //pass data trường vào
    "points": [
        {
            type: "point",
            longitude: 106.80147214508797,
            latitude: 10.877582411470348,
            Name: "Trường Đại học Quốc Tế - Đại học Quốc gia Thành phố Hồ Chí Minh",
            Location: "Dĩ An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.80557925128646,
            latitude: 10.88047426752339,
            Name: "Trường Đại học Bách Khoa (Cơ sở 2) - Đại học Quốc gia Thành phố Hồ Chí Minh",
            Location: "Dĩ An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.78574198005812,
            latitude: 10.889869444299839,
            Name: "Trường Trung học Cơ Sở Đông Hòa",
            Location: "Đông Hòa, Dĩ An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.8131358250663,
            latitude: 10.892331363036389,
            Name: "Trường Cao đẳng Nghề Đồng An",
            Location: "Dĩ An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.76659181020409,
            latitude: 10.893721596055249,
            Name: "Trường Trung học Cở sở Võ Trường Toản",
            Location: "Dĩ An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.76859414940927,
            latitude: 10.911393891797923,
            Name: "Trường Trung học Phổ thông Dĩ An",
            Location: "Dĩ An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.76059509762919,
            latitude: 10.926115741574531,
            Name: "Trường Trung học Cơ sở Tân Đông Hiệp",
            Location: "Dĩ An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.80886729629617,
            latitude: 10.892605355695226,
            Name: "Trường Trung học Cơ sở Bình Thắng",
            Location: "Dĩ An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.70522411995498,
            latitude: 10.90096816000094,
            Name: "Trường Tiểu học Bán trú Phan Chu Trinh",
            Location: "Thuận An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.69739206963114,
            latitude: 10.90889055479149,
            Name: "Trường Tiểu học Lái Thiêu",
            Location: "Thuận An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.70026739769519,
            latitude: 10.91243027997835,
            Name: "Trường Trung học Cơ sở Tân Thới",
            Location: "Thuận An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.68321706243819,
            latitude: 10.949907219825494,
            Name: "Trường Tiểu học Lý Tự Trọng",
            Location: "Thuận An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.69124223181096,
            latitude: 10.949317343075876,
            Name: "Trường Tiểu học Lương Thế Vinh",
            Location: "Thuận An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.69802285620099,
            latitude: 10.958923761002842,
            Name: "Trường Cao đẳng Y Tế Bình Dương",
            Location: "Thuận An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.69810868688947,
            latitude: 10.955974455329928,
            Name: "Trường Cao đẳng Nghề Việt Nam",
            Location: "Thuận An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.70840836950718,
            latitude: 10.948011183235016,
            Name: "Trường Cao đẳng Nghề Việt Nam - Singapore",
            Location: "Thuận An, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
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
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {


            type: "point",
            longitude: 106.412005,
            latitude: 11.228524,
            Name: "Trường Tiểu học Thanh Tân",
            Location: "Dầu Tiếng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        }, {


            type: "point",
            longitude: 106.51384790233195,
            latitude: 11.427301867835798, 
            Name: "Trường Tiểu học Thanh An",
            Location: "Dầu Tiếng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.489086,
            latitude: 11.315869,
            Name: "Trường Tiểu học Long Hoà",
            Location: "Dầu Tiếng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.362014,
            latitude: 11.269928,
            Name: "Trường Tiểu học Ngô Quyền",
            Location: "Dầu Tiếng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.39157294549402,
            latitude: 11.286595874746281,
            Name: "THCS Nguyễn Bỉnh Khiêm",
            Location: "Dầu Tiếng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.47615108841306,
            latitude: 11.227818345829892,
            Name: "Trường Trung Học Cơ Sở An Lập",
            Location: "Dầu Tiếng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.47955432558398,
            latitude: 11.325511981849067,
            Name: "Trường Trung Học Cơ Sở Long Hoà",
            Location: "Dầu Tiếng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.4493170810887,
            latitude: 11.406475810500352,
            Name: "Trường THCS Minh Tân",
            Location: "Dầu Tiếng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.47860846944286,
            latitude: 11.439919039818063,
            Name: "Trường THPT Phan Bội Châu",
            Location: "Dầu Tiếng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.36722553080689,
            latitude: 11.281741791697334,
            Name: "Trường THPT Dầu Tiếng",
            Location: "Dầu Tiếng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            type: "point",
            longitude: 106.44413879796073,
            latitude: 11.176174310372422,
            Name: "Trường THPT Thanh Tuyền",
            Location: "Dầu Tiếng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },

        {
            type: "point",
            longitude: 106.47848567003008,
            latitude: 11.440763666510083,
            Name: "Trường THCS Minh Hòa",
            Location: "Dầu Tiếng, Bình Dương, Vietnam",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png",
                width: "20px",
                height: "20px"
            },
            popupTemplate: point_template_school
        },
        {
            point: {
                type: "point",
                longitude: 106.806082,
                latitude: 11.143731,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường Tiểu Học Tân Lập",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.863887,
                latitude: 11.172877,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường tiểu học Tân Định",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.843484,
                latitude: 11.139647,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường Tiểu Học Tân Thành",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.839967,
                latitude: 11.136174,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường Trung học Phổ thông Lê Lợi",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.842656,
                latitude: 11.131467,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường THCS Tân Thành",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.862511,
                latitude: 11.115753,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường Tiểu Học Đất Cuốc",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.828737,
                latitude: 11.092933,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Mầm Non HẠNH PHÚC",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.829255,
                latitude: 11.065961,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường THCS Tân Mỹ",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.847329,
                latitude: 11.037517,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường tiểu học Thường Tân",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.859834,
                latitude: 11.034011,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường Mầm non Thường Tân",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.843586,
                latitude: 11.145952,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường mầm non Hoa Phong Lan",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.836064,
                latitude: 11.052116,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường tiểu học Huỳnh Thị Chấu",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.944599,
                latitude: 11.127033,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường Tiểu học Hiếu Liêm",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.742863,
                latitude: 11.143134,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường Tiểu học Bình Mỹ",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.727902,
                latitude: 11.183679,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường THPT Tân Bình",
            }
        },
        {
            point: {
                type: "point",
                longitude: 106.698748,
                latitude: 11.181018,
            },
            markerSymbol: {
                type: "picture-marker", url: imgLT,
                width: "20px", height: "20px",
            },
            pointAtt: {
                Name: "Trường Tiểu học Tân Bình",
            }
        },
        // bau bang
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
        {
            type: "point",
            longitude: 106.797892,
            latitude: 11.062278,
            Name: "Trường THPT Huỳnh Văn Nghệ",
            Location: "3Q6X+W39, 747, Uyên Hưng, Tân Uyên, Bình Dương, Vietnam",
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
            longitude: 106.797892,
            latitude: 11.062278,
            Name: "Trường THPT Huỳnh Văn Nghệ",
            Location: "3Q6X+W39, 747, Uyên Hưng, Tân Uyên, Bình Dương, Vietnam",
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
            longitude: 106.763675,
            latitude: 10.982429,
            Name: "TRƯỜNG THPT THÁI HÒA( MỚI)",
            Location: "XQJ7+RG2, Thái Hoà, Tân Uyên, Bình Dương, Vietnam",
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
            attributes: graphicAttDA,
            Location: "Bình Dương, Việt Nam",
            symbol: {
                type: "simple-fill",
                color: [186, 220, 88, 0.4],
                outline: {
                    color: [254, 145, 246, 0.27],
                    width: 2
                }
            },
            popupTemplate: popupTemplate_polygon
        },
        {
            type: "polygon",
            rings: thuanAn,
            Name: "Thuận An",
            attributes: graphicAttTA,
            Location: "Bình Dương, Việt Nam",
            symbol: {
                type: "simple-fill",
                color: [39, 255, 174, 0.27],
                outline: {
                    color: [254, 145, 246, 0.27],
                    width: 2
                }
            },
            popupTemplate: popupTemplate_polygon
        },
        {
            type: "polygon",
            rings: dauTieng,
            Name: "Dầu Tiếng",
            attributes: graphicAttDT,
            Location: "Bình Dương, Việt Nam",
            symbol: {
                type: "simple-fill",
                color: [186, 220, 88, 0.4],
                outline: {
                    color: [254, 145, 246, 0.27],
                    width: 2
                }
            },
            popupTemplate: popupTemplate_polygon
        },
        // bau bang
        {
            type: "polygon",
            rings: baubang,
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
            popupTemplate: popupTemplate_polygon
        },
        // bencat
        {
            type: "polygon",
            rings: bencat,
            Name: "Bến Cát",
            attributes: graphicAttBC,
            Location: "Bình Dương, Việt Nam",
            symbol: {
                type: "simple-fill",
                color: [186, 220, 88, 0.4],
                outline: {
                    color: [254, 145, 246, 0.27],
                    width: 2
                }
            },
            popupTemplate: popupTemplate_polygon
        },
    ]
};



// bactanuyen



const pointListBTU = [
    {
        point: {
            type: "point",
            longitude: 106.806082,
            latitude: 11.143731,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Tân Lập",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.863887,
            latitude: 11.172877,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường tiểu học Tân Định",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.843484,
            latitude: 11.139647,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Tân Thành",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.839967,
            latitude: 11.136174,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Trung học Phổ thông Lê Lợi",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.842656,
            latitude: 11.131467,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường THCS Tân Thành",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.862511,
            latitude: 11.115753,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Đất Cuốc",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.828737,
            latitude: 11.092933,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Mầm Non HẠNH PHÚC",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.829255,
            latitude: 11.065961,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường THCS Tân Mỹ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.847329,
            latitude: 11.037517,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường tiểu học Thường Tân",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.859834,
            latitude: 11.034011,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Mầm non Thường Tân",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.843586,
            latitude: 11.145952,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường mầm non Hoa Phong Lan",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.836064,
            latitude: 11.052116,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường tiểu học Huỳnh Thị Chấu",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.944599,
            latitude: 11.127033,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Hiếu Liêm",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.742863,
            latitude: 11.143134,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Bình Mỹ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.727902,
            latitude: 11.183679,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường THPT Tân Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.698748,
            latitude: 11.181018,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Tiểu học Tân Bình",
        }
    }, {
        point: {
            type: "point",
            longitude: 106.599037,
            latitude: 11.150487,
        },
        markerSymbol: {
            type: "picture-marker", url: url_img,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường THCS Lê Quý Đôn",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.609936,
            latitude: 11.152775,
        },
        markerSymbol: {
            type: "picture-marker", url: url_img,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường THPT Bến Cát",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.569635,
            latitude: 11.076631,
        },
        markerSymbol: {
            type: "picture-marker", url: url_img,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường THCS Phú An",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.610235,
            latitude: 11.138878,
        },
        markerSymbol: {
            type: "picture-marker", url: url_img,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Võ Thị Sáu",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.652787,
            latitude: 11.140007,
        },
        markerSymbol: {
            type: "picture-marker", url: url_img,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Chánh Phú Hòa",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.592094,
            latitude: 11.151433,
        },
        markerSymbol: {
            type: "picture-marker", url: url_img,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Trần Quốc Tuấn",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.611557,
            latitude: 11.146194,
        },
        markerSymbol: {
            type: "picture-marker", url: url_img,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường THCS Mỹ Phước",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.643854,
            latitude: 11.121152,
        },
        markerSymbol: {
            type: "picture-marker", url: url_img,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Trần Văn Ơn",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.630198,
            latitude: 11.053828,
        },
        markerSymbol: {
            type: "picture-marker", url: url_img,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Tân Định",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.594760,
            latitude: 11.151210,
        },
        markerSymbol: {
            type: "picture-marker", url: url_img,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Mầm Non Hướng Dương",
        }
    },

    // phugiao
    {
        point: {
            type: "point",
            longitude: 106.747962,
            latitude: 11.332790,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường THCS Trần Quang Diệu",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.749352,
            latitude: 11.314819,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Tiểu học xã Tân Hiệp ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.674947,
            latitude: 11.326856,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Tân Long ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.679790,
            latitude: 11.330950,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Mẫu Giáo Thanh Tân ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.855911,
            latitude: 11.283045,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Tiểu học - Trung Học Cơ Sở Tam Lập ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.822036,
            latitude: 11.329060,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường THCS An Bình",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.793484,
            latitude: 11.292129,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Tiểu Học Phước Vĩnh A ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.793367,
            latitude: 11.296163,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường THCS Trần Hưng Đạo ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.793403,
            latitude: 11.287677,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường THPT Phước Vĩnh ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.812896,
            latitude: 11.292586,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Trung học cơ sở Nguyễn Trãi",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.6754795952315,
            latitude: 10.980640545701675,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Đại học Thủ Dầu Một",
        }
    },
    {
        point: {
            type: "point", 
            longitude: 106.66407031441857,
            latitude: 10.990438537169801,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Đại học Bình Dương ",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.66616889523246,
            latitude: 11.053148976728894,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Đại học quốc tế Miền Đông",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.67488519101452,
            latitude: 10.996071891657872,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Đại học mở Thành phố Hồ Chí Minh",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.64619016746063,
            latitude: 10.989270596228337,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Đại học Ngô Quyền",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.67648092370419,
            latitude: 11.011140391715506,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Cao đẳng Việt Nam - Hàn Quốc Bình Dương",
        }
    },
    {
        point: {
            type: "point",
            longitude:106.68361153703452,
            latitude: 10.971673439792374,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Cao đẳng Y tế Bình Dương",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.66470131295297,
            latitude: 10.960187643383739,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Cao đẳng Nghề Kỹ thuật Thiết Bị Y tế Bình Dương",
        }
    },
    {
        point: {
            type: "point",
            longitude: 106.66325170085422,
            latitude: 10.993688879844532,
        },
        markerSymbol: {
            type: "picture-marker", url: imgLT,
            width: "20px", height: "20px",
        },
        pointAtt: {
            Name: "Trường Cao đẳng Nghề Công nghệ Kỹ thuật TP. HCM - Cơ Sở Bình Dương",
        }
    },
]

ringsPG = [
    // bau bang
    [106.659644155189, 11.3560652033078],
    [106.659323989937, 11.3559961674825],
    [106.659233993508, 11.3559611916269],
    [106.659012288301, 11.3558322562545],
    [106.658868780481, 11.355731303147],
    [106.658582511735, 11.3554479630509],
    [106.657468564751, 11.3546883243357],
    [106.657309062702, 11.3545356013522],
    [106.656976389845, 11.3540522065328],
    [106.656811743268, 11.3536929636979],
    [106.656476970175, 11.3533627498527],
    [106.656177460307, 11.353168433296],
    [106.656049489769, 11.352902459066],
    [106.655955439447, 11.3528587387708],
    [106.655817607077, 11.3528539692837],
    [106.655734907656, 11.3528309167613],
    [106.655650586677, 11.3527879913701],
    [106.655415254405, 11.3525949171299],
    [106.655352824449, 11.3524343442041],
    [106.655294448387, 11.3523461085475],
    [106.655028672131, 11.3520984031766],
    [106.654312488453, 11.3512391080969],
    [106.654165693182, 11.3510080151492],
    [106.653930244624, 11.3507140991291],
    [106.653854897285, 11.3505612430446],
    [106.653810473468, 11.3503537617544],
    [106.65372628683, 11.3500299788723],
    [106.653326599597, 11.3496547391118],
    [106.653224131519, 11.3493375944652],
    [106.653029904917, 11.3490665385681],
    [106.652254144113, 11.3485944109094],
    [106.651956638228, 11.3483608651203],
    [106.651757062418, 11.3480905218747],
    [106.651612779, 11.3478498157401],
    [106.65136336055, 11.3476596842579],
    [106.651087739842, 11.3475374656435],
    [106.650448068919, 11.3473902166524],
    [106.650345068456, 11.3472193234712],
    [106.650291557066, 11.3471676530031],
    [106.649685482619, 11.3468225428135],
    [106.649611061027, 11.3466527733433],
    [106.649480525666, 11.3464985565339],
    [106.649120640682, 11.3462019475152],
    [106.648844479426, 11.346081301184],
    [106.648716376401, 11.3459612662176],
    [106.648473714217, 11.3455809542266],
    [106.648363225922, 11.3453456159142],
    [106.648316229423, 11.3451786511714],
    [106.648176673111, 11.345003042146],
    [106.647816729257, 11.34434881666],
    [106.647832134052, 11.3443194039436],
    [106.647611827662, 11.3441074533075],
    [106.647469078469, 11.3439254165167],
    [106.647352326344, 11.3439047480921],
    [106.647149201659, 11.3436326439723],
    [106.646872882999, 11.3434497321755],
    [106.646465360881, 11.3430900849921],
    [106.64632833929, 11.3429454055648],
    [106.646302394374, 11.3429072483398],
    [106.646148692305, 11.3427213776086],
    [106.646035183294, 11.3426172400904],
    [106.645678355344, 11.3424263223006],
    [106.645523312857, 11.3422068319205],
    [106.645438991878, 11.3421193880495],
    [106.645306941524, 11.3420494921492],
    [106.645064671602, 11.3419906065647],
    [106.64494629792, 11.3419389351499],
    [106.644784975351, 11.3418340986545],
    [106.644632548966, 11.3416949832089],
    [106.644366512667, 11.3415874152482],
    [106.644017076934, 11.3415223155354],
    [106.643796545143, 11.3414301017757],
    [106.643810473892, 11.3411790837989],
    [106.644000146383, 11.3405878880575],
    [106.644725672117, 11.3391518997223],
    [106.644964130297, 11.3388772651109],
    [106.645168594279, 11.3386677879637],
    [106.645072072798, 11.3385334066123],
    [106.645302412336, 11.3381833469631],
    [106.645851117416, 11.3374331942469],
    [106.645934936447, 11.3373496958775],
    [106.645965111299, 11.3372951260627],
    [106.645822745482, 11.3367161704922],
    [106.645865660827, 11.3366925016056],
    [106.645742365758, 11.3361444907082],
    [106.645562554926, 11.3351881946197],
    [106.645522645195, 11.3348934384179],
    [106.645497375152, 11.3343547052181],
    [106.645494692943, 11.3343053946297],
    [106.645487987421, 11.3342120332257],
    [106.645512770367, 11.333982250215],
    [106.645531699213, 11.3337352338109],
    [106.645603740826, 11.333494233362],
    [106.64605817456, 11.3324999939099],
    [106.646213555804, 11.3321228475336],
    [106.64633160506, 11.3315330127655],
    [106.646436797199, 11.3304721470871],
    [106.646502234487, 11.3302825065621],
    [106.646915059981, 11.3297042492672],
    [106.647539912505, 11.3291466111554],
    [106.64757422403, 11.329081247683],
    [106.648141542972, 11.3282417598775],
    [106.648847651387, 11.3279077147017],
    [106.649128025561, 11.3277318092685],
    [106.649298731472, 11.3275909575024],
    [106.649441433476, 11.3273813846428],
    [106.649701358801, 11.3269029685595],
    [106.649769775425, 11.3266107628997],
    [106.649817485506, 11.3262591178367],
    [106.649865521641, 11.3261331957484],
    [106.649957672593, 11.3260370719784],
    [106.650498827084, 11.3258040808849],
    [106.650616466598, 11.325805042124],
    [106.651193223559, 11.3255767030221],
    [106.651510850245, 11.325416175995],
    [106.651831471836, 11.3251402331754],
    [106.652234387169, 11.3251373494527],
    [106.652263923433, 11.3248285756565],
    [106.652586031333, 11.3245012883214],
    [106.65264485109, 11.3244109314631],
    [106.652617335059, 11.3239938902836],
    [106.652621256376, 11.3239121844698],
    [106.652645764608, 11.3238852696075],
    [106.652672233498, 11.3238343236138],
    [106.652886847479, 11.3236477597185],
    [106.653621921999, 11.323102470934],
    [106.653774853366, 11.3232706892363],
    [106.653967978234, 11.3232658830006],
    [106.654212080224, 11.3232332005953],
    [106.654500302582, 11.3228910727028],
    [106.654622843742, 11.3227766841167],
    [106.654661076584, 11.3226959392037],
    [106.655002161657, 11.3222514414042],
    [106.655315421982, 11.3219594742306],
    [106.655745786535, 11.3216730211225],
    [106.65580754728, 11.3215903533917],
    [106.655990880427, 11.3212772074702],
    [106.656632468132, 11.3205759099584],
    [106.656810211853, 11.3202781530376],
    [106.657279789578, 11.3202810368091],
    [106.657308885492, 11.3199295722432],
    [106.658109352702, 11.3190606736434],
    [106.658173074105, 11.3189136006265],
    [106.658163270812, 11.3188309321004],
    [106.658788230522, 11.3174272654043],
    [106.658849009801, 11.3171156712044],
    [106.658986981869, 11.3168943334983],
    [106.659024247007, 11.3167451172629],
    [106.659180683008, 11.3163486480327],
    [106.659548791446, 11.3156310922313],
    [106.663250364377, 11.3187562576583],
    [106.663362121914, 11.3186159133252],
    [106.663499368014, 11.3184822977678],
    [106.663680553198, 11.3183548682189],
    [106.664337738308, 11.3180327629537],
    [106.664760665722, 11.3176236259763],
    [106.664848896209, 11.3174856662044],
    [106.665209651631, 11.3166393436298],
    [106.665845019456, 11.3156801801553],
    [106.665929327775, 11.3155263764922],
    [106.666580543307, 11.3155127756908],
    [106.666819557201, 11.3148646532106],
    [106.667402178665, 11.3148798397306],
    [106.667499231264, 11.3146424046252],
    [106.667675690534, 11.3146500948344],
    [106.66798706616, 11.3140067228838],
    [106.668387874311, 11.3136695247386],
    [106.6687777965, 11.3135604153418],
    [106.669313756859, 11.3135576590204],
    [106.669369765799, 11.3130285294997],
    [106.669705038412, 11.3130487164117],
    [106.669729460908, 11.3127802944468],
    [106.669937290715, 11.3128072103523],
    [106.669966796257, 11.3125064222701],
    [106.669892291231, 11.3122853270263],
    [106.669932484732, 11.3121776631919],
    [106.67007169149, 11.3122305338297],
    [106.670241288455, 11.3122843657421],
    [106.670458921554, 11.312405487507],
    [106.670873600839, 11.3125612154142],
    [106.671496267884, 11.3128711458531],
    [106.671686451764, 11.3129240163632],
    [106.671810953583, 11.3129413194366],
    [106.671981530877, 11.3130509055467],
    [106.67218053772, 11.3131018534609],
    [106.672616784249, 11.3130114930037],
    [106.672707954872, 11.3130297573542],
    [106.672748148373, 11.3130787827111],
    [106.672777558251, 11.3131508788047],
    [106.672783440227, 11.3132345102505],
    [106.672827555044, 11.3133556316115],
    [106.672897158423, 11.3134248437948],
    [106.673274585195, 11.3134575273236],
    [106.673397126355, 11.3134979010872],
    [106.673514765869, 11.3135690357956],
    [106.673555939698, 11.3136497832809],
    [106.673557900357, 11.3137353371435],
    [106.673547116735, 11.313787246215],
    [106.673273144841, 11.3139176397895],
    [106.673218011894, 11.3139780615173],
    [106.673200985542, 11.3140599488384],
    [106.673241524474, 11.3141521714245],
    [106.673308819102, 11.3142380338029],
    [106.673432868234, 11.3142968654177],
    [106.673569079046, 11.3143310513504],
    [106.673711776087, 11.3144487145349],
    [106.674060734793, 11.3148307353074],
    [106.674257754004, 11.3149531684031],
    [106.674345318097, 11.3150573159954],
    [106.674412612724, 11.3150716263492],
    [106.674473421123, 11.3150716263492],
    [106.674548823536, 11.3150430056426],
    [106.674608821156, 11.3150032546564],
    [106.674656657096, 11.3149380630272],
    [106.674679874041, 11.3148689136305],
    [106.674728153803, 11.314857078284],
    [106.674826724985, 11.3148814064966],
    [106.67488774524, 11.314905734706],
    [106.675132686817, 11.314962653851],
    [106.675327146971, 11.3150336658965],
    [106.675530964814, 11.3151559933791],
    [106.675693495813, 11.3153708290815],
    [106.675832953147, 11.3156245444119],
    [106.67589933782, 11.3156501875933],
    [106.675980474643, 11.3156495300758],
    [106.676060270361, 11.3156219143419],
    [106.676360007219, 11.3154213714281],
    [106.676594700508, 11.3153595647319],
    [106.676850180916, 11.3153825778653],
    [106.677067439846, 11.3155252592503],
    [106.67709828525, 11.3156508451116],
    [106.677250464896, 11.3159977813733],
    [106.677376887106, 11.316206425609],
    [106.67748216381, 11.3162761223157],
    [106.677741888029, 11.3163434944367],
    [106.678157672469, 11.3164846760076],
    [106.678423881714, 11.3164859910387],
    [106.678885856795, 11.3148014690096],
    [106.683783743929, 11.305226164084],
    [106.683739141634, 11.3026597740995],
    [106.683610336852, 11.3002728328827],
    [106.683538896646, 11.2965172819283],
    [106.683508112091, 11.295080382908],
    [106.68340286577, 11.2904298339013],
    [106.683259861139, 11.2880131421738],
    [106.683143371071, 11.2860075421499],
    [106.683124595608, 11.2859161377613],
    [106.682882067258, 11.2813377252633],
    [106.682865303452, 11.2812035756238],
    [106.682720807488, 11.2806773449796],
    [106.682526970016, 11.2802926845252],
    [106.682473430365, 11.2801225225342],
    [106.682423784895, 11.2797644841524],
    [106.682365333749, 11.2781326442166],
    [106.682242545969, 11.2752327762826],
    [106.682269147355, 11.2727913552448],
    [106.681887001562, 11.2561400696637],
    [106.681743411729, 11.252156356769],
    [106.681734816999, 11.2516801250124],
    [106.681765853091, 11.250246765385],
    [106.681788334853, 11.2494575957611],
    [106.681801409072, 11.2489083049896],
    [106.707029900912, 11.2520694920037],
    [106.706776757914, 11.2538609416626],
    [106.706939033913, 11.253940980936],
    [106.708770166621, 11.254694391722],
    [106.708825090047, 11.2547933737292],
    [106.709082102454, 11.2554733340188],
    [106.709355529659, 11.2565217393075],
    [106.709463181384, 11.2568175852311],
    [106.709764772223, 11.2573149065373],
    [106.709813722537, 11.2573846175418],
    [106.710206544963, 11.2578441440782],
    [106.710620044464, 11.2583074021858],
    [106.710855828596, 11.2585398082096],
    [106.711706516686, 11.2590396112173],
    [106.712422268845, 11.25925428829],
    [106.71375517533, 11.2591860161048],
    [106.714283487081, 11.2589896622391],
    [106.715072963792, 11.2582323237673],
    [106.716045530388, 11.25729353607],
    [106.71668095432, 11.2569980422455],
    [106.717466315114, 11.2569597115263],
    [106.71782541167, 11.2570694468682],
    [106.719446069892, 11.2583560663652],
    [106.720139012733, 11.2586697731996],
    [106.721024708085, 11.2588420917495],
    [106.720986486606, 11.2587743540413],
    [106.720927750216, 11.2585550555951],
    [106.72084259008, 11.2585458485193],
    [106.720840654127, 11.2579601595252],
    [106.720790362708, 11.2579568712773],
    [106.720808967912, 11.2566190226563],
    [106.721149809007, 11.2566172100927],
    [106.72110167303, 11.2520868435807],
    [106.719903076579, 11.2520847258036],
    [106.719571063875, 11.2520500267491],
    [106.719198505399, 11.2515739728683],
    [106.719250761011, 11.2514682939026],
    [106.718448361915, 11.2503074900425],
    [106.718164348606, 11.249820621685],
    [106.717968172697, 11.2494554653375],
    [106.717850971924, 11.2492062888998],
    [106.717644192692, 11.2489489816677],
    [106.717382382235, 11.2486906867123],
    [106.716538054873, 11.247593257975],
    [106.716124437066, 11.2477841177659],
    [106.71566293737, 11.2473975245832],
    [106.715604180073, 11.247213349847],
    [106.715486012709, 11.246938460185],
    [106.715370892321, 11.2467586295225],
    [106.715034494014, 11.24632769369],
    [106.714870230507, 11.2458999301796],
    [106.714700753406, 11.2457715867713],
    [106.714351877853, 11.245671132658],
    [106.71422438468, 11.2454846569873],
    [106.713903258697, 11.2445082408699],
    [106.7131929201, 11.2435675935463],
    [106.713025197503, 11.2432945304327],
    [106.712767218772, 11.2429998519081],
    [106.712710463781, 11.2428017279382],
    [106.712668783082, 11.2425429501375],
    [106.712598375095, 11.2423870787993],
    [106.712247753066, 11.2420591690957],
    [106.712123030347, 11.2419657776831],
    [106.711685909499, 11.2419084162005],
    [106.711659697604, 11.2415087258608],
    [106.711626849174, 11.2413548678225],
    [106.71154235959, 11.2412213572287],
    [106.711387151041, 11.24106418209],
    [106.711140725065, 11.2408561786051],
    [106.710435263381, 11.240527232609],
    [106.709380971299, 11.239516238278],
    [106.707659352412, 11.2394015547502],
    [106.706213697075, 11.239237308032],
    [106.706483108287, 11.2372936617035],
    [106.706326228766, 11.2370100149203],
    [106.705763952996, 11.2366575244521],
    [106.705381920733, 11.2366537089182],
    [106.705383992694, 11.2338281514558],
    [106.706085488049, 11.2332625575924],
    [106.70608280584, 11.2331678479194],
    [106.705934082881, 11.231676860328],
    [106.706027578803, 11.2313237594347],
    [106.706163440461, 11.2309485936082],
    [106.70629492844, 11.2302172975966],
    [106.70807554253, 11.2253329093702],
    [106.708221771256, 11.2247219328695],
    [106.710418042048, 11.2249391310204],
    [106.710458945736, 11.2249312383212],
    [106.710469674572, 11.2249147951972],
    [106.711108913748, 11.218997674481],
    [106.71201610926, 11.2108944994706],
    [106.721428562903, 11.2033980833021],

    // bac tan uyen
    [106.721611, 11.203263],
    [106.721698, 11.202974],
    [106.721762, 11.202722],
    [106.721850, 11.202426],
    [106.721894, 11.202282],
    [106.721988, 11.201867],
    [106.722070, 11.201499],
    [106.722162, 11.201080],
    [106.722209, 11.200846],
    [106.722340, 11.200257],
    [106.722475, 11.199639],
    [106.722582, 11.199129],
    [106.722732, 11.198415],
    [106.722745, 11.198362],
    [106.722890, 11.197667],
    [106.722973, 11.197273],
    [106.723154, 11.196433],
    [106.723230, 11.196040],
    [106.723311, 11.195646],
    [106.723386, 11.195293],
    [106.723476, 11.194891],
    [106.723570, 11.194474],
    [106.723671, 11.194022],
    [106.723751, 11.193667],
    [106.723872, 11.193150],
    [106.724014, 11.192532],
    [106.724392, 11.190804],
    [106.724577, 11.190022],
    [106.724650, 11.189657],
    [106.724728, 11.189135],
    [106.724882, 11.188697],
    [106.725171, 11.188180],
    [106.725395, 11.187938],
    [106.726002, 11.187572],
    [106.726619, 11.187550],
    [106.728095, 11.187624],
    [106.728840, 11.187936],
    [106.729511, 11.188324],
    [106.729983, 11.188924],
    [106.730456, 11.189451],
    [106.730638, 11.189697],
    [106.730828, 11.189966],
    [106.730961, 11.190148],
    [106.731402, 11.190643],
    [106.731682, 11.190961],
    [106.731859, 11.191153],
    [106.732029, 11.191545],
    [106.732325, 11.192230],
    [106.732465, 11.192598],
    [106.732468, 11.192987],
    [106.732485, 11.193206],
    [106.732502, 11.193446],
    [106.732519, 11.193671],
    [106.732530, 11.193833],
    [106.732540, 11.193950],
    [106.732400, 11.194316],
    [106.732311, 11.194648],
    [106.732264, 11.194820],
    [106.732258, 11.195047],
    [106.732255, 11.195276],
    [106.732249, 11.195586],
    [106.732245, 11.195829],
    [106.732241, 11.195968],
    [106.732243, 11.196358],
    [106.732355, 11.196595],
    [106.732502, 11.196909],
    [106.732630, 11.197211],
    [106.732781, 11.197560],
    [106.732874, 11.197779],
    [106.733114, 11.198161],
    [106.733179, 11.198261],
    [106.733348, 11.198490],
    [106.733511, 11.198708],
    [106.733682, 11.198903],
    [106.733821, 11.199061],
    [106.734093, 11.199375],
    [106.734332, 11.199525],
    [106.734559, 11.199672],
    [106.734852, 11.199744],
    [106.735126, 11.199816],
    [106.735522, 11.199741],
    [106.735790, 11.199869],
    [106.736173, 11.199882],
    [106.736412, 11.200041],
    [106.736616, 11.200182],
    [106.736961, 11.200113],
    [106.737465, 11.200044],
    [106.737905, 11.200088],
    [106.738252, 11.200110],
    [106.738798, 11.200188],
    [106.741457, 11.200510],
    [106.741730, 11.200552],
    [106.742140, 11.200552],
    [106.742679, 11.200552],
    [106.743105, 11.200550],
    [106.743451, 11.200481],
    [106.743868, 11.200399],
    [106.744366, 11.200366],
    [106.744718, 11.200331],
    [106.745368, 11.200284],
    [106.745916, 11.200251],
    [106.746263, 11.200260],
    [106.746547, 11.200273],
    [106.746744, 11.200459],
    [106.746906, 11.200605],
    [106.747053, 11.200749],
    [106.747350, 11.200875],
    [106.747628, 11.200997],
    [106.747844, 11.201068],
    [106.748007, 11.201119],
    [106.748614, 11.201614],
    [106.748850, 11.201829],
    [106.748981, 11.201953],
    [106.749116, 11.202119],
    [106.749299, 11.202347],
    [106.749324, 11.202493],
    [106.749351, 11.202621],
    [106.749513, 11.202900],
    [106.749746, 11.203141],
    [106.749965, 11.203378],
    [106.750143, 11.203579],
    [106.750826, 11.204588],
    [106.750927, 11.205108],
    [106.750703, 11.205510],
    [106.750612, 11.206001],
    [106.750623, 11.206143],
    [106.750688, 11.206291],
    [106.750749, 11.206362],
    [106.750836, 11.206485],
    [106.750889, 11.206578],
    [106.750984, 11.207025],
    [106.751007, 11.207382],
    [106.751075, 11.207677],
    [106.751177, 11.207980],
    [106.751215, 11.208085],
    [106.751513, 11.208535],
    [106.751829, 11.209022],
    [106.752068, 11.209348],
    [106.752416, 11.209656],
    [106.753082, 11.209942],
    [106.753779, 11.210063],
    [106.754822, 11.210129],
    [106.755514, 11.210169],
    [106.756209, 11.210211],
    [106.757218, 11.210282],
    [106.758141, 11.210340],
    [106.758210, 11.209124],
    [106.758300, 11.207189],
    [106.758338, 11.206579],
    [106.758497, 11.202656],
    [106.758566, 11.200453],
    [106.758604, 11.199687],
    [106.758611, 11.195936],
    [106.758636, 11.190847],
    [106.762096, 11.190802],
    [106.762103, 11.190542],
    [106.762232, 11.190266],
    [106.762619, 11.190385],
    [106.763029, 11.190296],
    [106.763211, 11.190229],
    [106.763477, 11.190147],
    [106.763651, 11.189812],
    [106.764366, 11.189326],
    [106.764484, 11.189154],
    [106.764522, 11.189041],
    [106.764541, 11.188922],
    [106.764519, 11.188788],
    [106.764366, 11.188381],
    [106.766107, 11.188353],
    [106.767476, 11.188387],
    [106.768586, 11.188403],
    [106.769291, 11.188443],
    [106.770988, 11.188440],
    [106.772356, 11.188487],
    [106.775580, 11.188569],
    [106.775679, 11.188626],
    [106.780353, 11.188741],
    [106.780506, 11.188766],
    [106.782139, 11.188766],
    [106.783287, 11.188773],
    [106.783415, 11.188635],
    [106.783600, 11.188579],
    [106.786311, 11.188560],
    [106.787912, 11.188560],
    [106.790215, 11.188491],
    [106.791963, 11.188773],
    [106.792094, 11.188854],
    [106.792515, 11.188963],
    [106.792741, 11.188970],
    [106.793150, 11.189051],
    [106.793603, 11.189054],
    [106.793663, 11.189092],
    [106.793686, 11.189846],
    [106.793609, 11.190619],
    [106.792997, 11.193072],
    [106.794394, 11.193169],
    [106.794075, 11.201470],
    [106.794001, 11.201899],
    [106.795153, 11.200973],
    [106.796783, 11.199612],
    [106.798515, 11.198169],
    [106.801606, 11.195653],
    [106.803800, 11.193869],
    [106.804910, 11.195066],
    [106.806053, 11.196308],
    [106.807472, 11.197876],
    [106.809277, 11.199850],
    [106.810873, 11.201639],
    [106.811643, 11.202523],
    [106.812917, 11.203907],
    [106.812960, 11.203962],
    [106.813606, 11.204670],
    [106.813729, 11.205488],
    [106.813987, 11.205843],
    [106.814446, 11.205870],
    [106.814682, 11.206149],
    [106.815470, 11.206249],
    [106.816640, 11.206946],
    [106.816983, 11.207056],
    [106.817836, 11.207714],
    [106.818117, 11.208030],
    [106.818611, 11.208748],
    [106.818823, 11.209227],
    [106.818980, 11.210495],
    [106.818979, 11.210724],
    [106.819045, 11.211058],
    [106.819229, 11.211384],
    [106.819253, 11.211465],
    [106.819281, 11.211701],
    [106.819297, 11.211793],
    [106.819371, 11.211957],
    [106.819465, 11.212114],
    [106.819666, 11.212368],
    [106.819808, 11.212654],
    [106.819959, 11.212891],
    [106.819966, 11.212955],
    [106.819965, 11.213221],
    [106.819964, 11.213219],
    [106.819924, 11.213997],
    [106.819803, 11.215083],
    [106.819797, 11.215249],
    [106.819813, 11.215528],
    [106.819900, 11.215663],
    [106.820626, 11.216403],
    [106.820705, 11.216777],
    [106.820767, 11.216933],
    [106.820895, 11.217037],
    [106.821013, 11.217113],
    [106.821077, 11.217130],
    [106.821088, 11.217231],
    [106.821161, 11.217299],
    [106.821281, 11.217339],
    [106.821337, 11.217417],
    [106.821383, 11.217454],
    [106.821386, 11.217765],
    [106.823277, 11.217869],
    [106.823755, 11.217895],
    [106.823504, 11.217082],
    [106.823381, 11.216254],
    [106.823363, 11.215461],
    [106.823387, 11.214761],
    [106.823444, 11.214160],
    [106.823571, 11.213665],
    [106.823813, 11.213225],
    [106.824905, 11.212139],
    [106.827049, 11.210409],
    [106.827693, 11.209956],
    [106.829131, 11.209282],
    [106.829865, 11.209169],
    [106.830237, 11.209156],
    [106.830891, 11.209196],
    [106.831385, 11.209311],
    [106.831918, 11.209474],
    [106.832471, 11.209778],
    [106.833829, 11.210917],
    [106.834451, 11.211363],
    [106.836719, 11.212085],
    [106.838995, 11.213425],
    [106.839238, 11.214972],
    [106.838616, 11.216438],
    [106.835581, 11.217986],
    [106.832645, 11.218329],
    [106.828897, 11.217458],
    [106.827244, 11.217465],
    [106.827024, 11.217971],
    [106.828503, 11.221513],
    [106.831158, 11.225904],
    [106.831188, 11.225945],
    [106.833168, 11.227314],
    [106.834177, 11.227277],
    [106.836946, 11.226265],
    [106.838243, 11.225952],
    [106.839555, 11.226131],
    [106.841452, 11.227121],
    [106.844251, 11.232188],
    [106.845230, 11.233074],
    [106.846239, 11.233520],
    [106.852194, 11.235760],
    [106.853977, 11.237680],
    [106.854356, 11.238878],
    [106.854410, 11.240120],
    [106.853856, 11.241162],
    [106.852832, 11.242122],
    [106.850321, 11.242486],
    [106.849410, 11.243059],
    [106.848583, 11.246750],
    [106.850222, 11.253938],
    [106.850889, 11.254176],
    [106.852338, 11.253960],
    [106.855168, 11.255500],
    [106.855578, 11.255389],
    [106.858961, 11.253171],
    [106.862482, 11.252427],
    [106.866017, 11.252747],
    [106.871517, 11.250448],
    [106.872549, 11.248915],
    [106.878997, 11.246289],
    [106.882055, 11.244510],
    [106.883686, 11.242710],
    [106.884528, 11.242568],
    [106.884831, 11.242635],
    [106.886280, 11.244681],
    [106.886538, 11.246043],
    [106.886523, 11.247345],
    [106.886302, 11.248043],
    [106.884783, 11.249832],
    [106.883903, 11.251797],
    [106.884145, 11.252860],
    [106.884732, 11.253348],
    [106.887246, 11.252848],
    [106.890806, 11.246716],
    [106.890423, 11.245102],
    [106.886927, 11.242186],
    [106.886404, 11.240672],
    [106.887373, 11.238970],
    [106.889045, 11.238144],
    [106.897172, 11.240159],
    [106.901931, 11.241898],
    [106.902850, 11.241861],
    [106.904509, 11.240709],
    [106.905440, 11.236755],
    [106.907118, 11.232932],
    [106.909625, 11.230685],
    [106.912132, 11.230072],
    [106.913816, 11.230247],

    // binh phuoc, dong nai
    [106.913810, 11.230279],
    [106.913240, 11.231322],
    [106.913561, 11.232328],
    [106.915793, 11.233719],
    [106.917174, 11.234763],
    [106.918239, 11.234826],
    [106.918583, 11.235316],
    [106.918435, 11.235469],
    [106.911969, 11.235576],
    [106.911618, 11.236174],
    [106.912969, 11.236763],
    [106.913218, 11.237055],
    [106.913070, 11.237415],
    [106.911048, 11.238257],
    [106.910852, 11.238808],
    [106.910852, 11.240080],
    [106.910524, 11.240800],
    [106.911946, 11.242056],
    [106.914319, 11.240509],
    [106.914672, 11.240564],
    [106.915406, 11.241884],
    [106.917096, 11.242668],
    [106.917932, 11.242413],
    [106.917635, 11.240983],
    [106.918182, 11.240300],
    [106.918675, 11.240318],
    [106.918925, 11.240691],
    [106.918981, 11.242513],
    [106.919882, 11.242139],
    [106.920068, 11.241484],
    [106.922343, 11.241220],
    [106.923652, 11.241757],
    [106.923996, 11.243132],
    [106.924804, 11.243906],
    [106.926549, 11.244416],
    [106.927506, 11.243424],
    [106.928184, 11.243269],
    [106.930914, 11.243742],
    [106.931313, 11.244134],
    [106.931564, 11.245172],
    [106.931145, 11.246024],
    [106.930924, 11.246782],
    [106.929063, 11.247878],
    [106.926534, 11.246860],
    [106.926214, 11.247834],
    [106.927782, 11.248322],
    [106.928124, 11.248842],
    [106.927605, 11.250055],
    [106.927660, 11.252232],
    [106.926324, 11.252394],
    [106.925430, 11.252957],
    [106.925330, 11.256077],
    [106.926689, 11.256055],
    [106.927274, 11.258140],
    [106.926637, 11.258822],
    [106.925960, 11.258481],
    [106.925790, 11.259460],
    [106.927031, 11.260669],
    [106.925612, 11.261834],
    [106.925383, 11.263303],
    [106.923780, 11.263612],
    [106.923767, 11.264294],
    [106.925777, 11.265145],
    [106.926624, 11.264204],
    [106.927851, 11.264720],
    [106.925415, 11.267547],
    [106.927274, 11.267836],
    [106.927569, 11.268577],
    [106.926814, 11.269543],
    [106.924549, 11.270547],
    [106.924654, 11.271256],
    [106.926006, 11.272202],
    [106.929027, 11.272853],
    [106.929211, 11.274051],
    [106.930301, 11.274418],
    [106.929703, 11.277889],
    [106.930708, 11.278777],
    [106.931404, 11.277638],
    [106.931450, 11.278565],
    [106.931772, 11.279035],
    [106.933013, 11.278552],
    [106.933512, 11.279956],
    [106.933387, 11.280213],
    [106.932093, 11.281624],
    [106.933367, 11.282229],
    [106.933361, 11.283027],
    [106.934433, 11.284739],
    [106.934489, 11.285060],
    [106.934266, 11.285816],
    [106.933240, 11.287460],
    [106.936285, 11.286991],
    [106.936471, 11.287287],
    [106.936146, 11.287851],
    [106.937595, 11.288247],
    [106.938087, 11.289544],
    [106.938863, 11.291561],
    [106.939012, 11.292129],
    [106.939404, 11.292433],
    [106.940878, 11.292779],
    [106.941281, 11.293109],
    [106.941629, 11.294274],
    [106.941447, 11.294674],
    [106.939216, 11.295773],
    [106.937449, 11.296147],
    [106.937168, 11.296770],
    [106.937532, 11.297176],
    [106.938383, 11.297073],
    [106.939448, 11.296293],
    [106.939813, 11.296542],
    [106.939884, 11.297495],
    [106.939023, 11.298578],
    [106.939818, 11.301513],
    [106.939619, 11.301794],
    [106.938648, 11.301226],
    [106.938510, 11.301291],
    [106.938394, 11.302011],
    [106.939691, 11.302737],
    [106.939840, 11.303213],
    [106.939432, 11.303874],
    [106.937068, 11.305401],
    [106.938040, 11.307983],
    [106.936715, 11.308075],
    [106.936560, 11.308563],
    [106.936279, 11.309136],
    [106.937444, 11.309488],
    [106.938007, 11.309369],
    [106.938344, 11.309792],
    [106.939128, 11.309987],
    [106.939117, 11.310225],
    [106.938200, 11.310598],
    [106.938443, 11.311161],
    [106.937571, 11.312105],
    [106.937563, 11.312266],
    [106.937643, 11.312375],
    [106.937823, 11.312405],
    [106.938346, 11.312333],
    [106.939141, 11.312327],
    [106.939720, 11.311961],
    [106.939851, 11.312076],
    [106.939949, 11.312482],
    [106.940048, 11.312604],
    [106.941200, 11.312306],
    [106.941311, 11.312426],
    [106.941288, 11.312516],
    [106.940911, 11.312790],
    [106.940808, 11.312957],
    [106.940794, 11.313102],
    [106.940884, 11.313232],
    [106.941956, 11.313742],
    [106.942063, 11.313927],
    [106.942071, 11.314119],
    [106.941620, 11.314502],
    [106.941546, 11.314637],
    [106.941563, 11.314725],
    [106.942122, 11.314810],
    [106.942492, 11.315133],
    [106.942604, 11.315476],
    [106.942809, 11.315782],
    [106.942914, 11.316596],
    [106.942986, 11.316770],
    [106.943111, 11.316829],
    [106.943730, 11.316789],
    [106.943886, 11.316806],
    [106.943933, 11.316900],
    [106.943921, 11.317072],
    [106.943777, 11.317312],
    [106.943752, 11.317495],
    [106.943818, 11.317740],
    [106.944429, 11.318072],
    [106.944603, 11.317932],
    [106.944534, 11.317327],
    [106.944642, 11.317208],
    [106.944829, 11.317166],
    [106.947279, 11.317966],
    [106.947443, 11.318175],
    [106.947597, 11.318498],
    [106.947531, 11.318629],
    [106.947244, 11.318854],
    [106.947279, 11.319304],
    [106.947387, 11.319586],
    [106.947855, 11.319781],
    [106.947951, 11.319905],
    [106.947892, 11.320057],
    [106.947437, 11.320460],
    [106.947449, 11.320644],
    [106.947613, 11.320885],
    [106.948013, 11.321050],
    [106.948140, 11.321232],
    [106.948271, 11.321310],
    [106.948402, 11.321318],
    [106.948825, 11.321222],
    [106.949905, 11.321408],
    [106.950075, 11.321628],
    [106.950084, 11.321816],
    [106.950188, 11.321844],
    [106.950834, 11.321517],
    [106.951027, 11.321529],
    [106.951281, 11.321741],
    [106.951430, 11.322112],
    [106.951834, 11.322645],
    [106.951761, 11.323186],
    [106.951769, 11.323481],
    [106.951865, 11.323671],
    [106.952316, 11.323973],
    [106.952433, 11.324157],
    [106.952269, 11.324660],
    [106.951886, 11.325125],
    [106.952339, 11.325964],
    [106.951985, 11.326744],
    [106.952245, 11.327745],
    [106.952129, 11.328049],
    [106.951765, 11.328465],
    [106.951599, 11.329933],
    [106.949760, 11.331860],
    [106.949335, 11.334015],
    [106.949352, 11.334448],
    [106.949926, 11.335910],
    [106.950539, 11.336868],
    [106.950130, 11.338936],
    [106.949650, 11.339337],
    [106.947574, 11.339786],
    [106.947938, 11.340620],
    [106.947695, 11.340863],
    [106.947369, 11.340647],
    [106.947115, 11.340674],
    [106.946848, 11.341177],
    [106.947505, 11.341647],
    [106.946211, 11.342542],
    [106.946323, 11.343386],
    [106.946586, 11.343456],
    [106.946402, 11.343952],
    [106.946559, 11.344274],
    [106.946513, 11.344351],
    [106.945674, 11.344692],
    [106.944864, 11.345821],
    [106.945317, 11.346265],
    [106.945309, 11.346396],
    [106.944560, 11.346487],
    [106.944451, 11.346916],
    [106.944630, 11.347559],
    [106.944411, 11.348195],
    [106.944607, 11.348624],
    [106.944294, 11.348937],
    [106.944747, 11.349542],
    [106.944552, 11.350178],
    [106.945294, 11.351196],
    [106.945122, 11.351724],
    [106.945263, 11.351908],
    [106.944224, 11.352306],
    [106.942436, 11.352076],
    [106.940398, 11.352612],
    [106.939414, 11.354136],
    [106.937844, 11.353776],
    [106.937837, 11.354044],
    [106.935908, 11.353944],
    [106.934205, 11.353041],
    [106.934127, 11.352903],
    [106.931972, 11.353830],
    [106.931082, 11.353853],
    [106.929325, 11.353378],
    [106.925841, 11.354459],
    [106.922663, 11.354283],
    [106.920305, 11.351787],
    [106.918938, 11.351726],
    [106.918236, 11.352422],
    [106.918165, 11.352981],
    [106.917806, 11.353770],
    [106.917767, 11.355347],
    [106.917033, 11.356005],
    [106.916112, 11.356090],
    [106.914425, 11.355883],
    [106.913613, 11.354911],
    [106.911778, 11.354757],
    [106.911153, 11.354252],
    [106.910833, 11.353777],
    [106.908350, 11.353433],
    [106.907264, 11.353004],
    [106.906296, 11.352009],
    [106.904922, 11.349789],
    [106.904445, 11.347821],
    [106.903797, 11.347354],
    [106.903767, 11.347223],
    [106.904253, 11.346941],
    [106.903756, 11.346443],
    [106.904054, 11.346227],
    [106.904087, 11.345848],
    [106.904695, 11.345588],
    [106.904264, 11.345090],
    [106.904132, 11.344776],
    [106.904319, 11.344473],
    [106.904352, 11.344050],
    [106.903712, 11.343444],
    [106.903535, 11.343790],
    [106.902817, 11.343747],
    [106.902928, 11.343249],
    [106.902994, 11.343043],
    [106.903348, 11.342989],
    [106.903248, 11.342643],
    [106.902840, 11.342697],
    [106.902895, 11.341928],
    [106.902464, 11.341430],
    [106.901890, 11.341333],
    [106.901415, 11.341614],
    [106.900918, 11.340466],
    [106.900255, 11.341181],
    [106.885142, 11.340961],
    [106.883021, 11.338600],
    [106.882679, 11.337604],
    [106.881012, 11.336034],
    [106.880007, 11.333663],
    [106.877853, 11.332093],
    [106.874507, 11.328195],
    [106.873513, 11.327783],
    [106.872508, 11.327003],
    [106.869836, 11.321221],
    [106.869902, 11.320171],
    [106.871404, 11.318536],
    [106.873122, 11.314052],
    [106.874293, 11.312114],
    [106.875164, 11.307450],
    [106.874199, 11.308242],
    [106.873786, 11.308307],
    [106.873739, 11.308698],
    [106.873348, 11.309287],
    [106.870842, 11.309915],
    [106.869280, 11.311079],
    [106.867507, 11.311316],
    [106.866828, 11.311860],
    [106.866531, 11.311776],
    [106.866297, 11.310903],
    [106.866031, 11.310650],
    [106.865001, 11.310995],
    [106.866406, 11.313162],
    [106.866633, 11.314464],
    [106.865360, 11.314908],
    [106.863540, 11.314257],
    [106.862268, 11.314257],
    [106.859199, 11.315336],
    [106.857083, 11.314540],
    [106.857270, 11.316990],
    [106.855373, 11.322051],
    [106.856763, 11.324502],
    [106.856317, 11.326247],
    [106.856513, 11.326998],
    [106.855357, 11.328674],
    [106.856255, 11.330458],
    [106.856567, 11.330550],
    [106.858262, 11.335152],
    [106.859207, 11.335780],
    [106.861534, 11.335542],
    [106.863127, 11.338490],
    [106.863173, 11.342157],
    [106.861574, 11.344400],
    [106.857959, 11.345548],
    [106.857381, 11.345403],
    [106.856795, 11.345931],
    [106.856881, 11.346880],
    [106.859124, 11.348824],
    [106.860061, 11.348625],
    [106.860304, 11.348732],
    [106.860546, 11.349283],
    [106.859351, 11.350861],
    [106.858679, 11.349942],
    [106.855774, 11.353303],
    [106.856772, 11.357744],
    [106.856670, 11.358326],
    [106.855499, 11.357691],
    [106.854390, 11.360722],
    [106.854570, 11.361450],
    [106.856834, 11.359980],
    [106.858209, 11.360608],
    [106.858544, 11.362032],
    [106.857701, 11.362927],
    [106.858064, 11.364327],
    [106.857247, 11.365767],
    [106.857390, 11.368820],
    [106.855590, 11.369492],
    [106.855701, 11.370574],
    [106.857236, 11.372675],
    [106.856617, 11.373995],
    [106.856838, 11.375089],
    [106.856087, 11.375100],
    [106.855745, 11.374699],
    [106.855458, 11.375587],
    [106.854906, 11.375879],
    [106.854950, 11.376420],
    [106.854541, 11.376702],
    [106.847739, 11.376106],
    [106.847021, 11.375771],
    [106.841687, 11.374970],
    [106.839931, 11.375576],
    [106.839213, 11.376334],
    [106.837711, 11.377048],
    [106.835514, 11.377178],
    [106.835679, 11.379408],
    [106.834299, 11.380502],
    [106.826814, 11.380507],
    [106.825014, 11.384252],
    [106.823523, 11.383116],
    [106.823799, 11.382834],
    [106.818631, 11.379110],
    [106.818620, 11.378937],
    [106.818189, 11.378807],
    [106.818090, 11.378276],
    [106.817483, 11.378071],
    [106.817361, 11.377248],
    [106.816301, 11.377313],
    [106.812933, 11.376566],
    [106.811619, 11.375775],
    [106.811144, 11.376079],
    [106.810614, 11.375992],
    [106.809686, 11.376436],
    [106.809123, 11.376555],
    [106.808957, 11.376880],
    [106.807676, 11.377962],
    [106.803601, 11.379424],
    [106.802563, 11.380517],
    [106.801073, 11.381102],
    [106.800421, 11.381232],
    [106.800598, 11.381600],
    [106.800145, 11.381925],
    [106.800167, 11.382726],
    [106.798599, 11.382553],
    [106.798510, 11.381687],
    [106.797428, 11.381578],
    [106.797075, 11.380712],
    [106.796479, 11.380669],
    [106.796258, 11.379738],
    [106.793718, 11.379716],
    [106.793607, 11.383051],
    [106.789411, 11.383051],
    [106.789300, 11.385930],
    [106.788572, 11.385952],
    [106.789105, 11.401109],
    [106.784379, 11.401369],
    [106.784357, 11.399680],
    [106.781044, 11.399810],
    [106.780889, 11.401239],
    [106.770152, 11.403784],
    [106.770474, 11.404796],
    [106.770461, 11.405090],
    [106.770820, 11.406071],
    [106.770952, 11.406229],
    [106.771016, 11.406526],
    [106.771150, 11.406789],
    [106.771118, 11.407149],
    [106.771333, 11.407614],
    [106.771593, 11.408151],
    [106.772185, 11.408482],
    [106.771283, 11.410036],
    [106.770645, 11.411768],
    [106.771091, 11.411845],
    [106.771080, 11.412694],
    [106.770547, 11.424280],
    [106.770166, 11.425022],
    [106.769122, 11.424872],
    [106.768889, 11.425059],
    [106.768723, 11.425713],
    [106.768766, 11.425834],
    [106.770807, 11.426844],
    [106.772108, 11.427133],
    [106.772652, 11.427023],
    [106.772915, 11.426723],
    [106.773590, 11.426719],
    [106.773786, 11.426577],
    [106.774210, 11.426448],
    [106.775451, 11.426814],
    [106.776618, 11.426427],
    [106.777747, 11.426827],
    [106.778992, 11.426777],
    [106.779402, 11.427022],
    [106.780507, 11.427329],
    [106.780937, 11.427595],
    [106.781395, 11.427737],
    [106.781640, 11.427935],
    [106.781699, 11.428035],
    [106.782036, 11.428161],
    [106.782672, 11.428853],
    [106.783269, 11.429018],
    [106.785636, 11.431146],
    [106.786869, 11.431416],
    [106.787110, 11.431381],
    [106.787614, 11.431620],
    [106.788032, 11.431646],
    [106.788508, 11.431821],
    [106.789090, 11.432174],
    [106.789992, 11.433131],
    [106.792316, 11.436404],
    [106.793216, 11.438239],
    [106.794029, 11.438996],
    [106.794141, 11.439274],
    [106.795905, 11.441187],
    [106.796016, 11.441662],
    [106.796402, 11.442181],
    [106.796906, 11.442594],
    [106.797385, 11.442666],
    [106.797624, 11.443207],
    [106.798316, 11.443407],
    [106.799062, 11.444042],
    [106.798938, 11.444589],
    [106.799113, 11.445283],
    [106.799471, 11.445733],
    [106.800399, 11.446214],
    [106.800836, 11.446142],
    [106.801027, 11.446233],
    [106.801062, 11.446433],
    [106.801203, 11.446549],
    [106.801499, 11.446471],
    [106.801930, 11.446871],
    [106.802294, 11.447137],
    [106.802772, 11.447865],
    [106.803592, 11.448634],
    [106.804293, 11.449247],
    [106.804271, 11.449741],
    [106.805203, 11.450422],
    [106.805289, 11.450622],
    [106.805710, 11.450832],
    [106.805933, 11.451510],
    [106.806198, 11.452126],
    [106.806300, 11.454177],
    [106.806222, 11.454475],
    [106.806088, 11.454594],
    [106.806317, 11.454894],
    [106.806247, 11.455469],
    [106.806120, 11.455731],
    [106.806324, 11.456019],
    [106.806292, 11.456257],
    [106.806011, 11.456594],
    [106.805852, 11.457251],
    [106.806158, 11.457407],
    [106.806247, 11.457651],
    [106.806152, 11.457920],
    [106.806400, 11.458220],
    [106.806311, 11.458626],
    [106.806713, 11.459189],
    [106.806668, 11.459352],
    [106.807600, 11.460765],
    [106.807689, 11.461702],
    [106.807491, 11.462453],
    [106.806834, 11.463597],
    [106.806183, 11.467060],
    [106.805297, 11.468030],
    [106.805061, 11.468255],
    [106.805061, 11.468505],
    [106.803823, 11.470718],
    [106.803823, 11.471018],
    [106.803657, 11.471656],
    [106.803415, 11.472256],
    [106.802560, 11.473200],
    [106.802171, 11.473456],
    [106.801890, 11.473950],
    [106.801590, 11.474244],
    [106.801552, 11.474563],
    [106.801935, 11.474638],
    [106.801539, 11.476110],
    [106.801756, 11.476173],
    [106.801768, 11.476242],
    [106.802170, 11.476292],
    [106.802426, 11.476479],
    [106.802687, 11.477148],
    [106.802662, 11.477586],
    [106.803000, 11.478248],
    [106.803095, 11.478780],
    [106.803032, 11.479824],
    [106.803000, 11.480562],
    [106.803076, 11.481393],
    [106.802068, 11.483475],
    [106.801486, 11.484974],
    [106.801076, 11.485429],
    [106.800882, 11.486110],
    [106.800566, 11.486959],
    [106.800187, 11.487489],
    [106.800147, 11.487639],
    [106.799921, 11.487600],
    [106.799596, 11.488170],
    [106.799172, 11.488002],
    [106.798324, 11.489036],
    [106.798326, 11.489672],
    [106.798074, 11.490114],
    [106.797469, 11.490644],
    [106.797424, 11.490936],
    [106.797072, 11.491132],
    [106.796587, 11.491470],
    [106.795273, 11.491120],
    [106.794814, 11.491420],
    [106.794240, 11.491557],
    [106.793576, 11.491082],
    [106.792198, 11.491520],
    [106.790068, 11.491207],
    [106.789544, 11.491332],
    [106.789238, 11.491107],
    [106.789404, 11.490419],
    [106.788179, 11.489844],
    [106.787490, 11.490107],
    [106.785398, 11.489119],
    [106.784607, 11.489357],
    [106.784530, 11.488644],
    [106.784262, 11.488794],
    [106.783765, 11.488682],
    [106.783152, 11.488707],
    [106.783229, 11.488319],
    [106.782591, 11.488006],
    [106.781953, 11.488306],
    [106.781226, 11.487294],
    [106.779950, 11.486694],
    [106.780039, 11.486218],
    [106.779337, 11.486231],
    [106.779057, 11.485418],
    [106.779183, 11.485086],
    [106.779035, 11.485425],
    [106.779201, 11.485061],
    [106.778314, 11.485165],
    [106.777525, 11.484741],
    [106.777244, 11.483857],
    [106.776539, 11.484199],
    [106.776152, 11.483388],
    [106.775947, 11.483730],
    [106.775568, 11.483537],
    [106.775666, 11.482979],
    [106.775348, 11.483344],
    [106.775014, 11.482786],
    [106.773648, 11.482764],
    [106.773284, 11.482489],
    [106.772222, 11.482808],
    [106.771873, 11.481857],
    [106.771448, 11.482437],
    [106.771097, 11.482518],
    [106.770581, 11.481566],
    [106.770824, 11.482756],
    [106.769701, 11.482518],
    [106.769368, 11.481923],
    [106.769185, 11.483113],
    [106.768032, 11.482607],
    [106.767790, 11.481804],
    [106.768032, 11.481180],
    [106.767152, 11.479425],
    [106.764118, 11.480644],
    [106.757684, 11.477373],
    [106.753770, 11.476600],
    [106.750128, 11.468838],
    [106.752495, 11.461849],
    [106.752485, 11.456634],
    [106.752792, 11.456015],
    [106.754849, 11.454476],
    [106.756040, 11.454335],
    [106.756833, 11.452796],
    [106.756852, 11.452283],
    [106.755751, 11.449383],
    [106.753315, 11.446430],
    [106.751908, 11.445634],
    [106.750626, 11.444661],
    [106.741696, 11.440674],
    [106.741271, 11.439856],
    [106.741210, 11.439053],
    [106.741819, 11.434072],
    [106.741699, 11.433529],
    [106.741423, 11.433265],
    [106.738426, 11.432016],
    [106.734755, 11.431733],
    [106.727866, 11.432819],
    [106.727123, 11.432581],
    [106.726531, 11.432209],
    [106.725757, 11.428060],
    [106.726410, 11.424847],
    [106.725939, 11.423286],
    [106.723299, 11.422408],
    [106.719354, 11.423107],
    [106.718702, 11.422944],
    [106.717716, 11.421412],
    [106.717822, 11.419107],
    [106.718778, 11.416236],
    [106.718702, 11.414704],
    [106.709006, 11.405825],
    [106.708764, 11.404635],
    [106.710205, 11.401690],
    [106.710144, 11.400843],
    [106.709006, 11.399519],
    [106.706275, 11.398299],
    [106.704621, 11.397094],
    [106.704181, 11.396321],
    [106.703832, 11.396514],
    [106.702406, 11.397823],
    [106.701116, 11.398076],
    [106.700494, 11.398418],
    [106.700069, 11.398626],
    [106.700009, 11.399326],
    [106.699796, 11.399534],
    [106.699463, 11.400114],
    [106.698977, 11.400471],
    [106.698674, 11.400768],
    [106.698294, 11.401438],
    [106.697991, 11.401824],
    [106.697596, 11.403267],
    [106.691952, 11.401542],
    [106.692043, 11.400947],
    [106.692089, 11.399578],
    [106.691891, 11.398850],
    [106.691391, 11.398478],
    [106.690966, 11.398418],
    [106.690602, 11.398299],
    [106.690329, 11.398314],
    [106.689191, 11.397347],
    [106.686399, 11.395503],
    [106.685731, 11.396931],
    [106.683865, 11.398626],
    [106.678674, 11.402432],
    [106.678196, 11.402020],
    [106.678202, 11.401751],
    [106.678132, 11.401538],
    [106.678202, 11.400794],
    [106.678349, 11.400788],
    [106.678604, 11.400550],
    [106.678878, 11.400456],
    [106.679025, 11.399937],
    [106.678968, 11.399462],
    [106.678598, 11.399281],
    [106.678980, 11.398230],
    [106.677347, 11.397986],
    [106.676205, 11.402181],
    [106.674531, 11.402016],
    [106.674601, 11.401732],
    [106.674011, 11.401569],
    [106.674086, 11.401212],
    [106.671795, 11.400517],
    [106.672825, 11.397520],
    [106.673115, 11.397394],
    [106.674129, 11.397168],
    [106.674563, 11.397273],
    [106.675884, 11.393005],
    [106.675246, 11.393047],
    [106.674069, 11.391194],
    [106.673890, 11.391122],
    [106.673759, 11.390932],
    [106.673593, 11.391010],
    [106.673345, 11.390916],
    [106.672908, 11.390972],
    [106.672436, 11.389518],
    [106.671750, 11.389725],
    [106.671450, 11.389021],
    [106.671689, 11.388733],
    [106.671702, 11.388289],
    [106.673351, 11.387508],
    [106.674521, 11.386750],
    [106.675281, 11.386310],
    [106.675402, 11.386368],
    [106.676679, 11.385297],
    [106.678104, 11.385050],
    [106.678204, 11.384753],
    [106.678172, 11.384510],
    [106.677942, 11.384072],
    [106.677044, 11.383361],
    [106.676133, 11.382224],
    [106.675962, 11.381941],
    [106.676160, 11.381446],
    [106.676431, 11.381132],
    [106.676963, 11.381057],
    [106.677261, 11.381070],
    [106.677595, 11.381030],
    [106.677717, 11.380623],
    [106.677717, 11.380230],
    [106.678253, 11.376908],
    [106.678172, 11.374967],
    [106.677892, 11.373848],
    [106.677694, 11.373627],
    [106.677369, 11.373141],
    [106.677297, 11.372769],
    [106.677347, 11.372429],
    [106.677590, 11.371973],
    [106.677721, 11.370871],
    [106.677786, 11.369856],
    [106.677451, 11.368473],
    [106.677553, 11.368008],
    [106.677378, 11.366014],
    [106.677174, 11.365649],
    [106.676799, 11.365191],
    [106.676815, 11.364776],
    [106.677236, 11.364337],
    [106.677298, 11.364166],
    [106.677046, 11.363382],
    [106.677043, 11.362972],
    [106.676938, 11.362785],
    [106.676579, 11.362612],
    [106.676439, 11.362380],
    [106.676174, 11.362267],
    [106.676056, 11.362094],
    [106.676040, 11.361949],
    [106.676128, 11.361239],
    [106.676037, 11.361013],
    [106.675680, 11.360553],
    [106.675683, 11.360174],
    [106.675584, 11.359471],
    [106.675198, 11.359113],
    [106.675061, 11.358824],
    [106.675504, 11.358346],
    [106.675587, 11.358088],
    [106.675568, 11.357956],
    [106.674986, 11.357775],
    [106.674895, 11.357522],
    [106.674428, 11.357183],
    [106.674262, 11.356931],
    [106.674206, 11.356663],
    [106.674337, 11.356166],
    [106.674332, 11.355884],
    [106.673940, 11.355584],
    [106.673972, 11.355169],
    [106.674165, 11.354874],
    [106.673709, 11.354767],
    [106.673127, 11.354740],
    [106.672846, 11.354669],
    [106.672658, 11.354551],
    [106.671673, 11.354166],
    [106.671026, 11.353842],
    [106.670621, 11.353819],
    [106.669980, 11.353925],
    [106.669328, 11.353822],
    [106.669076, 11.353943],
    [106.668799, 11.354109],
    [106.668225, 11.354230],
    [106.667413, 11.354572],
    [106.667193, 11.354585],
    [106.666981, 11.354545],
    [106.666436, 11.354248],
    [106.666251, 11.354198],
    [106.665962, 11.354182],
    [106.665605, 11.354125],
    [106.664605, 11.354635],
    [106.664511, 11.354714],
    [106.664016, 11.354948],
    [106.663794, 11.354990],
    [106.663590, 11.354975],
    [106.663118, 11.355264],
    [106.662818, 11.355268],
    [106.662597, 11.355215],
    [106.662491, 11.355230],
    [106.661986, 11.355556],
    [106.661681, 11.355701],
    [106.661257, 11.355750],
    [106.660874, 11.355854],
    [106.660627, 11.355891],
    [106.660331, 11.355946],
    [106.659644155189, 11.3560652033078],

]

var jsondataBTU = {
    "points": pointListBTU,
    "polygons": [
        {
            type: "polygon",
            rings: bacTanUyen,
            Name: "Bắc Tân Uyên",
            attributes: graphicAttBTU,
            Location: "Bình Dương, Việt Nam",
            symbol: {
                type: "simple-fill",
                color: [227, 139, 79, 0.4],
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: popupTemplate_polygon
        },
        {
            type: "polygon",
            rings: TanUyen,
            Name: "Bắc Tân Uyên",
            attributes: graphicAttTU,
            Location: "Bình Dương, Việt Nam",
            symbol: {
                type: "simple-fill",
                color: [255,0,0, 0.4],
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: popupTemplate_polygon
        },
        {
            type: "polygon",
            rings: ringsPG,
            Name: "Phú Giáo",
            attributes: graphicAttPG,
            Location: "Bình Dương, Việt Nam",
            symbol: {
                type: "simple-fill",
                color: [227, 139, 79, 0.4],
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: popupTemplate_polygon
        },
        {
            type: "polygon",
            rings: ThuDau1,
            Name: "Thủ Dầu Một",
            attributes: graphicAttTD1,
            Location: "Bình Dương, Việt Nam",
            symbol: {
                type: "simple-fill",
                color: [139, 0, 139, 0.4],
                outline: {
                    color: [255, 255, 255],
                    width: 1
                }
            },
            popupTemplate: popupTemplate_polygon
        },
    ]
};

//
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
        center: [106.6783602360426, 11.222416391881385],
        zoom: 10,
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

    const createPointGraphic = (point) => {
        return new Graphic({
            geometry: point.point,
            symbol: point.markerSymbol,
            attributes: point.pointAtt,
            popupTemplate: {
                // autocasts as new PopupTemplate()
                title: "{Name}",
            },
        });
    };

    var createPolyGraphic = function (data) {
        return new Graphic({
            geometry: data,
            symbol: data.symbol,
            attributes: data.attributes,
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
        graphicsLayer.add(createPolyGraphic(data));
    });

    jsondataBTU.points.forEach(function (data) {
        graphicsLayer.add(createPointGraphic(data));
    });
    jsondataBTU.polygons.forEach(function (data) {
        graphicsLayer.add(createPolyGraphic(data));
    });
    map.add(graphicsLayer);
});