export default function Button({text} : {text : string}){
    return <button className="p-4 bg-[#01BD97] rounded-xl text-white text-bold">
        {text}
    </button>
}