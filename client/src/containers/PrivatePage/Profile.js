import React, { useState } from 'react';

// CSS
import '../Containers.scss'

export default function Profile() {
    const [content, setContent] = useState(null);

    const test = () => {
        setContent([
           {combineName : 'test1', Decs : 'test2', combinealcol : 'test3', like:4, kind:'test5'},
        ])
        console.log(content);
    }

    return (
        <div className='container'>
            <div className='items'>
                <button onClick={test}/>
                {content ? content.map((items, index) => (
                    <div key={index}>
                        <p>{items.combineName}</p>
                        <p>{items.Decs}</p>
                        <p>{items.combinealcol}</p>
                        <p>{items.like}</p>
                        <p>{items.kind}</p>
                    </div>
                )) : ''}
            </div>
        </div>
    );
};