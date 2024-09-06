import { Button } from "@/components/ui/button";
import { getTodos } from "@/repositories/todo";
import Link from "next/link";
import { FC } from "react";

const Page: FC = async () => {
    const todoList = await getTodos()
    return (
        <div className='max-w-[700px] p-10'>
            <h1 className='text-2xl font-semibold'>Todo list</h1>
            <ul className='flex flex-col'>
                {todoList.map(todo => (
                    <div key={todo.id} className='flex items-center'>
                        <input type='checkbox' defaultChecked={todo.done} />
                        <Button asChild variant='link'>
                            <Link href={`/todo/${todo.id}`}>
                                {todo.text}
                            </Link>
                        </Button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Page;