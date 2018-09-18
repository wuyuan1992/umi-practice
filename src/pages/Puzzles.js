import { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';


const namespace = 'puzzles';
const mapStateToProps = (state)=>{
    const cardList = state[namespace];
    return { cardList: cardList.data }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addClick(newOne){
            dispatch({
                type:`${namespace}/add`,
                payload:newOne
            })
        },
        onDidMount(){
            dispatch({
                type: `${namespace}/getData`
            })
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)

export default class Puzzles extends Component{

    componentDidMount(){
        this.props.onDidMount();
    }

    render(){
        return (
            <div className="card-list">
                {
                    this.props.cardList.map(card => (
                        <Card key={card.id}>
                            <div>Q: { card.setup }</div>
                            <div><strong>A: { card.punchline }</strong></div>
                        </Card>    
                    ))
                }
                <Button onClick={ ()=>{ this.props.addClick({
                    id: 1,
                    setup: '1111111',
                    punchline: '22222'
                }) }}>添加卡片</Button>
            </div>
        )
    }
}