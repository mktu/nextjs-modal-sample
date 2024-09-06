import { getTodo } from "@/repositories/todo";
import { FC } from "react";
import EditTodoModal from "./EditTodoModal";

type Props = {
    params: { id: string }
}

const Page: FC<Props> = async ({ params }) => {
    const todo = await getTodo(Number(params.id))
    return <EditTodoModal todo={todo} />;
}

export default Page;