import { getLastVideos } from "@/lib/utils";
import CarrouselVideos from "./CarrouselVideos";

interface Props {
  limit: number;
}

export default async function LastVideos({ limit }: Props) {
  const videos = await getLastVideos(limit);

  return <CarrouselVideos videos={videos} title="Derniers Replays" size="sm" />
} 