define(["modules/manage_menu/view", "modules/manage_menu/model"], function(View, Model) {
  return {
    init: function(el) {
      var view = new View({
        el: el,
        model: new Model
      });
    }
  };
});