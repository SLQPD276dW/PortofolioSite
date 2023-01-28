import WorkPage from './WorkPage';
import MemoAppPNG from './assets/memoapp.png';

function MemoApp() {
  return (
    <WorkPage
      title="Memo App"
      imgURL={MemoAppPNG}
      siteURL="https://memo-app-blond.vercel.app"
      repositoryURL="https://github.com/SLQPD276dW/MemoApp"
      description={`Markdownでメモを書いて保存できるWebアプリ`}
      tec_stacks={['React', 'Next.js', 'TypeScript', 'daisyUI']}
    />
  );
}

export default MemoApp;
