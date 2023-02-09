import {Alert} from 'react-native';
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
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};
setJSExceptionHandler(errorHandler);
setNativeExceptionHandler(errorString => {
  console.log(errorString);
});
