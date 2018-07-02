import React from 'react';

function k_2_c(data) {
  return _.round(data - 273.15);
}

function k_2_f(data) {
  return _.round(1.8*(data - 273.15)+32);
}

export default (props) => {
  return (
    <div>
      {k_2_c(props.data)} °C/{k_2_f(props.data)} °F
    </div>
  );
}
