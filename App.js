import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CalendarNative from './components/CalendarNative';

const App = () => {
  const [dateSelected, setDateSelected] = useState();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text>Hello</Text> */}
      {/* <CalendarNative day={21} month={4} year={2021} /> */}
      <CalendarNative
        onDateChange={value => {
          console.log(value, 'DATE');
          setDateSelected(value);
        }}
        day={21}
        month={4}
        year={2021}
        style={{
          width: 400,
          height: 400,
        }}
      />

      <Text>{JSON.stringify(dateSelected)}</Text>
    </View>
  );
};

export default App;
