'use client'

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useState, type Dispatch, type SetStateAction } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { TasksSchema } from "./tasks";

const formSchema = z.object({
	task: z.string().min(2, {
		message: 'Por favor, informe uma task válida.',
	}),
});

interface CreateTaskProps {
  setTasks: Dispatch<SetStateAction<TasksSchema[]>>
}

export function CreateTask({ setTasks }: CreateTaskProps) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
		const { task } = values;

		setTasks((prevTasks) => [...prevTasks, { name: task, completed: false }]);

		setOpen(false);
		form.reset();
	}
  
  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-center text-3xl'>Plano de Voo</h2>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className='flex items-center gap-2 bg-purple-400 hover:cursor-pointer hover:bg-purple-500'>
            <Plus className='size-4' />
            Adicionar Task
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cadastrar Task</DialogTitle>
            <DialogDescription>
              Adicione tarefas importantes ao plano de Voo.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-6'
            >
              <FormField
                control={form.control}
                name='task'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qual a task?</FormLabel>
                    <FormControl>
                      <Input placeholder='Abastecer, dormir' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex items-center justify-between'>
                <Button
                  type='button'
                  onClick={() => setOpen(false)}
                  className='bg-muted text-muted-foreground hover:cursor-pointer hover:bg-accent'
                >
                  Fechar
                </Button>
                <Button
                  className='bg-purple-600 text-purple-100 hover:cursor-pointer hover:bg-purple-500'
                  type='submit'
                >
                  Salvar
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  )
}