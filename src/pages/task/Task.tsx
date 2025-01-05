import AddTaskModal from "@/components/module/Tasks/AddTaskModal";
import TaskCard from "@/components/module/Tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";


const Task = () => {

    const tasks = useAppSelector(selectTasks);
    const dispatch = useAppDispatch();

    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl my-6">Task</h2>
                <div className="flex justify-end gap-5 items-center">
                    <Tabs defaultValue="all">
                        <TabsList>
                            <TabsTrigger onClick={() => dispatch(updateFilter('All'))} value="all">All</TabsTrigger>
                            <TabsTrigger onClick={() => dispatch(updateFilter('Low'))}  value="low">Low</TabsTrigger>
                            <TabsTrigger onClick={() => dispatch(updateFilter('Medium'))}  value="medium">Medium</TabsTrigger>
                            <TabsTrigger onClick={() => dispatch(updateFilter('High'))}  value="high">High</TabsTrigger>
                        </TabsList>
                    </Tabs>

                    <AddTaskModal />
                </div>
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