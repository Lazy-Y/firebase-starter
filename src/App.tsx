import './App.css';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import firebase from 'firebase';
import LoginPage from './login/LoginPage';
import MainPage from './Main/MainPage';
import { store, rrfProps } from './lib/firestore-connect';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { Provider } from 'react-redux';

function App() {
  const [currentUser, setCurrentUser] = useState(firebase.auth().currentUser)
  return (
    <div className="App">
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          {currentUser ? <MainPage /> : <LoginPage setCurrentUser={setCurrentUser} />}
        </ReactReduxFirebaseProvider>
      </Provider>
    </div>
  );
}

export default App;
