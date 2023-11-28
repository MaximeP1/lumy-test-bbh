import { Video, baseVideoUrl } from "@/lib/utils";
import PlayerVideo from "./PlayerVideo";

interface Props {
  limit: number;
  sort: string;
}

export default async function VideoALaUne({ limit, sort }: Props) {
  const url = new URL(baseVideoUrl)
  url.searchParams.append('limit', limit.toString())
  url.searchParams.append('sort', sort)
  const data = await fetch(url);
  const videos: Video[] = (await data.json()).data;

  return <div className="flex gap-4 overflow-x-auto">
    {videos.map(video => <PlayerVideo key={video.id} youtube_id={video.youtube_id} width={640} height={390} />)}
  </div>
}