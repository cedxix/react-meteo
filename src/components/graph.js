import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';


const getAverage = (data) => {
    return _.round(_.sum(data) / data.length)
};

export default function ({data, color, units}) {


    return (
        <div>
            <Sparklines height={50} width={250} data={data} style={{fill: 'none'}}>
                <SparklinesLine color={color}/>
                <SparklinesReferenceLine type="mean"/>
            </Sparklines>
            <div><b>{getAverage(data) + ' ' + units}</b></div>
        </div>
    )
}