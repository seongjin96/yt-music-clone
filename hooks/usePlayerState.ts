import {create} from "zustand";
import {Song} from "@/types";
import {dummyAllSongList} from "@/lib/dummyData";

interface PlayerState {
  isVisiblePlayer: boolean;
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => void;
  activeSong?: Song | null;
  prevPlayerQueue: Song[];
  nextPlayerQueue: Song[];
  // 기능들(재생, 다음곡, 이전곡)
  addSongList: (songList: Song[]) => void;
  playNext: () => void;
  playBack: () => void;
}

const usePlayerState = create<PlayerState>((set) => ({
  isVisiblePlayer: true,
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => set({ isVisiblePlayer }),
  activeSong: dummyAllSongList[0],
  prevPlayerQueue: [],
  nextPlayerQueue: [],
  addSongList: (songList: Song[]) =>
      set((prev: PlayerState) => {
      const prevSong: Song | null | undefined = prev.activeSong;
      const cloneSongList: Song[] = [...songList];
      const currentSong: Song = cloneSongList.splice(0, 1)?.[0];

      return {
        activeSong: currentSong,
        prevPlayerQueue: prevSong
          ? [prevSong, ...prev.prevPlayerQueue]
          : prev.prevPlayerQueue,
        nextPlayerQueue: [...cloneSongList],
      };
    }),
  playNext: () => set((prev: PlayerState) => {
    const currentSong: Song | null | undefined = prev.activeSong;
    const nextSrc: Song = prev.nextPlayerQueue.splice(0, 1)?.[0];

    return {
      activeSong: nextSrc,
      nextPlayerQueue: prev.nextPlayerQueue,
      prevPlayerQueue: [
        ...(currentSong ? [currentSong] : []),
        ...prev.prevPlayerQueue
      ],
    }
  }),
  playBack: () => set((prev: PlayerState) => {
    const currentSong: Song | null | undefined = prev.activeSong;
    const preSrc: Song = prev.prevPlayerQueue.splice(0, 1)?.[0];

    return {
      activeSong: preSrc,
      nextPlayerQueue: [
        ...(currentSong ? [currentSong] : []),
        ...prev.nextPlayerQueue
      ],
      prevPlayerQueue: prev.prevPlayerQueue
    }
  })
}))

export default usePlayerState;