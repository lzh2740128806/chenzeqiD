Function.prototype.bind = Function.prototype.bind || function (target) {
  var self = this;
  return function (args) {
    if (!(args instanceof Array)) {
      args = [args];
    }
    self.apply(target, args);
  };
};

window.onload = function(){
      var layer = document.querySelector('.layer-wrap');
      var open = document.querySelector('#open');
      var close = document.querySelector('#close');

      function show(){
        layer.style.display = 'block';
      }

      function hide(){
        layer.style.display = 'none';
      }

      open.onclick = show;
      close.onclick = hide;
    }
