import WorkPage from './WorkPage';
import OneCanvasPNG from './assets/onecanvas.png';

function OneCanvas() {
  return (
    <WorkPage
      title="One Canvas"
      imgURL={OneCanvasPNG}
      repositoryURL="https://github.com/SLQPD276dW/OneCanvas"
      description={`JavaScriptを入力して\nWebGLをブラウザで動かせられるWebアプリ`}
      tec_stacks={['React', 'Vite', 'TypeScript', 'WebGL', 'React Bootstrap']}
    />
  );
}

export default OneCanvas;
