export default {
  load,
  store
};

function load(key) {
  var str = localStorage[key] || 'null';
  return JSON.parse(str);
}

function store(key, any) {
  localStorage[key] = JSON.stringify(any);
}
