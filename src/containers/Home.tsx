/** @jsx jsx */

import { jsx } from '@emotion/react'
import { useRouteData } from 'react-static'
import parseJSON from 'date-fns/parseJSON'
import compareDesc from 'date-fns/compareDesc'
import React from 'react'
import { PageTitle } from '@riboseinc/paneron-website-common/elements/misc'
import { CardStack } from '@riboseinc/paneron-website-common/elements/cards'
import type { Extension } from '../types'
import ExtensionCard from '../common/ExtensionCard'


export default function () {
  const { extensions } = useRouteData<{ extensions: Extension[] }>()
  const extensionsSorted = extensions.sort((ext1, ext2) => compareDesc(
    parseJSON(ext1.latestUpdate),
    parseJSON(ext2.latestUpdate)))

  return (
    <React.Fragment>
      <PageTitle>
        Extensions for&nbsp;managing structured&nbsp;data
      </PageTitle>
      <CardStack>
        {extensionsSorted.map(e => <ExtensionCard extension={e} />)}
      </CardStack>
    </React.Fragment>
  )
}
