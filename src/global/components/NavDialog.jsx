import { Dialog } from "./Dialog";
import {
	AiOutlineVideoCameraAdd,
	AiOutlineFolderOpen,
	AiOutlineHome,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export function NavDialog() {
	const navigate = useNavigate();
	return (
		<Dialog className="bg-gray-700 text-white p-2 text-lg flex flex-col gap-2 w-max text-start rounded-md lg:text-base">
			<div
				className="hover:bg-red-700 hover:text-white p-1 flex gap-2 items-center"
				onClick={() => navigate("/aluraflix")}
			>
				<AiOutlineHome className="text-xl" /> Inicio
			</div>
			<div
				className="hover:bg-red-700 hover:text-white p-1 flex gap-2 items-center"
				onClick={() => navigate("/aluraflix/create-video")}
			>
				<AiOutlineVideoCameraAdd className="text-xl" /> Nuevo Video
			</div>
			<div
				className="hover:bg-red-700 hover:text-white p-1 flex gap-2 items-center"
				onClick={() => navigate("/aluraflix/create-category")}
			>
				<AiOutlineFolderOpen className="text-xl" /> Nueva Categoria
			</div>
		</Dialog>
	);
}
