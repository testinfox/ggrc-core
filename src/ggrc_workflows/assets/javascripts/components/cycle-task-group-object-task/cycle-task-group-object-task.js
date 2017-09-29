/* !
  Copyright (C) 2017 Google Inc.
  Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

import template from './templates/cycle-task-group-object-task.mustache';

var viewModel = can.Map.extend({
  instance: {},
});

export default GGRC.Components('cycleTaskGroupObjectTask', {
  tag: 'cycle-task-group-object-task',
  template: template,
  viewModel: viewModel,
});
