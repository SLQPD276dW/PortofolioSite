import WorkPage from './WorkPage';
import MemoAppPNG from './assets/memoapp.png';

function MemoApp() {
  return (
    <WorkPage
      title="Memo App"
      imgURL={MemoAppPNG}
      slidesURL="https://docs.google.com/presentation/d/e/2PACX-1vT3lDbqGxxiraP_ctmeEh2qtiODJl7IuzZ37AbAK8bbvCLwVcakN8yl0fa1DeOGlrJaJW5oQnx7i7oc/embed?start=false&loop=false&delayms=3000"
      siteURL="https://memo-app-blond.vercel.app"
      repositoryURL="https://github.com/SLQPD276dW/MemoApp"
      description={`Markdownでメモを書いて保存できるWebアプリ`}
      tec_stacks={['React', 'Next.js', 'TypeScript', 'daisyUI']}
    />
  );
}

export default MemoApp;
