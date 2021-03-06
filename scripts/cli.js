require('ts-node').register({
    compilerOptions: {
      declaration: true,
      inlineSourceMap: true,
      module: "commonjs",
      moduleResolution: "node",
      sourceMap: true,
      strict: true,
      target: "ES6",
    }
});

require("../util/dom-shim.js");
console.log('Content to be parsed',process.argv[2])

const scte35 = require("../lib/scte35");

if (process.argv.length < 2) {
    throw new Error(" TODO: usage... ");
}

// TODO: support for --hex or --b64
console.log(JSON.stringify(scte35.SCTE35.parseFromB64(process.argv[2]), null, 4));
