import { BsReddit } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

const TopNav = () => {
  return (
    <div className="w-full h-12 fixed flex justify-between bg-zinc-900 border-2 border-orange-700">
      <div className="w-[27.78%]  border-2 border-red-500">
        <BsReddit size={28} className="text-orange-500" />
      </div>
      <div className="w-[33.33%] rounded-full border-2 border-purple-500">
        SEARCH
      </div>
      <div className="w-[38.89%] border-2 border-green-500">
        RIGHT
      </div>
    </div>
  )
}

export default TopNav;
