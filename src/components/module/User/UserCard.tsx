import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { Delete } from "lucide-react";

interface IProps {
    user: IUser;
}

const UserCard = ({ user }: IProps) => {

    const dispatch = useAppDispatch();

    return (
        <div className="border border-green-500 p-5 rounded-xl w-64 h-24 flex justify-between gap-2">
            <h2>{user.name}</h2>
            <Delete className="text-red-500" onClick={() => dispatch(removeUser(user.id))} />
        </div>
    );
};

export default UserCard;