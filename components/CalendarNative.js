import React from 'react';
import {requireNativeComponent, View} from 'react-native';
import PropTypes from 'prop-types';

// const iface = {
//   name: 'CalendarNativeAndroid',
//   PropTypes: {
//     ...View.propTypes,
//     day: PropTypes.number,
//     month: PropTypes.number,
//     year: PropTypes.number,
//   },
// };

// export default requireNativeComponent('CalendarNativeAndroid', iface);

const CalendarNative = props => {
  const onChange = event => {
    if (!props.onDateChange) {
      return;
    }

    props.onDateChange(event.nativeEvent);
  };
  return <CalendarNativeAndroid {...props} onChange={onChange} />;
};

CalendarNative.propTypes = {
  ...View.propTypes,
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
  onDateChange: PropTypes.func,
};

const CalendarNativeAndroid = requireNativeComponent(
  'CalendarNativeAndroid',
  CalendarNative,
  {
    nativeOnly: {
      onChange: true,
    },
  },
);

export default CalendarNative;
