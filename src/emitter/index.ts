// 親子関係にない兄弟要素のVueコンポーネントでemit and onをする場合に推奨
import mitt from 'mitt';

const emitter = mitt();

// ここでonError、emitErrorとか全部書いておくほうがよい？ちょっと判断つかない

export { emitter };
