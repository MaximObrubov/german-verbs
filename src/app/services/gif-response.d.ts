export interface GifResponse {
  "data": {
    "type": string,
    "url": string,
    "slug": string,
    "bitly_gif_url": string,
    "bitly_url": string,
    "embed_url": string,
    "username": string,
    "images": {
      "downsized_large": {
        "url": string,
      },
      "original": {
        "url": string,
      }
    },
  },
  "meta": {
    "status": number,
    "msg": string,
    "response_id": string
  }
}
