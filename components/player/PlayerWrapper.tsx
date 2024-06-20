"use client"

import usePlayerState from "@/hooks/usePlayerState";

const PlayerWrapper = () => {
  const { isVisiblePlayer } = usePlayerState();

  if (!isVisiblePlayer) return null;

  return (
    <div className="fiexed bottom-0 h-[72px] w-full bg-neutral-900">PlayerWrapper</div>
  );
}

export default PlayerWrapper;