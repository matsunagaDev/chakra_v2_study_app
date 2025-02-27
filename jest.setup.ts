import '@testing-library/jest-dom';

require('dotenv').config();
if (!global.structuredClone) {
  global.structuredClone = function structuredClone(objectToClone: any) {
    const stringified = JSON.stringify(objectToClone);
    const parsed = JSON.parse(stringified);
    return parsed;
  };
}

// jest.setup.tsに下記を追加
global.TextEncoder = require('util').TextEncoder;

// TextEncoderがすべてのテストでグローバルに使用できるようになる
