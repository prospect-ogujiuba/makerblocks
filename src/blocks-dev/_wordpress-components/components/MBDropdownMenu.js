import { DropdownMenu, MenuGroup, MenuItem } from "@wordpress/components";
import {
	more,
	menu,
	arrowLeft,
	arrowRight,
	arrowUp,
	arrowDown,
	trash,
} from "@wordpress/icons";

function MBDropdownMenu() {
	return (
		<section>
			<h2 className="text-2xl md:text-4xl mb-4">Dropdown Menu</h2>
			<div className="grid grid-cols-2">
				<DropdownMenu
					icon={menu}
					label="Select a direction"
					controls={[
						{
							title: "Up",
							icon: arrowUp,
							onClick: () => console.log("up"),
						},
						{
							title: "Right",
							icon: arrowRight,
							onClick: () => console.log("right"),
						},
						{
							title: "Down",
							icon: arrowDown,
							onClick: () => console.log("down"),
						},
						{
							title: "Left",
							icon: arrowLeft,
							onClick: () => console.log("left"),
						},
					]}
				/>
				<DropdownMenu icon={menu} label="Select a direction">
					{({ onClose }) => (
						<>
							<MenuGroup>
								<MenuItem icon={arrowUp} onClick={onClose}>
									Move Up
								</MenuItem>
								<MenuItem icon={arrowDown} onClick={onClose}>
									Move Down
								</MenuItem>
							</MenuGroup>
							<MenuGroup>
								<MenuItem icon={trash} onClick={onClose}>
									Remove
								</MenuItem>
							</MenuGroup>
						</>
					)}
				</DropdownMenu>
			</div>
		</section>
	);
}

export default MBDropdownMenu;
