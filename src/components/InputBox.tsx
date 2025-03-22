type Props = {
    name: string;
    placeholder: string;
}

const InputBox = ({name, placeholder}: Props) => {
  return (
    <>
        <label htmlFor="" className='text-gray-500 mt-2 text-sm'>{name}</label>
        <input className="w-full border-none rounded mb-2 text-sm " placeholder={placeholder} />
        <hr />
    </>
  )
}

export default InputBox