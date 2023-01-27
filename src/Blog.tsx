function Blog() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-8 text-left">
      <iframe
        className="w-full lg:w-1/2"
        height={500}
        width="100%"
        srcDoc={`<body><script src="https://gist.github.com/SLQPD276dW/9d47bc8dd66362f7f57a1d498f83728b.js"></script></body>`}
      />
    </div>
  );
}

export default Blog;
