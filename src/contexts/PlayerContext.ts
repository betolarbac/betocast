import { createContext } from "react";

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: string;
    url: string;
}

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisode: number;
}

export const PlayerContext = createContext('');