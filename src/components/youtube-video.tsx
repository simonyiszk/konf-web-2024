type Props = {
  title: string;
  url: string;
};
export function YoutubeVideo({ title, url }: Props) {
  return (
    <iframe
      className='aspect-video rounded w-full'
      src={url}
      title={'XXI. Simonyi Konferencia - ' + title}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    ></iframe>
  );
}
