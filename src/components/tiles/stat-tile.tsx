type Props = {
  number: string;
  desc: string;
};

export function StatTile({ desc, number }: Props) {
  return (
    <div className='tile p-8 col-span-2'>
      <h1>{number}</h1>
      <p>{desc}</p>
    </div>
  );
}
