var baubang = [];
var baubangline = []
var graphicAttBB = {
    "Huyện": "Bàu Bàng",
    "Diện Tích": "340,02 km²",
    "Dân Số": "105.371 người"
}
var url_img = 'http://static.arcgis.com/images/Symbols/PeoplePlaces/School.png'
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
        // {
        //     type: "polygon",
        //     rings: bacTanUyen,
        //     Name: "Bắc Tân Uyên",
        //     Location: "Bình Dương, Việt Nam",
        //     symbol: {
        //         type: "simple-fill",
        //         color: [186, 220, 88, 0.4],
        //         outline: {
        //             color: [254, 145, 246, 0.27],
        //             width: 2
        //         }
        //     },
        //     popupTemplate: point_template_province
        // },
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
        }
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