export { default as console } from './console.log';

export const idGenerator = () => '_' + Math.random().toString(36).substr(2, 9);
