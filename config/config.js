import {defineConfig} from 'umi';
import {resolve} from 'path';
import proxy from './proxy';

const {REACT_APP_ENV} = process.env;

export default defineConfig({
    title: 'platform模版',
    nodeModulesTransform: {
        type: 'none'
    },
    history: {
        type: 'hash'
    },
    antd: {},
    define: {
        CESIUM_BASE_URL: ''
    },
    proxy: proxy[REACT_APP_ENV || 'dev'],
    publicPath: './',
    base: '/',
    runtimePublicPath: true,
    dva: {
        immer: true
    },
    fastRefresh: {},
    alias: {
        '@': resolve(__dirname, './src')
    }
});
