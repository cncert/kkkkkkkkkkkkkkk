import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    all_data: [],
    filter_data: [],
    start_time: '',
    end_time: '',
    search_key: '',
    search_time: []
  },
  mutations: {
    changeAllData (state, datas) {
      state.all_data = datas
    },
    changeFilterData (state, filterData) {
      if (filterData[0] == 'none_data'){
        state.filter_data = ['none_data']
      }else{
        state.filter_data = filterData;
      }
    },
    changeSearchTime (state, timeArry) {
      if (timeArry == 'clear'){
        state.search_time = []
      }
      state.start_time = timeArry[0];
      state.end_time = timeArry[1];
    },
    changeSearchKey (state, SearchKey) {
      state.search_key = SearchKey;
    },
  }
});

export default store
