import * as Backbone from 'backbone';

export class CommentModel extends Backbone.Model {
    public comment: string;

    public remainingTime: number = 10;
}