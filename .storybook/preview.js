export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // コンポーネントを中央に配置
  // layout: 'centered',
  backgrounds: {
    // ツールバーから選択できる背景色の指定
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'black',
        value: '#222222',
      },
      {
        name: 'grey',
        value: '#cccccc',
      },
    ],
    // ツールバーから表示するグリッド表示の指定
    grid: {
      cellSize: 10, // 1マスの高さ・幅のサイズ（px単位）
      opacity: 0.5, // グリッド線の透明度
      cellAmount: 10, // 指定されたマスごとにグリッド線を強調する
      offsetX: 16, // cellAmountで強調する最初のグリッド線のX軸の位置
      offsetY: 16, // cellAmountで強調する最初のグリッド線のY軸の位置
    },
  },
  options: {
    storySort: {
      // サイドバーの並び順を制御
      order: ['UI', 'Example', ['Introduction', 'Page', 'Header', 'Button']],
    },
  },
}

// デコレーターの指定
// export const decorators = [
//   (Story) => (
//     <div style={{ border: '1px dashed #aaaaaa', padding: '20px', borderRadius:' 20px' }}>
//       <Story />
//     </div>
//   ),
// ]
