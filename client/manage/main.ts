import './main.css';
import * as $ from 'jquery';
import * as io from 'socket.io-client';
import * as Backbone from 'backbone';
import * as _ from 'underscore';

console.log($);
console.log(io);
console.log(Backbone);
console.log(_);

let socket = io();
socket.on('NEW_COMMENT', (comment: any) => {
    $('body').html($('body').html() + "<br>" + comment);
})

import { AppView } from './view/app.view';

$(() => {
    new AppView().render();
});