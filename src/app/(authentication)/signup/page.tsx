import Button from "@/component/common/button";
import InputFeild from "@/component/common/inputFeild";
import Image from 'next/image'
import Link from "next/link";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
export default function pages(){
    return (
        <div className="flex">
            <div className="w-[60%]">
                <div>
                    <div className="flex justify-around items-center">
                        <div className="flex gap-2 items-center">
                            <Image
                                height={30}
                                width={38}
                                src={"/images/logo.svg"}
                                alt = {"logo"}
                            />
                            <p className="font-bold text-lg">
                                Logoipsum
                            </p>
                        </div>

                    <div>
                        <div className="flex gap-1 text-sm">
                                <p>
                                    have an account?
                                </p>
                                <Link className='font-bold text-[#00BD97]' href={'/login'}>
                                    Sign In!
                                
                                </Link>
                        </div>
                    </div>
                </div>
                </div>

                <div className="w-1/2 mx-auto mt-14 flex flex-col gap-3 items-center">
                    <h1 className="font-bold text-2xl md:4xl">
                        Create Your Accout
                    </h1>
                    <p>
                        Sign up into your account
                    </p>
                    <div className="flex gap-1 flex-col md:flex-row">
                        <Link className= 'text-center p-2 border border-[#DEDEDE] rounded-lg bg-white' href={'#'}>
                            <FaGoogle style={{display : "inline-block"}}/> Google
                        </Link>
                        <Link className="text-center p-2 border border-[#DEDEDE] rounded-lg bg-white" href={'#'}>
                            <FaFacebook style={{display : "inline-block"}}/> Facebook
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <div className="w-[15%] border-b-[#DBDBDB] border-b"/>
                        <p className="text-center mx-2">
                            Or continue with
                        </p>
                        <div className="w-[15%] border-b-[#DBDBDB] border-b"/>
                    </div>

                    <form className="flex flex-col gap-2 text-sm">
                        <InputFeild text="Name"/>
                        <InputFeild text="Email"/>
                        <InputFeild text="Passord"/>
                        <p className="text-sm">
                            By signing up you agree to our <Link href={'#'} className="inline-block text-[#00BD97]">Terms of Service</Link> and <Link className="inline-block text-[#00BD97]" href={'#'}>Privacy 
                            policy</Link>  and confirm that you are at least 18 years old
                        </p>
                        <Button text = {"Sign Up"}/>
                    </form>
                </div>
            </div>
            <div>
                <Image className="hidden md:block h-full w-full" alt={"loging image"} height={600} width={400} src='/Images/Mobile-login-Cristina.jpg'>

                </Image>
            </div>
        </div>
    )
}