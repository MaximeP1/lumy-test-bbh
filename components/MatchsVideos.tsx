"use client"
import { Video, defaultSeason, getSeasonsVideos, seasonsPlaylistsTitles } from "@/lib/utils";
import CarrouselVideos from "./CarrouselVideos";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

export default function MatchsVideos() {
  const [selectedSeason, setSelectedSeason] = useState(defaultSeason)
  const [videos, setVideos] = useState<Video[]>([])

  const fetchVideos = useCallback(async (season: string) => {
    const data = await getSeasonsVideos(season);
    setVideos(data)
  }, [])

  useEffect(() => {
    fetchVideos(selectedSeason)
  }, [selectedSeason, fetchVideos])

  return <CarrouselVideos videos={videos} title="Retour sur les matchs" size="md" withLabels>
    <div className="flex gap-4">
      {Object.entries(seasonsPlaylistsTitles).map(([season, id]) => <Button key={id} variant={season === selectedSeason ? "faded" : "ghost"} className="rounded-full" onClick={() => setSelectedSeason(season)}>{season}</Button>)}
    </div>
  </CarrouselVideos>
} 