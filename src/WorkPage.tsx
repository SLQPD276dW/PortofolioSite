import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  title: string;
  imgURL: string;
  slidesURL: string;
  siteURL?: string;
  repositoryURL: string;
  description: string;
  tec_stacks: string[];
};

function WorkPage(props: Props) {
  return (
    <section className="flex flex-col font-sans lg:flex-row">
      <div className="flex w-full flex-col items-center justify-center border-r-2 text-center lg:w-1/2">
        <div className="p-2">
          <img
            className="border-2 border-gray"
            src={props.imgURL}
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center p-8 text-center lg:w-1/2">
        <article>
          <h1 className="my-4 text-2xl font-bold">{props.title}</h1>
          <pre className="text-gray-700 mb-4 w-full text-center font-sans leading-normal break-words whitespace-pre-wrap">
            {props.description}
          </pre>
        </article>
        <ul className="mb-4 text-left">
          {props.tec_stacks.map((x) => (
            <li>・{x}</li>
          ))}
        </ul>
        <ul className="text-lg font-bold">
          {props.siteURL && (
            <li className="mb-2 rounded-lg border-2 border-blue bg-white stroke-black px-1 text-blue transition duration-100 ease-out hover:bg-blue hover:text-white">
              <a
                className=""
                href={props.siteURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Webサイト
              </a>
            </li>
          )}
          <li className="rounded-lg border-2 border-green bg-white stroke-black px-1 text-green transition duration-100 ease-out hover:bg-green hover:text-white">
            <a
              href={props.repositoryURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              リポジトリ <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WorkPage;
