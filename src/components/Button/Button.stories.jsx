import React from 'react'
import { Button } from './Button'

// コンポーネントの概要
export default {
  title: 'UI/Button',
  // 'title: 'Design System/UI/Button' // 見出しがDesign Systemになり、階層が1つ深くなる
  component: Button,
  parameters: {
  //   // コンポーネントを中央に配置（コンポーネント限定の指定）
  //   layout: 'centered',
  //   // このコンポーネント限定の背景色の設定を適用（コンポーネント限定の指定）
  //   backgrounds: {
  //     values: [
  //       { name: 'red', value: '#f00' },
  //       { name: 'green', value: '#0f0' },
  //       { name: 'blue', value: '#00f' },
  //     ],
  //   },
  },

  // デコレーターを指定（コンポーネント限定の指定）
  // decorators: [
  //   (Story) => (
  //     <div style={{ border: '1px dashed #aaaaaa', padding: '20px', borderRadius:' 20px' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
}

// Buttonストーリーのテンプレートを作成
const Template = (args) => <Button {...args}>ボタン</Button>

// 6つのストーリー
export const Default = Template.bind({})
// レイアウトを指定（Defaultストーリー限定）
Default.parameters = {
  layout: 'centered',
};
// デコレーターを指定（Defaultストーリー限定）
Default.decorators = [
  (Story) => (
    <div style={{ border: '1px dashed #aaaaaa', padding: '20px', borderRadius:' 20px' }}>
      <Story />
    </div>
  ),
];

export const FullWidth = Template.bind({})
FullWidth.args = { ...FullWidth.args, fullWidth: true }
// ストーリー名を変更
FullWidth.storyName = 'FullWidth（モバイル向け）'

// 背景色の設定を適用（Largeストーリー限定）
// export const Large = Template.bind({})
// Large.args = { ...Large.args, size: 'large' }
// Large.parameters = {
//   backgrounds: {
//     values: [
//       { name: 'red', value: '#f00' },
//       { name: 'green', value: '#0f0' },
//       { name: 'blue', value: '#00f' },
//     ],
//   },
// };

export const Attention = Template.bind({})
Attention.args = { ...Attention.args, variant: 'attention' }

export const LoadingSmall = Template.bind({})
LoadingSmall.args = { ...LoadingSmall.args, size: 'small', loading: true }

export const Disabled = Template.bind({})
Disabled.args = { ...Disabled.args, disabled: true }
