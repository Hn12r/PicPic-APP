
import { Alert, PermissionsAndroid, Platform } from "react-native";
export const requestWriteExternalStoragePermission = async () => {
    if (Number(Platform.Version) < 33) {
        return true;
    }
    const granted = await PermissionsAndroid.request
        (PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Storage Permission',
                message: 'This app needs access to your storage to save Image',
            },


        );

    if (granted === PermissionsAndroid.RESULTS.DENIED) {
        Alert.alert(
            'Permission Required',
            'This app needs access to your storage to download Image',
            [
                {
                    type: 'Cancel', style: 'cancel'
                },
                {
                    text: ' Ask Permission Again',
                    onPress: () => requestWriteExternalStoragePermission(),
                },

            ],
        );
    }
    if (granted === PermissionsAndroid.PERMISSIONS.Never_ASK_AGAIN) {
        Alert.alert(
            'Permission Required',
            'Please enable storage permission in your device setting to download the Image',
            [
                {
                    type: "Cancel",
                    style: "cancel"
                }, {
                    text: "Open Setting",
                    onPress: () => Linking.openSetting(),
                },
            ]
        )
    }
    if (granted === PermissionsAndroid.PERMISSIONS.GRANTED) {
        console.log('write storage permission granted');
        return true;
    }
};