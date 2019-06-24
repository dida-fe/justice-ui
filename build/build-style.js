const fs = require('fs-extra');
const glob = require('fast-glob');
const path = require('path');
const sass = require('node-sass');
const csso = require('csso');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');

async function compileStyleCodes (styleCodes, paths) {
  const outputs = await Promise.all(
    styleCodes.map((source, index) =>
      new Promise((resolve, reject) => {
        sass.render({
          data: source,
          includePaths: [path.resolve(__dirname, 'node_modules')],
          outFile: paths[index]
        }, function (error, result) {
          if (!error) {
            resolve(result)
          } else {
            reject(error)
          }
        })
      })
    )
  );
  return outputs.map(item => item.css);
}

async function compilePostcss (cssCodes, paths) {
  const postcssConfig = await postcssrc();
  const outputs = await Promise.all(
    cssCodes.map((css, index) =>
      postcss(postcssConfig.plugins).process(css, { from: paths[index] })
    )
  );

  return outputs.map(item => item.css);
}

async function compileCsso (cssCodes) {
  return cssCodes.map(css => csso.minify(css).css);
}

async function dest (output, paths) {
  await Promise.all(
    output.map((css, index) => fs.writeFile(paths[index].replace('.scss', '.css'), css))
  );

  const iconCss = await glob(['./es/icon/*.css', './lib/icon/*.css'], { absolute: true });
  iconCss.forEach(file => {
    fs.copyFileSync(file, file.replace('.css', '.scss'));
  });
}

// compile component css
async function compile () {
  let codes;
  const paths = await glob(['./es/**/*.scss', './lib/**/*.scss'], { absolute: true });

  codes = await Promise.all(paths.map(path => fs.readFile(path, 'utf-8')));
  codes = await compileStyleCodes(codes, paths);
  codes = await compilePostcss(codes, paths);
  codes = await compileCsso(codes);

  await dest(codes, paths);
}

compile();
