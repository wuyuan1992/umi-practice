import React from 'react';
import { Table } from 'antd';
import { connect } from 'dva';


function mapStateToprops(state){
    return {
        cardList: state.cards.cardsList,
        cardsLoading: state.loading.effects['cards/queryList']
    }
}


class List extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>hello world</div>
        )
    }
}
export default connect(mapStateToprops)(List);