import {Alert, View} from 'react-native';
import RNRestart from 'react-native-restart';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

const errorHandler = (e: Error, isFatal: boolean) => {
  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `Error: ${isFatal ? 'Fatal:' : ''} ${e.name} 
      ${e.message} We will need to restart the app.`,
      [
        {
          text: 'Restart',
          onPress: () => {
            RNRestart.Restart();
          },
        },
      ],
    );
  } else {
    console.log(e);
  }
};
setJSExceptionHandler(errorHandler);
setNativeExceptionHandler(errorString => {
  console.log(errorString);
});

export default function App(): JSX.Element {
  return <View></View>;
}
