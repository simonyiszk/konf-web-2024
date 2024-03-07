type Props = {
  title: string;
  url: string;
};
export function YoutubeVideo({ title, url }: Props) {
  return (
    <div className='sm:w-full md:w-6/7 mx-auto sm:my-1 md:my-3'>
      <iframe
        className='aspect-video rounded w-full'
        src={url}
        title={'XXI. Simonyi Konferencia - ' + title}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
}
