'use client'

import Image from "next/image";
import { Button } from "./ui/button";
import rocketLauchImage from '../app/assets/rocket.svg';
import { useEffect, useState } from "react";
import { toast } from "sonner";

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 10; //10 seconds

export function CountDown() {
	const [secondsAmount, setSecondsAmount] = useState(
		COUNTDOWN_INITIAL_TIME_IN_SECONDS
	);

  useEffect(() => {
    if (secondsAmount === 0) {
      toast('Lançamento realizado! 🚀');
      return;
    }

    setTimeout(() => {
      setSecondsAmount((state) => state - 1);
    }, 1000);
  }, [secondsAmount]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <div className='flex flex-col md:grid md:grid-cols-2 md:items-center gap-8'>
      <div className='flex flex-col items-center space-y-6'>
        <h1 className='font-bold text-2xl mt-10 md:mt-0 md:text-4xl text-purple-500 uppercase text-center md:text-left'>
          Pronto para lançar em...
        </h1>
        {secondsAmount === 0 ? (
          <span className='text-center text-4xl text-green-500'>
            Lançamento Realizado!
          </span>
        ) : (
          <div className='-tracking-tighter flex items-center gap-3 font-mono font-semibold text-8xl text-muted-foreground tabular-nums'>
            <span>{String(minutes).padStart(2, '0')}</span>
            <span>:</span>
            <span>{String(seconds).padStart(2, '0')}</span>
          </div>
        )}
        <p className='text center text-md md:text-lg text-muted-foreground'>
          Inscreva-se para receber informações sobre a missão
        </p>
        <Button className='bg-purple-600 text-purple-100 shadow-md transition hover:scale-105 hover:cursor-pointer hover:bg-purple-500 hover:shadow-lg hover:brightness-110'>
          Inscreva-se
        </Button>
      </div>
      <div className='flex justify-center'>
        <Image className='size-80 -mt-10 md:size-120' src={rocketLauchImage} alt='' />
      </div>
    </div>
  )
}