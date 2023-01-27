import WorkPage from './WorkPage';
import OneCanvasPNG from './assets/onecanvas.png';

function OneCanvas() {
  return (
    <WorkPage
      title="One Canvas"
      imgURL={OneCanvasPNG}
      slidesURL="https://docs.google.com/presentation/d/e/2PACX-1vQeJQ7ZWR_eZ-TrVy2zjbes-82p6VatzPhSR7IiIgAprBQ1h6vGVFC3XYgrizQCWRmqLGr7s9xdelZL/embed?start=false&loop=false&delayms=3000"
      repositoryURL="https://github.com/SLQPD276dW/OneCanvas"
      description={`JavaScriptを入力して\nWebGLをブラウザで動かせられるWebアプリ`}
      tec_stacks={['React', 'Vite', 'TypeScript', 'WebGL', 'React Bootstrap']}
    />
  );
}

export default OneCanvas;
