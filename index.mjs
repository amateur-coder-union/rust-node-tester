import AV from 'leanengine';
import { $ } from 'zx';
import path from 'path';

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'T51iKKGXz2t9OriABcYSeRac-MdYXbMMI',
  appKey: process.env.LEANCLOUD_APP_KEY || 'n57PqFRFsbwsSddDPO89Xpj5',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || '9wfTPNEVmSjkzMICbztkEMc4',
});

const binPath = path.resolve(path.resolve(), './rust-server-linux');
const port = Number(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3001);

await $`${binPath} ${port}`;
