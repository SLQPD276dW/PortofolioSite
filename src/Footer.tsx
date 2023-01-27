import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="border-t-2 border-black bg-white py-2 px-4 font-sans text-white">
      <div className="mx-auto flex max-w-xl items-center justify-center overflow-hidden">
        <ul className="flex list-none items-center p-0 text-lg text-black">
          <li className="border-black hover:border-b-2">
            <a
              href="https://github.com/SLQPD276dW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                Github <FontAwesomeIcon icon={faGithub} />
              </p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
