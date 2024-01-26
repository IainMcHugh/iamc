import React from 'react';

type VIEW = 'EDITOR' | 'PREVIEW';

type EmbedProps = {
  id: string;
  view?: VIEW;
  share?: boolean;
};

const Embed = (props: EmbedProps) => {
  const { id, view, share } = props;
  const viewParam = view
    ? view === 'EDITOR'
      ? '&view=editor'
      : view === 'PREVIEW'
      ? '&view=preview'
      : ''
    : '';
  return (
    <>
      <iframe
        src={`https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&theme=dark${viewParam}`}
        style={{
          width: '100%',
          height: '500px',
          border: '0',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        title={id}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
      {share && (
        <>
          <br />
          <a href="https://codesandbox.io/s/bold-fog-f4dz7s?fontsize=14&hidenavigation=1&theme=dark">
            <img
              alt="Edit display-test-ad"
              src="https://codesandbox.io/static/img/play-codesandbox.svg"
            />
          </a>
        </>
      )}
    </>
  );
};

export { Embed };
