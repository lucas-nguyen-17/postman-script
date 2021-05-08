const _ = require("lodash");
const moment = require("moment");

let direction = _.random(1, 2);
let adult = _.random(2, 4);
let child = _.random(0, 2);

// pm.environment.set("direction", _.random(1, 2));
// pm.environment.set("adult", _.random(2, 4));
// pm.environment.set("child", _.random(0, 2));

let inputs = [
    "Tp. Hồ Chí Minh (SGN)",
    "Hà Nội (HAN)",
    "Buôn Ma Thuột (BMV)",
    "Chu Lai (VCL)",
    "Đà Lạt (DLI)",
    "Đà Nẵng (DAD)",
    "Hải Phòng (HPH)",
    "Nha Trang (CXR)",
    "Phú Quốc (PQC)",
    "Pleiku (PXU)",
    "Quy Nhơn (UIH)",
    "Thanh Hóa (THD)",
    "Vinh (VII)"
];

let depinput = _.sample(inputs);
inputs.splice(inputs.indexOf(depinput), 1);
let desinput = _.sample(inputs);

// pm.environment.set("depinput", depinput);
// pm.environment.set("desinput", desinput);

let now = moment();
let depdate = now.add(5, "h").format("DD/MM/YYYY");
let days = _.random(2, 6);
let resdate = now.add(days, "d").add(5, "h").format("DD/MM/YYYY");

// pm.environment.set("depdate", depdate);
// pm.environment.set("resdate", resdate);

let object = {
    "direction": direction,
    "depinput": depinput,
    "desinput": desinput,
    "depdate": depdate,
    "resdate": resdate,
    "adult": adult,
    "child": child
};

console.log(object);
