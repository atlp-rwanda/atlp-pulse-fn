import React from 'react';

const Login = () => {
    const handleFormSubmit = (e:any) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return (
        <div className='h-screen flex bg-light-bg dark:bg-[#262E3D]'>
            <div className='w-full max-w-2xl  m-auto bg-white dark:bg-[#1F2A37] rounded-lg py-12 px-14'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center dark:text-white'>
                    Log in to your account
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email' className='dark:text-white'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary dark:text-white border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 dark:border-white dark:bg-[#1F2A37]`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='dark:text-white'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary dark:text-white border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 dark:border-white dark:bg-[#1F2A37]`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`w-full py-2 px-4 text-sm text-white bg-[#148FB6] rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;