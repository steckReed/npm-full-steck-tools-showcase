/*
  Created By npm full-steck-tools
  
  Functions purpose is to bulk import all files within given directory

  Use with `require.context` 

  @Requires npm Package: npm i @types/webpack-env
  https://webpack.js.org/guides/dependency-management/#requirecontext

  @Params
    - require.context({directory}, {bool}, {regex})

  @Ret:
    - obj
*/

export function importAllFromDir(r) {
  let ret = {};
  r.keys().map((item, index) => { ret[item.replace('./', '')] = r(item); });
  return ret;
}