import {knowledgeSearch,attributeSearch,substanceSearch} from '../services/knowledgeSearch';

export default {
  namespace: 'knowledge',
  state: {
    getKeyword:[],
  },

  effects: {
    * getKeyword({payload,callback}, {call, put}) {
      const response = yield call(knowledgeSearch,payload);
      yield put({
        type: 'setKeyword',
        payload: response,
      });
      if(callback) callback(response)
    },
  },

  reducers: {
    setKeyword(state, action) {
      return {
        ...state,
        getKeyword: action.payload,
      };
    },
  }
};
