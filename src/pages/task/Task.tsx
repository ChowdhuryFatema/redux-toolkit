import AddTaskModal from "@/components/module/Tasks/AddTaskModal";
import TaskCard from "@/components/module/Tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";


const Task = () => {

    const tasks = useAppSelector(selectTasks);

    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl my-6">Task</h2>
                <AddTaskModal />
            </div>
            <div>
                {
                    tasks.map(task => (
                        <TaskCard task={task} key={task.id} />
                    ))
                }
            </div>
        </div>
    );
};

export default Task;