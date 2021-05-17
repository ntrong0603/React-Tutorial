import React, { Component } from 'react';
import classNames from 'classnames';

import './TodoItem.css';
class TotoItem extends Component
{
    // Các biến truyền vào được lưu trong properties props
    render()
    {
        const { item } = this.props;
        let className = classNames(
            'todo_item',
            { 'todo_item-completed': item.isCompleted }
        );
        // if (item.isCompleted)
        // {
        //     className += ' todo_item-completed';
        // }
        return (
            <div className={className}>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TotoItem;