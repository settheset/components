// @flow

import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button, HeroImage } from '../src/index'

storiesOf('Button', module)
  .add('simple text', () => (
    <Button title="Hello Button" onClick={action('clicked Hello Button')} />
  ))
  .add('with some emoji', () => (
    <Button title="😀 😎 👍 💯" onClick={action('clicked Emojis')} />
  ))
  .add('when urgent', () => (
    <Button title="Cancel" onClick={action('Cancel clicked')} urgent />
  ))

storiesOf('HeroImage', module).add('Simple hero image', () => (
  <HeroImage
    title="flume"
    imageUrl="https://sts-app-assets.s3.amazonaws.com/flume-header-wide.jpeg"
  />
))
