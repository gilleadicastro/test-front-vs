'use client'

import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { CreateTask } from "./create-task";

export interface TasksSchema {
	name: string;
	completed: boolean;
}

dayjs.locale('pt-br');

export function Tasks() {
	const [tasks, setTasks] = useState<TasksSchema[]>([]);
	const formmatedDate = dayjs(Date()).format('D [de] MMMM');

	useEffect(() => {
		const storedTasks = localStorage.getItem('tasks');
		if (storedTasks) {
			setTasks(JSON.parse(storedTasks));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	function handleDeleteTask(position: number) {
		const newTasks = tasks.filter((_, index) => index !== position);
		setTasks(newTasks);
	}

	function handleCompletedTask(position: number) {
		setTasks((currentTasks) => {
			const newTasks = [...currentTasks];
			newTasks[position] = {
				...newTasks[position],
				completed: true,
			};
			return newTasks;
		});
	}

  return (
    <div className='mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 lg:px-8' id='planodevoo'>
      <CreateTask setTasks={setTasks} />
      <div className="mt-8">
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center'>
            <h3 className='text-xl font-semibold'>
              <span className='capitalize'>Hoje{' '}</span>
              <span className='text-sm font-normal text-zinc-400 sm:ml-2'>{formmatedDate}</span>
            </h3>

            <ul className='mt-4 grid grid-cols-2 gap-4 lg:grid-cols-3'>
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <li key={index} className='flex 
                    flex-col 
                    items-start 
                    gap-3 
                    rounded-lg 
                    bg-accent
                    p-4 
                    shadow-lg 
                    transition-transform 
                    duration-200 
                    hover:scale-[1.02]'>
                    <div className="flex items-center gap-2">
                      {task.completed ? (
                        <CheckCircle2 className='size-4 text-purple-500' />
                      ) : (
                        <CheckCircle2 className='size-4 text-zinc-400' />
                      )}
                      <span className='text-sm text-zinc-400'>
                        Missão "
                        <span className='text-accent-foreground'>
                          {task.name}
                        </span>
                        "
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                      <span
                        onClick={() => handleDeleteTask(index)}
                        onKeyDown={() => handleDeleteTask(index)}
                        className="
                          cursor-pointer 
                          underline 
                          transition-opacity 
                          duration-150 
                          hover:opacity-80
                        "
                        role="button"
                        tabIndex={0}
                      >
                        Desfazer
                      </span>
                      {!task.completed ? (
                      <span
                        onClick={() => handleCompletedTask(index)}
                        onKeyDown={() => handleCompletedTask(index)}
                        className="
                          cursor-pointer 
                          underline 
                          transition-opacity 
                          duration-150 
                          hover:opacity-80
                        "
                        role="button"
                        tabIndex={0}
                      >
                        Marcar como concluído
                      </span>
                    ) : (
                      <span className="text-green-300">Concluído</span>
                    )}
                    </div>
                  </li>
                ))
              ) : (
                <li className="text-sm text-zinc-500">
                  Nenhuma tarefa cadastrada.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}