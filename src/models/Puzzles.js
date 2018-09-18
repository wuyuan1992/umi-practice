import Http from '../services/Http';

export default {
    namespace:'puzzles',
    state:{
        counter:0,
        data:[]
    },
    reducers:{
        add(state, { payload }){
            return {
                counter: state.counter + 1,
                data: [...state.data, {...payload, id:state.counter + 1}]
            }
        },
        getSuccess(state, {payload}){
            let data = payload.map((el, index)=>{
                return {
                    ...el,
                    counter: index+1
                }
            });
            let counter = data.length;
            console.log(data);
            console.log(counter);
            return {
                counter, data
            };
        },
        delete(state, { payload }){
            let curr = [...state];
            curr.splice(payload , 1);
            return [...state, curr]
        },
    },
    effects: {
        *getData({payload}, {call , put}){
            try{
                let data = yield call(Http.get, 'aaaa');
                console.log(data);
                yield put({
                    type:'getSuccess',
                    payload: data
                })
            }catch(err){
                console.log(err);
            }

        }
    }
}