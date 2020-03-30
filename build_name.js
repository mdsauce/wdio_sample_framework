let faker = require("faker");

module.exports.rand_build = function rand_build() {
    let build_name = faker.fake("{{commerce.productName}} {{system.semver}}");
    // replace the random build name if user passes in a 2nd arg
    if (process.argv.slice(2).length >= 2) {
        build_name = npm_args[npm_args.length - 1] + " " + Date.now()
    }
    return build_name;
}
