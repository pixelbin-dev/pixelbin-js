export default Transformation;
/**
 * class to create a Transformation object
 */
declare class Transformation {
    /**
     * allows the user to generate a custom transformation with the input parameters.
     * @param {Object} arg - custom transformation
     * @param {string} arg.plugin - transformation plugin
     * @param {string} arg.name - transformation name
     * @param {Array<Object>} arg.values - transformation parameter object
     * @param {string} [arg.values[].key] - transformation parameter key
     * @param {string} [arg.values[].value] - transformation parameter value
     * returns Transformation
     */
    static customTransformation({ plugin, name, values }: {
        plugin: string;
        name: string;
        values: Array<any>;
    }): Transformation;
    /**
     * @param {Transformation} _transformation
     */
    constructor(_transformation: Transformation);
    _transformation: any;
    /**
     * provides functionality to append transformation.
     * @param {Transformation} transformation.
     * returns Transformation
     */
    pipe(transformation: any): Transformation;
    /**
     * provides functionality to get all transformation.
     * returns Transformation list
     */
    getTransformation(): any;
}
