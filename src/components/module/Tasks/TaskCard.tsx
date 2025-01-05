
import { ITask } from "@/types";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { deleteTask, toggleCompleteState } from "@/redux/features/task/taskSlice";
import { selectUser } from "@/redux/features/user/userSlice";

interface IProps {
    task: ITask;
}

const TaskCard = ({ task }: IProps) => {

    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUser);

    const assignUser = users.find(user => user.id === task.assignedTo);

    return (
        <div className="border px-5 py-3 rounded-md mb-5">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full", {
                        "bg-green-500": task.priority === "Low",
                        "bg-yellow-500": task.priority === "Medium",
                        "bg-red-500": task.priority === "High",
                    })}></div>
                    <h1 className={cn({"line-through" : task.isCompleted})}>{task.title}</h1>
                </div>
                <div className="flex gap-1 items-center">
                    <Checkbox checked={task.isCompleted} onClick={() => dispatch(toggleCompleteState(task.id))} />
                    <Button onClick={() => dispatch(deleteTask(task.id))} className="bg-transparent text-grey text-xl hover:bg-transparent shadow-none">X</Button>
                </div>
            </div>
            <p>Assigned To - {assignUser ? assignUser.name : "No one"}</p>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskCard;