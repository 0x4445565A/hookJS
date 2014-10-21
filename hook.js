var hook = {
  hooks : [],
  add : function (name, callback) {
    name = name.toUpperCase();
    if (typeof(hook.hooks[name]) == 'undefined') {
      hook.hooks[name] = [];
    }
    hook.hooks[name].push(callback);
  },
  clear : function (name) {
    name = name.toUpperCase();
    delete hook.hooks[name];
  },
  call : function (name) {
    var success = false;
    var args = [];
    name = name.toUpperCase();
    delete arguments[Object.keys(arguments)[0]];
    for (var i in arguments) {args.push(arguments[i])}
    if (typeof(hook.hooks[name]) != 'undefined') {
      for (var i in hook.hooks[name]) {
        hook.hooks[name][i].apply(this, args);
      }
    } else { throw "Unknown hook: " + name; }
  },
};