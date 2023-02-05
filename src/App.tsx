import Card from './Card';
import MemoAppPNG from './assets/memoapp.png';
import OneCanvasPNG from './assets/onecanvas.png';
import Live2DReactPNG from './assets/live2d_react.png';
import ViteWebGL2PNG from './assets/vitewebgl2.png';

function App() {
  return (
    <section className="bg-white py-4 font-sans">
      <div className="container m-auto flex max-w-2xl flex-col flex-wrap items-center justify-start md:flex-row">
        <Card title="Memo App" url="memo-app" imgURL={MemoAppPNG} />
        <Card title="One Canvas" url="one-canvas" imgURL={OneCanvasPNG} />
        <Card
          title="React,TypeScript,ViteでLive2D SDK for Webのサンプルを動かす"
          url="blog"
          imgURL={Live2DReactPNG}
        />
        <Card
          title="Vite+WebGL2 テンプレート"
          url="webgl2vitetemplate"
          imgURL={ViteWebGL2PNG}
        />
      </div>
    </section>
  );
}

export default App;
