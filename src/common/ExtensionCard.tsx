/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import React from 'react';
import { ItemTitle } from '@riboseinc/paneron-website-common/elements/misc';
import {
  Card,
  CardActionLink,
  CardActions,
  CardBackgroundIcon,
  CardBody,
  CardHeader
} from '@riboseinc/paneron-website-common/elements/cards';
import { Extension } from '../types';


const ExtensionCard: React.FC<{ extension: Extension; className?: string; }> =
function ({ extension, className }) {
  return (
    <Card role="article" className={className}>
      <CardBackgroundIcon imgURL={extension.iconURL} />
      <CardHeader>
        <ItemTitle css={css`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
          `}>
          {extension.title}
        </ItemTitle>
        <div css={css`font-size: 75%; margin-top: .5rem;`}>
          {extension.npm.version}&ensp;•&ensp;by {extension.author}
        </div>
      </CardHeader>

      <CardBody>
        {extension.description}
      </CardBody>
      <CardBody />

      <CardActions>
        <CardActionLink
          key={extension.npm.name}
          to={`/e/${extension.npm.name}`}>
          Read more
        </CardActionLink>
      </CardActions>
    </Card>
  );
};

export default ExtensionCard;
