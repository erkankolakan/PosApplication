


const AuthCarousel = ({img , title, desc}) => {
  return (
    <div>
        <div className='!flex flex-col justify-center items-center h-screen' >
            <img src={img} className='w-[600px] h-[500px]' alt="registerImage" />
            <h3 className='text-4xl text-white text-center font-semibold'>{title}</h3>
            <p className='mt-5 text-2xl text-white text-center'>{desc}</p>
        </div>
    </div>
  )
}

export default AuthCarousel
