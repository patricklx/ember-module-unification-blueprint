import Ember from 'ember';
import '@ember/object';

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}

}

export {};
