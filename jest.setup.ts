import '@testing-library/jest-dom';
import dotenv from 'dotenv';

require('dotenv').config();
if (!global.structuredClone) {
  global.structuredClone = function structuredClone(objectToClone: any) {
    const stringified = JSON.stringify(objectToClone);
    const parsed = JSON.parse(stringified);
    return parsed;
  };
}

// TextEncoderがすべてのテストでグローバルに使用できるようになる
global.TextEncoder = require('util').TextEncoder;

// jestで.envファイルを読み込む
dotenv.config({ path: '.env.test' });
