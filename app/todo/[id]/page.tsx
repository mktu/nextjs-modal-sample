import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getTodo } from "@/repositories/todo";
import Link from "next/link";
import { FC } from "react";

type Props = {
    params: { id: string }
}

const Page: FC<Props> = async ({ params }) => {
    const todo = await getTodo(Number(params.id))
    return (
        <form className='max-w-[700px] p-10 flex flex-col gap-2'>
            <h1 className='text-2xl font-semibold'>Todo detail</h1>
            <label htmlFor='todo-text'>Todo</label>
            <Input id='todo-text' defaultValue={todo.text} />
            <label>Description</label>
            <Textarea defaultValue={todo.description} />
            <footer className='flex justify-end'>
                <Button asChild variant='ghost'>
                    <Link href='/todo'>Back to List</Link>
                </Button>
                <Button>Save</Button>
            </footer>
        </form>
    );
}

export default Page;