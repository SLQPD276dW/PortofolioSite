import { useNavigate } from 'react-router-dom';

type Props = {
  title: string;
  url: string;
  imgURL: string;
};

function Card(props: Props) {
  const navigate = useNavigate();

  return (
    <div className="h-auto w-full p-3 lg:w-1/2">
      <div
        className="flex h-auto flex-col overflow-hidden rounded border shadow-sm transition duration-100 ease-out hover:scale-105 hover:shadow-2xl"
        onClick={() => navigate(props.url)}
      >
        <img
          className="block h-48 w-full flex-none bg-cover md:h-full"
          src={props.imgURL}
        />
        <div className="flex flex-col justify-between rounded-b bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r">
          <div className="mb-2 text-xl font-bold leading-tight text-black">
            {props.title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
