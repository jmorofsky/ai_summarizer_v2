import { useState } from 'react';
import Robot from './assets/robot.png';


const summarize = (text) => fetch('http://127.0.0.1:5000/summarize', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(text)
});

const SkeletonItem = ({ index }) => {
  const delay = index * 0.4;
  const width = Math.floor(Math.random() * 6) + 1;

  return (
    <div
      className='opacity-0 mb-1 p-1 rounded-lg bg-neutral-700 h-3 grow'
      style={{
        animation: 'fadeIn 0.5s ease-out forwards',
        animationDelay: `${delay}s`,
        width: `${width * 20}px`
      }}
    />
  );
};

export default function App() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');

  async function clickSummarize() {
    if (!input) {
      setError('Enter some text.');
      return;
    };

    setLoading(true);

    try {
      const respJson = await summarize(input).then(response => response.json());
      
      if (respJson.error) {
        setError(respJson.error);
        return;
      };

      if (!respJson.result) {
        setError('Something went wrong. Get empty response.');
        return;
      };

      setOutput(respJson.result);
    } catch {
      setError('Something went wrong.');
    } finally { setLoading(false); };
  };

  return (
    <div className='p-6 flex gap-6 h-screen'>
      <div className='flex flex-col w-[50%] h-full border-r border-neutral-500 pr-6 pb-4'>
        <div className='flex gap-4'>
          <img src={Robot} className='w-[30px] h-[28px] select-none' />
          <i className='text-amber-400 font-semibold'>Enter your text to summarize below.</i>
        </div>

        <div className='flex flex-col h-full bg-neutral-800 border border-neutral-700 rounded-sm shadow-2xl mt-6'>
          <textarea
            placeholder='Text here'
            className='border rounded-sm p-2 w-full resize-none grow'
            value={input}
            onChange={e => setInput(e.target.value)}
          />

          <div className='border border-neutral-500 flex justify-between items-center'>
            <span className='px-4 text-neutral-300'>
              {loading ?
                <>
                  <div className='inline-block animate-spin rounded-full w-4 h-4 border-2 border-t-neutral-500 border-r-neutral-500 mt-1 mr-2' />
                  <i className='align-top'>Thinking...</i>
                </>
                :
                <>{error}</>
              }
            </span>

            <button
              className='text-amber-300 border-l border-neutral-500 text-4xl pb-2 px-3 cursor-pointer'
              disabled={loading}
              onClick={clickSummarize}
            >
              ⇨
            </button>
          </div>
        </div>
      </div>

      <div className='w-[50%] pb-4 flex flex-col'>
        <i className='text-amber-400 font-semibold mb-[28px]'>The result will display here.</i>

        {loading ?
          <div className='h-full overflow-hidden bg-neutral-800 border border-neutral-500 rounded-sm shadow-2xl'>
            <div className='animate-pulse p-2 flex flex-wrap gap-3'>
              {Array.from({ length: 500 }).map((_, index) => (
                <SkeletonItem key={index} index={index} />
              ))}
            </div>
          </div>
          :
          <textarea
            disabled
            value={output}
            className='p-2 h-full resize-none bg-neutral-800 border border-neutral-500 rounded-sm shadow-2xl'
          />
        }
      </div>
    </div>
  );
};
