import Transformation from "../transformation.js";
import { processParams } from "../utils/transformation.utils.js";
/**
* Video Watermark Removal Plugin

* returns Transformation
*/
export const remove = function (config = {}) {
    const paramIdMap = {};
    const params = [].filter((param) => config.hasOwnProperty(param));
    const transformation = ["wmv.remove", "("];
    params.map((param, idx) => {
        processParams(config, params, transformation, paramIdMap, param, idx);
    });
    if (transformation.length && transformation[transformation.length - 1] === ",") {
        transformation.pop();
    }
    transformation.push(")");
    return new Transformation([transformation.join("")]);
};
export default {
    remove,
};
