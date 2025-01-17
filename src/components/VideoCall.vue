<template>
    <div id="homepage">
        <b-container>
            <b-row>
                <b-col lg="12" class="imgContainer">
                    <img src="https://www.zegocloud.com/_nuxt/img/nav_zegocloud_logo@2x.8c52173.png" class="img-fluid">
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="12">
                    <div class="d-flex justify-content-center">
                        <h1 class="heading">Video Call</h1>
                    </div>
                </b-col>
            </b-row>
        </b-container>

        <b-container>
            <b-row>
                <b-col lg="12">
                    <div class="d-flex justify-content-center my-5">
                        <button @click="startCall()" class="callBtn">Start Call</button>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default {
  name: 'App',
  methods:{
    startCall(){
        function randomID(len) {
        let result = '';
        if (result) return result;
        var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
            maxPos = chars.length,
            i;
        len = len || 5;
        for (i = 0; i < len; i++) {
            result += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return result;
        }

        const roomID = new URLSearchParams(window.location.search).get('roomID') || randomID(5);
        const tokenServer = 'Your token service address';
        // generate Kit Token
        // const appID = your appId  ;
        const serverSecret = "your serverSecret";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));

        
        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        // start the call
        zp.joinRoom({
            container: this.$refs.root,
            sharedLinks: [
            {
                name: 'Personal link',
                url:
                window.location.protocol + '//' +
                window.location.host + window.location.pathname +
                '?roomID=' +
                roomID,
            },
            ],
            scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    },
        }
};
</script>

<style scoped>
.imgContainer{
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.heading {
    position: relative;
    top: 30px;
    font-weight: 700;
    background: linear-gradient(to right, #240b36, #c31432);    
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.callBtn{
    padding-top: 5px;
    padding-bottom: 5px;
    /* margin-left: 50px; */
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 400;
    border: 1px solid #0575E6;
    transition: 0.3s ease-in-out all;
    background: linear-gradient(to right, #021B79, #0575E6);
    color: white;
}

.callBtn:hover{
    color: blue;
    border: 1px solid #0575E6;
    background: transparent;
}
</style>