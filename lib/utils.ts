export const baseVideoUrl = "https://api.brest.life/items/video"
export const basePlaylistUrl = "https://api.brest.life/items/playlist"

export const selectFields = (url: URL, fields: string[]) => {
  for (let field of fields) {
    url.searchParams.append('fields[]', field)
  }
}

export interface Video {
  id: string
  status?: string
  sort?: null
  youtube_id?: string
  title?: string
  description?: string
  cover?: string
  duration?: number
  view_count?: number
  like_count?: number
  date_published?: string
  playlist?: { playlist_id: Playlist }[]
}

export interface Playlist {
  id: number
  sort?: null
  title?: string
  youtube_id?: string
  cover?: string
  description?: string
  video?: number[]
}

export const videoSizes: { [key: string]: { height: number, width: number }} = {
  sm: { height: 195, width: 320 },
  md: { height: 292.5, width: 480},
  lg: { height: 390, width: 640 },
}

export async function getLastVideos(limit: number): Promise<Video[]> {
  const url = new URL(baseVideoUrl)
  url.searchParams.append('limit', limit.toString())
  url.searchParams.append('sort', "-date_published")
  selectFields(url, ['id', 'title', 'youtube_id', 'date_published', 'playlist.playlist_id.id', 'playlist.playlist_id.title'])
  const data = await fetch(url);
  const videos: Video[] = (await data.json()).data;
  return videos
}

export async function getPlaylistVideos(playlist_id: string): Promise<Video[]> {
  const url = new URL(baseVideoUrl)
  url.searchParams.append('sort', "-date_published")
  url.searchParams.append('filter[playlist][playlist_id][_eq]', playlist_id)
  selectFields(url, ['id', 'title', 'youtube_id', 'date_published'])
  const data = await fetch(url);
  const videos: Video[] = (await data.json()).data;
  return videos
}

export const seasonsPlaylistsTitles: {[key: string]: number} = {
  '2023-2024': 60,
  '2021-2022': 62,
  '2019-2020': 68,
  '2018-2019': 66
}
export const defaultSeason = '2023-2024'
export async function getSeasonsVideos(season: string) {
  const playlistID = seasonsPlaylistsTitles[season]
  if (!playlistID) return []

  return await getPlaylistVideos(playlistID.toString())
}