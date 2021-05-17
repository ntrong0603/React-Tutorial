
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

    this.todoItems = [
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
    ];
  }

  render()
  {
    return (
      <div className="App" >
        {
          this.todoItems.length > 0 && this.todoItems.map((item, index) =>
          {
            return <TotoItem key={index} item={item} />;
          })
        }
        {this.todoItems.length === 0 && 'Nothing here'}
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
