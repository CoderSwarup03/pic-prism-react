
const ImageCard = ({id, img, title, price, author, icon1, icon2}) => {
    return (
        <div className='rounded-lg bg-white p-2'>
            <div className='w-full h-[200px] overflow-hidden rounded-2xl'>
                <img 
                    src={img}
                    alt={title}
                    className='w-full h-full hover:scale-105 transition-all duration-300 case-linear transform cursor-ponter'
                />
            </div>
            <p className='text-semibold text-sm py-1 px-1 bg-black text-white w-fit rounded-full mt-3'>
                {"@" + author.charAt(0).toUpperCase() + author.slice(1)}
            </p>
            <div className='flex justify-between items-center mt-2'>
                <div>
                    <h3 className='text-lg font-semibold'>{title}</h3>
                    <p className='text-sm text-gray-400'>{price}</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    {icon1}
                    {icon2}
                </div>
            </div>
        </div>

    )
}

export default ImageCard