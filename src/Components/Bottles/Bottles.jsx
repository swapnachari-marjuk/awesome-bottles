import React, { use } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"

const Bottles = ({promiseBottle}) => {
    const bottles = use(promiseBottle)
    // console.log(bottles)
    return (
        <div className='bottle-parent'>
           {
            bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
           } 
        </div>
    );
};

export default Bottles;