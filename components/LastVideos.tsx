import { getLastVideos } from "@/lib/utils";
import CarrouselVideos from "./CarrouselVideos";

interface Props {
  limit: number;
  title?: string;
}

export default async function LastVideos({ limit, title }: Props) {
  const videos = await getLastVideos(limit);

  return <CarrouselVideos videos={videos} title={title ?? "Derniers Replays"} size="sm" withLabels />
} 