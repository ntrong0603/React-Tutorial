import React, { Component } from 'react';
import classNames from 'classnames';

import './TodoItem.css';
class TotoItem extends Component
{
    // constructor(props)
    // {
    //     super(props);

    //     this.onItemClick = this.onItemClick.bind(this);
    // }

    // onItemClick()
    // {
    //     this.props.item.isCompleted = !this.props.item.isCompleted;
    // }

    // Các biến truyền vào được lưu trong properties props
    render()
    {
        const { item, onClicked } = this.props;
        const className = classNames(
            'todo_item',
            { 'todo_item-completed': item.isCompleted }
        );
        // if (item.isCompleted)
        // {
        //     className += ' todo_item-completed';
        // }
        return (
            <div onClick={onClicked} className={className}>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TotoItem;