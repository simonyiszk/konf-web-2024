import { Company } from '@/models/models';

function ConditionalWrapper({
  condition,
  renderWrapper: wrapper,
  children,
}: {
  condition: boolean;
  renderWrapper: (arg0: JSX.Element) => JSX.Element;
  children: JSX.Element;
}) {
  return condition ? wrapper(children) : children;
}

type Props = {
  company: Company;
};

export function SponsorLogo({ company: { logoUrl, name, url } }: Props) {
  if (!logoUrl) {
    return null;
  }
  return (
    <ConditionalWrapper
      condition={!!url}
      renderWrapper={(children) => (
        <a href={url} target='_blank' rel='noopener noreferrer'>
          {children}
        </a>
      )}
    >
      <div className='relative p-2'>
        <img src={logoUrl} alt={`${name} logo`} />
        {/* TODO ??? */}
      </div>
    </ConditionalWrapper>
  );
}
