import Image from "next/image"
import CarrouselVideos from "./CarrouselVideos"
import { getPlaylistVideos } from "@/lib/utils"

interface Props {
  bannerSrc?: string
  backgroundColor: string
  playlistId: number
}

export default async function CustomPlaylistVideos({ bannerSrc, backgroundColor, playlistId }: Props) {
  const videos = await getPlaylistVideos(playlistId.toString());

  return <div style={{ backgroundColor }} className="p-4 rounded-3xl">
    {bannerSrc && <Image src={bannerSrc} alt="Bannière d'une playlist" fill className="static"/>}
    <CarrouselVideos size="sm" videos={videos} />
  </div>
}