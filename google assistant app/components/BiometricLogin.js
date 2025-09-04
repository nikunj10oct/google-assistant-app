import React from 'react';
import { Button, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function BiometricLogin({ onLogin }) {
    const handleLogin = async () => {
        const otp = await fetchOTPFromServer();
        if (await verifyOTP(otp)) {
            const result = await LocalAuthentication.authenticateAsync({promptMessage: 'Login with Face or Fingerprint'});
            if (result.success) onLogin();
            else Alert.alert('Authentication failed');
        }
    };
    return <Button title="Login with Biometrics" onPress={handleLogin} />;
}