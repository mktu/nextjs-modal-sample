'use client'
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Todo } from "@/repositories/todo";
import { useRouter } from "next/navigation";
import { FC } from "react";

type Props = {
    todo: Todo;
}

const EditTodoModal: FC<Props> = ({ todo }) => {
    const router = useRouter();
    return (
        <Dialog
            modal
            open
            onOpenChange={(isOpen) => {
                if (!isOpen) {
                    router.back()
                }
            }}
        >
            <DialogContent>
                <DialogTitle>Edit Todo</DialogTitle>
                <DialogDescription>Edit todo detail</DialogDescription>
                <form className='max-w-[700px] p-10 flex flex-col gap-2'>
                    <label htmlFor='todo-text'>Todo</label>
                    <Input id='todo-text' defaultValue={todo.text} />
                    <label>Description</label>
                    <Textarea defaultValue={todo.description} />
                    <footer className='flex justify-end gap-2'>
                        <Button variant='ghost' onClick={(e) => {
                            router.back()
                            e.stopPropagation()
                            e.preventDefault()
                        }}>
                            Close
                        </Button>
                        <Button>Save</Button>
                    </footer>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default EditTodoModal;