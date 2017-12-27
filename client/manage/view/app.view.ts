import * as $ from 'jquery';
import * as Backbone from 'backbone';

export class AppView extends Backbone.View<any> {
    // public el: string = 'body'
    public initialize() {
        console.log('initialize');
        this.setElement($('body'));
    }

    public render(): AppView {
        this.$el.text('Hello');
        return this;
    }
}