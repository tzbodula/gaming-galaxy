import Image from "next/image";
import Link from "next/link";
import GGLogo from '../../public/img/logo/logo.png';

const Loading = () => (
  <div className="text-center h-screen">
    <Image className="flex-start" src={GGLogo} alt="Gaming Galaxy Logo"></Image>
    <h1 className="mt-4 text-7xl font-oxanium-bold text-cloudy-day mb-2">Login Success!</h1>
    <h2 className="font-oxanium-medium text-cloudy-day mb-20">You should be automatically redirected, if not <Link href='/profile'><a className="text-sunset-pink">click here</a></Link></h2>
  </div>
);

export default Loading;
