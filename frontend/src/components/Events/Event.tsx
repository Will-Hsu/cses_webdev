import React, { useEffect, useState } from 'react';
import { event_style } from './styles';

const EventBox = () => { 
   const styles = event_style();

    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();


    return (<div className='outerBox'>
        <div className='innerBox'>
            <h1>hello</h1>
        </div>
    </div>)

    
}

export default EventBox;