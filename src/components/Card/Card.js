import React from 'react';
import './style.css';

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card-box" style={ props.noMB ? { marginBottom: 0 } : null}>
        <div className="title">
            <span><i className={props.iconClass}></i></span>
          <h2>{props.title}</h2>
        </div>
        <p>{props.content}</p>
      </div>
    </div>
  )
}