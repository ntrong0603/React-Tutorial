
import React, { Component } from 'react';

import './App.css';
import TotoItem from "./components/TodoItem";

class App extends Component
{
    constructor()
    {
        // Dùng để gọi lại constructor của class cha
        // Không thể sử dụng this trong constructor được nếu chưa gọi đên contructor của class cha
        super();

        this.state = {
            todoItems: [
                {
                    title: 'Mua bim bim',
                    isCompleted: true
                },
                {
                    title: 'Mua sung',
                    isCompleted: false
                },
                {
                    title: 'Mua dao 2',
                    isCompleted: false
                }
            ]
        };
        
        this.onClicked = this.onClicked.bind(this);
    }

    onClicked()
    {
        this.setState(state =>
        {
            console.log(state);
            return {};
        }
        );
        return;
    }

    render()
    {
        const { todoItems } = this.state;
        return (
            <div className="App" >
                {
                    todoItems.length > 0 && todoItems.map((item, index) =>
                    {
                        return <TotoItem key={index} item={item} onClicked={this.onClicked} />;
                    })
                }
                {todoItems.length === 0 && 'Nothing here'}
            </div>
        );
        // cách if else
        // if (this.todoItems.length > 0)
        // {
        //   return (
        //     <div className="App" >
        //       {
        //         this.todoItems.map((item, index) =>
        //         {
        //           return <TotoItem key={index} item={item} />;
        //         })
        //       }
        //     </div>
        //   );
        // } else
        // {
        //   return (
        //     <div className="App" >Nothing here</div>
        //   );
        // }
    }
}

export default App;
