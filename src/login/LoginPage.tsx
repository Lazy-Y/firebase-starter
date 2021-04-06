import React, { useCallback } from 'react';
import firebase from 'firebase';
import { Button } from 'antd';

const provider = new firebase.auth.GoogleAuthProvider();

type Props = {
    setCurrentUser: (_: firebase.User | null) => void
}

const LoginPage = ({ setCurrentUser }: Props) => {

    const handleLogin = useCallback(
        () => {
            firebase.auth().signInWithPopup(provider).then((result) => {
                setCurrentUser(result.user);
            }).catch((error) => {
                console.log(error)
            })
        },
        [setCurrentUser],
    )

    return <div >
        <Button type='primary' onClick={handleLogin}>Login With Google</Button>
    </div>
}

export default LoginPage;