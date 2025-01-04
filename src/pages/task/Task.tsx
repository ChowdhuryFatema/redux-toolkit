import TaskCard from "@/components/module/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";


const Task = () => {

    const tasks = useAppSelector(selectTasks);

    return (
        <div>
            <h2 className="text-2xl my-6">Task</h2>
            {
                tasks.map(task => (
                    <TaskCard task={task} />
                ))
            }
        </div>
    );
};

export default Task;