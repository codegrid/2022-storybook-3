import React from 'react'
import { Button } from './Button'

// コンポーネントの概要
export default {
  title: 'UI/Button',
  component: Button,
}

// Buttonストーリーのテンプレートを作成
const Template = (args) => <Button {...args}>ボタン</Button>

// 6つのストーリー
export const Default = Template.bind({})

export const FullWidth = Template.bind({})
FullWidth.args = { ...FullWidth.args, fullWidth: true }

export const Large = Template.bind({})
Large.args = { ...Large.args, size: 'large' }

export const Attention = Template.bind({})
Attention.args = { ...Attention.args, variant: 'attention' }

export const LoadingSmall = Template.bind({})
LoadingSmall.args = { ...LoadingSmall.args, size: 'small', loading: true }

export const Disabled = Template.bind({})
Disabled.args = { ...Disabled.args, disabled: true }
