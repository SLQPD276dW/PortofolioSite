import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

import vs from './shaders/vs.vert?raw';
import fs from './shaders/fs.frag?raw';

type Props = {
  title: string;
  siteURL?: string;
  repositoryURL: string;
  description: string;
  tec_stacks: string[];
};

const props: Props = {
  title: 'Vite+WebGL2 Template',
  siteURL: undefined,
  repositoryURL: 'https://github.com/SLQPD276dW/WebGL2_Vite_Template',
  description: 'ViteでWebGL2を始めるためのテンプレート',
  tec_stacks: ['Vite', 'WebGL2', 'TypeScript'],
};

function ViteWebGL2Template() {
  useEffect(() => {
    type Mouse = {
      x: number;
      y: number;
    };

    let mp: Mouse = { x: 0.5, y: 0.5 };

    const canvas = document.querySelector('canvas') as HTMLCanvasElement;

    canvas.onmousemove = (e: MouseEvent) => {
      mp.x = e.offsetX / canvas.width;
      mp.y = e.offsetY / canvas.height;
    };

    const gl = canvas.getContext('webgl2') as WebGL2RenderingContext;

    const program = gl.createProgram() as WebGLProgram;

    const vertex_shader = gl.createShader(gl.VERTEX_SHADER) as WebGLShader;
    gl.shaderSource(vertex_shader, vs);
    gl.compileShader(vertex_shader);
    if (!gl.getShaderParameter(vertex_shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(vertex_shader));
    }

    const fragment_shader = gl.createShader(gl.FRAGMENT_SHADER) as WebGLShader;
    gl.shaderSource(fragment_shader, fs);
    gl.compileShader(fragment_shader);
    if (!gl.getShaderParameter(fragment_shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(fragment_shader));
    }

    gl.attachShader(program, vertex_shader);
    gl.attachShader(program, fragment_shader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
    }
    gl.useProgram(program);

    const time_location = gl.getUniformLocation(program, 'time');
    const mouse_location = gl.getUniformLocation(program, 'mouse');
    const resolution_location = gl.getUniformLocation(program, 'resolution');
    const radius_location = gl.getUniformLocation(program, 'radius');

    const position = [
      -1.0, 1.0, 0.0, 1.0, 1.0, 0.0, -1.0, -1.0, 0.0, 1.0, -1.0, 0.0,
    ];
    const index = [0, 2, 1, 1, 2, 3];

    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(position), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    const ibo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Int16Array(index),
      gl.STATIC_DRAW
    );
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    const attLocation = gl.getAttribLocation(program, 'position');
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.enableVertexAttribArray(attLocation);
    gl.vertexAttribPointer(attLocation, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);

    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    const startTime = new Date().getTime();
    let time = 0.0;

    function render() {
      time = (new Date().getTime() - startTime) * 0.001;

      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform1f(time_location, time);
      gl.uniform2fv(mouse_location, [mp.x, mp.y]);
      gl.uniform2fv(resolution_location, [canvas.width, canvas.height]);
      gl.uniform1f(radius_location, 0.1);

      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
      gl.flush();

      requestAnimationFrame(render);
    }
    render();
  }, []);
  return (
    <section className="flex flex-col font-sans lg:flex-row">
      <div className="flex w-full flex-col items-center justify-center border-r-2 text-center lg:w-1/2">
        <div className="p-2">
          <canvas className="border-2 border-gray" width={500} height={500} />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center p-8 text-center lg:w-1/2">
        <article>
          <h1 className="my-4 text-2xl font-bold">{props.title}</h1>
          <pre className="text-gray-700 mb-4 w-full whitespace-pre-wrap break-words text-center font-sans leading-normal">
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

export default ViteWebGL2Template;
