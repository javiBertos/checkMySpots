export class MenuView extends Backbone.View<Backbone.Model> {
  private static tpl = `
    <nav>
      Hi mate! Here will be placed the navigation menu...
    </nav>
  `;

  initialize() {
    this.render();
  }

  render() {
    this.$el.html(MenuView.tpl);
    return this;
  }
}