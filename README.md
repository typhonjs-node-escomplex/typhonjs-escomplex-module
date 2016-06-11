# typhonjs-escomplex-module
Provides module / individual file oriented AST processing for typhonjs-escomplex complexity reports.

More information forthcoming. This NPM module is currently not published, but can be linked to from Github as a dependency in `package.json` as follows:
```
"dependencies": {
  "typhonjs-escomplex-module": "git+https://git@github.com/typhonjs-node-escomplex/typhonjs-escomplex-module.git",
}
```

An ES6 example follows:
```
import escomplexModule from 'typhonjs-escomplex-module';

const ast = <some parser AST>;

const report = escomplexModule.analyze(ast);
```


A CJS example follows:
```
var escomplexModule = require('typhonjs-escomplex-module');

var ast = <some parser AST>;

var report = escomplexModule.analyze(ast);
```
