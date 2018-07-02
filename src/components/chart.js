import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average_c(data) {
  return _.round(_.sum(data)/data.length-273.15);
}

function average_f(data) {
  return _.round(1.8*(_.sum(data)/data.length-273.15)+32);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>Average: {average_c(props.data)} {props.units}</div>
    </div>
  );
}
