
import { ITask } from "@/types";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

interface IProps {
    task: ITask;
}

const TaskCard = ({ task }: IProps) => {
    return (
        <div className="border px-5 py-3 rounded-md mb-5">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                    <div className="size-3 rounded-full bg-green-500"></div>
                    <h1>{task.title}</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <Checkbox />
                    <Button>X</Button>
                </div>
            </div>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskCard;