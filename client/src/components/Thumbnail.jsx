import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const Thumbnail = (props) => {
  const {
    gifData,
    handleThumbnailSelect,
    index
   } = props;
  const { images } = gifData;
  const { fixed_width_small_still = {} } = images;
  const { gif_url = '' } = fixed_width_small_still;

  return (
    <Card 
      onClick={() => handleThumbnailSelect(gifData, index)}
      style={{
        width: 100,
        display: 'inline-block',
        margin: 12,
        padding: 2
        }}>
      <Image src={gif_url} />
    </Card>
  )
};

export default Thumbnail;