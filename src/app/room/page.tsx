"use client";

import "@livekit/components-styles";
import { Track } from "livekit-client";
import { useEffect, useState, useContext } from "react";
import { LiveKitRoom, GridLayout, ParticipantTile, useTracks, VideoConference, ControlBar } from "@livekit/components-react";
import { AppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function Page() {

    const appContext = useContext(AppContext)
    const router = useRouter();
    const room = "Hello World";
    const name = appContext?.fullName || 'User';
    const [token, setToken] = useState("");

    useEffect(() => {(async () => {
        try {
            const resp = await fetch(`/api/get-participant-token?room=${room}&username=${name}`);
            const data = await resp.json();
            setToken(data.token);
        } catch (e) {
            console.error(e);
        }
        })();
    }, [name]);

    if (token === "") {
        return <div className="w-[100%] text-center h-[100vh] flex justify-center items-center text-[20px] text-[#232323]">Loading...</div>;
    }

    return (
        <LiveKitRoom video={false} audio={false} token={token} connectOptions={{ autoSubscribe: false }} serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL} data-lk-theme="default" style={{ height: "100dvh" }} onDisconnected={() => {
            router.push('/');
        }}>
            <MyVideoConference/>
            <ControlBar />
        </LiveKitRoom>
    );
}

function MyVideoConference() {

     const tracks = useTracks(
        [
            { source: Track.Source.Camera, withPlaceholder: true },
            { source: Track.Source.ScreenShare, withPlaceholder: false },
        ],
        { onlySubscribed: false },
    );

    return (
        <GridLayout tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
            <ParticipantTile />
        </GridLayout>
    )
}
