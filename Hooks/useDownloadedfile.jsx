import { useState } from "react";
import ReactNativeBlobUtil from "react-native-blob-util";
import { requestWriteExternalStoragePermission } from "../Utils/helper";
import { Alert } from "react-native";

export const useDownloadFile =  () => {
    let dirs = ReactNativeBlobUtil.fs.dirs;
    const folderPath = dirs.DownloadDir + "/Images";
    const [downloading, setdownloading] = useState(false);
    const [percentage, setPercentage] = useState(0);

    const downloadFile = async (url, fileName) => {
        if (!url) {
            return;
        };
        const isAllowed = await requestWriteExternalStoragePermission();
        if (!isAllowed) {
            Alert.alert(
                "permission Requied",
                "Please grant storage permission to download files"
            );
            return;
        }
        try {
           setdownloading(true);
           const res = await ReactNativeBlobUtil.config({
           path: `${folderPath}/${fileName}.png`,
           fileCache: true,
           appendExt: "png",
           addAndroidDownloads: {
           notification: true,
           title: "Great! Download Success!",
           description: "An image file",
           mediaScannable: true,
                },
            })
                .fetch("GET", url)
                .progress((received, total) => {
                    const progressPercentage = Math.floor((received/total)*100);
                    setPercentage(progressPercentage);
                }).then(async (res) => {
                    let result = await ReactNativeBlobUtil.
                        MediaCollection.copyToMediaStore({
                            name: fileName,
                            parentFolder: "Image",
                            mimeType: "image/png"
                        }, "Download", res.path())
                    Alert.alert("Image Downloaded", 
                        "Your Image has been downloaded successfully", [
                        {
                            text: "Dismiss",
                            style: "cancel"
                        }
                    ], { cancelable: true })

                
                });
        } catch (error) {
            console.log("error:", error);
        } finally {
            setdownloading(false);
        }
    };
    return {
        downloading,
        percentage,
        downloadFile,
    };
};