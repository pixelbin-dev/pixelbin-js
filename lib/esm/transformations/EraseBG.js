import Transformation from "../transformation.js";
import { processParams } from "../utils/transformation.utils.js";
/**
 * EraseBG Background Removal Module
 * @param {enum} industryType - Industry type* @param {boolean} addShadow - Add Shadow (cars only)
 * returns Transformation
 */
export const bg = function (config = {
    industryType: "general",
    addShadow: false,
}) {
    const paramIdMap = {
        industryType: "i",
        addShadow: "shadow",
    };
    const params = ["industryType", "addShadow"].filter((param) => config.hasOwnProperty(param));
    const transformation = ["erase.bg", "("];
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
    bg,
};
