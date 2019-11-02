import React from 'react';

const Item = (props) => (
    <div>
        {props.status ? '✅ ' : '❌ '}
        {props.info}
    </div>
);

export default Item;