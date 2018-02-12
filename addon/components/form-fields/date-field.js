import Ember from 'ember';
import TextField from './text-field';
import { toDateString } from '../../utils/date';

const { isEmpty } = Ember;

export default TextField.extend({
  control: 'one-way-date',
});
