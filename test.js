let seher = prompt('Oldugunuz seheri yazin!');
let seher2 = prompt('Gedeceyiniz seheri yazin!');
let mesafe = +prompt('Mesafeni yazin!');
let suret = +prompt('Suretinizi yazin!');

let vaxt = mesafe / suret;

let cavab = ` ${seher} ile ${seher2} a geden yolun mesafesi ${mesafe}km olarsa ${suret} ile gedirikse ${vaxt} saata catariq `

document.getElementById('yol').innerHTML = cavab

