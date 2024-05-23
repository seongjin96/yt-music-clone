import {RxHamburgerMenu} from "react-icons/rx";

const IconButton = ({ icon, onClickIcon = () => {} }) => {
  return (
    <div
      onClick={onClickIcon}
      className="flext justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer"
    >
      <RxHamburgerMenu size={24}/>
    </div>
  );
}

export default IconButton;