type Profile = {
  title: string;
  description: string;
};

function Profile() {
  const profiles: Profile[] = [
    {
      title: '名前',
      description: import.meta.env.VITE_NAME,
    },
    {
      title: '学歴',
      description: import.meta.env.VITE_ACADEMIC_HISTORY.replace(/\\n/g, '\n'),
    },
    {
      title: '趣味',
      description: import.meta.env.VITE_HOBBY.replace(/\\n/g, '\n'),
    },
    {
      title: '連絡先',
      description: import.meta.env.VITE_CONTACT,
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center p-8 text-left">
      <article className="w-full lg:w-1/3">
        <>
          <h1 className="my-4 text-2xl font-bold">プロフィール</h1>
          {profiles.map((profile) => {
            return (
              <>
                <h2 className="my-4 text-xl font-bold">{profile.title}</h2>
                <pre className="text-gray-700 mb-4 w-full text-left font-sans leading-normal">
                  {profile.description}
                </pre>
              </>
            );
          })}
        </>
      </article>
    </div>
  );
}

export default Profile;
