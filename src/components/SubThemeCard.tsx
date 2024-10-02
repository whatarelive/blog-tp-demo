interface Props {
    title: string,
    description: string,
}

function SubThemeCard({title, description}: Props) {
  return (
    <>
        <article className='flex flex-1 flex-col items-start py-4 px-5 rounded-3xl bg-gray-400 bg-opacity-10'>
            <h6 className="text-xl text-blue-500 font-semibold">
                {title}
            </h6>
            <p className="text-start">{description}</p>
        </article>
    </>
  )
}

export default SubThemeCard;