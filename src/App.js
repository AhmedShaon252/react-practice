import React from 'react';
import Calculator from './components/Calculator';
import ClickCount from './components/ClickCount';
import Clock from './components/Clock';
import Counter from './components/Counter';
import Form from './components/Form';
import HoverCount from './components/HoverCount';
import Section from './components/Section';
import ThemeContext from './context/themeContext';
import Todo from './components/Todo';
import UseReduce from './components/UseReduce';
import ApiFetching from './components/ApiFetching';

export default class App extends React.Component{
    state={
        theme: 'light',
        switchTheme: ()=>{
            this.setState(({theme})=>{
                if(theme==='dark'){
                    return{
                        theme:'light'
                    }
                }else{
                    return{
                        theme:'dark'
                    }
                }
            })
        }
    }

    render(){
        return (
            <div>
                {/*
                    <Form />
                    <br/>
                    <Calculator />
                    <br/>
                    <Counter>
                        {(count, incrementCount)=>(<ClickCount count={count} incrementCount={incrementCount} />)}
                    </Counter>
                    <br />
                    <Counter>
                        {(count, incrementCount)=>(<HoverCount count={count} incrementCount={incrementCount} />)}
                    </Counter>
                    <ThemeContext.Provider value={this.state}>
                        <Section />
                    </ThemeContext.Provider>
                */}
                <Clock />
                <br />
                <Todo />
                <br />
                <UseReduce />
                <br />
                <ApiFetching/>
            </div>
        );
    }
}
