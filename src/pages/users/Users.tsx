import AddUserModal from "@/components/module/User/AddUserModal";
import UserCard from "@/components/module/User/UserCard";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";


const Users = () => {

    const users = useAppSelector(selectUser);

    return (
        <div>
            <div className="mb-5 flex justify-end">
                <AddUserModal />
            </div>
            <div className="flex gap-5">
                {
                    users.map(user => <UserCard user={user} />)
                }
            </div>
        </div>
    );
};

export default Users;