// Copyright 2015, EMC, Inc.

import Store from 'src-common/lib/Store';

import RackHDRestAPIv1_1 from '../messengers/RackHDRestAPIv1_1';

export default class TasksStore extends Store {

  read(id) {
    return RackHDRestAPIv1_1.tasks.get(id)
      .then(item => this.change(id, item))
      .catch(err => this.error(id, err));
  }

  list() {
    return RackHDRestAPIv1_1.tasks.list()
      .then(list => this.recollect(list))
      .catch(err => this.error(null, err));
  }

}
