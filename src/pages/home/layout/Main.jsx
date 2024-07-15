import { useContext } from "react";
import { createContext } from "react";
import { dataContext } from "../../../Core/Core";
import { Category } from "../components/Category";
import { AiOutlineWarning } from "react-icons/ai";
import { Hero } from "./Hero";
import bgImage from "/images/bg1.png";

export const CategoryContex = createContext(null);
export function Main() {
	const { data } = useContext(dataContext);
	return (
		<main>
			<div
				className="bg-cover px-2"
				style={{ backgroundImage: `url(${bgImage})` }}
			>
				<div className="max-w-[1200px] mx-auto">
					<Hero />
				</div>
			</div>
			<div className="bg-zinc-900 py-6 px-2">
				<div className="max-w-[1200px] mx-auto">
					<div className="flex flex-col gap-6">
						{!data[0] && (
							<h1 className="font-extrabold text-2xl text-red-600">
								Inicia una nueva categoría y comienza a añadir
								videos ahora mismo!
							</h1>
						)}
						{data.map((e, i) => {
							return (
								<CategoryContex.Provider
									value={e}
									key={e.title + i}
								>
									<Category />
								</CategoryContex.Provider>
							);
						})}
					</div>
				</div>
			</div>
		</main>
	);
}
