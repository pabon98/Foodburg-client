import bg from '../../../assets/home/black_bg.png'
const CallUs = () => {
    return (
        <>
     <div className='bg-cover bg-center h-[250px] md:h-[400px]' style={{backgroundImage: `url(${bg})`}}>
            <div className='flex justify-center items-center h-full'>
                <p className='text-white text-3xl font-medium text-center md:text-4xl sm:text-base'>
                    Call Us: +88 0192345678910
                </p>
            </div>
        </div>
        </>
    );
};

export default CallUs;