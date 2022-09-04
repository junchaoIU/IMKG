import {oneWordSearch} from '../services/oneWordSearch';

export default {
  namespace: 'oneWord',
  state: {
    getOneWord:[],
  },

  effects: {
    * getKeyword({payload,callback}, {call, put}) {
      const response = yield call(oneWordSearch,payload);
      yield put({
        type: 'setOneWord',
        payload: response,
      });
      if(callback) callback(response)
    },
  },

  reducers: {
    setOneWord(state, action) {
      return {
        ...state,
        getOneWord: action.payload,
      };
    },
  }
};
